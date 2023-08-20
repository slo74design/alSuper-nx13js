import CatsList from "@/components/Cats-List";
import CatsSearchOnList from "@/components/Cats-SearchOnList";
import HomeCart from "@/components/Home-Cart";
import prisma from "@/lib/prisma";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export default async function Page({ params }) {
    let prodList = await prisma.products.findMany({
        where: {
            idFamily: Number(params.id),
        },
        orderBy: {
            title: "asc",
        },
    });
    return (
        <main className="p-0 flex-1 max-h-screen bg-white">
            <div className="grid grid-cols-7 mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
                <div className="col-span-5">
                    <CatsSearchOnList prodsSelected={prodList} />
                </div>
                <div className="col-span-2">
                    <HomeCart />
                </div>
            </div>
        </main>
    );
}
