import React from 'react'
import { Link } from 'react-router-dom'





function Header() {
    return (
        <header >

            <div>
                {/* LOGO */}
                <Link className='bold-28' to={"/"}>
                    Shopanza
                </Link>
            </div>
            {/* NAVBAR */}
            <div>

            </div>

        </header>
    )
}

export default Header