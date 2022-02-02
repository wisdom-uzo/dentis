import Image from "next/image"



const Services = () => {

    return (
        <div className="mt-10 px-5 py-5 bg-white">
            <div className="text-center mb-4">
                <h2 className="font-bold text-[20px] lg:text-[30px] text-blue-800 ">OUR SERVICES</h2>
                <div className="h-[2px] w-20 bg-blue-800 mx-auto"></div>
            </div>

            <div className="space-y-5 lg:flex items-center justify-between space-x-2">
                <div className="text-center bg-white shadow-lg rounded flex-grow scale-95 hover:scale-100 transition ease-in-out">
                     <div className=" w-[100%] relative h-[30vh] ">
                        <Image layout="fill" src="/res.jfif" alt="Restorative filling" />
                    </div>
                  <p className="py-2 pl-7 text-lg font-bold text-blue-800">Restorative filling</p>
                  <p className="pb-3 px-3 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quis aliquam similique quidem cumque optio.</p>

                </div>

                <div className="text-center bg-white shadow-lg rounded flex-grow scale-95 hover:scale-100 transition ease-in-out">
                    <div className=" w-[100%] relative h-[30vh]">
                        <Image layout="fill" src="/sp.jfif" alt="scaling and polishing" />
                    </div>
                  <p className="py-2 pl-7 text-lg font-bold text-blue-800">Scaling and polishing</p>
                  <p className="pb-3 px-3 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quis aliquam similique quidem cumque optio.</p>

                </div>

                <div className=" bg-white shadow-lg rounded flex-grow scale-95 hover:scale-100 transition ease-in-out">
                    <div className=" w-[100%] relative h-[30vh]">
                        <Image layout="fill" src="/dense.jpg" alt="densensitisation" />
                    </div>
                  <p className="py-2 pl-7 text-lg font-bold text-blue-800">Densensitisation</p>
                  <p className="pb-3 px-3 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quis aliquam similique quidem cumque optio.</p>

                </div>
                <div className=" bg-white shadow-lg rounded  flex-grow scale-95 hover:scale-100 transition ease-in-out">
                    <div className=" w-[100%] relative h-[30vh]">
                        <Image layout="fill" src="/flu.jfif" alt="fluoride therapy" />
                    </div>
                  <p className="py-2 pl-7 text-lg font-bold text-blue-800">Fluoride therapy</p>
                  <p className="pb-3 px-3 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quis aliquam similique quidem cumque optio.</p>
                </div>
            </div>


            
            
        </div>
    )
}


export default Services