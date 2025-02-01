import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

function Feature({ icon, titre, description }) {
    return (
        <div className='flexCenter gap-x-3'>
            {icon }
            <div>
                <h4 className='medium-15 uppercase'>{titre}</h4>
                <p >{description}</p>
            </div>
        </div>
    )
}

export default Feature