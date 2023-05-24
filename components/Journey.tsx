import React, { useState } from 'react'
import Year1 from './Year1'
import Year2 from './Year2'
import Year3 from './Year3';


const Journey = () => {
  const [workJourney1,setWorkJourney1]=useState(true);
  const [workJourney2,setWorkJourney2]=useState(false);
  const [workJourney3,setWorkJourney3]=useState(false);

  const handle1=()=>{
    setWorkJourney1(true)
    setWorkJourney2(false)
    setWorkJourney3(false)
  }

  const handle2=()=>{
    setWorkJourney1(false)
    setWorkJourney2(true)
    setWorkJourney3(false)
  }

  const handle3=()=>{
    setWorkJourney1(false)
    setWorkJourney2(false)
    setWorkJourney3(true)
  }

  return (
    <section id='journey' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>

    <h1 className='text-2xl font-bold text-center p-8' >Company journey </h1>
    <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
            <li onClick={handle1} className='border-l-2 border-l-black text-textDark bg-transparent hover:bg-red-200 py-3 text-sm cursor-pointer
                            duration-300 px-8 font-medium active'>2019
            </li>
            <li onClick={handle2} className='border-l-2 border-l-black text-textDark bg-transparent hover:bg-red-200 py-3 text-sm cursor-pointer
                            duration-300 px-8 font-medium'>2020
            </li>
            <li onClick={handle3} className='border-l-2 border-l-black text-textDark bg-transparent hover:bg-red-200 py-3 text-sm cursor-pointer
                            duration-300 px-8 font-medium'>2021
            </li>
        </ul>
      {workJourney1 && <Year1 />}
      {workJourney2 && <Year2 />}
      {workJourney3 && <Year3 />}
     
    </div>




    </section>
  )
}

export default Journey