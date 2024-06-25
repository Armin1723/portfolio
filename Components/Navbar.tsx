'use client'
import { navbarLinks } from '@/public/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import HamMenu from './HamMenu'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className=' flex justify-between md:px-12 px-6 w-[100vw] lg:w-[70vw] items-center h-[10vh]'>
      <Link href='/' className="navLeft hover:opacity-75 flex items-center font-semibold text-2xl">Uzair <span className='text-neon-green '>.</span></Link>
      <div className="navRight max-sm:hidden select-none">
        {navbarLinks.map((link, index) => {
          const isActive = pathname.includes(link.href) ? 'text-neon-green border-b-2 border-neon-green' : ''
          const specialButton = link.name === 'Hire Me' ? 'bg-neon-green text-zinc-900 rounded-2xl hover:border-b-0 hover:text-zinc-600 font-semibold' : ''
          return (
            <Link key={index} href={link.href} className={`text-xs md:mx-3 ${isActive} p-2 ${!specialButton && 'hover:text-neon-green'} ${specialButton} transition-all`}>{link.name}</Link>  
          )}
        )}
      </div>
      <HamMenu />
    </div>
  )
}

export default Navbar
