"use client"

import Link from "next/link"
import MObailNav from "./MObailNav"
import Nav from "./Nav"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md"


const Header = () => {
   const [headerActive, setHeaderActive] = useState(false)
   const [open, setOpen] =useState(false)


   useEffect(()=>{
      const handleScroll =() => {
         setHeaderActive(window.scrollY > 50)
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }

      
   },[])
    return (
       <header className={`${
         headerActive ? 'h-[100px]' : 'h-[124px]'} fixed max-w-[1920px] top-0  w-full z-50 bg-primary-200 h-[100px] transition-all `}>
      <div className="container mx-auto h-full flex items-center justify-between">
         {/* logo */}
         <Link href={""}>
            <Image src={"/assets/img/logo.png"} width={117} height={55} alt={""} />
         </Link>
           {/* mobail nav hidden on small devices */}

           <MObailNav
            containerStyles={`${headerActive ? 'top-[90px]' : 'top-[124px]'}
            ${open ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'}
            transition-all font-medium text-base uppercase flex w-full left-0  bg-primary-200 fixed text-center gap-8 flex-col text-white xl:hidden `}/>
         {/* {desktop nav hidden on small devices} */}
         <Nav  containerStyles=" flex gap-4 hidden transition-all text-white font-medium uppercase text-base xl:flex"/>


         <div>
            <button
            onClick={()=> setOpen(!open)}
            className="text-white xl:hidden">
               <MdMenu  className="text-4xl"/>
            </button>
         </div>
      </div>
       </header>
    )
}

export default Header
 