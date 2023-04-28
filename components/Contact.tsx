import React from 'react'
import SectionTitle from './SectionTitle'
import {CiLocationOn} from 'react-icons/ci'
import {FiPhone} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
return (
  <section id='contactUs' className='max-w-contentContainer mx-auto lgl:px-12 py-20'>
        
  <SectionTitle title='Contact Us' />

  <div className='grid grid-cols-2 gap-2'>
      <div className="container -mx-4 flex flex-wrap lg:justify-between ">0
        <div className="w-full px-4">

            <h2 className="pt-8 italic mb-6 text-[16px] font-bold uppercase sm:text-[16px] lg:text-[26px] 
                    xl:text-[ 16px]">
                         GET IN TOUCH WITH US</h2>
            <p className="text-body-color mb-9 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
                    minim veniam quis nostrud exercitation ullamco</p>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className=" flex h-[60px] w-full max-w-[60px] items-center justify-center ">
                <CiLocationOn size='30px'/> 
              </div>
              <div className="w-full">
                <h4 className="text-dark mb-1 text-xl font-semibold">Our Location</h4>
                  <p className="text-zinc-400">abcncdjnie 1220018. India</p>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className=" flex h-[60px] w-full max-w-[60px] items-center justify-center">
                <FiPhone size='25px'/>
              </div>
              <div className="w-full">
                <h4 className="text-dark mb-1 text-xl font-semibold">Phone Number</h4>
                  <p className="text-zinc-400">8141425980</p>
              </div>
            </div>

            <div className="mb-8 flex w-full max-w-[370px]">
              <div className=" flex h-[60px] w-full max-w-[60px] items-center justify-center ">
                <AiOutlineMail size='25px' />
              </div>
              <div className="w-full">
                <h4 className="text-dark mb-1 text-xl font-semibold">Email Address</h4>
                  <p className="text-zinc-400">g1234@gmail.com</p>
              </div>
          </div>
        </div>
      </div>

    
      <div className="w-full pt-10">
        <div className=" rounded-lg bg-teal-950 shadow-lg sm:p-8">
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="text-black w-full rounded border py-3 px-[14px] "
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="text-black w-full rounded border py-3 px-[14px] "
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Phone Number"
                className="text-black w-full rounded border py-3 px-[14px]"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                className="text-black w-full rounded border py-3 px-[14px] "
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded border p-3 text-white transition hover:bg-bodyColor">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

  </div>
</section>
  )
}

export default Contact