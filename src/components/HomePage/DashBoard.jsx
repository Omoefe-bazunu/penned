
import { Form } from "react-router-dom"
import { SideBar } from "./SideBar"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";
import { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import { collection, query, onSnapshot, where, orderBy } from "firebase/firestore";
import { dbase } from "../../Firebase";
import { Link } from "react-router-dom";

export const DashBoard = () => {
  const [post, setPosts] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

// This fetches the image for each post
  const fetchImage = async (imageurl) => {
    if (imageurl) {
      const imageRef = ref(storage, `Posts/${imageurl}`);
      try {
        const url = await getDownloadURL(imageRef);
        return url;
      } catch (error) {
        console.error('Error fetching image:', error);
        return null;
      }
    }
  };
  
 // This fetches the posts made by the user logged in
  useEffect(() => {
    const fetchPosts = async () => {
      try {
      const q = query(collection(dbase, 'posts'), where("userEmail", "==", userEmail), orderBy('createdAt', 'desc'));
      onSnapshot(q, async (snapshot) => {
      const fetchedPosts = [];

      for (const doc of snapshot.docs) {
        const postItem = { ...doc.data(), id: doc.id };
        postItem.formattedDate = formatDate(postItem.createdAt.toDate());
        postItem.featuredImageUrl = await fetchImage(postItem.imageurl);
        fetchedPosts.push(postItem);
      }

      setPosts(fetchedPosts); 
    })
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  fetchPosts();
  }, []);

    // Helper function to format date
    const formatDate = (date) => {
      const day = date.getDate();
      const month = date.getMonth();
      const monthName = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ][month];
      const year = date.getFullYear();
      return `${day} ${monthName}, ${year}`;
    };

  const handleImgChange = async (e) => {
    if (e.target.files[0]) {
      try {
        const img = e.target.files[0];
        const storageRef = ref(storage, `posts/${img.name}`);
        await uploadBytes(storageRef, img);
        alert('IMAGE UPLOADED');
      } catch (error) {
        console.error('ERROR WITH UPLOAD', error);
      }
    }
  };


  return (
    <div className="DashboardWrapper w-5/6 h-fit flex gap-4">
        <div className="postwrapper w-full h-full flex flex-col justify-start items-center gap-5">
        {post && post.map(post => (
            <Link to={`/${post.id}`} key={post.id}><div className="posts w-full h-fit py-5 px-5 mb-5">
              <h2 className=" text-lg text-yellow-300 text-wrap leading-2 mb-1">{post.title}</h2>
              <p className="date text-xs text-white w-fit italic">{post.formattedDate}<span className="mx-2">:</span>{post.reaction} likes</p>
              <img src={post.featuredImageUrl} alt="" className=" w-24 h-24 bg-cover bg-center bg-no-repeat mt-3"/>
              <p className="postBody text-white whitespace-pre-wrap my-5">{post.body.slice(0,200)}...</p>
            </div>
            </Link>
          ))

          }
            <div className="createPost w-full h-fit p-4 rounded-md">
                <h2 className=" text-white mb-4 font-bold mt-3"> PUBLISH A POST </h2>
                <Form method='post' action="/Dashboard" id='createPost' className="postForm flex flex-col justify-start gap-4 w-full">
                    <input placeholder="Post Title" name='title' className=" bg-inherit border-b-2 border-slate-400 outline-none text-white" />
                    <textarea placeholder="Write your post here" name='body' className=" bg-inherit border-b-2 border-slate-400 outline-none text-white" />
                    <div className="featuredImg flex bg-inherit mt-3 gap-2">
                      <input type="file" name='imageurl' className=" outline-none text-white border-b-2 border-slate-400 w-full" onChange={handleImgChange}/>
                    </div>
                    
                    <button className='Btn text-white text-left text-sm text-nowrap py-2 w-fit pr-5 pl-2 rounded-sm cursor-pointer mt-3 mb-5'>PUBLISH POST</button>
                </Form>
            </div>
        </div>
        <SideBar />
    </div>
  )
}
