import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav id="nav-bar"className='navbar navbar-dark bg-dark mb-4 shadow-sm fixed-top'>
            <Link to="/" className='navbar-brand mb-0 mx-auto font-weight-light'>animegalarie</Link>
            <div id="blur"></div>
        </nav>
    )
}

export default Navbar
