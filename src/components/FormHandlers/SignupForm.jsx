import { redirect } from "react-router-dom";
import { auth, dbase } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

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
    try {
      await createUserWithEmailAndPassword(auth, SignupInfo.email, SignupInfo.password);
  
      const colRef = collection(dbase, "users");
      await addDoc(colRef, {
        userEmail: SignupInfo.email,
        FullName: SignupInfo.name,
        PhoneNumber: SignupInfo.phone,
      });
  
      alert("WELCOME TO PENNED!");
    } catch (err) {
      alert(err.message);
    }
    return redirect('/');
  
  }