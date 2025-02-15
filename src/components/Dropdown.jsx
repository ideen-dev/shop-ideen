import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Dropdown = ({onClick}) => {
    const {navigate}=useContext(ShopContext)
  return (
    <div className='bg-white p-2 w-40 ring-1 ring-slate-900/5 absolute  z-50 right-0 top-7  group-hover:flex flex-col medium-14 shadow-md hidden'>
        <ul>
            <li onClick={()=>navigate('/orders')} className= 'p-2 text-tertiary rounded hover:bg-primary cursor-pointer'>Orders</li>
            <li className=' p-2 text-tertiary rounded hover:bg-primary cursor-pointer' onClick={onClick}>Logout</li>
        </ul> 
    </div>
  
  )
}

export default Dropdown