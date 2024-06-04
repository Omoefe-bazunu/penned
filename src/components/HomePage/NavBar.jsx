import { Link } from "react-router-dom"
import { BreadCrumbs } from "./BreadCrumbs"
import { TfiList } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import {useState, useEffect} from 'react'
import { signOut} from "firebase/auth";
import { auth } from "../../Firebase";


export const NavBar = () => {
  const [user, setUser] = useState('')
  const User = auth.currentUser;

  const signout = () => {
    signOut(auth)
    console.log('SIGNED OUT')
    window.location.href = '/Login';
  }

  useEffect(() => {
    if (User) {
      setUser(User);
    }
  }, [User]);


const [toggle, setToggle] = useState(true);
  return (
        <div className="NavBar flex flex-col justify-between items-center w-5/6 h-fit pt-5 pb-2 sticky top-0 z-20">
          <div className="main flex justify-between items-center w-full">
            <h2 className="brand text-2xl text-white">PENNED</h2>
                <div className="NavLinks flex justify-end items-center">
                  <Link to='/'><p className=" mr-8 text-white">BLOGS</p></Link>
                  <Link to='/About'><p className=" mr-8 text-white">ABOUT</p></Link>
                  <Link to='/Dashboard'><p className=" mr-8 text-white dashboard hidden">DASHBOARD</p></Link>
                  <Link to='/Contact'><p className=" mr-8 text-white">CONTACT</p></Link>
                  <Link to='/Login'><button className="LoginBtn Login px-5 py-2 text-white rounded-sm text-center w-fit">LOGIN</button></Link>
                  <button className="LogoutBtn Logout px-5 py-2 text-white rounded-sm text-center w-fit cursor-pointer" onClick={signout}>LOGOUT</button>
                </div>
                <div className="MenuIcon  text-white cursor-pointer hidden justify-center relative">
                  {toggle? <TfiList size = {40} onClick = {() => setToggle(false)} /> 
                  : <TfiClose size = {40} onClick = {() => setToggle(true)}/> }
                </div>
          </div>
          {!toggle && (
                  <div className='Bar flex flex-col scale-up-tr w-full h-fit pt-10 pb-18 pl-5 absolute right-0 top-24' >
                      <ul className='menu-link flex flex-col justify-end gap-3'>
                        <Link to='/'><p className=" mr-8 text-white border-b-2 border-slate-700 pb-1">BLOGS</p></Link>
                        <Link to='About'><p className=" mr-8 text-white border-b-2 border-slate-700 pb-1">ABOUT</p></Link>
                        {user ? ( 
                        <Link to='Dashboard'><p className=" mr-8 text-white border-b-2 border-slate-700 pb-1 dashboard">DASHBOARD</p></Link> ): (<p></p>) }
                        <Link to='Contact'><p className=" mr-8 text-white border-b-2 border-slate-700 pb-1">CONTACT</p></Link>
                      {user ? (
                        <button className="LogoutBtn Logout pl-2 pr-4 py-2 text-white rounded-sm w-fit cursor-pointer mb-5" onClick={signout}>LOGOUT</button>
                      ) : (
                        <Link to='/Login'><button className="LoginBtn Login px-5 py-2 text-white rounded-sm text-center w-fit mb-5">LOGIN</button></Link>
                      )}
                       </ul>
                  </div>
                  
              )
              }
          <BreadCrumbs />
        </div>
  )
}
