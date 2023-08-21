"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { PlusCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import { toggleFav } from "@/features/bookmarks";

const HomeCardList = ({ data }) => {
    const dispatch = useDispatch();
    const cartRedux = useSelector((state) => state.carts);
    const favsRedux = useSelector((state) => state.favs);

    const handleAddCart = (prod) => {
        const {
            ID,
            title,
            subtitle,
            imgURL,
            price,
            idFamily,
            family,
            idCat,
            catTitle,
        } = prod;
        dispatch(
            addToCart({
                ID,
                title,
                subtitle,
                imgURL,
                price,
            })
        );
    };
    const handleBookmark = (prod) => {
        const {
            ID,
            title,
            subtitle,
            imgURL,
            price,
            idFamily,
            family,
            idCat,
            catTitle,
        } = prod;
        dispatch(
            toggleFav({
                ID,
                title,
                subtitle,
                imgURL,
                price,
                idFamily,
                family,
                idCat,
                catTitle,
            })
        );
    };
    return (
        <div className="group relative p-4 border flex flex-col place-content-between">
            {/* <div>
                <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <Image
                        src={data.imgURL}
                        width={150}
                        height={150}
                        className="w-full h-48 object-cover"
                        alt={data.title}
                        priority
                    />
                </div>
            </div> */}
            <div className="flex flex-col mt-3">
                <h3 className="mt-4 text-sm text-gray-700">{data.title}</h3>
                <div className="flex flex-row justify-between items-center">
                    <p className="mt-1 text-sm font-medium text-gray-900">
                        {data.price}
                    </p>
                    <div className="flex flex-row gap-x-2">
                        <button onClick={() => handleBookmark(data)}>
                            {favsRedux._favList.filter((e) => e.ID === data.ID)
                                .length > 0 ? (
                                <AiFillStar className="w-6 h-6 text-amber-500" />
                            ) : (
                                <AiOutlineStar className="w-6 h-6 text-amber-200" />
                            )}
                        </button>
                        <button onClick={() => handleAddCart(data)}>
                            <PlusCircleIcon className="w-6 h-6 text-rsq-200" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCardList;
