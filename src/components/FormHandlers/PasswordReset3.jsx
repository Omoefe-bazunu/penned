import { redirect } from "react-router-dom";

export const PasswordReset3Form = async ({request}) => {
    const data = await request.formData()
    const Reset3Info = {
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword')
    }

    const form = document.getElementById('PwdRT3')
    form.reset();
  
    console.log(Reset3Info);

    return redirect('/Login')
  
  }