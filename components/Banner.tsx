import React from 'react'
import Image from 'next/image'
import { tech2 } from '@/public/assets'
const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flax flex-col gap-4
        lgl:gap-8 mdl:px-10 xl:px-4'>
            
        <div>
            <Image className='w-50  mx-auto rounded-3xl border-2 border-teal-700 opacity-70 hover:opacity-100' 
                    src={tech2} alt="banner" />     
        </div>
        <div className='font-bold tracking-wide text-emerald-300 font-bodyFont text-center text-3xl 
            uppercase underline underline-offset-4'>Welcome to G company</div>      
            
    </section>
  )
}

export default Banner