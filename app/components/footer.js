import React from 'react'
import Image from 'next/image'
import copyright from '@/public/copyright.svg'

const Footer = () => {
  return (
    <div className='bg-[#F5F5F5] p-10 flex flex-row justify-between w-full rounded-[40px]'>
        <span className='flex flex-row items-center gap-3'>
            <Image src={copyright} className='w-6'/>
            <p className='text-[20px] font-semibold'>Talup 2023. All rights reserved</p>
        </span>
        <span className='flex flex-row items-center gap-3 text-[20px] underline decoration-1'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </span>
    </div>
  )
}

export default Footer