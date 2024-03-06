import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TrustedUsers() {
    return (
        <div className="mt-24">
            <p className="text-lg text-dark-gray/60 text-center">
                Trusted by 45M+ users
            </p>

            <Marquee speed={70}>
                <div className="flex justify-between items-center gap-6 md:gap-12 lg:gap-20 mt-8 mr-20 lg:mr-0">
                    <Image
                        src='/images/walmart.png'
                        alt="Walmart logo"
                        width={118}
                        height={64}
                    />
                    <Image
                        src='/images/cisco.png'
                        alt="Walmart logo"
                        width={224}
                        height={64}
                    />
                    <Image
                        src='/images/volvo.png'
                        alt="Walmart logo"
                        width={54}
                        height={64}
                    />
                    <Image
                        src='/images/deloitte.png'
                        alt="Walmart logo"
                        width={224}
                        height={64}
                    />
                    <Image
                        src='/images/okta.png'
                        alt="Walmart logo"
                        width={73}
                        height={64}
                    />
                </div>
            </Marquee>
        </div>
    )
}
