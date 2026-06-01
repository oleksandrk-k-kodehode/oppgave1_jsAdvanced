const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" },
];

// Lager en kopi av products-arrayen slik at originalen ikke endres
const products_copy = products.slice();

// Hjelpefunksjon for å skrive ut resultatene på en ryddig måte
const print = (tekst, output) => {
    console.log("\n" + "♡".repeat(70)); // Skillelinje
    console.log(tekst); // Beskrivelse av resultatet
    console.log(output); // Selve resultatet
};

// Filtrerer ut alle produkter som koster 200 eller mindre
const mindreEnn200 = products_copy.filter((product) => product.price < 200);
print("mindreEnn200:", mindreEnn200);

// Henter ut navnene på alle produktene og lagrer dem i en ny array
const keys = products_copy.map((obj) => obj.name);
print("keys:", keys);

// Filtrerer ut alle produkter i kategorien "electronics"
const electronicsCat = products_copy.filter(
    (product) => product.category === "electronics",
);
print("electronicsCat:", electronicsCat);

// Sjekker om minst ett produkt har en pris på 1000 eller mer
const checkPriceMt1000 = products_copy.some((product) => product.price >= 1000);
print("checkPriceMt1000:", checkPriceMt1000);

// Summerer prisene på alle produktene
const totalSum = products_copy.reduce((acc, currVal) => acc + currVal.price, 0);
print("totalSum:", totalSum);

console.log("♡".repeat(70));
