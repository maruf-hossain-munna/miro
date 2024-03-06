import Image from "next/image"
import Link from "next/link"


const Brainstorming = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-10  mt-6">
            <div className="w-full md:w-[35%] pr-0 lg:pr-16 mt-4" >
                <h2 className="text-base-black text-lg font-medium ">
                    Brainstroming
                </h2>
                <p className="text-lg text-base-black/70 my-8">
                    Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.
                </p>

                <Link href=''>
                    <p className="text-sky-blue text-lg">
                        Learn more →
                    </p>
                </Link>
            </div>

            <div className="w-full md:w-[65%]">

                <Image
                    src='/images/brainstorming.png'
                    alt="Brainstroming"
                    width={700}
                    height={512}
                    className="w-full"
                />
            </div>
        </div>
    )
}

export default Brainstorming
