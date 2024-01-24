var url = new URL(window.location.href);
let category = url.searchParams.get('cat');
let textHeading = document.getElementById("catHead");
textHeading.innerText = "All Results for " + category;

function generateProductList() {
    let list = document.getElementById('product-list');

    const products = [
        { name: 'Fake ahh tshirt', price: 4.69 }
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'productDiv ';
        // Use backticks (`) for template literals
        productDiv.innerHTML = `<img src=${}><h3>$${product.name}</h3><p>Price: $$${product.price.toFixed(2)}</p>`;
        // Append the productDiv to the list
        list.appendChild(productDiv);
    });
}

generateProductList();