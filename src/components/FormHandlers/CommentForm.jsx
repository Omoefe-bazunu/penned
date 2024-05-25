import { redirect } from "react-router-dom";

export const commentForm = async ({request}) => {
    const data = await request.formData()
    const commentText = {
      commentText: data.get('commentText'),
    }
    
    const form = document.getElementById('comment')
    form.reset();
  
    console.log(commentText);

    return redirect('/BlogDetails')
  
  }