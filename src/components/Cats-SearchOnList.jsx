"use client";
import React, { useEffect, useState } from "react";
import CatsList from "./Cats-List";
import { useSelector } from "react-redux";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const CatsSearchOnList = ({ prodsSelected }) => {
    const [dataApi, setDataApi] = useState([]);
    const [valueForm, setValueForm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let res;
        setIsLoading(true);
        setDataApi(prodsSelected);
        if (valueForm !== "") {
            res = prodsSelected.filter((item) =>
                item.title.toLowerCase().includes(valueForm.toLowerCase())
            );
        }
        setDataApi(res);
        setIsLoading(false);
    }, [prodsSelected, valueForm]);

    return (
        <>
            <div className="mt-4 lg:px-8">
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 pt-8 lg:p-8">
                {valueForm !== "" && dataApi?.length > 0
                    ? dataApi.map((product) => (
                          <CatsList key={product.ID} data={product} isFav={0} />
                      ))
                    : prodsSelected.map((product) => (
                          <CatsList key={product.ID} data={product} isFav={0} />
                      ))}
            </div>
        </>
    );
};

export default CatsSearchOnList;
