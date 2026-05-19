import Link from 'next/link'
import React from 'react'
import user from '@/assets/user.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-11/12 mx-auto mt-5.5'>
        <div></div>

        <nav>
            <ul className='flex gap-5'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/career'>Career</Link></li>
            </ul>
        </nav>
        <div className='flex gap-2.25  items-center'>
            <Image src={user} width={60} height={60} alt='user' ></Image>
            <Link href='/login' ><button className='px-10.5 py-2.5 bg-[#403F3F] text-white font-semibold'>Login</button></Link>
        </div>
    </div>
  )
}

export default Navbar