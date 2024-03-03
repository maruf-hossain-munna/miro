import Image from "next/image";

export default function TrustedUsers() {
    return (
        <div className="mt-24">
            <p className="text-lg text-dark-gray/60 text-center">
                Trusted by 45M+ users
            </p>

            <div className="flex justify-around items-center mt-8">
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
        </div>
    )
}
