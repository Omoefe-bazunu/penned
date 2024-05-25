import { Link } from "react-router-dom"
import { BreadCrumbs } from "./BreadCrumbs"

export const NavBar = () => {
  return (
        <div className="NavBar flex flex-col justify-between items-center w-5/6 h-fit py-5 sticky top-0">
          <div className="main flex justify-between items-center w-full">
          <h2 className="brand text-2xl text-white">PENNED</h2>
          <div className="NavLinks flex justify-end items-center">
            <Link to='/Home'><p className=" mr-8 text-white">BLOGS</p></Link>
            <Link to='/Home/about'><p className=" mr-8 text-white">ABOUT</p></Link>
            <Link to='/Home/dashboard'><p className=" mr-8 text-white">DASHBOARD</p></Link>
            <Link to='/Home/contact'><p className=" mr-8 text-white">CONTACT</p></Link>
            <Link to='/Home/login'><p className="LoginBtn px-5 py-2 text-white rounded-sm text-center w-fit">LOGIN</p></Link>
          </div>

          </div>
          <BreadCrumbs />
        </div>
  )
}
