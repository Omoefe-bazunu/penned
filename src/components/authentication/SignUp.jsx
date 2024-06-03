import {Form} from 'react-router-dom'
import { storage } from '../../Firebase';
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react'

export const SignUp = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const imageRef = ref(storage, 'General/auth.jpg');
      try {
        const url = await getDownloadURL(imageRef);
        setBackgroundImage(url); 
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); 



  return (
    <div className='SignUp-Wrapper w-5/6 h-screen bg-inherit flex justify-center items-center my-0 mx-auto'>
        <div className="SignUpInner bg-white rounded-md w-full h-96 flex justify-start items-center">
            <div className="featuredImage bg-cover bg-center bg-no-repeat h-full bg-slate-500 rounded-md w-full" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="Form flex flex-col justify-start items-start h-full w-full py-12 px-5 gap-8" >
                <h2 className='brand text-2xl w-full'>PENNED</h2>
                <Form method='post' action='/Signup' id='SignupForm' className='FormElement flex flex-col justify-start items-start w-full pr-12'>
                        <input type="text" placeholder='Full name' name='name' className=' outline-none border-b-2 border-gray-100 mb-5 w-full' />
                        <input type="text" placeholder='Phone number e.g +23490xxxxxxx' name='phone' className=' outline-none border-b-2 border-gray-100 w-full mb-5' />
                        <input type="email" placeholder='Email' name='email' className=' outline-none border-b-2 border-gray-100 mb-5 w-full' />
                        <input type="password" placeholder='Password' name='password' className=' outline-none border-b-2 border-gray-100 w-full mb-5' />
                        <input type="password" placeholder='Confirm password' name='confirmPassword' className=' outline-none border-b-2 border-gray-100 w-full mb-5' />
                        <div className=' flex justify-start px-2 '><p className=' ErrorMsg'></p></div>
                        <button className=' text-white text-nowrap py-2 w-fit px-8 rounded-sm cursor-pointer mt-3'>SIGNUP</button>
                </Form>

            </div>

        </div>
    </div>
  )
}
