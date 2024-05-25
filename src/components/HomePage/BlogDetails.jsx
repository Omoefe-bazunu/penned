import { Form } from "react-router-dom"
import { SideBar } from "./SideBar"

export const BlogDetails = () => {
  return (
    <div className="BlogDetailsWrapper w-5/6 h-fit flex gap-4">
        <div className="postwrapper w-full h-full flex flex-col justify-end items-center gap-5">
            <div className="post w-full h-full bg-slate-600 rounded-md"></div>
            <div className="commentbox w-full h-fit bg-slate-600 p-4 rounded-md">
                <h2 className=" text-white mb-4 font-bold mt-3"> COMMENTS </h2>
                <div className="comments text-white w-full h-44 border-b-2 border-slate-400"></div>
                <Form method='post' action="" className="commentForm flex flex-col justify-start gap-4 w-full">
                    <h2  className=" text-white border-b-2 border-slate-400 mt-10">Leave a Comment</h2>
                    <textarea placeholder="Write your comment here" className=" bg-inherit border-b-2 border-slate-400 outline-none text-white" />
                    <button className=' text-white text-sm text-nowrap py-2 w-fit px-5 rounded-sm cursor-pointer mt-3 mb-5'>POST COMMENT</button>
                </Form>
            </div>
        </div>
        <SideBar />
    </div>
  )
}
