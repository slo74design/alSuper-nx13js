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
import HomeCardList from "./Home-CardList";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
// import Turnstone from "turnstone";

const HomeList = ({ dataProds }) => {
    const dispatch = useDispatch();
    const [dataApi, setDataApi] = useState([]);
    const [valueForm, setValueForm] = useState("");
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

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // console.log(string, results);
        setDataApi(results);
    };

    const handleOnSelect = (item) => {
        setValueForm(item);
    };

    const formatResult = (item) => {
        return (
            <span key={item.ID} style={{ display: "block", textAlign: "left" }}>
                {item.title} - {item.subtitle}
            </span>
        );
    };

    return (
        <div className="block w-full mt-10 max-w-xl mx-auto">
            <h3 className="text-rsq-100 font-semibold text-base flex flex-row gap-x-3">
                Encuentra el producto
            </h3>
            <div className="mt-4">
                <div className="relative mt-2">
                    <ReactSearchAutocomplete
                        items={dataProds?.length > 0 && dataProds}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        autoFocus
                        formatResult={formatResult}
                        fuseOptions={{
                            includeScore: true,
                            includeMatches: true,
                            shouldSort: true,
                            threshold: 0.3,
                            location: 0,
                            distance: 100,
                            maxPatternLength: 32,
                            minMatchCharLength: 2,
                            keys: ["title"],
                            useExtendedSearch: true,
                            ignoreFieldNorm: true,
                        }}
                        placeholder="Empieza a teclear el nombre del producto"
                        resultStringKeyName="title"
                        inputDebounce={300}
                    />
                </div>
            </div>
            <div className="mt-4 overflow-y-auto h-40 lg:h-80">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-8 lg:p-8">
                    {valueForm !== "" &&
                        dataApi?.length > 0 &&
                        dataApi?.map((item) => (
                            // <HomeCardList key={item.ID} data={item} />
                            <div
                                key={item.ID}
                                className="flex flex-col justify-between gap-x-6 py-5"
                            >
                                <div className="flex min-w-0 gap-x-4">
                                    {/* <Image
                                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                        src={item.imgURL}
                                        alt=""
                                        width={120}
                                        height={120}
                                    /> */}
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-medium leading-5 text-merca-100">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                            {item.subtitle} | {item.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:items-center justify-between gap-x-2">
                                    <p className="text-sm leading-6 text-gray-900">
                                        {item.price}
                                    </p>

                                    <div>
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

                                        <button
                                            onClick={() => handleAddCart(item)}
                                        >
                                            <PlusCircleIcon className="w-6 h-6 text-rsq-200" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default HomeList;
