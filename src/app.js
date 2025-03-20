let productsOnStorage = products;
saveDataInStorage("productsOnStorage", products);
if (getDataFromStorage("productsOnStorage")) {
	saveDataInStorage("productsOnStorage", productsOnStorage);
}

const clearContainer = () => {
	const productsContainer = document.querySelector(".products-container");
	console.log(productsContainer);
	productsContainer.innerHTML = "";
};

const createProductimage = (image) => {
	const divImageContainer = document.createElement("div");
	divImageContainer.classList.add("img-product-container");

	const imgProduct = document.createElement("img");
	imgProduct.src = image;
	divImageContainer.append(imgProduct);
	return divImageContainer;
};

const createButtonsContainer = (isOnWishList, isOnTrolly) => {
	const divButtonsContainer = document.createElement("div");
	divButtonsContainer.classList.add("buttons-card-container");

	const btnForWishLisst = document.createElement("button");
	btnForWishLisst.classList.add("btn-add-to-wish-list","btn-style");
	if (isOnWishList) {
		console.log("PERRITO");
	}
	if (!isOnWishList) {
		console.log("NO esta en la wish list");
	}

	return divButtonsContainer;
};

// FUNCION PARA CREAR EL CONTENEDOR DE INFO DEL PRODUCTO
const createInfoProductContainer = (product) => {
	const divInfoContainer = document.createElement("div");
	divInfoContainer.classList.add("card-information-container");

	const h3ProductPrice = document.createElement("h3");
	h3ProductPrice.classList.add("product-price");
	h3ProductPrice.textContent = product.price;
	divInfoContainer.append(h3ProductPrice);

	const paragraphProductName = document.createElement("p");
	paragraphProductName.classList.add("product-name");
	paragraphProductName.textContent = product.name;
	divInfoContainer.append(paragraphProductName);

	const {isOnWishList, isOnTrolly} = product;
	const divButtonsContainer = createButtonsContainer(isOnWishList, isOnTrolly);

	return divInfoContainer;
};

const createProductCard = (product) => {
	const divCardContainer = document.createElement("div");
	divCardContainer.classList.add("product-card");

	const { image } = product;
	const divImageContainer = createProductimage(image);
	divCardContainer.append(divImageContainer)

	const divInfoProductContainer = createInfoProductContainer(product);
	divCardContainer.append(divInfoProductContainer);

	return divCardContainer;
};

const filterProductsByName = (name) => {
	const filterByName = productsOnStorage.filter((product) =>
		product.name.toLowerCase().includes(name.trim().toLowerCase())
	);
	if (!name) {
		return productsOnStorage;
	}
	return filterByName;
};

const renderCatalog = (filtroTexto = "") => {
	// SELECCION DE BOTONES
	const btnFullProducts = document.querySelector(".btn-full-informatica");
	const btnLaptopsProducts = document.querySelector(".btn-laptops-products");
	const btnMonitorsProducts = document.querySelector(".btn-monitors-products");
	const btnTabletsProducts = document.querySelector(".btn-tablets-products");
	const btnHeadphonesProducts = document.querySelector(".btn-headphones-products");
	const btnStoragesProducts = document.querySelector(".btn-storages-products");
	clearContainer();

	const productsByName = filterProductsByName(filtroTexto);
	productsByName.forEach((product, index) => {
		const productsContainer = document.querySelector(".products-container");
		const productCard = createProductCard(product);
		productsContainer.append(productCard);
	});
};

const changepage = () => {
	const inputName = document.querySelector(".input-name");
	console.log(inputName);
	const btnLogin = document.querySelector(".continue-btn");
	btnLogin.addEventListener("click", (event) => {
		if (!inputName.value.trim()) {
			event.preventDefault();
			return alert("Por favor introduzca un nombre para iniciar sesion");
		}
		saveDataInStorage("userName", inputName.value);
		window.location.href = "https://project-reply-amazon.netlify.app/pages/informatica.html";
	});
};

document.addEventListener("DOMContentLoaded", () => {
	// changepage();
	renderCatalog();
});
