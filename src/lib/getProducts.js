import prisma from "@/lib/prisma";
import { cache } from "react";

export const revalidate = 2592000; // revalidate the data at most every month

export const getProducts = cache(async () => {
    const prodList = await prisma.products.findMany({
        orderBy: {
            title: "asc",
        },
    });
    return prodList;
});
