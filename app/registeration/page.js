import Image from 'next/image'
import React from 'react'

import logo from '@/public/logo.svg'
import close from '@/public/Close.svg'
import Form from './components/form'
import Link from 'next/link'

const Register = () => {
  return (
    <section className='px-[76px] py-8'>
        <nav className='flex justify-between'>
            <Image width={150} height={"auto"} src={logo} />
            <Link href={"/"}>
                <button>
                    <div className='p-5 border-solid border-[#CACACA] border-[1px] rounded-full'>
                        <Image width={40} height={"auto"} src={close}/>
                    </div>
                </button>
            </Link>
            
        </nav>
        <div className='flex flex-col gap-6 items-center p-12'>
            <p className='font-covered text-[#2DA950] text-5xl'>
                Registration Form
            </p>
            <h1 className='flex flex-col gap-4 items-center text-7xl font-semibold mb-10'>
                <span>Start your success</span>
                <span>Journey here!</span>
            </h1>
            <Form />
        </div>

    </section>
  )
}

export default Register