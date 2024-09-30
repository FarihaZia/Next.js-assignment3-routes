'use client'
import { useRouter } from "next/navigation"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

export default function Home(){
  const route= useRouter()
  return(
  
    <div className="text-center ">
      <Navbar/>
      <h1>Homepage</h1>
      <button className="bg-zinc-400 cursor-pointer" onClick={()=>route.push('/About')}>About</button>
      <button className="bg-zinc-400 cursor-pointer" onClick={()=>route.push('/Contact')}>Contact</button>
      <Footer/>
      </div>
  )
};