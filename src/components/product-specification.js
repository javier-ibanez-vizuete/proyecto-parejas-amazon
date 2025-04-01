const createDetailsButtonsContainer = (product) => {
	const divButtonsContainer = document.createElement("div");
	divButtonsContainer.classList.add("div-btns-details-container");

	const btnWishedProduct = document.createElement("button");
	btnWishedProduct.classList.add("btn-details-wished-product", "btn-style");
	btnWishedProduct.textContent = product.wishlist ? "Eliminar de deseados" : "Añadir a deseados";
	btnWishedProduct.addEventListener("click", () => {
		product.wishlist = !product.wishlist;
		if (product.wishlist && !productsOnWishList.some(({ id }) => id === product.id)) {
			productsOnWishList.push(product);
		}
		const productToReplice = productsOnStorage.findIndex(({ id }) => id === product.id);
		productsOnStorage[productToReplice].wishlist = product.wishlist;

		if (!product.wishlist) {
			removeProductFromWishList(product);
		}
		btnWishedProduct.textContent = product.wishlist ? "Quitar de Deseados" : "Añadir a deseados";
		saveDataInStorage("wishlist", productsOnWishList);
		recalculateProductsInTheWishList();
		saveDataInStorage("productsOnStorage", productsOnStorage);
		renderCatalog();
		renderWishList();
	});
	divButtonsContainer.append(btnWishedProduct);

	// const productToBuy = { ...product, quantity: 1 };
	const btnTrollyProduct = document.createElement("button");
	btnTrollyProduct.classList.add("btn-details-trolly-prodct", "btn-style");
	btnTrollyProduct.textContent = product.addcart ? "Eliminar del Carrito" : "Agregar al carrito";
	btnTrollyProduct.addEventListener("click", () => {
		product.addcart = !product.addcart;
		if (product.addcart && !productsOnTrolly.some(({ id }) => id === product.id)) {
			productsOnTrolly.push(product);
		}
		const productToReplice = productsOnStorage.findIndex(({ id }) => id === product.id);
		productsOnStorage[productToReplice].wishlist = product.addcart;
		if (!product.addcart) {
			removeProductFromTrolly(product);
		}
		btnTrollyProduct.textContent = product.addcart ? "Eliminar del Carrito" : "Agregar al carrito";
		saveDataInStorage("trolly", productsOnTrolly);
		recalculateProductsInTheCar();
		saveDataInStorage("productsOnStorage", productsOnStorage);
		renderCatalog();
		renderTrolly();
	});
	divButtonsContainer.append(btnTrollyProduct);

	return divButtonsContainer;
};

const createDetailsProduct = (product) => {
	const divDetailsContainer = document.createElement("div");
	divDetailsContainer.classList.add("div-details-product-container");

	const h5ProductName = document.createElement("h5");
	h5ProductName.classList.add("name-product-details");
	h5ProductName.textContent = product.name;
	divDetailsContainer.append(h5ProductName);

	const divSeparator = document.querySelector(".separator");
	divDetailsContainer.append(divSeparator);

	const h4ProductPrice = document.createElement("h4");
	h4ProductPrice.textContent = `${product.price} €`;
	divDetailsContainer.append(h4ProductPrice);

	if (product.isPrime) {
		const divLogoPrimeContainer = document.createElement("div");
		divLogoPrimeContainer.classList.add("div-logo-prime-container");

		const imgPrime = document.createElement("img");
		imgPrime.src = "/media/logos/logo-prime-amazon.png";
		imgPrime.alt = "Amazon Prime Logo";
		divLogoPrimeContainer.append(imgPrime);

		h4ProductPrice.after(divLogoPrimeContainer);
	}

	const paragraphProductDelivery = document.createElement("p");
	paragraphProductDelivery.textContent = "Fecha de entrega: ";
	const spanDelivery = document.createElement("span");
	spanDelivery.textContent = product.isPrime ? "Hoy" : "Jueves antes de las 22h";
	paragraphProductDelivery.append(spanDelivery);
	divDetailsContainer.append(paragraphProductDelivery);

	const paragraphProductBrand = document.createElement("p");
	paragraphProductBrand.textContent = "Marca: ";
	const spanBrand = document.createElement("span");
	spanBrand.textContent = `${product.brand}`;
	paragraphProductBrand.append(spanBrand);
	divDetailsContainer.append(paragraphProductBrand);

	const paragraphProductModel = document.createElement("p");
	paragraphProductModel.textContent = "Modelo: ";
	const spanModel = document.createElement("span");
	spanModel.textContent = `${product.modelName}`;
	paragraphProductModel.append(spanModel);
	divDetailsContainer.append(paragraphProductModel);

	const paragraphProductColor = document.createElement("p");
	paragraphProductColor.textContent = "Color: ";
	const spanColor = document.createElement("span");
	spanColor.textContent = `${product.color}`;
	paragraphProductColor.append(spanColor);
	divDetailsContainer.append(paragraphProductColor);

	const btnsContainer = createDetailsButtonsContainer(product);
	divDetailsContainer.append(btnsContainer);

	return divDetailsContainer;
};

