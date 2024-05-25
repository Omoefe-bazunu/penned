import { Link } from "react-router-dom"
import { BreadCrumbs } from "./BreadCrumbs"
import { TfiList } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import {useState, useEffect} from 'react'


export const NavBar = () => {
const [toggle, setToggle] = useState(true);
  return (
        <div className="NavBar flex flex-col justify-between items-center w-5/6 h-fit pt-5 pb-2 sticky top-0 z-20">
          <div className="main flex justify-between items-center w-full">
            <h2 className="brand text-2xl text-white">PENNED</h2>
                <div className="NavLinks flex justify-end items-center">
                  <Link to='/'><p className=" mr-8 text-white">BLOGS</p></Link>
                  <Link to='/About'><p className=" mr-8 text-white">ABOUT</p></Link>
                  <Link to='/Dashboard'><p className=" mr-8 text-white">DASHBOARD</p></Link>
                  <Link to='/Contact'><p className=" mr-8 text-white">CONTACT</p></Link>
                  <Link to='/Login'><p className="LoginBtn px-5 py-2 text-white rounded-sm text-center w-fit">LOGIN</p></Link>
                  <p className="LoginBtn py-2 pl-2 pr-8 text-white rounded-sm hidden w-fit mb-8">LOGOUT</p>
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
                        <Link to='/About'><p className=" mr-8 text-white border-b-2 border-slate-700 pb-1">ABOUT</p></Link>
                        <Link to='/Dashboard'><p className=" mr-8 text-white border-b-2 border-slate-700 pb-1">DASHBOARD</p></Link>
                        <Link to='/Contact'><p className=" mr-8 text-white border-b-2 border-slate-700 pb-1">CONTACT</p></Link>
                        <Link to='/Login'><p className="LoginBtn py-2 pl-2 pr-8 text-white rounded-sm w-fit mb-8 ">LOGIN</p></Link>
                        <p className="LoginBtn py-2 pl-2 pr-8 text-white rounded-sm hidden w-fit mb-8">LOGOUT</p>
                       </ul>
                  </div>
                  
              )
              }
          <BreadCrumbs />
        </div>
  )
}
