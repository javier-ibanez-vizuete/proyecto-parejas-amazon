const removeProductFromTrolly = (productToBuy) => {
	const indexOfProduct = productsOnTrolly.findIndex((product) => product.id === productToBuy.id);
	productsOnTrolly.splice(indexOfProduct, 1);
};

const removeProductFromWishList = ({ id }) => {
	const indexOfProduct = productsOnWishList.findIndex((product) => product.id === id);
	productsOnWishList.splice(indexOfProduct, 1);
};

const createButtonsContainer = (product, index) => {
	const buttonsContainer = document.createElement("div");
	buttonsContainer.classList.add("buttons-card-container");

	const wishlistBtn = document.createElement("button");
	wishlistBtn.classList.add("btn-add-to-wish-list", "btn-style");

	wishlistBtn.textContent = product.wishlist ? "Eliminar de Deseados" : "Añadir a deseados";
	wishlistBtn.addEventListener("click", () => {
		product.wishlist = !product.wishlist;
		if (product.wishlist && !productsOnWishList.some(({ id }) => id === product.id)) {
			productsOnWishList.push(product);
		}
		if (!product.wishlist) {
			removeProductFromWishList(product);
		}
		wishlistBtn.textContent = product.wishlist ? "Quitar de Deseados" : "Añadir a deseados";
		saveDataInStorage("wishlist", productsOnWishList);
		recalculateProductsInTheWishList();
		saveDataInStorage("productsOnStorage", productsOnStorage);
		renderCatalog();
		renderWishList();
	});

	const productToBuy = { ...product, quantity: 1 };
	const addCartBtn = document.createElement("button");
	addCartBtn.classList.add("btn-add-to-trolly", "btn-style");

	addCartBtn.textContent = product.addcart ? "Eliminar del Carrito" : "Agregar al carrito";

	addCartBtn.addEventListener("click", () => {
		product.addcart = !product.addcart;
		if (product.addcart && !productsOnTrolly.some(({ id }) => id === product.id)) {
			productsOnTrolly.push(productToBuy);
		}
		if (!product.addcart) {
			removeProductFromTrolly(productToBuy);
		}
		addCartBtn.textContent = product.addcart ? "Eliminar del Carrito" : "Agregar al carrito";
		saveDataInStorage("trolly", productsOnTrolly);
		recalculateProductsInTheCar();
		saveDataInStorage("productsOnStorage", productsOnStorage);
		renderCatalog();
		renderTrolly();
	});

	buttonsContainer.append(wishlistBtn);
	buttonsContainer.append(addCartBtn);

	return buttonsContainer;
};

/**
 * Create a HTML element with information of each product.
 *
 * @param {*} product Contains the product information.
 * @param {*} index Index of the product in the array.
 * @returns HTML Element with a product's Information.
 */
const createInfoProductContainer = (product, index) => {
	const infoContainer = document.createElement("div");
	infoContainer.classList.add("card-information-container");

	const productPrice = document.createElement("h3");
	productPrice.classList.add("product-price");
	productPrice.textContent = `${product.price} €`;

	const productName = document.createElement("p");
	productName.classList.add("product-name");
	productName.textContent = product.name;

	const buttonsContainer = createButtonsContainer(product, index);

	infoContainer.append(productPrice);
	infoContainer.append(productName);
	infoContainer.append(buttonsContainer);

	return infoContainer;
};

const createProductimage = (image) => {
	const imageContainer = document.createElement("div");
	imageContainer.classList.add("img-product-container");

	const imgProduct = document.createElement("img");
	imgProduct.src = image;
	imgProduct.alt = "La imagen se rompió";
	imageContainer.append(imgProduct);
	return imageContainer;
};

/**
 * create a HTML element (container) for each product
 *
 * @param {*} product Contains the product information
 * @param {*} index Index of the product in the array.
 * @returns HTML Element (container) with the product's information.
 */
const createProductCard = (product, index) => {
	const header = document.querySelector(".header");
	const main = document.querySelector(".main");
	const footer = document.querySelector(".footer");
	const cardContainer = document.createElement("div");
	cardContainer.classList.add("product-card");
	cardContainer.addEventListener("dblclick", (event) => {
		event.stopPropagation();
		event.stopImmediatePropagation();
		createProductSpecification(product);
		header.classList.add("blur-background");
		main.classList.add("blur-background");
		footer.classList.add("blur-background");
	})

	const { image } = product;
	const firstImage = image[0];
	const divImageContainer = createProductimage(firstImage);

	const divInfoProductContainer = createInfoProductContainer(product, index);

	cardContainer.append(divImageContainer);
	cardContainer.append(divInfoProductContainer);

	return cardContainer;
};

