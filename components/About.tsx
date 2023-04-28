import React from 'react'
import SectionTitle from './SectionTitle'
import {AiFillThunderbolt} from 'react-icons/ai'
import Image from 'next/image'
import { tech3 } from '@/public/assets'

const About = () => {
  return (<>
    <section id='about' className='max-w-containerSmall mx-auto lgl:py-32 flex flex-col gap-8'>

    <SectionTitle title='About'/>

    <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-zinc-400 font-medium flex flex-col gap-4'>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quasi delectus velit aliquid architecto!
                 Aliquid tempora accusantium numquam laborum vero accusamus necessitatibus quisquam deleniti! Molestias
                  repudiandae dolorem itaque est odit nostrum. Placeat dolore, iste nostrum totam officiis esse. 
                  Officia eveniet voluptates tempora ipsa minus minima, asperiores libero? Quia expedita molestiae
                   itaque, incidunt blanditiis, voluptas vel impedit fugiat nobis quibusdam iusto aut nemo esse dolore? 
                   Aperiam, 
            </p>
            <p>We ensure to be in-line with the latest technologies like:</p>
            <ul className='max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6'>
                <li className='flex items-center gap-2'><span className='text-textBlue'>
                    <AiFillThunderbolt /></span>JavaScript</li>
                <li className='flex items-center gap-2'><span className='text-textBlue'>
                    <AiFillThunderbolt /></span>DevOps</li>
                <li className='flex items-center gap-2'><span className='text-textBlue'>
                    <AiFillThunderbolt /></span>Machine Learning</li>
                <li className='flex items-center gap-2'><span className='text-textBlue'>
                    <AiFillThunderbolt /></span>Cloud</li>
                <li className='flex items-center gap-2'><span className='text-textBlue'>
                    <AiFillThunderbolt /></span>Data Analytics</li>
                <li className='flex items-center gap-2'><span className='text-textBlue'>
                    <AiFillThunderbolt /></span>Artificial Intelligence</li>
                <li className='flex items-center gap-2'><span className='text-textBlue'>
                    <AiFillThunderbolt /></span>IOT</li>
                <li className='flex items-center gap-2'><span className='text-textBlue'>
                    <AiFillThunderbolt /></span>Automation</li>

                
            </ul>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group'>
            <div className='w-full absolute h-80 -left-6 -top-6 rounded-lg'>
                <div className='w-full h-full flex lgl:pl-0'>
                    <Image className='rounded-lg h-full object-cover' src={tech3} alt='tech3'/>                    
                </div>
            </div>
            <div className='lgl:inline-flex w-full h-80 border-2 border-textBlue rounded-md'></div>
        </div>
    </div>


    </section>

    </>
  )
}

export default About