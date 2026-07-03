/* FEATURE 1: Loop-rendered dynamic content*/

const specials = [
    {
        name: "Pistachio Honeycomb Bread",
        description: "Our signature honeycomb bread, drizzled with pistachio cream.",
        price: "Ksh 2,500"
    },
    {
        name: "Basbousa Tray",
        description: "Semolina cake soaked in syrup, a Ramadhan favourite.",
        price: "Ksh 1,500"
    },
    {
        name: "Mixed Samosa Platter",
        description: "20 pcs beef and 20 pcs chicken samosas, perfect for sharing.",
        price: "Ksh 3,000"
    },
    {
        name: "Kaimati & Mahamri Combo",
        description: "20 pcs kaimati paired with 10 pcs mahamri.",
        price: "Ksh 1,000"
    }
];

function renderSpecials() {
    const container = document.getElementById("specials-container");
    container.innerHTML = "";

    specials.forEach(function (item) {
        const card = document.createElement("div");
        card.classList.add("special-card");

        const title = document.createElement("h3");
        title.textContent = item.name;

        const desc = document.createElement("p");
        desc.textContent = item.description;

        const price = document.createElement("span");
        price.classList.add("special-price");
        price.textContent = item.price;

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(price);

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderSpecials();
});