import { redirect } from "react-router-dom";

export const LoginForm = async ({request}) => {
    const data = await request.formData()
    const LoginInfo = {
      email: data.get('email'),
      password: data.get('password')
    }
    
    const form = document.getElementById('LoginForm')
    form.reset();
  
    console.log(LoginInfo);

    return redirect('/')
  
  }