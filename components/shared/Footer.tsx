import Link from "next/link";
import Container from "./Container";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaSquareFacebook, FaSquareTwitter, FaSquareYoutube } from "react-icons/fa6";


export default function Footer() {
    return (
        <div className="bg-dark-purple py-16 lg:py-24">
            <Container>
                <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-16">
                    <div className="w-full lg:w-[35%]">
                        <h4 className=" text-white text-[23px] font-extrabold">Scan. Detect. Remove.</h4>
                        <div className="mt-8 flex items-center gap-8">
                            <FaSquareTwitter size={36} className="text-white" />
                            <FaSquareFacebook size={36} className="text-white" />
                            <FaSquareYoutube size={36} className="text-white" />
                        </div>
                        <div className="mt-8 flex items-center gap-6">
                            <Link href='/' className="underline text-white/70 text-[11px]">
                                Privacy policy
                            </Link>
                            <Link href='/' className="underline text-white/70 text-[11px]">
                                Privacy policy
                            </Link>
                        </div>

                        <div className="mt-8 text-[11px] text-white/70">
                            <p>
                                Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356
                            </p>
                            <p className="mt-4">
                                Designed & developed by <Link href='' className="underline"> Bigger picture</Link>
                            </p>

                        </div>
                    </div>

                    <div className="w-full lg:w-[20%] hidden lg:block text-white">
                        <h4 className="text-[35px] font-extrabold">
                            Miro.
                        </h4>
                        <hr className="border-x-2 border-white mt-3" />

                        <ul className="flex flex-col gap-3 mt-10">
                            <li className="text-[19px] text-light-orrange flex items-center gap-2">
                                <MdOutlineHorizontalRule size={32} /> iPhone
                            </li>
                            <li className="text-[19px] text-light-orrange flex items-center gap-2">
                                <MdOutlineHorizontalRule size={32} /> Android
                            </li>
                            <li className="text-[19px] text-light-orrange flex items-center gap-2">
                                <MdOutlineHorizontalRule size={32} /> Help
                            </li>
                            <li className="text-[19px] text-light-orrange flex items-center gap-2">
                                <MdOutlineHorizontalRule size={32} /> About
                            </li>
                            <li className="text-[19px] text-light-orrange flex items-center gap-2">
                                <MdOutlineHorizontalRule size={32} /> Insights
                            </li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-[45%]">
                        <div className="bg-light-orrange p-2 rounded-3xl w-full md:max-w-[450px] mx-auto">
                            <div className="bg-[url('/images/newsletter-bg.png')] p-4 bg-no-repeat bg-cover z-30">
                                <h3 className="text-[#02033B] text-[23px] font-extrabold">Sign up to our newsletter</h3>
                                <p className="text-[#02033B] text-[15px] mt-5">
                                    Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!
                                </p>
                                <div className=" mt-8 mb-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id=""
                                        className="outline-none rounded-l-[21px] px-4 py-2 w-[75%]"
                                        placeholder="Email Address"
                                    />
                                    <button type="submit" className="bg-dark-purple text-white w-[25%] py-2 rounded-r-[21px] ">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 lg:mt-16 w-full  lg:w-[48%] text-[12px] text-white/70">
                    <p>
                        Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
                    </p>
                </div>
            </Container>
        </div>
    )
}
