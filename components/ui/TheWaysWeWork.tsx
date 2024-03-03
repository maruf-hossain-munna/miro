import Button from "../shared/Button";

export default function TheWaysWeWork() {
    return (
        <div className="mt-16 bg-[url('/images/bg-ways.png')] min-h-[500px] bg-cover flex justify-center md:justify-end items-center">
            <div className="text-center w-full md:w-[50%] float-right mt-10">
                <h3 className="text-base-black text-[22px] lg:text-[22px] font-bold leading-tight">
                    The Ways We Work
                </h3>
                <p className="text-base-black text-lg mt-2 mb-1">
                    How has our relationship with work changed?
                </p>
                <Button
                    label="View the report →"
                    custom="w-[190px] mx-auto text-center py-[10px] "
                />
            </div>
        </div>
    )
}
