import React from 'react'

import {GrInstagram} from 'react-icons/gr'
import {RiYoutubeFill} from 'react-icons/ri'
import{SiLinkedin,SiFacebook} from 'react-icons/si'

const Footer = () => {
  return (<>
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
        
            <a href="" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <GrInstagram />
                </span>
            </a>
            <a href="" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <RiYoutubeFill />
                </span>
            </a>
            <a href="" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <SiLinkedin />
                </span>
            </a>
            <a href="" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <SiFacebook />
                </span>
            </a>
        </div>
       

        </>
    
  )
}

export default Footer