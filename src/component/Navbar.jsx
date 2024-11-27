import { CiSearch } from "react-icons/ci";
import logo from'../assets/logo/logo.png'
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";






const links=[
  {title:"Home",link:"/"},
  {title:"About",link:"/About"},
  {title:"Contact",link:"/Contact"},
  ];


export default function Navbar() {

const [isHamburgerOpen,setIsHamburgerOpen]=useState(false)
  const isLoggedIn = true;
  const navLinkStyle = "capitalize hover:underline cursor-pointer hover:"

  return (
    <div className="relative h-28 bdr flex justify-around items-center" >

      <img className="h-12" src={logo} alt="" />

    <div className=" rounded center w-60 px-2 h-10 bg-[#F5F5F5]">
      <input type="search" className="bg-transparent outline-none w-full text-sm" placeholder="What are you looking for?" />
    <CiSearch className="text-3xl" />
    </div>

    <ul className="hidden md:flex gap-3">

      {links.map((items,i)=>(
        <li className={navLinkStyle} key={i}>
          <a href={items.link}>{items.title}</a>
        </li>
      ))}
   
    {!isLoggedIn ? <li className={navLinkStyle}>Login</li>:null}
    </ul>
<button onClick={()=>setIsHamburgerOpen(!isHamburgerOpen)} className="md:hidden order-3 text-4xl">

{isHamburgerOpen ? <IoMdCloseCircleOutline /> :<IoMdMenu />

}
</button>
{isHamburgerOpen && <ul className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col pl-6 top-28">
{links.map((items)=>(
        <li className={navLinkStyle} key={i}>
          <a href={items.link}>{items.title}</a>
        </li>
      ))}
   
    {!isLoggedIn ? <li className={navLinkStyle}>Login</li>:null}
</ul>}




    <div className="icons center tex-2xl gap-3">
      {isLoggedIn ? (
        <>
        <IoMdHeart />
        <IoCart />
        </>
      ):null}
      <div className="bg-[#DB4444] rounded-full h-8 w-8 center text-base ">
      <FaRegUser />

        
      </div>

    </div>

    </div>
  )
}
