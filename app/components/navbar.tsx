import Link from "next/link"

 function Navbar(){
    return(
        <nav className="bg-black h-14 -mt-2 -ml-2 -mr-2 " >
           <div className="text-white flex justify-between items-center">
            <h1 className="m-3 text-xl">My Web</h1>
            <div className="flex gap-4 justify-between mr-8 cursor-pointer">
                <p><Link href={"/"}>Home</Link></p>
                <p><Link href={"/About"}>About</Link></p>
                <p><Link href={"/Contact"}>Contact</Link></p>
            </div>
            </div> 
        </nav>
    )
 };
 export default Navbar