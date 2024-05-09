"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import errorLogo from "@/public/error.svg"
import { redirect, useRouter } from 'next/navigation'

const Form = () => {
    const router = useRouter();
    // State for storing data entered to the form.
    const[data, setData] = useState({
        name:"",
        email:""
    })
    const[error, setError] = useState(false)

    // Function for handling the input change and also
    // validating data as it's being typed.
    function handleChange(e){
        setData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    
    // Fuction for handling submit options.
    function handleSubmit(e) {
        e.preventDefault()
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if(data.email && data.email.match(isValidEmail)){
            setError(false)
            // redirect("/success")
            router.push("/success")
        }
        else{
            setError(true)
        }
    }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-14'>
        <div className='flex flex-col gap-7'>
            <input 
                type='text' 
                placeholder='Enter your name'
                className='text-2xl placeholder:text-[#827A7A] border-solid border-black/2 rounded-full border-[1px] px-10 py-7 w-[26vw] bg-[#EFEFEF]'
                onChange={(e) => handleChange(e)}
                value={data.name}
                name='name'
            />
            <input 
                type='email' 
                placeholder='Enter your email'
                className='text-2xl placeholder:text-[#827A7A] border-solid border-black/2 rounded-full border-[1px] px-10 py-7 w-[26vw] bg-[#EFEFEF]'
                onChange={(e) => handleChange(e)}
                value={data.email}
                name='email'
            />
            {error && <p className='flex gap-2 items-center text-[#FF0808]'><span><Image src={errorLogo}/></span><span>Enter a valid email address</span></p>}
        </div>
        <button 
            className='text-xl bg-black text-white px-10 py-8 w-[26vw] rounded-full disabled:bg-[#C9C9C9]'
            disabled={data.name == "" || data.email == ""? true : false}
        >
            Submit
        </button>
        
    </form>
  )
}

export default Form