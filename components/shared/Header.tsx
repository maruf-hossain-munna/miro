import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import Button from "./Button";

export default function Header() {
    return (
        <div className="max-w-[1380px] mx-auto xl:px-8 md:px-4 px-4 h-[90px] border-b-[1px] border-b-[#F0F0F0] flex justify-between items-center mb-12">
            <div className="flex items-center gap-5">
                <div>
                    <Image
                        src='/images/logo.png'
                        alt="Miro Logo"
                        width={100}
                        height={40}
                    />
                </div>

                <div className=" hidden lg:flex items-center gap-3">
                    <Link href='' className="text-[#050038] hover:text-sky-blue">
                        <select>
                            <option selected> Product</option>
                            <option > Product2</option>
                            <option > Product3</option>
                            <option > Product4</option>
                        </select>
                    </Link>
                    <Link href='' className="text-[#050038] hover:text-sky-blue">
                        <select>
                            <option selected> Soluations</option>
                            <option > Soluations2</option>
                            <option > Soluations3</option>
                            <option > Soluations4</option>
                        </select>
                    </Link>
                    <Link href='' className="text-[#050038] hover:text-sky-blue">
                        <select>
                            <option selected> Resources</option>
                            <option > Resources2</option>
                            <option > Resources3</option>
                            <option > Resources4</option>
                        </select>
                    </Link>
                    <Link href='' className="text-[#050038] hover:text-sky-blue"> Enterprise </Link>
                    <Link href='' className="text-[#050038] hover:text-sky-blue"> Pricing </Link>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 ">
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[#050038] hover:text-sky-blue">
                        <TbWorld size={24} />
                        <span>EN</span>
                    </div>
                    <Link href='' className="text-[#050038] hover:text-sky-blue">
                        Contact Sales
                    </Link>
                    <Link href='' className="text-[#050038] hover:text-sky-blue">
                        Login
                    </Link>


                </div>
                <Button
                    label="Sign up free →"
                    custom="px-[22px] py-[10px] "
                />
            </div>
        </div>
    )
}
