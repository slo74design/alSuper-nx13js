"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
    MagnifyingGlassIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { addToCart } from "@/features/cartSlice";
import { toggleFav } from "@/features/bookmarks";
import { getProducts } from "@/lib/getProducts";

const HomeList = ({ dataProds }) => {
    const dispatch = useDispatch();
    const [dataApi, setDataApi] = useState([]);
    const [valueForm, setValueForm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const prodsRedux = useSelector((state) => state.products);
    const favsRedux = useSelector((state) => state.favs);

    useEffect(() => {
        let res;
        setIsLoading(true);
        setDataApi(dataProds);
        if (valueForm !== "") {
            res = dataProds.filter((item) =>
                item.title.toLowerCase().includes(valueForm.toLowerCase())
            );
        }
        setDataApi(res);
        setIsLoading(false);
    }, [dataProds, valueForm]);

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
        <div className="block w-full mt-10 max-w-xl mx-auto">
            <h3 className="text-rsq-100 font-semibold text-base flex flex-row gap-x-3">
                Encuentra el producto
            </h3>
            <div className="mt-4">
                <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                    <input
                        type="text"
                        name="searchTxt"
                        id="searchTxt"
                        onChange={(e) => setValueForm(e.target.value)}
                        className="block w-full rounded-full  border-slate-300 border py-1.5 pl-10 text-rsq-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-0"
                        placeholder="Teclea el nombre del producto"
                    />
                </div>
            </div>
            <div className="mt-4 overflow-y-auto h-40 lg:h-80">
                <ul role="list" className="divide-y divide-gray-100">
                    {valueForm.length > 0 &&
                        dataApi?.map((item) => (
                            <li
                                key={item.ID}
                                className="flex justify-between gap-x-6 py-5"
                            >
                                <div className="flex min-w-0 gap-x-4">
                                    <Image
                                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                        src={item.imgURL}
                                        alt=""
                                        width={120}
                                        height={120}
                                    />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-medium leading-5 text-merca-100">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                            {item.subtitle} | {item.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:items-center justify-center gap-x-2">
                                    <p className="text-sm leading-6 text-gray-900">
                                        {item.price}
                                    </p>

                                    <button
                                        onClick={() => handleBookmark(item)}
                                    >
                                        {favsRedux._favList.filter(
                                            (e) => e.ID === item.ID
                                        ).length > 0 ? (
                                            <AiFillStar className="w-6 h-6 text-amber-500" />
                                        ) : (
                                            <AiOutlineStar className="w-6 h-6 text-amber-200" />
                                        )}
                                    </button>

                                    <button onClick={() => handleAddCart(item)}>
                                        <PlusCircleIcon className="w-6 h-6 text-rsq-200" />
                                    </button>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default HomeList;
