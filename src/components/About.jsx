import React from 'react'
import Title from './Title'
import testimonial from '../assets/testimonial.png'
import about from '../assets/about.png'
import { TbLocation } from 'react-icons/tb'
import { RiAdminLine, RiSecurePaymentLine, RiSoundModuleLine } from 'react-icons/ri'
import { FaQuoteLeft, FaUsersLine } from 'react-icons/fa6'
import Feature from './Feature'

const About = () => {
  return (
    <section className='max-padd-container py-16'>
      {/* CONTAINER */}
      <div className='flex flex-col md:flex-row gap-5 gap-y-10 '>
        {/* TESTIMONIAL */}
        <div className='flex-1 flexCenter flex-col'>
          <Title
            titleStyles={'!pb-2'}
            title1={'People'} title2={'Says'} title1Styles={'h3'} />
          <img src={testimonial} alt="" height={55} width={55} className='rounded-full ' />
          <h4 className='h4 mt-6'>John Doe</h4>
          <p className='relative bottom-2'>CEO At TechStack</p>
          <FaQuoteLeft className='text-3xl' />
          <p className='max-w-[222px] mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga officiis tenetur obcaecati iste laborum?
          </p>
        </div>
        {/* BANNER */}
        <div className='flex-[2]  flex rounded-2xl relative'>
          <img className='rounded-2xl' src={about} alt="about-img" />
          <div className='absolute h-full w-full bg-white/50 top-0' />

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 p-6 rounded-xl'>
            <h4 className='bold-18 text-center'>Top view in this <br />week</h4>
            <h2 className='h2 uppercase'>Trending</h2>
          </div>
        </div>
        {/* ABOUT */}
        <div className='flex-[1] flexCenter flex-col '>
          <Title
            titleStyles={'!pb-2'}
            title1={'About'} title2={"Us"} title1Styles={'h3'} />
          <div className='flex flex-col items-start gap-y-5  '>


            <Feature
              styleFeature={'flexCenter gap-3 mb-3'}
              icon=<RiSecurePaymentLine className='text-3xl' /> titre={'Fast & Secure'} description={'Optimized performance'} />

            <Feature
              styleFeature={'flexCenter gap-3 mb-3'}
              icon={<RiSoundModuleLine className='text-3xl' />} titre={'Advanced Filtering'} description={'Find items quickly'} />

            <Feature
              styleFeature={'flexCenter gap-3 mb-3'}
              icon={<FaUsersLine className='text-3xl' />} titre={'User Reviews'} description={'Rating & feedback'} />

            <Feature
              styleFeature={'flexCenter gap-3 mb-3'}
              icon={<TbLocation className='text-3xl' />} titre={'Order Tracking'} description={'Live order status'} />

            <Feature
              styleFeature={'flexCenter gap-3 mb-3'}
              icon={<RiAdminLine className='text-3xl' />} titre={'Admin dashboard'} description={'Mange store easily'} />

          </div>
        </div>
      </div>

    </section >
  )
}

export default About