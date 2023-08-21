import Image from "next/image";
import prisma from "@/lib/prisma";
import HomeCart from "@/components/Home-Cart";
import HomeCategories from "@/components/Home-Categories";
import HomeList from "@/components/Home-List";
import HomeStats from "@/components/Home-Stats";
import PublicHeader from "@/components/Public-Header";
import { getCatsDistinct } from "@/lib/getCatsDistinct";
import { getProducts } from "@/lib/getProducts";

export default async function Home() {
    const distintCats = await getCatsDistinct();
    const allProds = await getProducts();
    return (
        <main className="p-0 flex-1 max-h-screen bg-white">
            <div className="grid grid-cols-12 mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
                <div className="col-span-12 lg:col-span-3">
                    <HomeCategories distintCats={distintCats} />
                </div>
                <div className="col-span-12 lg:col-span-6 mx-6">
                    {/* <HomeStats /> */}
                    <HomeList dataProds={allProds} />
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <HomeCart />
                </div>
            </div>
        </main>
    );
}
