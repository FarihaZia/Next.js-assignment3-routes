import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div className=' text-center  '>
        <h1 className='text-6xl font-serif font-bold'>About page</h1>
        <Link href={"/"}>Go back to home page</Link>

    </div>
  )
}

export default About