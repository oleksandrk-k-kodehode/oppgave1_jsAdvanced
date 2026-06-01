const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" },
];

const print = (tekst, output) => {
    console.log("♡".repeat(70));
    console.log(tekst + " " + output);
};

const mindreEnn200 = products.filter((product) => product.price <= 200);
print("mindreEnn200:", mindreEnn200);

const keys = products.map((obj) => obj.name);
print("keys:", keys);

const electronicsCat = products.filter(
    (product) => product.category === "electronics",
);
print("electronicsCat:", electronicsCat);

const checkPriceMt1000 = products.some((product) => product.price >= 1000);
print("checkPriceMt1000:", checkPriceMt1000);

const totalSum = products.reduce((acc, currVal) => acc + currVal.price, 0);
print("totalSum:", totalSum);

console.log("♡".repeat(70));
