import React from 'react'
import Image from 'next/image'
import rect1 from '@/public/rect1.svg'
import rect2 from '@/public/rect2.svg'

const SquareBg = () => {
  return (
    <div className='absolute grid grid-cols-3 w-max z-[-1] -top-36 left-36'>
        {/* <div className='min-w-36 w-[10vw] min-h-36 h-[10vw] border-solid border-slate-100 rounded-tl-[100px] rounded-tr-3xl rounded-b-3xl border-2'></div> */}
        <Image className='w-64' src={rect1}/>
        <Image className='w-64' src={rect1}/>
        <Image className='w-64' src={rect1}/>
        <Image className='w-64' src={rect1}/>
        <Image className='w-64' src={rect1}/>
        <Image className='w-64' src={rect1}/>
        <Image className='w-64' src={rect2}/>
        <Image className='w-64' src={rect2}/>
        <Image className='w-64' src={rect2}/>
    </div>
  )
}

export default SquareBg