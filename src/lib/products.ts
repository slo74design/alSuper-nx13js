import mercadona from "@/lib/all-mercadona-14Ago23";

const Products = mercadona; // import del json file de los productos

const JsonFinal = [];
for (let i = 0; i < Products.length; i++) {
    let res = Products[i];
    for (let j = 0; j < res.length; j++) {
        JsonFinal.push(res[j]);
    }
}

export default JsonFinal;
