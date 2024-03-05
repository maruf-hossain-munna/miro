import Image from "next/image";
import Container from "../shared/Container";
import Button from "../shared/Button";
import { IoMdStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import Link from "next/link";


export default function HeroArea() {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12">
            <div className="w-full md:w-[40%]">
                <h3 className="text-base-black text-[35px] lg:text-[48px] font-bold leading-tight">
                    Take ideas from better to best
                </h3>
                <p className="text-dark-gray/75 text-[13px] lg:text-lg my-4">
                    Miro is your team&apos;s visual platform to connect, collaborate, and create — together.
                </p>
                <div>
                    <input
                        type="email"
                        name="" id=""
                        className="outline-none w-full px-5 py-2 rounded-[32px] border border-[#9B99AF] my-3"
                        placeholder="Enter your work email"
                    />
                    <Button
                        label="Sign up free →"
                        custom="w-full text-center py-[10px] "
                    />
                    <p className="text-sm text-dark-gray/40 mt-3">
                        Collaborate with your team within minutes
                    </p>

                    <div className="bg-[#F5F5F7] w-full lg:w-[90%] p-[14px] rounded-[8px] flex flex-col lg:flex-row items-center gap-2 lg:gap-8 mt-7 lg:mt-10">
                        <div>
                            <div className="flex items-center gap-[2px]">
                                <IoMdStar size={22} className="text-[#FF9D48]" />
                                <IoMdStar size={22} className="text-[#FF9D48]" />
                                <IoMdStar size={22} className="text-[#FF9D48]" />
                                <IoMdStar size={22} className="text-[#FF9D48]" />
                                <IoIosStarHalf size={20} className="text-[#FF9D48]" />
                            </div>
                            <p className="text-[11px] text-dark-gray">
                                Based on 5149+ reviews:
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href=''>
                                <Image
                                    src='/images/google.png'
                                    alt="Google logo"
                                    width={20}
                                    height={30}
                                />
                            </Link>

                            <Link href=''>
                                <h4 className="text-[#050038] text-md font-extrabold">GetApp</h4>
                            </Link>

                            <Link href=''>
                                <h4 className="text-[#050038] text-md font-extrabold">Cepterra</h4>
                            </Link>

                            {/* <Link href=''>
                                    <Image
                                        src='/images/getapp.png'
                                        alt="Google logo"
                                        width={60}
                                        height={20}
                                    />
                                </Link>
                                <Link href=''>
                                    <Image
                                        src='/images/capterra.png'
                                        alt="Google logo"
                                        width={66}
                                        height={20}
                                    />
                                </Link> */}

                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full md:w-[60%]">
                <Image
                    src='/images/headerImage.png'
                    alt="Hero area image"
                    width={640}
                    height={462}
                    className="w-full"
                />
            </div>
        </div>
    )
}
