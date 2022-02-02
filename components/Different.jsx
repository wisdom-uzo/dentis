import Image from "next/image"


const Different = () => {


    return (
        <div className="mt-5 py-5 ">
            <div className="text-center mb-4">
                <h2 className="font-bold text-[20px] lg:text-[30px] text-blue-800 ">What makes us different</h2>
                <div className="h-[2px] w-20 bg-blue-800 mx-auto"></div>
            </div>

            <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-5 lg:items-start">
                <div className="relative w-[305px] h-[305px] lg:h-[400px] lg:w-[400px]">
                    <Image src='/diff.jpg' alt="" layout='fill' />
                </div>
                <div className="lg:w-96 text-justify space-y-3 px-5 mb-5 lg:mb-0">
                    <p className="">We understand that every person is unique and every patient is different, that&apos;s what makes us different.</p>
                    <p>We&apos;ve made it our Purpose to provide the best individualised specialist care for every patient and our aim is to help people feel better and recover faster.</p>
                    <p className="">Our leading experts provide award winning, innovative, personalised medicine; specialising in dental health.</p>
                    <p className="">Working together as a multidisciplinary team, our Doctors are committed and passionate about patient health and wellbeing, supporting them through treatment, rehabilitation and recovery. </p>
                    <p> Welcome to Smileplug Clinic, giving you access to world-class experts and care, when you need it most.</p>
                    
                </div>
            </div>


            {/* <div className="pb-10 flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-6 lg:px-20">
                <div className="flex flex-col items-center justify-center text-center px-5">
                    <div className="">
                        <h1 className="font-bold text-blue-800 text-lg">Flexable</h1>
                    </div>
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, voluptate!
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center px-5">
                    <div className="">
                        <h1 className="font-bold text-blue-800 text-lg">Flexable</h1>
                    </div>
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, voluptate!
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center px-5">
                    <div className="">
                        <h1 className="font-bold text-blue-800 text-lg">Flexable</h1>
                    </div>
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, voluptate!
                    </p>
                </div>
            </div> */}

        </div>
    )
}

export default Different 