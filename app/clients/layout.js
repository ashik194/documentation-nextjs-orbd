'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import { PiHouseBold } from "react-icons/pi";
import { FaPiedPiper } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import myGovLogo from "@/public/mygov.png"

function layout({children}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleValue, setToggleValue] = useState(false)
  const handleToggleValue = (toggle) => {
    setToggleValue(toggle)
  }
  return (
    <>
    <div className="flex">
          
        {/* <Sidebar toggleValue={toggleValue} /> */}

        <div className={
  `${toggleValue?'min-w-[80px]':'w-[80px] sm:min-w-[260px]'} 
   sticky top-0 z-40 bg-[#405189] text-white` }>

<Link className='h-16 flex items-center justify-center z-50' href='/'>
  <img src={myGovLogo.src} className={toggleValue?'h-4':'h-8'} alt="logo"/> 
</Link>

        {/* <!--- Menu --> */}
            <div>
                <ul>
                    <li className="text-[#CFD3E1] px-5 py-3 text-xs font-medium">Menu</li>

                    <li className="px-6 py-[10px]">
                        <Link className='flex flex-wrap items-center gap-[10px]' href='/clients'>
                            <span className="h-4 w-4"><PiHouseBold /></span>
                            <span className={`${toggleValue?'hidden':'hidden sm:block'} text-base`}> Dashboard </span>
                        </Link>
                    </li>
                    <li className="px-6 py-[10px]">
                        <Link className='flex flex-wrap items-center gap-[10px]' href='/clients/sso'>
                            <span className="h-4 w-4"><FaWpforms /></span>
                            <span className={`${toggleValue?'hidden':'hidden sm:block'} text-base`}> SSO </span>
                        </Link>
                    </li>
                    <li className="px-6 py-[10px]">
                        <Link className='flex flex-wrap items-center gap-[10px]' href='/clients/api'>
                            <span className="h-4 w-4"><FaPiedPiper /></span>
                            <span className={`${toggleValue?'hidden':'hidden sm:block'} text-base`}> API </span>
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