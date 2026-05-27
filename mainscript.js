// ===============================
// Product Data
// ===============================

const Products = [
    {
        name: "Butterscotch Latte",
        category: "Coffee",
        price: "12k",
        description: "Perfect combination of sweet, creamy, and buttery flavor.",
        image: "asset/Butterscotch Latte.png",
    },
    {
        name: "Coconut Latte",
        category: "Coffee",
        price: "12k",
        description: "Creamy coffee with a smooth and refreshing coconut taste.",
        image: "asset/Coconut Latte.png",
    },
    {
        name: "Caramel Latte",
        category: "Coffee",
        price: "12k",
        description: "Iced milk coffee with a sweet caramel flavor.",
        image: "asset/Caramel Latte.png",
    },
    {
        name: "Lemonade Americano",
        category: "Coffee",
        price: "8k",
        description: "Bold taste coffee with refreshing sour lemonade.",
        image: "asset/Lemonade Americano.png",
    },
    {
        name: "Mango",
        category: "Juice",
        price: "10k",
        description: "Sweet and refreshing mango drink with a tropical fruity taste.",
        image: "asset/Mango.png",
    },
    {
        name: "Hazelnut Latte",
        category: "Coffee",
        price: "12k",
        description: "Creamy milk coffee with a smooth and nutty hazelnut flavor.",
        image: "asset/Hazelnut Latte.png",
    },
    {
        name: "Matcha",
        category: "Juice",
        price: "10k",
        description: "Smooth matcha drink with a creamy texture and earthy green tea taste.",
        image: "asset/Matcha.png",
    },
    {
        name: "Ice Tea",
        category: "Tea",
        price: "5k",
        description: "Classic iced tea with a light and refreshing taste.",
        image: "asset/Ice Tea.png",
    },
    {
        name: "Chocolatte",
        category: "Juice",
        price: "8k",
        description: "Rich chocolate drink with a smooth and creamy texture.",
        image: "asset/Chocolatte.png",
    },
    {
        name: "Strawberry",
        category: "Juice",
        price: "10k",
        description: "Sweet and refreshing strawberry drink with a fruity aroma.",
        image: "asset/Strawberry.png",
    },
    {
        name: "Taro",
        category: "Juice",
        price: "8k",
        description: "Creamy taro drink with a smooth and slightly nutty flavor.",
        image: "asset/Taro.png",
    },
    {
        name: "Tiramisu Latte",
        category: "Coffee",
        price: "10k",
        description: "Creamy coffee inspired by tiramisu with sweet cocoa notes.",
        image: "asset/Tiramisu Latte.png",
    },
    {
        name: "Lemon Tea",
        category: "Tea",
        price: "7k",
        description: "Refreshing iced tea with a balanced sweet and tangy lemon taste.",
        image: "asset/Lemon Tea.png",
    },
    {
        name: "Thai Tea",
        category: "Tea",
        price: "8k",
        description: "Creamy Thai tea with a rich, sweet, and aromatic flavor.",
        image: "asset/Thai Tea.png",
    },
    {
        name: "Apple Tea",
        category: "Tea",
        price: "7k",
        description: "Light iced tea with a sweet and fruity apple flavor.",
        image: "asset/Apple Tea.png",
    },
    {
        name: "Almond Latte",
        category: "Coffee",
        price: "12k",
        description: "Smooth milk coffee with a delicate nutty almond flavor.",
        image: "asset/Almond Latte.png",
    },
    {
        name: "Bubblegum",
        category: "Juice",
        price: "10k",
        description: "Sweet and playful bubblegum candy taste.",
        image: "asset/Bubblegum.png",
    },
    {
        name: "Vanilla Latte",
        category: "Coffee",
        price: "12k",
        description: "Creamy milk coffee with a smooth and sweet vanilla aroma.",
        image: "asset/Vanilla Latte.png",
    },
    {
        name: "Aren Latte",
        category: "Coffee",
        price: "10k",
        description: "Coffee latte with palm sugar sweetness.",
        image: "asset/Aren Latte.png",
    },
    {
        name: "Green Tea",
        category: "Tea",
        price: "7k",
        description: "Light and refreshing green tea with a natural taste.",
        image: "asset/Green Tea.png",
    },
];

// ===============================
// DOM Elements
// ===============================

const menuList = document.getElementById("menu-list");
const searchBar = document.getElementById("search-input");
const options = document.querySelectorAll(".category-option");

let activeCategory = "All";

// ===============================
// Render Products
// ===============================

function renderProducts() {
    menuList.innerHTML = "";

    Products.forEach((product, index) => {
        const menuItem = document.createElement("div");

        // stagger animation per row
        const delay = (index % 4) * 150;

        menuItem.className = "menu-item col";
        menuItem.setAttribute("data-category", product.category);
        menuItem.setAttribute("data-name", product.name.toLowerCase());
        menuItem.setAttribute("data-aos", "fade-up");
        menuItem.setAttribute("data-aos-delay", delay);

        menuItem.innerHTML = `
            <div class="menu-item-heading">
                <div class="menu-item-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <div class="menu-item-price">
                    ${product.price}
                </div>
            </div>

            <div class="menu-item-content">
                <div class="menu-item-title">
                    ${product.name}
                </div>

                <div class="menu-item-description">
                    ${product.description}
                </div>
            </div>
        `;

        menuList.appendChild(menuItem);
    });

    AOS.refreshHard();
}

// ===============================
// Unified Filter System
// ===============================

function filterProducts() {
    const searchTerm = searchBar.value.toLowerCase();
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
        const itemName = item.getAttribute("data-name");
        const itemCategory = item.getAttribute("data-category");

        const matchSearch = itemName.includes(searchTerm);

        const matchCategory = activeCategory === "All" || itemCategory === activeCategory;

        if (matchSearch && matchCategory) {
            item.classList.remove("d-none");
        } else {
            item.classList.add("d-none");
        }
    });

    AOS.refresh();
}

// ===============================
// Search Event
// ===============================

searchBar.addEventListener("input", filterProducts);

// ===============================
// Category Filter Event
// ===============================

options.forEach((option) => {
    option.addEventListener("click", function () {
        activeCategory = option.getAttribute("data-option");

        options.forEach((opt) => {
            opt.classList.remove("active");
        });

        option.classList.add("active");

        filterProducts();
    });
});

// ===============================
// Initial Render
// ===============================

renderProducts();
