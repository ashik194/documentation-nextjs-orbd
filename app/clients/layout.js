'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import { PiHouseBold } from "react-icons/pi";
import { FaPiedPiper } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import myGovLogo from "@/public/mygov.png"
import SidebarIcon from "./clientSidebar/SidebarIcon";
import SidebarSubMenu from "./clientSidebar/SidebarSubMenu";

function layout({ children }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleValue, setToggleValue] = useState(false)
    const handleToggleValue = (toggle) => {
        setToggleValue(toggle)
    }
    
    const [selectedIcon, setSelectedIcon] = useState('dashboard');

    const handleSelectedIcon = (value) => {
      setSelectedIcon(value);
      console.log(selectedIcon);
    };

    return (
        <>
        <div className="flex">
          
            {/* Sidebar */}
            
            <div className='sticky top-0 flex flex-row'>
                <SidebarIcon toggleValue={toggleValue} onUpdateSelected={handleSelectedIcon}/>
                <SidebarSubMenu toggleValue={toggleValue} selected={selectedIcon}/> 
            </div>
    
            <div className="flex flex-col w-screen">
            <Header handleToggleValue={handleToggleValue} />
            {children}
            </div>
        </div>

        </>
    )
}

export default layout