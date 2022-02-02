import { ClockIcon, PhoneIcon } from "@heroicons/react/outline"



const Appintment = () => {


    return (
        <div className=" pb-10 relative lg:px-40  bg-gray-100 flex flex-col items-center lg:flex-row space-x-4">

            <div className="shadow-lg flex-shrink-0 w-[90%] lg:w-[20%]  mt-5 pb-3 bg-white mb-auto lg:bg-transparent lg:shadow-none">
                <h4 className="appintment-heading flex gap-2 items-center">
                   <ClockIcon className="h-5 w-5 from-neutral-800" />  OPENING HOURS
                </h4>
                <hr />
                <div className=" space-y-2 px-10 lg:px-2 mt-2 ">
                    <div className="flex justify-between">
                        <p className="font-bold text-sm">Monday</p>
                        <p className="">9:00am - 4:00pm</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-sm">Tuesday</p>
                        <p className="">9:00am - 4:00pm</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-bold text-sm">Tuesday</p>
                        <p className="">9:00am - 4:00pm</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-bold text-sm">Tuesday</p>
                        <p className="">9:00am - 4:00pm</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-bold text-sm">Tuesday</p>
                        <p className="">9:00am - 4:00pm</p>
                    </div>
                </div>
                
            </div>


            <div className="shadow-lg w-[90%] mx-auto mt-5 pb-3 bg-white lg:bg-transparent lg:shadow-none rounded pt-2">
                <h4 className="appintment-heading lg:text-center flex gap-2 items-center">
                   <ClockIcon className="h-5 w-5 from-neutral-800" />  Book An Appointment
                </h4>
                <hr />
                <div className=" px-10 mt-2 space-y-3 lg:px-2">
                    <div className=" flex flex-col lg:flex-row items-center justify-center gap-3">
                        <input type="text"  className="border-blue-500 border-2 outline-none pl-2 w-full py-1 rounded placeholder:text-black" 
                        placeholder="Name"/>
                          <input type="tel"  className="border-blue-500 border-2 outline-none pl-2 w-full py-1 rounded placeholder:text-black" 
                        placeholder="Phone"/>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                        <input type="email"  className="border-blue-500 border-2 outline-none pl-2 w-full py-1 rounded placeholder:text-black" 
                        placeholder="Email"/>

                        <input type="Email"  className="border-blue-500 border-2 outline-none pl-2 w-full py-1 rounded placeholder:text-black" 
                        placeholder="Phone"/>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                        <input type="date"  className="border-blue-500 border-2 outline-none pl-2 w-full py-1 rounded placeholder:text-black" 
                        placeholder="Date"/>

                        <input type="text"  className="border-blue-500 border-2 outline-none pl-2 w-full py-1 rounded placeholder:text-black" 
                        placeholder="Time"/>
                    </div>

                    <button  className="text-white shadow-sm hover:bg-blue-700 w-full bg-blue-600 py-1 rounded">
                        Book Now
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Appintment