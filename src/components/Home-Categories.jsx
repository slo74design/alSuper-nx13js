"use client";

import jsonFinal from "@/lib/products";
import {
    ArrowRightIcon,
    EnvelopeIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const catPruebas = [
    "Cat 1",
    "Cat 2",
    "Cat 3",
    "Cat 4",
    "Cat 5",
    "Cat 6",
    "Cat 7",
    "Cat 8",
    "Cat 9",
    "Cat 10",
    "Cat 11",
    "Cat 12",
    "Cat 13",
    "Cat 14",
    "Cat 15",
    "Cat 16",
];

const HomeCategories = () => {
    const cats = [...new Set(jsonFinal.map((item) => item.family))];
    const listCatsSorted = cats.sort();

    return (
        <div className="pb-5 z-1 h-[calc(100vh-150px)] w-full">
            <div className="mt-4">
                <div className="relative mt-2 rounded-md w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full border-slate-100 border-b py-1.5 pl-10 text-rsq-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-0"
                    />
                </div>
            </div>

            <div className="overflow-y-scroll h-[calc(100vh-200px)]">
                <ul role="list" className="divide-y divide-slate-100">
                    {listCatsSorted.map((cat, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-start py-2 px-3"
                        >
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-light leading-6 text-rsq-100">
                                        {cat}
                                    </p>
                                </div>
                            </div>
                            {/* <ArrowRightIcon className="w-4 h-4" /> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HomeCategories;
