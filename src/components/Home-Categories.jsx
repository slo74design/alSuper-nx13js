"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import jsonFinal from "@/lib/products";
import {
    ArrowRightIcon,
    ChevronRightIcon,
    EnvelopeIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { prisma } from "@/lib/prisma";

const HomeCategories = ({ distintCats }) => {
    const [dataApi, setDataApi] = useState([]);
    const [valueForm, setValueForm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // const cats = [...new Set(jsonFinal.map((item) => item.family))];
    // const listCatsSorted = cats.sort();

    useEffect(() => {
        let res;
        setIsLoading(true);
        setDataApi(distintCats);
        if (valueForm !== "") {
            res = distintCats.filter((item) =>
                item.family.toLowerCase().includes(valueForm.toLowerCase())
            );
        }
        setDataApi(res);
        setIsLoading(false);
    }, [distintCats, valueForm]);
    return (
        <div className="pb-5 z-1 h-[calc(100vh-150px)] w-full">
            <div className="mt-4">
                <div className="relative mt-2 rounded-md w-full">
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
                        className="block w-full border-slate-100 border-b py-1.5 pl-10 text-rsq-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-0"
                    />
                </div>
            </div>

            <div className="overflow-y-scroll h-[calc(100vh-200px)]">
                <ul role="list" className="divide-y divide-slate-100">
                    {valueForm !== "" && dataApi?.length > 0
                        ? dataApi.map((cat, index) => (
                              <Link
                                  href={`/cats/${cat.idFamily}/`}
                                  key={index}
                                  className="flex items-center justify-between py-2 px-3"
                              >
                                  <div className="flex min-w-0 gap-x-4">
                                      <div className="min-w-0 flex-auto">
                                          <p className="text-sm font-light leading-6 text-rsq-100">
                                              {cat.family}
                                          </p>
                                      </div>
                                  </div>
                                  <ChevronRightIcon className="w-3 h-3 text-slate-400" />
                              </Link>
                          ))
                        : distintCats.map((cat, index) => (
                              <Link
                                  href={`/cats/${cat.idFamily}/`}
                                  key={index}
                                  className="flex items-center justify-between py-2 px-3"
                              >
                                  <div className="flex min-w-0 gap-x-4">
                                      <div className="min-w-0 flex-auto">
                                          <p className="text-sm font-light leading-6 text-rsq-100">
                                              {cat.family}
                                          </p>
                                      </div>
                                  </div>
                                  <ChevronRightIcon className="w-3 h-3 text-slate-400" />
                              </Link>
                          ))}
                </ul>
            </div>
        </div>
    );
};

export default HomeCategories;
