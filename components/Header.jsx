
import { LocationMarkerIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Disclosure } from '@headlessui/react';
import {useState} from 'react'

const Header = () => {

    const [openNav, setOpenNav] = useState(false)

    return(
        <div className="relative ">

            <div className="md:hidden shadow-lg bg-blue-800 flex justify-center py-2 sticky top-0">
               <div className="">
                    <Image src='/logo.svg' height={30} width={100}/>
                </div> 

                <div className="absolute inset-y-0 left-0 flex items-center ">
               {
                 openNav ? '' : (
                     <button onClick={() =>setOpenNav(true)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />  
                     </button>
                 )  
               }
                
              </div>

            </div>

            

            <div className="z-40 sticky top-0 shadow-lg mt-2 hidden md:block bg-white mx-5 rounded px-2 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <PhoneIcon className="h-8 w-8 text-blue-900 bg-indigo-200 mr-2 rounded-full p-1"/>
                        <div className="">
                            <p className="text-sm font-sembold">08018410663</p>
                            <p className="text-sm font-sembold">08018410663</p>
                        </div>
                    </div>
                       <div className="shadow-lg bg-blue-800 p-1 rounded-lg">
                           <Image src='/logo.svg' height={30} width={100}/>
                       </div> 

                       <div className="flex items-center">
                           
                            <LocationMarkerIcon className="h-8 w-8 text-blue-900 bg-indigo-200 mr-2 rounded-full p-1"/>
                            <div className="">
                                <p className="text-sm font-sembold">32 old yaba road</p>
                                <p className="text-sm font-sembold">lagos NG</p>
                            </div>
                        </div>

                </div>

                <hr className='my-3'/>


                <div className="flex justify-center space-x-4">
                    <Link href='#'>
                        <a href="" className="">Home</a>
                    </Link>

                    <Link href='#'>
                        <a href="" className="">Contact Us</a>
                    </Link>

                    <Link href='#'>
                        <a href="" className="">About Us</a>
                    </Link>

                    <Link href='#'>
                        <a href="" className="">Testimonials</a>
                    </Link>

                    <Link href='#'>
                        <a href="" className="">Blog</a>
                    </Link>
                </div>

            </div>

            <div className="">
            <Carousel autoPlay
                 infiniteLoop 
                    showArrows={true} 
                    showIndicators={true} 
                    showThumbs={false} 
                    showStatus={false}
                    interval={2500}> 
                <div>
                    <img src="/banner1.png" className=' ' />
                </div>
                <div>
                    <img src="/banner2.png" />
                </div>
                <div className=''>
                    <img src="/banner3.png" />
                </div>
            </Carousel> 
            </div>
                {/* {
                    openNav && (
                         <div className="bg-blue-800 w-[50%] h-80 top-10 absolute z-50 transition ease-in-out -left-40 overflow-hidden">
                            <button onClick={() => setOpenNav(false)} className=" absolute right-1 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <XIcon className="block h-6 w-6" aria-hidden="true" />        
                            </button>

                            <div className="flex flex-col pl-10 shadow-lg mt-10 space-y-5   justify-center text-white">
                                    <Link href='#'>
                                        <a href="" className="">Home</a>
                                    </Link>

                                    <Link href='#'>
                                        <a href="" className="">Contact Us</a>
                                    </Link>

                                    <Link href='#'>
                                        <a href="" className="">About Us</a>
                                    </Link>

                                    <Link href='#'>
                                        <a href="" className="">Testimonials</a>
                                    </Link>

                                    <Link href='#'>
                                        <a href="" className="">Blog</a>
                                    </Link>
                                </div>
                        </div>
                    )
                } */}

                        <div className={`bg-blue-800 w-[50%] h-80 top-10 absolute z-50  ease-in-out transition-all  overflow-hidden lg:hidden
                          ${openNav ? 'left-0' : ' -left-80'} `}>
                            <button onClick={() => setOpenNav(false)} className=" absolute right-1 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <XIcon className="block h-6 w-6" aria-hidden="true" />        
                            </button>

                            <div className="flex flex-col pl-10 shadow-lg mt-10 space-y-5   justify-center text-white">
                                    <Link href='#'>
                                        <a href="" className="">Home</a>
                                    </Link>

                                    <Link href='#'>
                                        <a href="" className="">Contact Us</a>
                                    </Link>

                                    <Link href='#'>
                                        <a href="" className="">About Us</a>
                                    </Link>

                                    <Link href='#'>
                                        <a href="" className="">Testimonials</a>
                                    </Link>

                                    <Link href='#'>
                                        <a href="" className="">Blog</a>
                                    </Link>
                                </div>
                        </div>
           

            
            
        </div>
    )
}

export default Header



