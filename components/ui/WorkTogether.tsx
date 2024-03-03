import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function WorkTogether() {
    return (
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-0 lg:gap-12">
            <div className="w-full md:w-[45%] pr-0 lg:pr-10">
                <h3 className="text-base-black text-[35px] lg:text-[48px] font-bold leading-tight">
                    Work together, wherever you work
                </h3>
                <p className="text-dark-gray/75 text-[13px] lg:text-lg my-4">
                    In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                </p>

                <Link href='' className="text-sky-blue flex items-center gap-1 mt-5">
                    <span className="border-b-[1px] border-b-sky-blue">Learn More</span>
                    <IoIosArrowRoundForward size={24} />
                </Link>
            </div>

            <div className="w-full md:w-[50%] flex justify-normal md:justify-end">
                <Image
                    src='/images/hybridwork.png'
                    alt="Hybrid work"
                    width={550}
                    height={534}
                />
            </div>
        </div>
    )
}
