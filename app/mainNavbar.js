
"use client";

import { Button, Navbar } from "flowbite-react";
import logo from "../public/next.svg"
import Image from "next/image";

export default function MainNavbar() {  
  return (
<div className="bg-gray-100">
<Navbar fluid rounded className="bg-gray-100">
    <Navbar.Brand href="https://flowbite-react.com">
      <Image src={logo} className="mr-3 h-4 sm:h-4" alt="Logo" />
      <span className="self-center whitespace-nowrap text-sm font-semibold dark:text-white">Admin dashboard</span>
    </Navbar.Brand>

    <Navbar.Collapse className="flex items-start">
      <Navbar.Link href="#" active>
        Client List
      </Navbar.Link>
      <Navbar.Link href="#">Logout</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
</div>
  );
};

