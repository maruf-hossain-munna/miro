import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function ConnectTools() {
    return (
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-7">
            <div className="w-full md:w-[50%] ">
                <Image
                    src='/images/laptop.png'
                    alt="Hybrid work"
                    width={550}
                    height={500}
                    className="w-full"
                />
            </div>

            <div className="w-full md:w-[50%] pl-0 md:pl-10 lg:pl-24">
                <h3 className="max-w-[380px] text-base-black text-[35px] lg:text-[48px] font-bold leading-tight">
                    Connect <br /> your tools, <br /> close your tabs
                </h3>
                <p className="text-dark-gray/75 text-[13px] lg:text-lg my-4">
                    Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.
                </p>
                <Link href='' className="text-sky-blue flex items-center gap-1 mt-5">
                    <span className="border-b-[1px] border-b-sky-blue">Learn More</span>
                    <IoIosArrowRoundForward size={24} />
                </Link>
            </div>
        </div>
    )
}
