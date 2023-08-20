import mercadona from "@/lib/all-16Ago23";

const Products = mercadona; // import del json file de los productos

const JsonFinal = [];
for (let i = 0; i < Products.length; i++) {
    let res = Products[i];
    for (let j = 0; j < res.length; j++) {
        JsonFinal.push(res[j]);
    }
}
// console.log(JSON.stringify(JsonFinal, null, 2));

export default JsonFinal;
