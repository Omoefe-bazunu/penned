import {Form, Link} from 'react-router-dom'
import { storage } from '../../Firebase';
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react'

export const PwdRT2 = () => {
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
    <div className='PwdRT2-Wrapper w-5/6 h-screen bg-inherit flex justify-center items-center my-0 mx-auto'>
        <div className="PwdRT2Inner bg-white rounded-md w-full h-96 flex justify-start items-center">
            <div className="featuredImage bg-cover bg-center bg-no-repeat h-full bg-slate-500 rounded-md w-full" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="Form flex flex-col justify-start items-start h-full w-full py-12 px-5 gap-8" >
                <h2 className='brand text-2xl w-full'>PENNED</h2>
                <Form method='post' action='/PasswordReset2' id='PwdRT2' className='FormElement flex flex-col justify-start items-start w-full pr-12'>
                        <input type="text" placeholder='Enter verification code here' name='resetCode' className=' outline-none border-b-2 border-gray-100 mb-5 w-full' />
                        <button className=' text-white text-nowrap py-2 w-fit px-5 rounded-sm cursor-pointer mt-3'>CONTINUE</button>
                        <div className="signup mt-8 w-full">
                          <Link to='/Login'><p className=' w-full text-sm border-t-2 pt-1 cursor-pointer'>Remembered Password? Login</p></Link>
                        </div>
                </Form>

            </div>

        </div>
    </div>
  )
}
