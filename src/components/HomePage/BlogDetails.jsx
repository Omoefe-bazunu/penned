import { Form } from "react-router-dom"
import { SideBar } from "./SideBar"

export const BlogDetails = () => {
  return (
    <div className="BlogDetailsWrapper w-5/6 h-fit flex gap-4">
        <div className="postwrapper w-full h-full flex flex-col justify-start items-center gap-5">
            <div className="post w-full h-fit bg-slate-600 rounded-md relative py-5 px-4">
            <div className="post1 felx flex-col justify-start gap-4">
            <h2 className=" text-yellow-300 my-1">POST TITLE</h2>
            <div className="features flex justify-start w-fit gap-2 text-white text-xs mb-4 border-t-2 border-slate-400 pt-2">
              <div className="author border-r-2 border-slate-100 pr-1">Author: Omoefe Bazunu</div>
              <p className=" date">12 May, 2024 </p>
            </div>
            <img src='' alit="featured-Image" className=" w-96 h-72 bg-slate-50 mb-4"></img>
            <p className="text-white mb-8">They gave pronunciation values to symbols. Also, we have a German known as Joham Guterberg who invented the moveable type in 1450, and it is one of the most outstanding. Guternberg is regarded as the father of printing. Gutenberg was not that successful in the printing business as he was owing so much debt. He died in 1468 as a debtor. Since then, the press has contributed to the growth from strength to strength. They gave pronunciation values to symbols. Also, we have a German known as Joham Guterberg who invented the moveable type in 1450, and it is one of the most outstanding. Guternberg is regarded as the father of printing. Gutenberg was not that successful in the printing business as he was owing so much debt. He died in 1468 as a debtor. Since then, the press has contributed to the growth from strength to strength.</p>
          </div>
              <div className="reactions absolute bottom-0 -right-2 cursor-pointer w-10 h-10 rounded-full bg-white"></div>
            </div>
            <div className="commentbox w-full h-fit bg-slate-600 p-4 rounded-md">
                <h2 className=" text-white mb-4 font-bold mt-3"> COMMENTS </h2>
                <div className="comments text-white w-full h-24 border-b-2 border-slate-400"></div>
                <Form method='post' action="/BlogDetails" id='comment' className="commentForm flex flex-col justify-start gap-4 w-full">
                    <h2  className=" text-white border-b-2 border-slate-400 mt-10">Leave a Comment</h2>
                    <textarea placeholder="Write your comment here" name='commentText' className=" bg-inherit border-b-2 border-slate-400 outline-none text-white" />
                    <button className=' text-white text-sm text-nowrap py-2 w-fit px-5 rounded-sm cursor-pointer mt-3 mb-5'>POST COMMENT</button>
                </Form>
            </div>
        </div>
        <SideBar />
    </div>
  )
}
