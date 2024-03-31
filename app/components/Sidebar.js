import Image from 'next/image'
import React from 'react'
import companyLogo from "../../public/next.svg"
import Link from 'next/link'

function Sidebar() {
    return (
        <>
            <div className="app-menu">  
                <Link href="/" className='logo-box' >
                    <Image src={companyLogo} className="h-4 sm:h-4" alt="logo" />
                </Link>
                {/* <!--- Menu --> */}
                <div>
                    <ul className="menu">
                        <li className="menu-title">Menu</li>

                        <li className="menu-item">
                            <Link className='menu-link waves-effect' href='#'>
                                <span className="menu-icon">
                                    <i className="ph-duotone ph-house"></i>
                                </span>
                                <span className="menu-text"> Dashboard </span>
                                <span className="badge bg-primary rounded ms-auto">01</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className='menu-link waves-effect' href='#'>
                                <span className="menu-icon">
                                    <i className="ph-duotone ph-calendar"></i>
                                </span>
                                <span className="menu-text"> Calendar </span>
                            </Link>
                        </li>

                        <li className="menu-title">Custom</li>

                        <li className="menu-item">
                            <Link href="#" className="menu-link waves-effect">
                                <span className="menu-icon"><i className="ph-duotone ph-file"></i></span>
                                <span className="menu-text"> Extra Pages </span>
                                <span className="menu-arrow"></span>
                            </Link>

                            {/**Sub portion visible to make it functional */}
                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <Link className='menu-link' href='#'>
                                        <span className="menu-dot"></span>
                                        <span className="menu-text">Starter</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className='menu-link' href='#'>
                                        <span className="menu-dot"></span>
                                        <span className="menu-text">Invoice</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className='menu-link' href='#'>
                                        <span className="menu-dot"></span>
                                        <span className="menu-text">Maintenance</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link href="javascript:void(0)" className="menu-link waves-effect">
                                <span className="menu-icon"><i className="ph-duotone ph-sign-in"></i></span>
                                <span className="menu-text"> Auth Pages </span>
                                <span className="menu-arrow"></span>
                            </Link>

                            {/**Sub portion visible to make it functional */}
                            <ul className="sub-menu hidden">
                                <li className="menu-item">
                                    <Link className='menu-link' href='#'>
                                        <span className="menu-dot"></span>
                                        <span className="menu-text">Log In</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className='menu-link' href='#'>
                                        <span className="menu-dot"></span>
                                        <span className="menu-text">Register</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className='menu-link' href='#'>
                                        <span className="menu-dot"></span>
                                        <span className="menu-text">Recover Password</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link className='menu-link' href='#'>
                                        <span className="menu-dot"></span>
                                        <span className="menu-text">Lock Screen</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar