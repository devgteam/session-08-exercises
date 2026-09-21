const productList = document.querySelector("#productList");
function renderProducts(products) {
productList.innerHTML = "";
products.forEach(product => {
const card = document.createElement("article");
card.textContent = product.name;
productList.appendChild(card);
});
}
async function loadProducts() {
try {
const response = await fetch("./products.json");
const products = await response.json();
renderProducts(products);
} catch (error) {
console.error("Loading failed:", error);
productList.textContent = "Could not load products.";
}
}
loadProducts();