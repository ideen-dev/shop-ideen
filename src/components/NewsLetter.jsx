import React from 'react'
import { FaDribbble, FaFacebookF, FaInstagram } from 'react-icons/fa6'

const NewsLetter = () => {
  return (
    <section className='max-padd-container
    border-t-[1px] border-b-[1px] border-primary pt-16 py-4'>
      <div className='flexBetween flex-wrap gap-7'>
        <div>
          <h4 className='bold-14 uppercase tracking-wider   '>NewsLetter</h4>
          <p>Get latest information on events, Sales & Offerts </p>
        </div>

        <div>
          <div className='flex bg-primary'>
            <input className='p-4 bg-primary w-[266px] outline-none text-[13px]' type="email" placeholder='Email Adress' />
            <button className='btn-dark !rounded-none !text-[13px] !font-bold uppercase'>Submit</button>
          </div>
        </div>
        <div className='flex gap-x-3 pr-14'>
          <div className='h-8 w-8 rounded-full hover:bg-tertiary hover:text-white flexCenter   transition-all duration-500'><FaFacebookF/></div>
          <div className='h-8 w-8 rounded-full hover:bg-tertiary hover:text-white flexCenter   transition-all duration-500'><FaInstagram/></div>
          <div className='h-8 w-8 rounded-full hover:bg-tertiary hover:text-white flexCenter   transition-all duration-500'><FaDribbble/></div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter