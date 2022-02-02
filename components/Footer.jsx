import { ChatIcon, MailIcon, PhoneIncomingIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"


const Footer = () => {

    return (
        <div className="gap-5 space-y-10 py-10 relative bottom-0 bg-black text-white px-10 lg:flex justify-around">
            <div className=" lg:w-[30%]">
                <h2 className="text-white text-xl font-bold">Contact Us</h2>
                <p className="">Send us a massage</p>
                <div className="flex flex-col space-y-4 mt-3">
                    <input type="text" placeholder="Name" className=" outline-none pl-2 py-1 rounded text-black placeholder:text-black"/>
                    <input type="text"  placeholder="Phone number" className=" outline-none pl-2 py-1 rounded text-black placeholder:text-black"/>
                    <textarea name="" id="" cols="10" rows="5" placeholder="type you massage ....." className="text-black placeholder:text-black outline-none pl-2 py-1 rounded"></textarea>
                    <button className="flex items-center justify-center gap-3 bg-blue-800 rounded py-2 font-bold hover:bg-blue-700 ">Send <ChatIcon className="h-5 w-5" /></button>
                </div>
                 
            </div>

            <div className="">
            <h2 className="text-white text-xl font-bold">Pagies</h2>
            <p className="">Our different pagies</p>
                <div className="pl-5 flex flex-col ">
                    <Link href='#'>
                        <a href="">Home</a>
                    </Link>
                    <Link href='#'>
                        <a href="">About us</a>
                    </Link>
                    <Link href='#'>
                        <a href="">Contact us</a>
                    </Link>
                    <Link href='#'>
                        <a href="">Testimonials</a>
                    </Link>
                    <Link href='#'>
                        <a href="">Blogs</a>
                    </Link>
                </div>

            </div>

            <div className="space-y-4">
                <div className="shadow-lg bg-blue-800 flex items-center p-5 rounded-lg">
                    <Image src='/logo.svg' height={30} width={100}/>
                </div>
                <p className="flex text-sm gap-5 ml-4"> <PhoneIncomingIcon className="h-5 w-5"/> 07018410663</p>
                <p className="flex gap-5 text-sm ml-4"> <MailIcon className="h-5 w-5"/> wisdomUzodimna@gmail.com</p> 
 
            </div>
        </div>
    )
}

export default Footer