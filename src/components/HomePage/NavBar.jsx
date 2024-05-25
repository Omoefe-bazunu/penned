import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
        <div className="NavBar flex justify-between items-center w-5/6 h-fit py-5 sticky top-0">
          <h2 className="brand text-2xl text-white">PENNED</h2>
          <div className="NavLinks flex justify-end items-center">
            <Link to='/'><p className=" mr-8 text-white">BLOGS</p></Link>
            <Link to='/about'><p className=" mr-8 text-white">ABOUT</p></Link>
            <Link to='/dashboard'><p className=" mr-8 text-white">DASHBOARD</p></Link>
            <Link to='/contact'><p className=" mr-8 text-white">CONTACT</p></Link>
            <Link to='/login'><p className="LoginBtn px-5 py-2 text-white rounded-sm text-center w-fit">LOGIN</p></Link>
          </div>
        </div>
  )
}
