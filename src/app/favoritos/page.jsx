import BookmarksList from "@/components/Bookmarks-List";
import HomeCart from "@/components/Home-Cart";

export default function Page() {
    return (
        <main className="p-0 flex-1 max-h-screen bg-white">
            <div className="grid grid-cols-7 mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
                <div className="col-span-5">
                    <BookmarksList />
                </div>
                <div className="col-span-2">
                    <HomeCart />
                </div>
            </div>
        </main>
    );
}
