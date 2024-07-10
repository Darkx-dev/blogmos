"use server"
import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <a href='/' className='relative'>
        <span className='text-pink-600 text-2xl font-bold max-md:text-3xl'>blog</span>
        <span className='max-md:text-xl'>mos</span>
    </a>
  )
}

export default Logo