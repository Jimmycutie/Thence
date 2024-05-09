'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '@/public/logo.svg'
import success from '@/public/success.svg'
import { useRouter } from 'next/navigation'


const Success = () => {
  const router = useRouter()
  useEffect(()=>{
    setTimeout(
      ()=>{
        router.push('/')
      }, 5000
    )
  })
  return (
    <section className='px-[76px] py-16 h-screen'>
      <nav className='flex justify-between'>
          <Image width={150} height={"auto"} src={logo} />
      </nav>
      <div className='flex flex-col gap-6 w-full h-full items-center justify-center pt-44 pb-10'>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <Image src={success} width={100}/>
            <p className='font-covered text-[#2DA950] text-5xl'>
              Success Submitted
            </p>
            <h1 className='flex flex-col gap-4 items-center mb-10 w-[40vw] mb-auto'>
                <span className='text-7xl font-semibold mb-5'>Congratulations</span>
                <span className='text-3xl text-[#727272] text-center'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</span>
            </h1>
          </div>
          
          <p className='text-2xl text-[#727272]'>Redirecting you to Homepage in <span className='text-[#1C1C1C] font-bold'>5 Seconds</span></p>
      </div>

    </section>
  )
}

export default Success