'use client'
import { navbarLinks } from '@/public/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className=' flex justify-between md:px-12 px-6 w-[100vw] lg:w-[70vw] items-center h-[10vh]'>
      <Link href='/' className="navLeft hover:opacity-75 flex items-center font-semibold text-2xl">Uzair <span className='text-neon-green '>.</span></Link>
      <div className="navRight max-sm:hidden select-none">
        {navbarLinks.map((link, index) => {
          const isActive = pathname.includes(link.href) ? 'text-neon-green border-b-2 border-neon-green' : ''
          const specialButton = link.name === 'Hire Me' ? 'bg-neon-green text-zinc-900 rounded-2xl hover:text-black hover:border-b-0 font-semibold' : ''
          return (
            <Link key={index} href={link.href} className={`text-xs md:mx-3 ${specialButton} ${isActive} p-2 hover:text-neon-green transition-all`}>{link.name}</Link>  
          )}
        )}
      </div>
      <div className='hidden max-sm:flex flex-col items-end items-right opacity-80'>
        <p className='translate-y-4 scale-x-[5]'>-</p>
        <p className='scale-x-[3] translate-x-1'>-</p>
        <p className='-translate-y-4 translate-x-[0.15rem] scale-x-[4]'>-</p>
      </div>
    </div>
  )
}

export default Navbar