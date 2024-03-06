import Image from 'next/image'
import React from 'react'
import { IoIosCheckmark } from "react-icons/io";

const UxDesign = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-10  mt-6">
            <div className="w-full md:w-[35%] mt-8 pr-0 lg:pr-24" >
                <ul className='flex flex-col gap-2 mb-8'>
                    <li className='flex items-center gap-2'>
                        <IoIosCheckmark size={28} />
                        <span className='text-base-black/60 text-lg'>Build low-fi wireframes</span>
                    </li>
                    <li className='flex items-start gap-2'>
                        <IoIosCheckmark size={28} className=''/>
                        <span className='text-base-black/60 text-lg'>Involve stakeholders in the design process</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <IoIosCheckmark size={28} />
                        <span className='text-base-black/60 text-lg'>Run engaging design workshops</span>
                    </li>
                </ul>

                <p className="text-sky-blue text-lg">
                    Learn more →
                </p>

                <div className='mt-14'>
                    <p className='text-base-black/60 text-lg' >
                        Integrate your favorite tools
                    </p>

                    <div className='flex items-center gap-10 mt-4'>
                        <Image 
                            src='/images/gem.png'
                            alt='gem icon'
                            width={27}
                            height={27}
                        />
                        <Image 
                            src='/images/xd.png'
                            alt='xd icon'
                            width={27}
                            height={27}
                        />
                        <Image 
                            src='/images/figma.png'
                            alt='figma icon'
                            width={27}
                            height={27}
                        />
                        <Image 
                            src='/images/nextjs.png'
                            alt='nextjs icon'
                            width={27}
                            height={27}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[65%]">

                <Image
                    src='/images/uiux.png'
                    alt="Brainstroming"
                    width={700}
                    height={512}
                    className="w-full"
                />
            </div>
        </div>
    )
}

export default UxDesign