import { redirect } from "react-router-dom";

export const PasswordReset1Form = async ({request}) => {
    const data = await request.formData()
    const Reset1Info = {
      email: data.get('email')
    }

    const form = document.getElementById('PwdRT1')
    form.reset();
  
    console.log(Reset1Info);

    return redirect('/PasswordReset2')
  
  }