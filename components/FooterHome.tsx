import { logo, logo1 } from '@/public/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrInstagram } from 'react-icons/gr'
import { RiYoutubeFill } from 'react-icons/ri'
import { SiFacebook, SiLinkedin } from 'react-icons/si'

const FooterHome = () => {
  return (
   <footer className='bg-slate-300 min-h-[450px] md:min-h-[250px]'>
    <div className='container mx-auto'>
    <div className='flex flex-col md:flex-row md:justify-between items-center gap-y-5 py-16 md:py-8'>
        <div><Image className='w-20 rounded' src={logo1} alt="logo" /></div>
        
        <div className='flex flex-col gap-8 tracking-wider text-gray-800 text-center '>

            <Link href="/"  className='font-medium text-sky-900
                   hover:text-textGreen cursor-pointer duration-300'>Home</Link>

                <Link href="/about"  className=' font-medium text-sky-900
                   hover:text-textGreen cursor-pointer duration-300'>About</Link>

                <Link href="/services" className='font-medium text-sky-900
                   hover:text-textGreen cursor-pointer duration-300'>Services</Link>
                
                <Link href="/contact"  className='font-medium text-sky-900
                   hover:text-textGreen cursor-pointer duration-300'>Contact Us</Link>
        </div>
        <div className='flex gap-x-5 items-center'>
        
            <a href="" target="_blank">
                <span className='w-10 h-10 text-xl  inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <GrInstagram size={30}/>
                </span>
            </a>
            <a href="" target="_blank">
                <span className='w-10 h-10 text-xl  inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <RiYoutubeFill size={30}/>
                </span>
            </a>
            <a href="" target="_blank">
                <span className='w-10 h-10 text-xl inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <SiLinkedin size={30}/>
                </span>
            </a>
            <a href="" target="_blank">
                <span className='w-10 h-10 text-xl  inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <SiFacebook size={30}/>
                </span>
            </a>
        </div>
    </div>

    </div>


   </footer>
  )
}

export default FooterHome