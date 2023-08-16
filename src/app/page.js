import HomeCart from "@/components/Home-Cart";
import HomeCategories from "@/components/Home-Categories";
import PublicHeader from "@/components/Public-Header";
import Image from "next/image";

export default function Home() {
    return (
        <main className="p-0 flex-1 max-h-screen bg-white">
            <div className="flex flex-row mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="basis-64">
                    <HomeCategories />
                </div>
                <div className="basis-7/12 border-r border-rsq-500">Centro</div>
                <div className="basis-3/12">
                    <HomeCart />
                </div>
            </div>
        </main>
    );
}
