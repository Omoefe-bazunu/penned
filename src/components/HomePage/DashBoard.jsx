import { Form } from "react-router-dom"
import { SideBar } from "./SideBar"

export const DashBoard = () => {
  return (
    <div className="DashboardWrapper w-5/6 h-fit flex gap-4">
        <div className="postwrapper w-full h-full flex flex-col justify-end items-center gap-5">
        <div className="post w-full h-full bg-slate-600 rounded-md"></div>
        <div className="createPost w-full h-fit p-4 rounded-md">
                <h2 className=" text-white mb-4 font-bold mt-3"> PUBLISH A POST </h2>
                <Form method='post' action="" className="postForm flex flex-col justify-start gap-4 w-full">
                    <input placeholder="Post Title" name='title' className=" bg-inherit border-b-2 border-slate-400 outline-none text-white" />
                    <textarea placeholder="Write your post here" name='body' className=" bg-inherit border-b-2 border-slate-400 outline-none text-white" />
                    <input type="file" className="bg-inherit border-b-2 border-slate-400 outline-none text-white mt-3" />
                    <button className=' text-white text-left text-sm text-nowrap py-2 w-fit pr-5 pl-2 rounded-sm cursor-pointer mt-3 mb-5'>PUBLISH POST</button>
                </Form>
            </div>
        </div>
        <SideBar />
    </div>
  )
}
