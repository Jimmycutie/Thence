import React from 'react'
import Collage from './landing components/collage'
import Carousel from './landing components/carousel'



const Landing = () => {
  return (
    <section className='flex flex-col items-center w-full h-full gap-20 mb-40'>
      <div className='flex flex-col items-center p-20'>
        <p className='font-covered text-[#2DA950] text-5xl'>
            Success stories
        </p>
        <h1 className='flex flex-col items-center text-6xl font-semibold'>
            <span>Every success journey</span>
            <span>we've encountered.</span>
        </h1>
      </div>
        
      <div className='grid grid-cols-[55%_45%] gap-20 w-full h-full justify-center justify-center'>
        <Collage/>
        <Carousel/>
      </div>
        
    </section>
  )
}

export default Landing