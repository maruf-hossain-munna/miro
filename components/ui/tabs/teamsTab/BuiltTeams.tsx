'use client';

import React, { useEffect, useState } from "react";
import Brainstorming from "../tabItems/Brainstorming";
import UxDesign from "../tabItems/UxDesign";

const BuiltTeams = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (id: number) => {
        setToggleState(id)
    }

    const firstBtnRef = React.useRef<HTMLButtonElement>(null);

    useEffect(() => {
        firstBtnRef.current?.focus();
    }, [])

    const tabs = "px-3 lg:px-5 py-3 outline-none text-[11px] lg:text-sm text-base-black border border-[#F2F2F2] rounded-[24px]  hover:bg-[#F2F2F2] focus:bg-[#F2F2F2] focus:border-[#F2F2F2] focus:font-medium";

    return (
        <div className="mt-24 overflow-auto">
            <h3 className="text-base-black text-[35px] lg:text-[48px] font-bold leading-tight">
                Built for all kinds of teams
            </h3>

            <div className="mt-6">
                {/* tabs button */}
                <div className="flex justify-between">
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(1)}
                        ref={toggleState === 1 ? firstBtnRef : null}
                    >
                        UX & Design
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(2)}
                    >
                        Marketing
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(3)}
                    >
                        Product Management
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(4)}
                    >
                        Engineering
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(5)}
                    >
                        Consultants
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(6)}
                    >
                        Agile Coaches
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(7)}
                    >
                        Sales
                    </button>
                </div>

                {/* tabs content */}
                <div>
                    <div className={toggleState === 1 ? 'block' : 'hidden'}>
                        <UxDesign />
                    </div>
                    <div className={toggleState === 2 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Marketing section is loading...
                        </h3>
                    </div>
                    <div className={toggleState === 3 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Product Management section is loading...
                        </h3>
                    </div>
                    <div className={toggleState === 4 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Engineering section is loading...
                        </h3>
                    </div>
                    <div className={toggleState === 5 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Consultants section is loading...
                        </h3>
                    </div>
                    <div className={toggleState === 6 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Agile Coaches section is loading...
                        </h3>
                    </div>
                    <div className={toggleState === 7 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This sales section is loading...
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuiltTeams