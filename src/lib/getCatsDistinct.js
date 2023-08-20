import prisma from "@/lib/prisma";
import { cache } from "react";

export const revalidate = 2592000; // revalidate the data at most every month

export const getCatsDistinct = cache(async () => {
    const distintCats = await prisma.products.findMany({
        distinct: ["idFamily"],
        select: {
            idFamily: true,
            family: true,
        },
        orderBy: {
            idFamily: "asc",
        },
    });
    return distintCats;
});
