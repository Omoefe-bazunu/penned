import { redirect } from "react-router-dom";
import { collection, addDoc, serverTimestamp, queryEqual, query } from "firebase/firestore";
import { dbase } from "../../Firebase";

export const commentForm = async ({request}) => {
    const data = await request.formData()
    const comment = {
      commentText: data.get('commentText'),
    }
    alert(comment)

  try {
    const colRef = collection(dbase, 'comments')
    // const q = query(colRef, )
    const docRef = addDoc(colRef, {
      commentText: comment.commentText,
      createdAt: serverTimestamp(),
      docId: comment.docId
       })
       const form = document.getElementById('comment')
       form.reset();

  } catch (error) {
    alert(error.message)  
  }
  return null

}