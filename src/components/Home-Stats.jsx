"use client";
import React from "react";
const stats = [
    { name: "Mis Listas", value: "3" },
    { name: "Productos por lista", value: "10" },
    { name: "Gasto promedio", value: "45,50€" },
];

const HomeStats = () => {
    return (
        <div className="mt-4">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-px divide-x-2 divide-white sm:grid-cols-1 lg:grid-cols-3 rounded-xl bg-[#eee5e9] ">
                    {stats.map((stat) => (
                        <div key={stat.name} className="p-4 sm:px-6 lg:px-8">
                            <p className="mt-0 flex items-baseline justify-center">
                                <span className="text-xl font-semibold tracking-tight text-merca-100">
                                    {stat.value}
                                </span>
                            </p>
                            <p className="text-xs font-normal text-center leading-6 text-slate-500">
                                {stat.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeStats;
