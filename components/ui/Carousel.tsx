'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Carousel = () => {
    const teams = [
        {
            id: 1,
            companyName: 'vmware',
            logo: '/images/vmware.png',
            comment: '“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”',
            name: 'Roxanne Mustafa',
            title: 'Design Team Lead at VMware',
            profileImg: '/images/profile1.png'
        },
        {
            id: 2,
            companyName: 'docusign',
            logo: '/images/docusign.png',
            comment: '“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”',
            name: 'Jane Ashley',
            title: 'Head of Design at DocuSign',
            profileImg: '/images/profile2.png'
        },
        {
            id: 3,
            companyName: 'frog',
            logo: '/images/frog.png',
            comment: '“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”',
            name: 'Roxanne Mustafa',
            title: 'Design Team Lead at VMware',
            profileImg: '/images/profile3.png'
        },
        {
            id: 4,
            companyName: 'nothing',
            logo: '/images/vmware.png',
            comment: '“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”',
            name: 'Maruf Hossain',
            title: 'Design Team Lead at VMware',
            profileImg: '/images/maruf.jpg'
        },
        {
            id: 5,
            companyName: 'vmware',
            logo: '/images/vmware.png',
            comment: '“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”',
            name: 'Roxanne Mustafa',
            title: 'Design Team Lead at VMware',
            profileImg: '/images/profile1.png'
        },
        {
            id: 6,
            companyName: 'vmware',
            logo: '/images/vmware.png',
            comment: '“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”',
            name: 'Roxanne Mustafa',
            title: 'Design Team Lead at VMware',
            profileImg: '/images/profile1.png'
        },
    ]

    const [currentSlider, setCurrentSlider] = useState(0);
    // button handler
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? teams.length - 5 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === teams.length -5 ? 0 : currentSlider + 1));


    // const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className="max-w-full pt-16 mx-auto flex flex-row items-center overflow-hidden ">
            <div className="relative overflow-hidden">
                {/* slider arrow button area */}
                <div className="absolute w-full h-full flex items-end justify-center gap-6 z-50 bottom-0 mb-4">
                    {/* arrow left */}
                    <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30  rounded-full w-10 h-10">
                        
                        <FaArrowLeft size={30} />
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 hover:border-2 border-base-black focus:border-2 rounded-full w-10 h-10 ">

                        <FaArrowRight
                            size={30}
                            className=""
                        />
                    </button>
                </div>
                {/* slider container */}
                <div
                    className="ease-linear duration-300 flex mb-20 "
                    style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                    {/* style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 33)}%)` }}> */}
                    {/* sliders */}
                    {teams.map((team) => (
                        <div key={team.id} className=" min-w-full md:min-w-[50%] lg:min-w-[33%]">
                            <div className="h-full px-4 py-8 rounded">
                                <Image
                                    src={team.logo}
                                    alt={team.companyName}
                                    width={250}
                                    height={100}
                                    className=""
                                />
                                <p className="leading-relaxed my-10 text-base-black/60">{team?.comment}</p>
                                <div className="inline-flex items-center bottom-2">
                                    <Image
                                        src={team.profileImg}
                                        alt={team.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />

                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="text-sm text-base-black/60">{team.name}</span>
                                        <span className="text-base-black/60 text-sm">{team?.title}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};
export default Carousel;
