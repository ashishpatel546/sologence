import React from 'react'
import Typewriter from "typewriter-effect"
import Image from 'next/image'
import { tech3 } from '@/public/assets'

const Banner = () => {
  return (
    <div className=' bg-slate-100 px-32 py-32 bg-cover bg-fixed flex items-center '>
      
      <div className='container mx-auto flex flex-col lgl:flex-row '>
        <div className='basis-1/2 w-full lgl:w-2/3 py-2'>
          <span className='text-2xl md:text-5xl font-bold'>G COMPANY</span>
          <br />
          <div className='pt-1'> </div>
          <span className='text-blue-900 font-bold text-3xl md:text-5xl'>Lorem ipsum dolor sit amet.</span>
            
            <div className='pt-4'></div>
            <h3 className='md:text-2xl mt-3 '>
            <Typewriter options={
                {
                  strings: [ "Cloud Computing" , "cyber security" , "AI/ML", "NodeJS" ] ,
                  delay: 3 ,
                  deleteSpeed: 4 ,
                  autoStart: true ,
                  loop: true 
                }
              } />
            </h3>
            <div className='pt-4'></div>
            <span className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit 
            necessitatibus maxime quia minus, molestiae saepe? Quod, fugiat voluptates. Optio nemo magnam, excepturi 
            nihil at dolorum praesentium ipsam, commodi odit illum repudiandae doloribus, quaerat fuga!</span>

            <div className='pt-4'>
            <div className='flex space-x-6'>
            <button className='p-4 rounded text-white bg-blue-900'>Explore</button>
            <button className='p-4 rounded text-blue-900 bg-slate-300'>Service</button>
            </div>
          </div>
        </div>
      <div className='basis-1/2 px-0 py-0 w-full lgl:w-1/3 '>
        <Image src={tech3} alt='tech'/>
      </div>   
    </div>
  </div>


  )
  
}

export default Banner;





  
    