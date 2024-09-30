import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div className='bg-blue-100 -mt-5 -ml-2 -mr-2 h-16'>
        <h1 className='font-sans'>Contact us on:</h1>
        <h2>Email:abc@gmail.com</h2>
        <h2>Phone:12345677</h2>
        <Link href={"/"}> Go back to home page</Link>
        </div>
  )
}

export default Contact