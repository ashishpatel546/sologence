import { logo } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export const Navbar = () => {

   const ref= useRef<string | any>("")

   const handleScroll =(event: React.MouseEvent<HTMLAnchorElement,MouseEvent>) => {
      event.preventDefault()

      const href= event.currentTarget.href

      const targetId= href.replace(/.*\#/,"")
      const elem = document.getElementById(targetId)

      elem?.scrollIntoView({
         behavior: "smooth"
      })

      //update class name of all clicked link.
      const links = document.querySelectorAll(".nav-link")

      links.forEach((link)=>{
         link.classList.remove("active")
      })
      event.currentTarget.classList.add("active")
   }

  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
     <div className='max-w-container h-full mx-auto py-1 font-bodyFont flex items-center justify-between'>
        <div>
            <Image className='w-20' src={logo} alt="logo" />
        </div>
         <div className=' mdl:inline-flex'>
            <ul className='flex text-30px gap-8'>
                <Link href="#home" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textLight
                   hover:text-textGreen cursor-pointer duration-300 nav-link'><li>Home</li></Link>

                <Link href="#about" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textLight
                   hover:text-textGreen cursor-pointer duration-300 nav-link'><li>About</li></Link>

                <Link href="#services" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textLight
                   hover:text-textGreen cursor-pointer duration-300 nav-link'><li>Services</li></Link>
                
                <Link href="#contactUs" onClick={handleScroll} className='flex items-center gap-1 font-medium text-textLight
                   hover:text-textGreen cursor-pointer duration-300 nav-link'><li>Contact Us</li></Link>
                
            </ul>
         </div>
      </div>  
    </div>
  )
}
