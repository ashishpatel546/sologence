import React from 'react'
import {BsFillCloudsFill} from 'react-icons/bs'
import {GiComputing} from 'react-icons/gi'
import {AiOutlineNodeIndex} from 'react-icons/ai'
const Expertise = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <h1 className='text-2xl font-bold text-center p-8' >Our Expertise </h1>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-red-200 text-black'>
                
                <BsFillCloudsFill size={50}/>

                <h2 className='font-medium text-[20px]'>Cloud Computing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatum optio nulla rem dolore 
                    accusantium dolor sunt, animi consectetur nemo consequuntur nihil possimus ipsa quos maiores culpa amet ullam natus!</p>
            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-red-100 text-black'>
                
                <AiOutlineNodeIndex size={50}/>
                
                <h2 className='font-medium text-[20px]'>Node JS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatum optio nulla rem dolore 
                    accusantium dolor sunt, animi consectetur nemo consequuntur nihil possimus ipsa quos maiores culpa amet ullam natus!</p>
            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-red-100 text-black'>
                
                <GiComputing size={50}/>
                
                <h2 className='font-medium text-[20px]'>AI/ML</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatum optio nulla rem dolore 
                    accusantium dolor sunt, animi consectetur nemo consequuntur nihil possimus ipsa quos maiores culpa amet ullam natus!</p>
            </div>
        </div>

    </section>
  )
}

export default Expertise