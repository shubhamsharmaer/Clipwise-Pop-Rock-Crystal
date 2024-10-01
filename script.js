// Array of products with dynamic data (name and price)
const products = [
    { name: "CRYSTAL AGATE PHONE GRIP", price: "$18.99", imgSrc: "assests/product.png" },
    { name: "CRYSTAL AGATE PHONE GRIP", price: "$18.99", imgSrc: "assests/product.png" },
    { name: "CRYSTAL AGATE PHONE GRIP", price: "$18.99", imgSrc: "assests/product.png" },
    { name: "CRYSTAL AGATE PHONE GRIP", price: "$18.99", imgSrc: "assests/product.png" },
    { name: "CRYSTAL AGATE PHONE GRIP", price: "$18.99", imgSrc: "assests/product.png" },
    { name: "CRYSTAL AGATE PHONE GRIP", price: "$18.99", imgSrc: "assests/product.png" },
    { name: "CRYSTAL AGATE PHONE GRIP", price: "$18.99", imgSrc: "assests/product.png" },
    { name: "CRYSTAL AGATE PHONE GRIP", price: "$18.99", imgSrc: "assests/product.png" }
    // { name: "ROSE QUARTZ PHONE GRIP", price: "$22.99", imgSrc: "assests/product.png" },
    // { name: "AMETHYST PHONE GRIP", price: "$19.99", imgSrc: "assests/product.png" },
    // Add more products as needed
];

// Function to display products with dynamic values
function displayProducts(productArray) {
    const container = document.getElementById('products-container');

    // Clear the container before appending new divs
    container.innerHTML = '';

    // Loop through the product array
    productArray.forEach((product) => {
        const productDiv = `
            <div class="group flex flex-col px-10 py-8 justify-center border rounded-3xl items-center gap-2 hover:drop-shadow-2xl hover:scale-105 transition-all">
                <img class="w-[220px] group-hover:drop-shadow-none group-hover:scale-100 transition-all" src="${product.imgSrc}" alt="${product.name}">
                <div class="flex flex-col justify-center items-center">
                    <h3 class="text-[#31546d] text-lg">${product.name}</h3>
                    <h3 class="text-[#4b8398] text-lg font-bold">${product.price}</h3>
                </div>
                <button class="group-hover:bg-gradient-to-r group-hover:from-[#75cbed] group-hover:to-[#70b6fd] border-2 border-[#70b9fb] text-[#70b9fb] font-semibold group-hover:text-white px-8 py-4 rounded-xl mt-4 group-hover:drop-shadow-none group-hover:scale-100 transition-all">BUY NOW</button>
            </div>
        `;

        // Insert the productDiv into the container
        container.insertAdjacentHTML('beforeend', productDiv);
    });
}

// Example: Call the function with dynamic product data
displayProducts(products);