/**
 * filter the array of products by a given name
 *
 * @param {*} name Input value to search products on the array.
 * @returns An Array filtered with products with the same given name
 */
const filterProductsByName = (name) => {
	if (!name) {
		renderTitleCatalog(productsOnStorage);
		return productsOnStorage;
	}
	const filterByName = productsOnStorage.filter((product) =>
		product.name.toLowerCase().includes(name.trim().toLowerCase())
	);
	renderTitleCatalog(filterByName);
	return filterByName;
};

const filterProductsByLaptops = (name) => {
	const filterByLaptops = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "laptops";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByLaptops.length) {
		renderTitleCatalog(filterByLaptops);
		return filterByLaptops;
	}
	return productsOnStorage;
};

const filterProductsByMonitors = (name) => {
	const filterByMonitors = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "monitor";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByMonitors.length) {
		renderTitleCatalog(filterByMonitors);
		return filterByMonitors;
	}
	return productsOnStorage;
};

const filterProductsByTablets = (name) => {
	const filterByTablets = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "tablets";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByTablets.length) {
		renderTitleCatalog(filterByTablets);
		return filterByTablets;
	}
	return productsOnStorage;
};

const filterProductsByStorages = (name) => {
	const filterByStorages = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "almacenamiento";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByStorages.length) {
		renderTitleCatalog(filterByStorages);
		return filterByStorages;
	}
	return productsOnStorage;
};

const filterProductsByGaming = (name) => {
	const filterByGaming = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "gaming";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByGaming.length) {
		renderTitleCatalog(filterByGaming);
		return filterByGaming;
	}
	return productsOnStorage;
};

const filterProductsByHeadphones = (name) => {
	const filterByHeadphones = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "auriculares";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByHeadphones.length) {
		renderTitleCatalog(filterByHeadphones);
		return filterByHeadphones;
	}
	return productsOnStorage;
};

const renderCatalog = (filtroTexto = "") => {
	// SELECCION DE ELEMENTOS
	// const spanForProductsNumber = document.querySelector(".number-of-products");
	const catalogSection = document.querySelector(".catalog-section");
	const btnFullProducts = document.querySelector(".btn-full-informatica");
	const btnLaptopsProducts = document.querySelector(".btn-laptops-products");
	const btnMonitorsProducts = document.querySelector(".btn-monitors-products");
	const btnTabletsProducts = document.querySelector(".btn-tablets-products");
	const btnHeadphonesProducts = document.querySelector(".btn-headphones-products");
	const btnStoragesProducts = document.querySelector(".btn-storages-products");
	const btnGamingProducts = document.querySelector(".btn-gaming-products");
	const productsContainer = document.querySelector(".products-container");
	const trollyCatalog = document.querySelector(".trolly-container");
	clearContainer();

	if (btnFullProducts.classList.contains("open-all-products")) {
		const productsByName = filterProductsByName(filtroTexto);
		productsByName.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnLaptopsProducts.classList.contains("open-laptops-products")) {
		const onlyLaptopProducts = filterProductsByLaptops(filtroTexto);
		onlyLaptopProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnMonitorsProducts.classList.contains("open-monitors-products")) {
		const onlyMonitorsProducts = filterProductsByMonitors(filtroTexto);
		onlyMonitorsProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnTabletsProducts.classList.contains("open-tablets-products")) {
		const onlyTabletsProducts = filterProductsByTablets(filtroTexto);
		onlyTabletsProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnStoragesProducts.classList.contains("open-storages-products")) {
		const onlyStoragesProducts = filterProductsByStorages(filtroTexto);
		onlyStoragesProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnGamingProducts.classList.contains("open-gaming-products")) {
		const onlyGamingProducts = filterProductsByGaming(filtroTexto);
		onlyGamingProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnHeadphonesProducts.classList.contains("open-headphones-products")) {
		const onlyHeadphonesProducts = filterProductsByHeadphones(filtroTexto);
		onlyHeadphonesProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (!productsOnTrolly.length) {
		trollyCatalog.classList.add("dont-show");
		catalogSection.classList.remove("dont-show");
	}

	recalculateProductsInTheWishList();
	recalculateProductsInTheCar();
};

const renderTitleCatalog = (catalog) => {
	const divTitleCatalogContainer = document.querySelector(".title-catalog-container");
	divTitleCatalogContainer.innerHTML = "";

	const H3titleForCatalog = document.createElement("h3");
	H3titleForCatalog.classList.add("number-of-products");
	H3titleForCatalog.textContent = `(${catalog.length})`;
	divTitleCatalogContainer.append(H3titleForCatalog);

	return divTitleCatalogContainer;
};
