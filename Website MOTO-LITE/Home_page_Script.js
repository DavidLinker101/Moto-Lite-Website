// Select elements
const productList = document.getElementById("product-list");
const categoryLinks = document.querySelectorAll(".category, .sub-category");

// Function to display products based on category
function displayProducts(category) {
    productList.innerHTML = ""; // Clear current products

    let filteredProducts = category === "all"
        ? products
        : products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-box");
        productItem.innerHTML = `
            <h2 class="product-title">${product.name}</h2>
            <p class="product-subtitle">${product.description}</p>
            <div class="button-group">
                <button class="buy-button">Buy</button>
                <button class="cart-button">Cart</button>
            </div>
        `;
        productList.appendChild(productItem);
    });
}

const products = [
    { id: 1, name: "All new Motor Engine Model", category: "engine", description: "Axe-6179A" },
    { id: 2, name: "Turbocharged Engine", category: "engine", description: "Turbo-X9000" },
    { id: 3, name: "Piston Set", category: "pistons", description: "High-performance pistons" },
    { id: 4, name: "Crankshaft Set", category: "crankshafts", description: "Durable crankshafts" },
    { id: 5, name: "Spark Plug Set", category: "spark-plugs", description: "Long-lasting spark plugs" },
    { id: 6, name: "Ignition Coil Pack", category: "ignition-coils", description: "Premium ignition coils" }
];

// Event Listener for Category and Subcategory Clicks
categoryLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent page refresh
        displayProducts(this.dataset.category);
    });
});

// Show all products by default when the page loads
displayProducts("all");