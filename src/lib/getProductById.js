import prisma from "@/lib/prisma";
import { cache } from "react";

export const revalidate = 2592000; // revalidate the data at most every month

export const getProductById = cache(async (id) => {
    const productId = await prisma.products.findMany({
        where: {
            ID: Number(id),
        },
        orderBy: {
            title: "asc",
        },
    });
    return productId;
});
