import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { storage } from "../../Firebase";
import { ref, getDownloadURL } from "firebase/storage";

export const SideBar = () => {
    const [ads1, setAds1] = useState('');
    const [ads2, setAds2] = useState('');
    const [ads3, setAds3] = useState('');


// Fetchinng Ads one
  useEffect(() => {
    const fetchImage = async () => {
      const imageRef = ref(storage, 'ads/ads1.png');
      try {
        const url = await getDownloadURL(imageRef);
        setAds1(url); 
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); 

  useEffect(() => {
    const fetchImage = async () => {
      const imageRef = ref(storage, 'ads/ads2.jpg');
      try {
        const url = await getDownloadURL(imageRef);
        setAds2(url); 
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); 

  useEffect(() => {
    const fetchImage = async () => {
      const imageRef = ref(storage, 'ads/ads3.jpg');
      try {
        const url = await getDownloadURL(imageRef);
        setAds3(url); 
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []); 

  return (
    <div className="sideBar w-96 h-fit rounded-md px-4 py-5">
            <div className="search flex flex-col gap-3 justify-start items-center w-full">
                <input type="input" placeholder="Search by Author" name="search" className=" bg-slate-100 outline-none py-2 px-3 rounded-md w-full"/>
                <hr className=" w-full h-0.5 bg-white"/>
            </div>
            {/* <div className="mostLiked mt-10 w-full flex flex-col justify-start gap-5">
                <h2 className=" border-b-2 pb-1 border-white font-medium text-white">MOST LIKED POST</h2>
                <Link to='/BlogDetails'>
                <div className="postdetail flex flex-col justify-start text-white gap-2 cursor-pointer">
                    <h2 className="title text-yellow-300">FRIENDS OF NO COMMON INTEREST...</h2>
                    <p className=" text-left text-sm">Carl Brave</p>
                </div>
                </Link>
            </div> */}
            <div className="ads w-full h-fit flex flex-col justify-start gap-5 mt-8">
                <h2 className=" border-b-2 pb-1 border-white text-white">SPONSORED ADS</h2>
            <div className="adsbox flex flex-col justify-start items-center gap-5 h-full">
                <img src={ads1} alt='ads-image1' className="ads1 w-full  bg-slate-400 bg-cover bg-center bg-no-repeat"/>
                <img src={ads2} alt='ads-image2' className="ads1 w-full  bg-slate-400 bg-cover bg-center bg-no-repeat"/>
                <img src={ads3} alt='ads-image3' className="ads1 w-full  bg-slate-400 bg-cover bg-center bg-no-repeat"/>
            </div>

            </div>
        </div>
  )
}