const createImagesContainer = (modelName, images) => {
	const divAllImagesContainer = document.createElement("div");
	divAllImagesContainer.classList.add("div-all-images-container");

	const divMiniImagesContainer = document.createElement("div");
	divMiniImagesContainer.classList.add("div-mini-images-container");

	const divMaxiImagesContainer = document.createElement("div");
	divMaxiImagesContainer.classList.add("div-maxi-images-container");

	const fakeImageContainer = document.createElement("div");
	fakeImageContainer.classList.add("fake-image");
	const imgFake = document.createElement("img");
	imgFake.src = images[0];
	imgFake.alt = modelName;
	fakeImageContainer.append(imgFake);
	divMaxiImagesContainer.append(fakeImageContainer);
	images.forEach((image, index) => {
		const divImageMiniContainer = document.createElement("div");
		divImageMiniContainer.classList.add("div-image-mini-container");

		const imageMini = document.createElement("img");
		imageMini.src = image;
		imageMini.alt = modelName;

		divImageMiniContainer.append(imageMini);
		divMiniImagesContainer.append(divImageMiniContainer);

		const divImageMaxiContainer = document.createElement("div");
		divImageMaxiContainer.classList.add("div-image-maxi-container");

		const imageMaxi = document.createElement("img");
		imageMaxi.src = image;
		imageMaxi.alt = modelName;

		divImageMaxiContainer.append(imageMaxi);
		divMaxiImagesContainer.append(divImageMaxiContainer);

		divImageMiniContainer.addEventListener("mouseover", () => {});

		divImageMiniContainer.addEventListener("mouseenter", () => {
			Array.from(document.querySelectorAll(".div-image-maxi-container"))[index].classList.add("show-with-hover");
			fakeImageContainer.classList.add("hide-with-hover");
		});
		divImageMiniContainer.addEventListener("mouseleave", () => {
			Array.from(document.querySelectorAll(".div-image-maxi-container"))[index].classList.remove(
				"show-with-hover"
			);
			fakeImageContainer.classList.remove("hide-with-hover");
		});
	});

	divAllImagesContainer.append(divMiniImagesContainer);
	divAllImagesContainer.append(divMaxiImagesContainer);

	return divAllImagesContainer;
};

const createProductSpecification = (product) => {
	const bodyContainer = document.querySelector(".body-container");
	const header = document.querySelector(".header");
	const main = document.querySelector(".main");
	const footer = document.querySelector(".footer");

	const divBgProductSpecification = document.createElement("div");
	divBgProductSpecification.classList.add("div-bg-product-container");

	const divProductContainer = document.createElement("div");
	divProductContainer.classList.add("div-product-specification-container");

	const btnToCloseProduct = document.createElement("button");
	btnToCloseProduct.classList.add("btn-to-close-product");
	btnToCloseProduct.textContent = "X";
	btnToCloseProduct.addEventListener("click", () => {
		divBgProductSpecification.remove();
		header.classList.remove("blur-background");
		main.classList.remove("blur-background");
		footer.classList.remove("blur-background");
	});
	divProductContainer.append(btnToCloseProduct);

	const { modelName, image } = product;
	const imagesContainer = createImagesContainer(modelName, image);
	divProductContainer.append(imagesContainer);

	const detailsProductContainer = createDetailsProduct(product);
	divProductContainer.append(detailsProductContainer);

	divBgProductSpecification.append(divProductContainer);

	bodyContainer.append(divBgProductSpecification);
};
