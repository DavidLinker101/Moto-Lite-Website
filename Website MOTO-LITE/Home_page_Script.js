document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById("product-list");
    const categoryLinks = document.querySelectorAll(".main-category, .sub-categories a");

    // Define sub-categories for each main category
    const categoryMap = {
        "engine": ["pistons", "crankshafts", "camshafts", "engine-gaskets"],
        "electrical": ["spark-plugs", "ignition-coils", "alternators", "batteries"],
        "fuel-system": ["fuel-pumps", "fuel-injectors", "fuel-filters", "throttle-bodies"],
        "exhaust-system": ["exhaust-manifolds", "catalytic-converters", "mufflers", "o2-sensors"],
        "brake-system": ["brake-pads", "brake-rotors", "brake-calipers", "brake-fluid"]
    };

    const products = [
        { id: 1, name: "All new Motor Engine Model", category: "camshafts", description: "Axe-6179A", price: "$499.99" },
        { id: 2, name: "Turbocharged Engine", category: "camshafts", description: "Turbo-X9000", price: "$799.99" },
        { id: 3, name: "Piston Set", category: "pistons", description: "High-performance pistons", price: "$129.99" },
        { id: 4, name: "Crankshaft Set", category: "crankshafts", description: "Durable crankshafts", price: "$349.99" },
        { id: 5, name: "Spark Plug Set", category: "spark-plugs", description: "Long-lasting spark plugs", price: "$49.99" },
        { id: 6, name: "Ignition Coil Pack", category: "ignition-coils", description: "Premium ignition coils", price: "$89.99" },
        { id: 7, name: "Cylinder Head Set", category: "camshafts", description: "High-performance cylinder heads", price: "$599.99" },
        { id: 8, name: "Oil Pump Kit", category: "camshafts", description: "Complete oil pump assembly", price: "$149.99" },
        { id: 9, name: "Timing Belt Kit", category: "camshafts", description: "Timing belt with pulleys and tensioners", price: "$89.99" },
        { id: 10, name: "Spark Plug Set", category: "spark-plugs", description: "Ultra-durable spark plugs", price: "$59.99" },
        { id: 11, name: "Ignition Coil Pack", category: "ignition-coils", description: "Premium ignition coils", price: "$99.99" },
        { id: 12, name: "Alternator Set", category: "alternators", description: "High-efficiency alternator", price: "$199.99" },
        { id: 13, name: "Turbocharger Kit", category: "fuel-pumps", description: "Complete turbocharger system", price: "$1,499.99" },
        { id: 14, name: "Intercooler System", category: "fuel-injectors", description: "High-performance intercooler", price: "$399.99" },
        { id: 15, name: "Exhaust Manifold Kit", category: "exhaust-manifolds", description: "Performance exhaust manifold", price: "$249.99" },
        { id: 16, name: "Clutch Kit", category: "brake-calipers", description: "Heavy-duty clutch kit", price: "$229.99" },
        { id: 17, name: "Drive Shaft", category: "brake-rotors", description: "Durable drive shaft", price: "$499.99" },
        { id: 18, name: "Differential Set", category: "brake-pads", description: "Heavy-duty differential", price: "$599.99" },
        { id: 19, name: "Engine Gasket Set", category: "engine-gaskets", description: "Complete gasket set", price: "$179.99" },
        { id: 20, name: "Cylinder Head Gasket", category: "engine-gaskets", description: "High-quality gasket", price: "$59.99" },
        { id: 21, name: "Oil Seal Kit", category: "engine-gaskets", description: "Premium oil seal kit", price: "$39.99" },
        { id: 22, name: "Lithium Battery", category: "batteries", description: "Lightweight lithium battery", price: "$129.99" },
        { id: 23, name: "Lead Acid Battery", category: "batteries", description: "Durable lead acid battery", price: "$89.99" },
        { id: 24, name: "Gel Battery", category: "batteries", description: "Gel battery for extreme weather", price: "$149.99" },
        { id: 25, name: "High Flow Fuel Filter", category: "fuel-filters", description: "Efficient fuel filter", price: "$29.99" },
        { id: 26, name: "Carbon Fuel Filter", category: "fuel-filters", description: "Premium carbon filter", price: "$39.99" },
        { id: 27, name: "Inline Fuel Filter", category: "fuel-filters", description: "Compact inline fuel filter", price: "$19.99" },
        { id: 28, name: "Universal O2 Sensor", category: "o2-sensors", description: "Universal oxygen sensor", price: "$49.99" },
        { id: 29, name: "Wideband O2 Sensor", category: "o2-sensors", description: "Wideband sensor for tuning", price: "$149.99" },
        { id: 30, name: "Oxygen Sensor Kit", category: "o2-sensors", description: "Complete O2 kit", price: "$79.99" },
        { id: 31, name: "Premium Brake Fluid", category: "brake-fluid", description: "High-temp brake fluid", price: "$24.99" },
        { id: 32, name: "Dot 4 Brake Fluid", category: "brake-fluid", description: "Dot 4 standard", price: "$19.99" },
        { id: 33, name: "Dot 5 Brake Fluid", category: "brake-fluid", description: "Dot 5 high performance", price: "$34.99" }
    ];

    function displayProducts(category) {
        productList.innerHTML = "";

        // Check if it's a main category with sub-categories
        let filteredProducts;
        if (categoryMap[category]) {
            filteredProducts = products.filter(product =>
                categoryMap[category].includes(product.category)
            );
        } else {
            filteredProducts = products.filter(product => product.category === category);
        }

        if (filteredProducts.length === 0) {
            productList.innerHTML = "<p class='no-products'>No products found in this category.</p>";
            return;
        }

        filteredProducts.forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product-box");
            productItem.innerHTML = `
                <h2 class="product-title">${product.name}</h2>
                <p class="product-subtitle">${product.description}</p>
                <p class="product-price">${product.price}</p>
                <div class="button-group">
                    <button class="buy-button">Buy Now</button>
                    <button class="cart-button">Add to Cart</button>
                </div>
            `;
            productList.appendChild(productItem);
        });
    }

    // Category link click handlers
    categoryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const selectedCategory = this.dataset.category;
            displayProducts(selectedCategory);
        });
    });

    // Load all products initially
    displayProducts("all");
});
