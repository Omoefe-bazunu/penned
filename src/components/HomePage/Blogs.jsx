import { SideBar } from "./SideBar"

export const Blogs = () => {
  return (
    <div className="BlogsWrapper w-5/6 h-fit flex gap-4">
        <div className="posts w-full h-full rounded-md"></div>
        <SideBar />
    </div>
  )
}
