'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import { PiHouseBold } from 'react-icons/pi'
import { FaListUl } from "react-icons/fa6";
import myGovLogo from "@/public/mygov.png"

export default function layout({children}) {
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
                    <li className="text-[#CFD3E1] px-5 py-3 text-xs font-medium">Menu</li> {/**?px-8 py-2 */}
                    <li className="px-6 py-[10px]">
                        <Link className='flex flex-wrap items-center gap-[10px]' href='/admin'>
                            <span className="h-4 w-4"><PiHouseBold /></span>
                            <span className={`${toggleValue?'hidden':'hidden sm:block'} text-base`}> Dashboard </span>
                        </Link>
                    </li>
                    <li className="px-6 py-[10px]">
                        <Link className='flex flex-wrap items-center gap-[10px]' href='/admin'>
                            <span className="h-4 w-4"><FaListUl /></span>
                            <span className={`${toggleValue?'hidden':'hidden sm:block'} text-base`}> List </span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>

          <div className="flex flex-col">
            <Header handleToggleValue={handleToggleValue} />
          {children}
          </div>
        </div>
    </>
  )
}



