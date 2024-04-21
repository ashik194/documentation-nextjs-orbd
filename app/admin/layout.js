'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import { PiHouseBold } from 'react-icons/pi'
import { FaListUl } from "react-icons/fa6";
import myGovLogo from "@/public/mygov.png";
import SidebarIcon1 from "./adminSidebar/SidebarIcon";
import SidebarSubMenu1 from "./adminSidebar/SidebarSubMenu";

export default function layout({children}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleValue, setToggleValue] = useState(false)
    const handleToggleValue = (toggle) => {
    setToggleValue(toggle);
    };

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
            <SidebarIcon1 toggleValue={toggleValue} onUpdateSelected={handleSelectedIcon}/>
            <SidebarSubMenu1 toggleValue={toggleValue} selected={selectedIcon}/> 
          </div>
         

        <div className="flex flex-col">
          <Header handleToggleValue={handleToggleValue} />
        {children}
        </div>
    </div>

    
    </>
  )
}



