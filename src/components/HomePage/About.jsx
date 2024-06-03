import { storage } from '../../Firebase';
import { ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react'

export const About = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const imageRef = ref(storage, 'General/abt.jpg');
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
    <div className="AboutWrapper w-5/6 h-full flex justify-start items-center gap-8" >
        <div className="featuredImage bg-cover bg-center bg-no-repeat h-96 bg-slate-500 rounded-md w-full border-r-2 border-white" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="AboutDetails text-white flex flex-col justify-start gap-3 border-l-2 border-white pl-8 w-full">
            <p className=" font-light">PENNED is a public Blog that allows creatives around the world to pen their thoughts and share their stories to a global audience and earn from it. Regardless of your age, field or region, PENNED is accessible to you to be at your best.
            </p>
            <p className="">PENNED was developed by Omoefe Bazunu, a software developer based in Nigeria. The web app is part of a project embarked upon in collaboration of with a fellow developer, Solauden Warith, also of Nigeria with the aim of building projects that provides digital  solutions and contributes to modern innovations.</p>
            <p className=""> You're free to sign up as a free user to read, comment and react to posts on the blog, but you have to do a monthly subscription to be able to publish a post that can become eligible for earning, upon meeting certain criteria.</p>
        </div>

    </div>
  )
}
