
import { Form } from "react-router-dom"
import { SideBar } from "./SideBar"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";
import { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import { collection, query, onSnapshot, where, orderBy, deleteDoc, doc } from "firebase/firestore";
import { dbase } from "../../Firebase";
import { Link } from "react-router-dom";

export const DashBoard = () => {
  const [post, setPosts] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
      console.log(userEmail)
    }
  }, [userEmail]);

// This fetches the image for each post
  const fetchImage = async (imageurl) => {
    if (imageurl) {
      const imageRef = ref(storage, `posts/${imageurl}`);
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
  }, [userEmail]);

    // Helper function to format date
    const formatDate = (date) => {
      const day = date.getDate();
      const month = date.getMonth();
      const monthName = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ][month];
      const year = date.getFullYear();
      return `${monthName} ${day}, ${year}`;
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

      //Deleting the post
      const deletePost  = (postid) => {
      if(postid) {
        const colRef = collection(dbase, 'posts')
        const docToDelete = doc(colRef, postid)
        deleteDoc(docToDelete);
        console.log(postid)
        alert('POST DELETE SUCCESSFUL');
      } else {
        alert('POST DELETE FAILED, CONTACT THE DEVELOPER')
      }
      }


  return (
    <div className="DashboardWrapper w-5/6 h-fit flex gap-4">
        <div className="postwrapper w-full h-full flex flex-col justify-start gap-5">
        {post && post.map(post => (
          <div key={post.id} className="posts w-full flex flex-col h-fit py-5 px-5 mb-5">
              <Link to={`/${post.id}`} >
              <h2 className=" text-lg text-yellow-300 text-wrap leading-2 mb-1 font-semibold">{post.title}</h2>
              <p className="date text-xs text-white w-fit">{post.formattedDate}<span className="mx-2">:</span>{post.reaction} Upvote</p>
              {post.featuredImageUrl ? <img src={post.featuredImageUrl} alt="" className=" w-24 h-24 bg-cover bg-center bg-no-repeat mt-3 mb-5 text-white"/> : <img/> }
              <p className="postBody text-white whitespace-pre-wrap">{post.body.slice(0,200)}...</p>
              <p className=" text-yellow-300 text-sm mt-1 mb-4 ">Read Full Content....</p>
              <p className=" hidden" id={post.id} >{post.id}</p>
              </Link>
              <button className=" delete text-white bg-red-600 w-fit text-xs py-2 px-4 mb-5 rounded-sm" onClick={() => {deletePost(`${post.id}`)}}>Delete Post</button>
            </div>

          ))

          }
            <div className="createPost w-full h-fit p-4 rounded-md">
                <h2 className=" text-white mb-4 font-bold mt-3"> PUBLISH A POST </h2>
                <Form method='post' action="/Dashboard" id='createPost' className="postForm flex flex-col justify-start gap-5 w-full">
                    <input placeholder="Your Name as the author e.g Omoefe Bazunu" name='name' className=" bg-inherit border-b-2 border-slate-400 outline-none text-white" />
                    <input placeholder="Post Title in BLOCK LETTERS" name='title' className=" bg-inherit border-b-2 border-slate-400 outline-none text-white" />
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
