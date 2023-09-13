"use client";
import {
    addToCart,
    decrementQuantity,
    deleteCart,
    incrementQuantity,
    updateTotalCart,
} from "@/features/cartSlice";
import {
    MinusIcon,
    PlusIcon,
    ShoppingCartIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import {
    ChatBubbleLeftIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomeCart = () => {
    const [totalCart, setTotalCart] = useState(0);
    const dispatch = useDispatch();
    const cartRedux = useSelector((state) => state.carts);

    const handleDeleteCart = (prod) => {
        dispatch(deleteCart(prod.ID));
    };

    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cartRedux._cartList.forEach((item) => {
            // He tenido que limpiar y convertir el precio con comas del producto (1,60 €\n\n/ud.) en un numero 1.60
            let precioLimpio = item.price.substring(0, item.price.indexOf(" "));
            let valPrecio = parseFloat(precioLimpio.replace(/,/g, "")) / 100;
            totalQuantity += item.quantity;
            totalPrice += valPrecio * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };

    const handleShareWhatsapp = (e) => {
        const number = "+3411111111";
        let message = "Por favor, debes comprar lo siguiente: \n";
        cartRedux._cartList.forEach((item) => {
            message += "➡ " + item.title + " - " + item.subtitle + "\n";
        });
        let url = `https://web.whatsapp.com/send?phone=${number}`;
        // Appending the message to the URL by encoding it
        url += `&text=${encodeURI(message)}&app_absent=0`;
        // Open our newly created URL in a new tab to send the message
        window.open(url);
    };

    return (
        <div className="py-6 pl-6 pr-4 h-[calc(100vh-150px)] w-full flex bg-slate-50">
            <div className="w-full flex flex-col justify-between">
                <div>
                    <h3 className="text-rsq-100 font-semibold text-base flex flex-row gap-x-3">
                        Mi próxima Lista
                    </h3>
                    <div className="my-5">
                        {cartRedux._cartList.length === 0 ? (
                            <p className="text-slate-400 font-light text-sm">
                                No tengo productos en mi lista
                            </p>
                        ) : (
                            <p className="text-slate-400 font-light text-sm">
                                {cartRedux._cartList.length} productos en mi
                                lista
                            </p>
                        )}
                    </div>

                    <div className="overflow-y-scroll max-h-96 mt-5">
                        <ul role="list" className="divide-y divide-gray-100">
                            {cartRedux._cartList.map((item) => (
                                <li
                                    key={item.ID}
                                    className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-3 sm:flex-nowrap"
                                >
                                    <div>
                                        <p className="text-sm font-medium leading-5 text-rsq-900">
                                            {item.title}
                                        </p>
                                        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-slate-500 font-light">
                                            <p>
                                                {item.price} € x {item.quantity}{" "}
                                                ud
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-none sm:w-auto">
                                        <div
                                            className="flex w-7 justify-center items-center"
                                            onClick={() =>
                                                dispatch(
                                                    incrementQuantity(item.ID)
                                                )
                                            }
                                        >
                                            <PlusIcon
                                                className="h-4 w-4 text-gray-600"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div
                                            className="flex w-7 justify-center items-center"
                                            onClick={() =>
                                                dispatch(
                                                    decrementQuantity(item.ID)
                                                )
                                            }
                                        >
                                            <MinusIcon
                                                className="h-4 w-4 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div
                                            className="flex w-7 justify-center items-center"
                                            onClick={() =>
                                                handleDeleteCart(item)
                                            }
                                        >
                                            <TrashIcon
                                                className="h-4 w-4 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {cartRedux._cartList.length > 0 && (
                    <div>
                        <div className="flex flex-row items-center justify-between border-t-4 border-merca-200 pt-3 w-full">
                            <p className="text-sm font-medium text-rsq-100">
                                Total aproximado
                            </p>
                            <p className="font-semibold text-rsq-100">
                                {getTotal().totalPrice.toFixed(2)}€
                            </p>
                        </div>

                        <div className="" onClick={() => handleShareWhatsapp()}>
                            Comparte en Whatsapp
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeCart;
