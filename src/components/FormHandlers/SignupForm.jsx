import { redirect } from "react-router-dom";

export const SignupForm = async ({request}) => {
    const data = await request.formData()
    const SignupInfo = {
      name: data.get('name'),
      phone: data.get('phone'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword')
    }
    
    const form = document.getElementById('SignupForm')
    form.reset();
    console.log(SignupInfo);

    return redirect('/')
  
  }