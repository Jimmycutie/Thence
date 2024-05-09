'use client'
import React from 'react'
import Image from 'next/image'
import arrow from '@/public/arrow.svg'
import SquareBg from './square-bg'
import { useState } from 'react'

const Carousel = () => {
    const[isHovering, setIsHovering] = useState(false)
    return (
        <div 
            className='relative flex flex-col gap-28 justify-center pt-24 w-max'
        >
            <p className='text-5xl w-[500px] font-semibold'>Enhance fortune 50 company’s insights teams research capabilities</p>
            <div className='flex flex-row gap-3 mb-auto'>
                <div className={`w-2.5 h-2.5 rounded-full bg-[#2DA950]`}></div>
                <div className={`w-2.5 h-2.5 rounded-full bg-[#CAD0CB]`}></div>
                <div className={`w-2.5 h-2.5 rounded-full bg-[#E4E3E3]`}></div>
            </div>
            <button className='px-10 py-8 w-max bg-[#1C1C1C] hover:bg-[#4E4E4E] text-2xl text-white rounded-full flex gap-5 items-center'><span>Explore More</span><span><Image src={arrow}/></span></button>
            <SquareBg />
        </div>
    )
}

export default Carousel