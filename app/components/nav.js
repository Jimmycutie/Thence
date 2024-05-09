import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/logo.svg'



const Nav = () => {
  return (
    <div className='flex flex-row justify-between py-4 px-5 w-full border-solid border-[1px] border-slate-200 rounded-full font-medium'>
        <Image src={logo} className='ml-10 w-36'/>
        <span>
            <Link href={"/registeration"}>
              <button className='px-8 py-6  border-solid border-solid text-xl border-[1px] border-slate-200 rounded-full mr-5 hover:bg-[#F1F1F1]'>
                  Get Project
              </button>
            </Link>
            
            <button className='px-8 py-6 bg-[#1C1C1C] hover:bg-[#4E4E4E] text-xl text-white rounded-full'>
                Onboard Talent
            </button>
        </span>
    </div>
  )
}

export default Nav