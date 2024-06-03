
import { SideBar } from "./SideBar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, doc, onSnapshot, query, runTransaction, where} from "firebase/firestore"
import { dbase } from "../../Firebase"
import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "../../Firebase"
import { Comments } from "./Comments"

export const BlogDetails = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [ImageSrc, setImageSrc] = useState('')
  const [liked, setLiked] = useState(0)

  //This code fetches the post image from the firebase storage if the post exists or has a value
  const fetchImage = async () => {
    if (post) {
      const imageRef = ref(storage, `Posts/${post.imageurl}`); // The imageurl property of the post object is passed as the path for the post image.
      try {
        const url = await getDownloadURL(imageRef);
        setImageSrc(url)
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
  };

  // This fetches the Post 
  useEffect(() => {
    const colRef = collection(dbase, 'posts');
    const postRef = doc(colRef, id);

    onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        const postDetails = { ...doc.data(), id: doc.id };
        postDetails.formattedDate = formatDate(postDetails.createdAt.toDate()); // This calls the date conversion function, passing the timestamp as the parameter and converting first to a general date
        setPost(postDetails);
        console.log(post)
      } else {
        console.log(`Post with ID ${id} does not exist.`);
        }
      }, (error) => {
        console.error('Error fetching post:', error);
      });

  }, [id]);


// This runs the image fetching function anytime there's a change to the post state.
  useEffect(() => {
    fetchImage()
  }, [post])

    // This code converts the timestamp for the post to a readable date that users can see
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

    // This handles the Reaction function
    const handleReaction = async () => { 
      const colRef = collection(dbase, 'posts');
      const docToUpdate = doc(colRef, id);
    
      try {
        await runTransaction(dbase, async (transaction) => {
          const docSnapshot = await transaction.get(docToUpdate);
          const currentReaction = docSnapshot.data().reaction;
    
          if (!liked == 1) {
            transaction.update(docToUpdate, { reaction: currentReaction + 1 });
            setLiked(1);

          } else if (liked == 1) {
            transaction.update(docToUpdate, { reaction: currentReaction - 1 });
            setLiked(0);
          } 
        });
      } catch (error) {
        console.error('Error updating reaction:', error);
      }
    };
    

  return (
    <div className="BlogDetailsWrapper w-5/6 h-fit flex gap-4">
      {/* This code with 'post' preceding the div, checks if the post state has a value meaning the fetch document function was successful before displaying the elements with the post details */}
      {post && <div className="postwrapper w-full h-full flex flex-col justify-start items-center gap-5">
            <div className="post w-full h-fit bg-slate-600 rounded-md relative py-5 px-4">
            <div className="post1 felx flex-col justify-start gap-4">
            <h2 className=" text-yellow-300 my-1">{post.title}</h2>
            <div className="features  flex justify-start w-fit gap-2 text-white text-xs mb-4">
              <div className="author">: {post.userEmail} <span className="mx-1">:</span> {post.formattedDate} <span className="mx-1">:</span> {post.reaction} likes</div>
            </div>
            <img src={ImageSrc} alt="featured-Image" className=" w-50 h-50  mb-8 bg-cover bg-center bg-no-repeat"></img>
            <p className="text-white mb-8">{post.body}</p>
          </div>
              <div className="reactions absolute bottom-0 -right-2 flex justify-center items-center cursor-pointer w-10 h-10 rounded-full bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6  Reaction" onClick={handleReaction}>
  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
</svg>
              </div>
            </div>
            <Comments postId = {post.id} />
        </div>}
        <SideBar />
    </div>
  )
}
