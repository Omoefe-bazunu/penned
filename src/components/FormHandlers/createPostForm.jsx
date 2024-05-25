import { redirect } from "react-router-dom";

export const createPostForm = async ({request}) => {
    const data = await request.formData()
    const postDetails = {
      title: data.get('title'),
      body: data.get('body'),
      imageurl: data.get('imageurl')
    }
    
    const form = document.getElementById('createPost')
    form.reset();
  
    console.log(postDetails);

    return redirect('/Dashboard')
  
  }