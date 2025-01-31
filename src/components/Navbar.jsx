import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ containerStyles, onClick }) {

    const navLinks = [
        { path: '/', title: 'Home' },
        { path: '/collection', title: 'Collection' },
        { path: '/blog', title: 'Blog' },
        { path: '/mailto:info@gmail.com', title: 'Contact' },

    ]


    return (
        <nav className={containerStyles} >

            {navLinks.map((link) => (

                <NavLink key={link.title} to={link.path} className={({ isActive }) => `${isActive ? "active-link" : ""} px-3 py-2 rounded-full`}
                    onClick={onClick} //ferme le menu au clique
                >

                    {link.title}
                </NavLink>
            ))}

        </nav>
    )
}

export default Navbar