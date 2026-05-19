import React from 'react'
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { format } from "date-fns";
const Header = () => {
  return (
    <div className='text-center mt-12.5'>
        <Image src={logo} width={400} height={150} alt='logo' className='mx-auto mb-5'/>
        <h2 className='text-[#706F6F] text-[18px] mb-2.5'>Journalism Without Fear or Favour</h2>
        <h2 className='text-xl font-bold'>{format(new Date(), `EEEE, MMMM d, yyyy`)} </h2>
    </div>
  )
}

export default Header