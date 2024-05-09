import Image from 'next/image'
import React from 'react'
import union from '@/public/union.svg'


const Reviews = () => {
    const reviews = [
        {
            question: "Do you offer freelancers?",
            expanded: false,
            underline: true,
            ans: ""
        },
        {
            question: "What’s the guarantee that I will be satisfied with the hired talent?",
            expanded: false,
            underline: true,
            ans: ""
        },
        {
            question: "Can I hire multiple talents at once?",
            expanded: true,
            underline: true,
            ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        },
        {
            question: "Why should I not go to an agency directly?",
            expanded: false,
            underline: true,
            ans: ""
        },
        {
            question: "Who can help me pick a right skillset and duration for me?",
            expanded: false,
            underline: false,
            ans: ""
        },
    ]
  return (
    <section className='w-full mb-16'>
        <div className='grid grid-cols-2 bg-[#E8EEE7] rounded-[40px] p-[74px]'>
            <div className=' ml-4 relative'>
                <p className='font-covered text-4xl text-[#9E9D9D] mb-4'>What's on your mind</p>
                <h1 className='text-6xl font-semibold tracking-wide'>Ask Questions</h1>
                <div className='absolute -bottom-16 -left-20'>
                    <Image src={union}/>
                </div>
            </div>

            <div className='mt-8'>
                {
                    reviews.map(item => (
                        <>
                            <div className='pt-8 pb-6 flex flex-col gap-8'>
                                <p className='flex justify-between items-center'>
                                    <span className='text-xl font-semibold w-3/5'>{item.question}</span>
                                    {item.expanded ? <span className='text-4xl'>-</span> : <span className='text-3xl'>+</span>}
                                </p>
                                {item.ans && <p className='text-[#617275]'>{item.ans}</p>}
                            </div>
                            {item.underline && <hr style={{color: "#D7D7D7", backgroundColor: "#D7D7D7", height: 2}}/>}
                        </>
                    ))
                }
                
            </div>
        </div>
    </section>
  )
}

export default Reviews