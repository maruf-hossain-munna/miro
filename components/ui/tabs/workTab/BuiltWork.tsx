'use client';

import React, { useEffect, useRef, useState } from "react";
import Brainstorming from "../tabItems/Brainstorming";


const BuiltWork = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (id: number) => {
        setToggleState(id)
    }

    const firstBtn = React.useRef<HTMLButtonElement>(null);

    useEffect(() => {
        firstBtn.current?.focus();
    }, [])

    const tabs = "px-3 lg:px-5 py-3 outline-none text-[11px] lg:text-sm text-base-black border border-[#F2F2F2] rounded-[24px]  hover:bg-[#F2F2F2] focus:bg-[#F2F2F2] focus:border-[#F2F2F2] focus:font-medium";

    return (
        <div className="mt-24 overflow-hidden">
            <h3 className="text-base-black text-[35px] lg:text-[48px] font-bold leading-tight">
                Built for the way you work
            </h3>

            <div className="mt-6">
                {/* tabs button */}
                <div className="flex justify-between">
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(1)}
                        ref={toggleState === 1 ? firstBtn : null}
                    >
                        Brainstorming
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(2)}
                    >
                        Diagramming
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(3)}
                    >
                        Meetings & Workshops
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(4)}
                    >
                        Scrum Events
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(5)}
                    >
                        Mapping
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(6)}
                    >
                        Research & Design
                    </button>
                    <button
                        className={`${tabs}`}
                        onClick={() => toggleTab(7)}
                    >
                        Strategic Planning
                    </button>
                </div>

                {/* tabs content */}
                <div>
                    <div className={toggleState === 1 ? 'block' : 'hidden'}>
                        <Brainstorming />
                    </div>
                    <div className={toggleState === 2 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Diagramming section is loading...
                        </h3>
                    </div>
                    <div className={toggleState === 3 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Meetings & Workshops section is loading...
                        </h3>
                    </div>
                    <div className={toggleState === 4 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Scrum Events section is loading...
                        </h3>
                    </div>
                    <div className={toggleState === 5 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Mapping section is loading...
                        </h3>
                    </div>
                    <div className={toggleState === 6 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Research & Design section is loading...
                        </h3>
                    </div>
                    <div className={toggleState === 7 ? 'block' : 'hidden'}>
                        <h3 className="text-3xl text-center font-bold mt-12 text-base-black">
                            This Strategic Planning section is loading...
                        </h3>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BuiltWork