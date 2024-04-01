'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import { PiHouseBold } from "react-icons/pi";
import { FaPiedPiper } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";

function layout({children}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleValue, setToggleValue] = useState(false)
  const handleToggleValue = (toggle) => {
    setToggleValue(toggle)
  }
  return (
    <>
    <div id="app-wrapper" className="flex">
          
        {/* <Sidebar toggleValue={toggleValue} /> */}


        <div className={`${toggleValue?'min-w-[80px]':'w-[80px] sm:min-w-[260px]'} app-menu `}>

        <Link className='logo-box' href='/'>
            <img src="assets/images/logo-light.png" className="logo-light h-6" alt="Light logo"/>
            <img src="assets/images/logo-dark.png" className="logo-dark h-6" alt="Dark logo"/>
        </Link>

        {/* <!--- Menu --> */}
            <div data-simplebar>
                <ul className="menu" data-fc-type="accordion">
                    <li className="menu-title">Menu</li>

                    <li className="menu-item">
                        <Link className='menu-link waves-effect' href='/clients'>
                            <span className="menu-icon"><PiHouseBold /></span>
                            <span className={`${toggleValue?'hidden':'hidden sm:block'} `}> Dashboard </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link className='menu-link waves-effect' href='/clients/sso'>
                            <span className="menu-icon"><FaWpforms /></span>
                            <span className={`${toggleValue?'hidden':'hidden sm:block'} `}> SSO </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link className='menu-link waves-effect' href='/clients/api'>
                            <span className="menu-icon"><FaPiedPiper /></span>
                            <span className={`${toggleValue?'hidden':'hidden sm:block'} `}> API </span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>


          <div className="app-content">
            <Header handleToggleValue={handleToggleValue} />
            
          {children}
          </div>
        </div>
    </>
  )
}

export default layout