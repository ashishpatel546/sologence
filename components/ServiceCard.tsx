import React from 'react'
import {RxOpenInNewWindow} from 'react-icons/rx'
import {AiOutlineCloudDownload} from 'react-icons/ai'

interface Props {
    title: string
    des:string
    link:string
}


const ServiceCard = ({title,des,link}:Props) => {
  return (
    <a href={link} target='_blank'> <div className='w-full h-80 rounded-lg bg-[#112240]  p-7 flex flex-col 
    gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
    <div className='flex justify-between items-center'>
        <AiOutlineCloudDownload className='text-4xl text-textGreen '/>
        <RxOpenInNewWindow className='text-4xl hover:text-textGreen '/>
    </div>
    <div>
        <h2 className='text-xl font-bodyFont  font-semibold tracking-wide group-hover:text-textGreen'>{title}</h2>
        <p className='text-sm mt-3'>{des}</p>
    </div>
</div>
</a>
  )
}

export default ServiceCard