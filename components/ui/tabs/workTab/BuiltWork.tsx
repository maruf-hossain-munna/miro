'use client';

import { Tab, workTabItems } from "@/libs/fakeData/fakeData";
import DisplayWorkTab from "./DisplayWorkTab";
import React, { useEffect, useRef, useState } from "react";


interface TabsListProps {
    item: Tab[];
}

const BuiltWork: React.FC<TabsListProps> = ({ item }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const workItems = workTabItems;
    const firstBtnRef = React.useRef<HTMLButtonElement>(null);

    useEffect(() => {
        firstBtnRef.current?.focus();
    }, []);

    return (
        <div className="my-24">
            <h3 className="text-base-black text-[35px] lg:text-[48px] font-bold leading-tight">
                Built for the way you work
            </h3>

            <div className="mt-12 flex justify-between items-center">
                {
                    workItems.map((item, index) => (
                        <button
                            key={item.id}
                            ref={item.id === 1 ? firstBtnRef : null}
                            onClick={() => setSelectedTab(item.id)}
                            className="px-5 py-3 outline-none text-sm text-base-black border border-[#F2F2F2] rounded-[24px] bg-transparent hover:bg-[#F2F2F2] focus:bg-[#F2F2F2] focus:border-[#F2F2F2] focus:font-medium"
                        >
                            {item.title}
                        </button>
                    ))
                }
            </div>
            <div >
                {
                    workItems.map((item, selectedTab) => (
                        // <DisplayWorkTab
                        //     key={item.id}
                        //     item={item}
                        //     selectedTab={selectedTab}
                        // />
                        <div
                            key={item.id}
                            className={`${selectedTab === item.id ? '' : 'hidden'}`}
                        >
                            {item.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BuiltWork