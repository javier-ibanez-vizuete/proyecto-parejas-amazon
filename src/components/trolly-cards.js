const calculateTotalTrollyPrice = () => {
	return productsOnTrolly.reduce((total, product) => {
		return total + product.price * product.quantity;
	}, 0);
};

const removeFromTrollyCatalog = (product) => {
	const indexOfProduct = productsOnTrolly.findIndex((element) => element.id === product.id);
	productsOnTrolly.splice(indexOfProduct, 1);
	const productToRemoveFromTrolly = productsOnStorage.findIndex((productOnCloud) => productOnCloud.id === product.id);
	productsOnStorage[productToRemoveFromTrolly].addcart = false;

	if (!productsOnTrolly.length) {
		renderCatalog();
	}
	saveDataInStorage("productsOnStorage", productsOnStorage);
	saveDataInStorage("trolly", productsOnTrolly);
	renderCatalog();
};

const clearTrolly = () => {
	productsOnTrolly.length = 0;
	productsOnStorage.forEach((product) => (product.addcart = false));
	saveDataInStorage("productsOnStorage", productsOnStorage);
	saveDataInStorage("trolly", productsOnTrolly);
	renderTrolly();
	if (!productsOnTrolly.length) {
		renderCatalog();
	}
};

const createquantityButtonsControls = (quantity, id) => {
	const divButtonsQuantityContainer = document.createElement("div");
	divButtonsQuantityContainer.classList.add("div-control-quantity-buttons-container");

	const btnDecreaseProductQuantity = document.createElement("button");
	btnDecreaseProductQuantity.classList.add("btn-decrease-quantity-product");
	btnDecreaseProductQuantity.textContent = "-";
	btnDecreaseProductQuantity.addEventListener("click", () => {
		const product = productsOnTrolly.find((product) => product.id === id);
		const indexOfProduct = productsOnTrolly.findIndex((p) => p.id === id);
		if (!product) {
			return;
		}
		product.quantity -= 1;
		if (product.quantity === 0) {
			productsOnTrolly.splice(indexOfProduct, 1);
			productsOnStorage[indexOfProduct].addcart = false;
			saveDataInStorage("productsOnStorage", productsOnStorage);
			saveDataInStorage("trolly", productsOnTrolly);
			renderCatalog();
			recalculateProductsInTheCar();
		}
		
		saveDataInStorage("trolly", productsOnTrolly);
		renderTrolly();
	});

	const containerQuantityProductDisplay = document.createElement("div");
	containerQuantityProductDisplay.classList.add("container-quantity-product-display");

	const spanQuantityProductDisplay = document.createElement("span");
	spanQuantityProductDisplay.classList.add("span-quantity-product-display");
	spanQuantityProductDisplay.textContent = quantity;
	containerQuantityProductDisplay.append(spanQuantityProductDisplay);

	const btnIncreaseProductQuantity = document.createElement("button");
	btnIncreaseProductQuantity.classList.add("btn-increase-quantity-product");
	btnIncreaseProductQuantity.textContent = "+";
	btnIncreaseProductQuantity.addEventListener("click", () => {
		const product = productsOnTrolly.find((product) => product.id === id);
		if (!product) {
			return;
		}
		product.quantity += 1;
		saveDataInStorage("trolly", productsOnTrolly);
		renderTrolly();
	});

	divButtonsQuantityContainer.append(
		btnDecreaseProductQuantity,
		containerQuantityProductDisplay,
		btnIncreaseProductQuantity
	);

	return divButtonsQuantityContainer;
};

const createTrollyCard = (product) => {
	const header = document.querySelector(".header");
	const main = document.querySelector(".main");
	const footer = document.querySelector(".footer");

	const divTrollyCard = document.createElement("div");
	divTrollyCard.classList.add("trolly-card");
	divTrollyCard.addEventListener("dblclick", (event) => {
		event.stopPropagation();
		event.stopImmediatePropagation();
		createProductSpecification(product);
		header.classList.add("blur-background");
		main.classList.add("blur-background");
		footer.classList.add("blur-background");
	});
	const divImageTrollyCardContainer = document.createElement("div");
	divImageTrollyCardContainer.classList.add("card-trolly-image-container");

	const { image } = product;
	const firstImage = image[0];
	const imageTrollyCard = document.createElement("img");
	imageTrollyCard.src = firstImage;
	divImageTrollyCardContainer.append(imageTrollyCard);

	const divInfoTrollyCardContainer = document.createElement("div");
	divInfoTrollyCardContainer.classList.add("card-info-trolly-container");

	const h3PriceTrollyCard = document.createElement("h3");
	h3PriceTrollyCard.textContent = `${product.price}€`;
	divInfoTrollyCardContainer.appendChild(h3PriceTrollyCard);

	const productTrollyName = document.createElement("p");
	productTrollyName.classList.add("product-trolly-name");
	productTrollyName.textContent = product.name;
	divInfoTrollyCardContainer.appendChild(productTrollyName);

	const { quantity, id } = product;
	const containerButtonsQuantity = createquantityButtonsControls(quantity, id);
	productTrollyName.after(containerButtonsQuantity);

	const btnForRemoveFromTrolly = document.createElement("button");
	btnForRemoveFromTrolly.classList.add("btn-remove-from-trolly", "btn-style");
	btnForRemoveFromTrolly.textContent = "Eliminar del carrito";
	btnForRemoveFromTrolly.addEventListener("click", () => {
		removeFromTrollyCatalog(product);
		recalculateProductsInTheCar();
		renderTrolly();
	});
	divInfoTrollyCardContainer.appendChild(btnForRemoveFromTrolly);

	divTrollyCard.append(divImageTrollyCardContainer, divInfoTrollyCardContainer);

	return divTrollyCard;
};

const renderTrolly = () => {
	const divTrollySectionContainer = document.querySelector(".trolly-container");
	divTrollySectionContainer.innerHTML = "";

	const titleForTrolly = document.createElement("h3");
	titleForTrolly.classList.add("title-of-trolly");
	titleForTrolly.textContent = "Productos en Carrito";
	divTrollySectionContainer.append(titleForTrolly);

	const trollyCardsContainer = document.createElement("div");
	trollyCardsContainer.classList.add("product-on-trolly-container");

	productsOnTrolly.forEach((product) => {
		const productOnTrollyCard = createTrollyCard(product);

		trollyCardsContainer.append(productOnTrollyCard);
	});

	divTrollySectionContainer.append(trollyCardsContainer);

	const totalPriceContainer = document.createElement("div");
	totalPriceContainer.classList.add("total-price-container");

	const totalPriceLabel = document.createElement("h3");
	totalPriceLabel.textContent = `Total: ${calculateTotalTrollyPrice()}€`;
	totalPriceContainer.append(totalPriceLabel);

	const payButton = document.createElement("button");
	payButton.classList.add("btn-pay");
	payButton.textContent = "Pagar";
	payButton.addEventListener("click", () => {
		alert("Redirigiendo al pago...");
	});

	totalPriceContainer.append(payButton);

	const clearCartBtn = document.createElement("button");
	clearCartBtn.classList.add("btn-clear-cart", "btn-style");
	clearCartBtn.textContent = "Vaciar Carrito";
	clearCartBtn.addEventListener("click", () => {
		if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
			clearTrolly();
		}
	});

	totalPriceContainer.append(clearCartBtn);
	divTrollySectionContainer.append(totalPriceContainer);
};
