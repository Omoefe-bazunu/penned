import { redirect } from "react-router-dom";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import { dbase } from "../../Firebase"
import { auth } from "../../Firebase";

export const createPostForm = async ({request}) => {
    const data = await request.formData();
    const postDetails = {
      title: data.get("title"),
      body: data.get("body"),
      imageurl: data.get("imageurl"),
    };
    const form = document.getElementById('createPost');
      form.reset();
  
    try {
      const userEmail = auth.currentUser.email;
  
      const colRef = collection(dbase, 'posts');
      await addDoc(colRef, {
        userEmail: userEmail,
        title: postDetails.title,
        body: postDetails.body,
        imageurl: postDetails.imageurl,
        reaction: 0,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      alert(error.message);
    }

    return redirect('/Dashboard')
  
  }