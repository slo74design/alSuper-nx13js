"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CatsList from "./Cats-List";

const BookmarksList = () => {
    const favsRedux = useSelector((state) => state.favs);
    return (
        <div className="mt-4 px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 p-8">
                {favsRedux._favList.map((product) => (
                    <CatsList key={product.ID} data={product} />
                ))}
            </div>
        </div>
    );
};

export default BookmarksList;
