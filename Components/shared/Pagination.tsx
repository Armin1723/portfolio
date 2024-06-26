'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { json } from 'stream/consumers'

interface props{
    url: string,
    page: number,
    hasMore: boolean
}

const Pagination = ({ url, page, hasMore } : props) => {
    const router = useRouter()
    const handleNavigation = (method : string) =>{
        const newPage = method === 'next' ? parseInt(page.toString()) + 1 : Math.max(1, page - 1)
        router.push(`${url}?page=${newPage}`)
    }
  return (
    <div className='w-full flex items-center justify-center gap-6'>
      <button onClick={() => handleNavigation('prev')} className="rightArrow rounded-full px-4 py-2 hover:bg-gray-600 transition-all duration-500 active:bg-gray-600 text-xl text-gray-400 font-bold disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:opacity-50" disabled={page == 1}>{'<'}</button>
      <p className='text-gray-600'>|</p>
      <button onClick={() => handleNavigation('next')} className="leftArrow rounded-full px-4 py-2 hover:bg-gray-600 transition-all duration-500 active:bg-gray-600 text-xl text-gray-400 font-bold disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:opacity-50" disabled={!hasMore}>{'>'}</button>
    </div>
  )
}

export default Pagination
