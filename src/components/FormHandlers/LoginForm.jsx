import { redirect } from "react-router-dom";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginForm = async ({request}) => {
    const data = await request.formData()
    const LoginInfo = {
      email: data.get('email'),
      password: data.get('password'),
    }
    const form = document.getElementById('LoginForm')
    form.reset();
    signInWithEmailAndPassword(auth, LoginInfo.email, LoginInfo.password )
        .then((cred) => {
            console.log(cred)
            const LoginBtn = document.getElementsByClassName('Login');
            LoginBtn.style.display = 'none';
            const LogoutBtn = document.getElementsByClassName('Logout');
            LogoutBtn.style.display = 'flex';
            alert('LOGIN SUCCESS!')
        }).catch((err) => {
            alert(err.message)
        })
    return redirect('/')
  
  }