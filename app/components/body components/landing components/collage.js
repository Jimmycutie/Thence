import Image from 'next/image'
import React from 'react'
import lady from '@/public/lady.png'
import sparkle from '@/public/sparkle.svg'
import rocket from '@/public/rocket.svg'

const Collage = () => {
  return (
    <div className='relative w-max h-full justify-self-end mr-40'>
        <div  className='flex justify-start items-start w-[33vw] rounded-[40px] overflow-hidden'>
            <Image src={lady}/>
        </div>
        <div className='absolute top-32 -left-32'>
           <div className='relative flex flex-col gap-4 w-72 bg-[#FFFFFF] pt-12 pl-8 pr-10 pb-9 rounded-[20px] shadow-lg'>
                <Image src={sparkle} className='absolute w-28 -top-5 -left-2'/>
                <h2 className='text-7xl font-light font-poppins'>40%</h2>
                <p className='text-xl text-slate-500 font-medium leading-tight'>
                    Achieved reduction in project execution time by optimising team availability
                </p>
            </div> 
        </div>
        <div className='absolute bottom-10 -left-20 bg-[#FFFFFF] p-4 flex gap-4 items-center rounded-full shadow-xl w-max'>
            <div className='p-1 bg-[#edf7ef] w-max rounded-full'>
                <Image width={45} src={rocket}/>
            </div>
            <h1 className='flex flex-col mr-6 '>
                <span className='font-bold text-3xl leading-tight'>10 DAYS</span>
                <span className='text-md text-slate-400'>Staff Deployment</span>
            </h1>
        </div>
        <div className='absolute -bottom-16 -right-16 flex flex-col bg-[#002E18] text-white gap-3 w-80 py-9 pl-9 pr-7 rounded-[20px] shadow-lg'>
            <h2 className='text-7xl font-medium leading-tight'>$0.5 <spam className='text-2xl text-[#A6A3A0]'>MILLION</spam></h2>
            <p className='text-xl text-slate-300 leading-tight'>
                Reduced client expenses by saving on hiring and employee costs.
            </p>
        </div>
    </div>
    

  )
}

export default Collage