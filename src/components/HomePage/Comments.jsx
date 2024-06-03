
import { collection, addDoc, serverTimestamp, query, onSnapshot, where, orderBy } from "firebase/firestore";
import { dbase } from "../../Firebase";
import { useEffect, useState } from "react";
import { auth } from "../../Firebase";

export const Comments = ({postId}) => {
  const [comment, setComments] = useState(null)
  const [userEmail, setUserEmail] = useState('');
  const [formData, setFormData] = useState({
    commentText: '',
    email: '',
  });

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
      try {
        const docRef = await addDoc(collection(dbase, 'Comments'), {
          commentText: formData.commentText,
          email: userEmail,
          postId: postId,
          CreatedAt: serverTimestamp()
        })
        // const form = document.getElementById('comment');
        // form.reset()
        setFormData({
          commentText: '',
          email: '',
        })
      } catch (e) {
        alert("Error adding comment: ", e);
      }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

 // FETCHING THE COMMENTS IN REAL TIME

const fetchComment = () => {
  const q = query(collection(dbase, 'Comments'), where("postId", "==", postId), orderBy('CreatedAt', 'desc'));
  onSnapshot(q, (snapshot) => {
    const comments = [];
    for (const doc of snapshot.docs) {
      const commentItem = { ...doc.data(), id: doc.id };
      comments.push(commentItem);
    }
    setComments(comments);
    console.log(comment)

  });
};

useEffect(() => {
  fetchComment();
}, [postId]);



  return (
        <div className="commentbox w-full h-fit bg-slate-600 p-4 rounded-md ">
            <h2 className=" text-white mb-4 font-bold mt-3"> COMMENTS </h2>
            <div className="comments text-white w-full h-fit">
                {comment && comment.map(comment => (
                <div key={comment.email} className=" w-full h-fit bg-inherit py-2 flex flex-col gap-2 justify-start">
                    <p className=" italic ">{comment.commentText}</p>
                    <p className=" italic border-b-2 border-slate-400 pb-5">- {comment.email}</p>
                </div>
                )) }
            </div>    
            <form method='post' action="/Comments" id='comment' className="commentForm flex flex-col justify-start gap-4 w-full">
                <h2  className=" text-white border-b-2 border-slate-400 mt-10">Leave a Comment</h2>
                <textarea type='text' placeholder="Write your comment here" value={formData.commentText} onChange={handleChange} name='commentText' className=" bg-inherit border-b-2 border-slate-400 outline-none text-white" />
                <button className=' text-white text-sm text-nowrap py-2 w-fit px-5 rounded-sm cursor-pointer mt-3 mb-5' onClick={handleSubmit}>POST COMMENT</button>
            </form>
        </div>
  )
}

