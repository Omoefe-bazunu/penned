import { redirect } from "react-router-dom";

export const contactForm = async ({request}) => {
    const data = await request.formData()
    const messageInfo = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message')
    }
    
    const form = document.getElementById('contactForm')
    form.reset();
  
    console.log(messageInfo);

    return redirect('/Contact')
  
  }