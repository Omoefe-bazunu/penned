import { redirect } from "react-router-dom";

export const PasswordReset2Form = async ({request}) => {
    const data = await request.formData()
    const Reset2Info = {
      code: data.get('resetCode')
    }

    const form = document.getElementById('PwdRT2')
    form.reset();
  
    console.log(Reset2Info);

    return redirect('/PasswordReset3')
  
  }