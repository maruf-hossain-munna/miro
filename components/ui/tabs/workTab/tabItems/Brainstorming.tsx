import Image from "next/image"


const Brainstorming = () => {
    return (
        <div className="flex justify-between">
            <div className="w-full md:w-[35%] pr-16" >
                <h2 className="text-base-black text-lg font-medium ">
                    Brainstroming
                </h2>
                <p className="text-lg text-base-black/70 ">
                    Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.
                </p>

                <p className="text-sky-blue text-lg">
                    Learn more →
                </p>
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
