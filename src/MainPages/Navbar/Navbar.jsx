import React, { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { IoOptionsOutline } from 'react-icons/io5'
// import {IoIosOptions} from "react-icons/io"
import { CiSearch } from 'react-icons/ci'
import './Navbar.scss'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState('/')
    useEffect(()=> {
        const pathname = window.location.pathname
        setActive(pathname)
    })

    return (
        <>
            <div className="Navbar d-flex justify-content-between align-items-center px-3">
                <div>
                    <img className='wasserstoffLogo' src={'https://www.thewasserstoff.com/images/logo-top.png'} alt=''></img>
                    <p className='logo-text d-inline mx-1'>WASSERSTOFF</p>
                </div>

                <div className='search d-flex align-items-baseline'>
                    <input type="text" className="search-box" />
                        <CiSearch className="mx-2" size={15} />
                </div>

                <div className="nav-items d-flex ">
                {/* eslint-disable-next-line */}
                    <Link to='#' className='mx-3 text-muted' >Statistics</Link>
                {/* eslint-disable-next-line */}
                    <Link to="/" onClick={()=>{setActive('/')}} className={`mx-3 ${active == '/' ? 'active' : 'text-muted'}`} >Overview</Link>
                {/* eslint-disable-next-line */}
                    <Link to='/dashboard' onClick={()=>{setActive('/dashboard')}} className={`mx-3 ${active == '/dashboard' ? 'active' : 'text-muted'}`} >Dashboard</Link>
                {/* eslint-disable-next-line */}
                    <Link className='mx-3 text-muted' >Analytics</Link>
                </div>

                <div className="profile-nav-items">
                    <span className='mx-3'><FiUser size={22} /></span>
                    <span className='mx-3'><IoOptionsOutline size={22} /></span>
                </div>
            </div>
        </>
    )
}

export default Navbar