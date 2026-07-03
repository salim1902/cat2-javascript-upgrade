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

/* FEATURE 2+3: Add/remove*/

const specials = [
    { name: "Pistachio Honeycomb Bread", description: "Our signature honeycomb bread, drizzled with pistachio cream.", price: "Ksh 2,500" },
    { name: "Basbousa Tray", description: "Semolina cake soaked in syrup, a Ramadhan favourite.", price: "Ksh 1,500" },
    { name: "Mixed Samosa Platter", description: "20 pcs beef and 20 pcs chicken samosas, perfect for sharing.", price: "Ksh 3,000" },
    { name: "Kaimati & Mahamri Combo", description: "20 pcs kaimati paired with 10 pcs mahamri.", price: "Ksh 1,000" }
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

const WISHLIST_STORAGE_KEY = "platedByHilwaWishlist";
let wishlistItems = [];

function loadWishlistFromStorage() {
    const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
    wishlistItems = saved !== null ? JSON.parse(saved) : [];
}

function saveWishlistToStorage() {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
}

function renderWishlist() {
    const list = document.getElementById("wishlist-list");
    const emptyMsg = document.getElementById("wishlist-empty-msg");

    list.innerHTML = "";
    emptyMsg.style.display = wishlistItems.length === 0 ? "block" : "none";

    wishlistItems.forEach(function (itemName, index) {
        const li = document.createElement("li");
        li.classList.add("wishlist-item");

        const span = document.createElement("span");
        span.textContent = itemName;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.addEventListener("click", function () {
            wishlistItems.splice(index, 1);
            saveWishlistToStorage();
            renderWishlist();
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}

function setupWishlistForm() {
    const input = document.getElementById("wishlist-input");
    const addBtn = document.getElementById("wishlist-add-btn");

    addBtn.addEventListener("click", function () {
        const value = input.value.trim();
        if (value === "") return;

        wishlistItems.push(value);
        saveWishlistToStorage();
        renderWishlist();

        input.value = "";
        input.focus();
    });
}


document.addEventListener("DOMContentLoaded", function () {
    renderSpecials();

    loadWishlistFromStorage();
    renderWishlist();
    setupWishlistForm();
});