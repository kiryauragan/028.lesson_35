const categoriesContainer = document.querySelector(".categories");
const productsContainer = document.querySelector(".products");
const productDetailsContainer = document.querySelector(".product-detail");

const categories = [
	{ id: 1, name: "Спорт" },
	{ id: 2, name: "Косметика" },
	{ id: 3, name: "Путешествия" },
];

const products = [
	{ id: 1, name: "Футболка", price: 11, categoryId: 1 },
	{ id: 2, name: "Кроссовки", price: 12, categoryId: 1 },
	{ id: 3, name: "Мяч", price: 13, categoryId: 1 },
	{ id: 4, name: "Помада", price: 13, categoryId: 2 },
	{ id: 5, name: "Крем", price: 15, categoryId: 2 },
	{ id: 6, name: "Шампунь", price: 16, categoryId: 2 },
	{ id: 7, name: "Рюкзак", price: 17, categoryId: 3 },
	{ id: 8, name: "Палатка", price: 18, categoryId: 3 },
	{ id: 9, name: "ЧайникЫ", price: 19, categoryId: 3 },
];

const renderCategories = () => {
	categoriesContainer.innerHTML = "";
	categories.forEach((category) => {
		const categoryElement = document.createElement("div");
		categoryElement.innerText = category.name;
		categoryElement.addEventListener("click", () => {
			renderProducts(category.id);
		});
		categoriesContainer.appendChild(categoryElement);
	});
};

const renderProducts = (categoryId) => {
	productsContainer.innerHTML = "";
	if (!categoryId) {
		return;
	}
	const filteredProducts = products.filter(
		(product) => product.categoryId === categoryId
	);
	filteredProducts.forEach((product) => {
		const productElement = document.createElement("div");
		productElement.innerText = product.name;
		productElement.addEventListener("click", () => {
			renderProductDetails(product);
		});
		productsContainer.appendChild(productElement);
	});
};

const renderProductDetails = (product) => {
	productDetailsContainer.innerHTML = "";
	if (!product) {
		return;
	}
	const productDetailsElement = document.createElement("div");
	productDetailsElement.innerHTML = `
        <h3>${product.name}</h3>
        <div>$ ${product.price}</div>
        <button class="btn_buy">Buy</button>
    `;
	productDetailsElement
		.querySelector(".btn_buy")
		.addEventListener("click", () => {
			alert(`You bought ${product.name}!`);
			renderProducts();
			renderProductDetails();
		});
	productDetailsContainer.appendChild(productDetailsElement);
};

renderCategories();
renderProducts();
renderProductDetails();
