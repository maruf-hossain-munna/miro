import Image from "next/image";
import Button from "../shared/Button";

export default function Collaborate() {
    return (
        <div className="mt-24">
            <div className="hidden w-[75%] lg:flex justify-end -mb-8">
                <Image
                    src='/images/newidea.png'
                    alt="New idea starts here"
                    width={180}
                    height={54}
                />
            </div>
            <h2 className="w-full md:max-w-[550px] mx-auto text-center text-[35px] md:text-[48px] leading-tight font-bold text-base-black">
                Collaborate without constraints
            </h2>

            <div className="mt-10 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-0 lg:px-[10px]">
                <div>
                    <h4 className="text-base-black text-[24px] font-bold">
                        Free forever
                    </h4>
                    <p className="text-lg text-base-black/60 mt-4">
                        Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our
                        <br /> <span className="text-sky-blue"> pricing plans</span> for more features.
                    </p>
                </div>
                <div>
                    <h4 className="text-base-black text-[24px] font-bold">
                        Easy integrations
                    </h4>
                    <p className="text-lg text-base-black/60 mt-4">
                        Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our
                        <span className="text-sky-blue"> Marketplace</span>.
                    </p>
                </div>
                <div>
                    <h4 className="text-base-black text-[24px] font-bold">
                        Security first
                    </h4>
                    <p className="text-lg text-base-black/60 mt-4">
                        We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more
                        at our
                        <span className="text-sky-blue"> Trust Center </span>.
                    </p>
                </div>
            </div>

            <Button
                label="Sign up free →"
                custom="w-[180px] mx-auto text-center py-[10px] "
            />
        </div>
    )
}
