"use client";
import Image from "next/image";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    ArrowRightIcon,
    Bars3Icon,
    BellIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Poiret_One } from "next/font/google";
import Link from "next/link";

const caprasismo = Poiret_One({
    weight: ["400"],
    subsets: ["latin"],
});

const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
    {
        name: "Inicio",
        href: "/",
        current: true,
    },
    {
        name: "Mis Listas",
        href: "#",
        current: false,
    },
    {
        name: "Favoritos",
        href: "/favoritos",
        current: false,
    },
    { name: "Stats", href: "#", current: false },
];
const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const PublicHeader = () => {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-merca-100">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <Link
                                            href="/"
                                            className="flex-shrink-0"
                                        >
                                            <Image
                                                className="h-9 w-9"
                                                src="/Logo.png"
                                                alt="Your Company"
                                                width={48}
                                                height={48}
                                            />
                                        </Link>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? "bg-purple-50 text-merca-100"
                                                                : "text-white hover:bg-slate-900 hover:bg-opacity-75",
                                                            "rounded-md px-3 py-2 text-sm font-medium"
                                                        )}
                                                        aria-current={
                                                            item.current
                                                                ? "page"
                                                                : undefined
                                                        }
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button className="text-sm font-semibold leading-6 px-6 py-2 rounded-lg text-rsq-500 uppercase flex flex-row justify-center items-center gap-x-2">
                                                Crea tu Lista
                                                <ArrowRightIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-rsq-100 p-2 text-indigo-100 focus:outline-none">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">
                                                Open main menu
                                            </span>
                                            {open ? (
                                                <XMarkIcon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Bars3Icon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile */}
                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-purple-700 text-white"
                                                    : "text-white hover:bg-slate-500 hover:bg-opacity-75",
                                                "block rounded-md px-3 py-2 text-base font-medium"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-indigo-700 pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={user.imageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium text-white">
                                                {user.name}
                                            </div>
                                            <div className="text-sm font-medium text-indigo-300">
                                                {user.email}
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="relative ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">
                                                View notifications
                                            </span>
                                            <BellIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header className="bg-merca-200 z-10">
                    <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
                        <h1
                            className={`text-center font-light uppercase text-base leading-6 text-rsq-500`}
                        >
                            Guardas tus listas para las próximas compra al
                            Mercadona
                        </h1>
                    </div>
                </header>
            </div>
        </>
    );
};

export default PublicHeader;
