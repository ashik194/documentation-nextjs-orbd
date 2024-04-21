import React, { useState } from 'react'
import { RiDashboard2Line } from "react-icons/ri";
import { RiApps2Line } from "react-icons/ri";
import { RiLayout2Line } from "react-icons/ri";
import logo from "@/public/logo-sm.png"
import Link from 'next/link';
import Image from 'next/image';

function SidebarIcon({ toggleValue, onUpdateSelected  }) {
  const [selected, setSelected] = useState('dashboard');
  onUpdateSelected(selected);

  const handleSelectedChange = (e) => {
    setSelected(e);
    onUpdateSelected(e);
  }
 
  return (
    <div className='bg-white w-[70px] drop-shadow min-h-screen'>
      <div class="flex flex-col items-center pt-6">
        <Link href="#" className='mb-6'>
          <Image src={logo} alt="" height="22" />
        </Link>

        <div className='hover:cursor-pointer flex flex-col gap-3'>

          <Link className={
            selected==='dashboard'? 'h-10 w-10 bg-[#DFF1FB] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='dashboard'
            onClick={()=>handleSelectedChange('dashboard')}
            href='/clients'>
            {
                selected === 'dashboard' ? (
                  <RiDashboard2Line style={{ color: '#25a0e2' }} size={20} />
                ) : (
                  <RiDashboard2Line style={{ color: '#6D7080' }} size={20} />
                )
              }
          </Link>

          <Link className={
            selected==='app'? 'h-10 w-10 bg-[#DFF1FB] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='app'
            onClick={()=>handleSelectedChange('app')}
            href='/clients/sso'>
            {
                selected === 'app' ? (
                  <RiApps2Line style={{ color: '#25a0e2' }} size={20} />
                ) : (
                  <RiApps2Line style={{ color: '#6D7080' }} size={20} />
                )
              }
          </Link>

          <Link className={
            selected==='layout'? 'h-10 w-10 bg-[#DFF1FB] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='layout'
            onClick={()=>handleSelectedChange('layout')}
            href='/clients/api'>
            {
                selected === 'layout' ? (
                  <RiLayout2Line style={{ color: '#25a0e2' }} size={20} />
                ) : (
                  <RiLayout2Line style={{ color: '#6D7080' }} size={20} />
                )
              }
          </Link>

        </div>

      </div>
      
    </div>
  )
}

export default SidebarIcon