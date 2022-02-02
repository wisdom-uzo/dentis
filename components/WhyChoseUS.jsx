import { DotsCircleHorizontalIcon } from "@heroicons/react/outline"
import Image from "next/image"



const WhyChoseUS = () => {

    return(
        <div className="py-10 flex flex-col justify-center items-center bg-blue-800 text-white px-10 space-y-3">

             <div className="text-center mb-4">
                <h2 className="font-bold text-[20px] lg:text-[30px] text-white ">Why Choose Our Qualified Dentist</h2>
                <div className="h-[2px] w-20 bg-white mx-auto"></div>
            </div>

            <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-5 lg:items-start">
                <div className="relative w-[300px] h-[300px] lg:h-[400px] lg:w-[400px]">
                    <Image src='/why.png' alt="" layout='fill' />
                </div>
                <div className="lg:w-96">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore distinctio, officia consequuntur eos rerum rem alias eius itaque animi!</p>
                            <ul className="space-y-2 pl-10 mt-3">
                                <li className="flex items-center gap-2"> <DotsCircleHorizontalIcon className=" text-yellow-400 h-3 w-3"/> Teeth Whitening</li>
                                <li className="flex items-center gap-2"> <DotsCircleHorizontalIcon className=" text-yellow-400 h-3 w-3"/> Modern Anesthetic</li>
                                <li className="flex items-center gap-2"> <DotsCircleHorizontalIcon className=" text-yellow-400 h-3 w-3"/> Quality Brackets</li>
                                <li className="flex items-center gap-2"> <DotsCircleHorizontalIcon className=" text-yellow-400 h-3 w-3"/> Root Canal</li>
                            </ul>
                </div>
            </div>
            

        </div>
    )
}



export default WhyChoseUS