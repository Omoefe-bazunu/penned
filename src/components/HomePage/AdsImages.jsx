
import { Form } from "react-router-dom"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";
import { useEffect, useState } from "react";
import { dbase } from "../../Firebase";


export const AdsImages = () => {

  const handleImgChange = async (e) => {
    if (e.target.files[0]) {
      try {
        const img = e.target.files[0];
        const storageRef = ref(storage, `ads/${img.name}`);
        await uploadBytes(storageRef, img);
        alert('IMAGE UPLOADED');
      } catch (error) {
        console.error('ERROR WITH UPLOAD', error);
      }
    }
  };


  return (
    <div className="DashboardWrapper w-5/6 h-fit flex gap-4">
        <div className="postwrapper w-full h-full flex flex-col justify-start gap-5">
            <div className="createPost w-full h-fit p-4 rounded-md">
                <h2 className=" text-white mb-4 font-bold mt-3"> UPLOAD ADS IMAGES </h2>
                <Form method='post' action="/Dashboard" id='createPost' className="postForm flex flex-col justify-start gap-5 w-full">
                      <input type="file" name='ads1' className="Ads1 outline-none text-white border-b-2 border-slate-400 w-full" onChange={handleImgChange}/>
                      <input type="file" name='ads2' className=" outline-none text-white border-b-2 border-slate-400 w-full" onChange={handleImgChange}/>
                      <input type="file" name='ads3' className=" outline-none text-white border-b-2 border-slate-400 w-full mb-4" onChange={handleImgChange}/>
                </Form>
            </div>
        </div>
    </div>
  )
}
