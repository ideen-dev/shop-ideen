import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import Feature from './Feature'
import { TbTruckDelivery } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'

function Features() {
  return (
    <section className='max-padd-container mt-16'>
      {/* CONTAINER */}
      <div className='max-padd-container flexBetween flex-wrap gap-8 rounded-2xl '>
 
        <Feature

          icon={<RiMoneyDollarCircleLine className='text-3xl' />}
          titre="Money-Back Guarantee"
          description="100% refund guaranteed if you're not satisfied." />
        <Feature

          icon={<TbTruckDelivery  className='text-3xl'/>}
          titre="Free shipping & return"
          description="Free shipping available on all orders above $99."/ >
        <Feature

          icon={<BiSupport className='text-3xl'/>}
          titre="24/7 online support"
          description="Our team is here to assist you round the clock." />
    
      </div>
    </section>
  )
}

export default Features