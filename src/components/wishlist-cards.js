const removeFromWishList = (id) => {
	const indexOfProduct = productsOnWishList.findIndex((product) => product.id === id);
	productsOnWishList.splice(indexOfProduct, 1);

	const productToRemoveFromWishList = productsOnStorage.findIndex((element) => element.id === id);
	productsOnStorage[productToRemoveFromWishList].wishlist = false;

	if (!productsOnWishList.length) {
		renderCatalog();
	}

	saveDataInStorage("wishlist", productsOnWishList);
	saveDataInStorage("productsOnStorage", productsOnStorage);
};

const clearWishList = () => {
	const catalogSection = document.querySelector(".catalog-section");
	const wishListCatalog = document.querySelector(".wishlist-container-section");
	const trollyCatalog = document.querySelector(".trolly-container");

	productsOnWishList.length = 0;
	productsOnStorage.forEach((product) => (product.wishlist = false));
	saveDataInStorage("wishlist", productsOnWishList);
	saveDataInStorage("productsOnStorage", productsOnStorage);
	renderWishList();
	console.log(productsOnWishList.length);
	if (!productsOnWishList.length) {
		console.log("¿Estoy entrando aqui?");
		catalogSection.classList.remove("dont-show");
		trollyCatalog.classList.add("dont-show");
		wishListCatalog.classList.add("dont-show");
		window.scrollTo(0, 0);

		renderCatalog();
	}
};

const createButtonForWishedCard = (id) => {
	const btnForWishedCard = document.createElement("button");
	btnForWishedCard.classList.add("btn-style", "btn-remove-wish-list");
	btnForWishedCard.textContent = "Eliminar de Deseados";

	btnForWishedCard.addEventListener("click", () => {
		removeFromWishList(id);
		recalculateProductsInTheWishList();

		renderWishList();
	});

	return btnForWishedCard;
};

const createInfoWishedCard = (product) => {
	const divInfoContainer = document.createElement("div");
	divInfoContainer.classList.add("wished-product-info-container");

	const h3PriceContainer = document.createElement("h3");
	h3PriceContainer.textContent = `${product.price}€`;

	const paragraphWishedProductName = document.createElement("p");
	paragraphWishedProductName.textContent = product.name;

	const { id } = product;
	const btnWishedCard = createButtonForWishedCard(id);

	divInfoContainer.append(h3PriceContainer, paragraphWishedProductName, btnWishedCard);

	return divInfoContainer;
};

const createImageForWishedProduct = (image) => {
	const imageContainer = document.createElement("div");
	imageContainer.classList.add("wished-product-image-container");

	const imgWishedProduct = document.createElement("img");
	imgWishedProduct.src = image;
	imageContainer.append(imgWishedProduct);

	return imageContainer;
};

const createWishListCard = (product) => {
	const header = document.querySelector(".header");
	const main = document.querySelector(".main");
	const footer = document.querySelector(".footer");

	const divWishedCard = document.createElement("div");
	divWishedCard.classList.add("wished-product-card");
	divWishedCard.addEventListener("dblclick", (event) => {
		event.stopPropagation();
		event.stopImmediatePropagation();
		createProductSpecification(product);
		header.classList.add("blur-background");
		main.classList.add("blur-background");
		footer.classList.add("blur-background");
	});

	const { image } = product;
	const firstImage = image[0];
	const imageWishedProduct = createImageForWishedProduct(firstImage);
	divWishedCard.append(imageWishedProduct);

	const infoCardContainer = createInfoWishedCard(product);
	divWishedCard.append(infoCardContainer);

	return divWishedCard;
};

const renderWishList = () => {
	const divWishListSectionContainer = document.querySelector(".wishlist-container-section");
	divWishListSectionContainer.innerHTML = "";

	const titleForWishList = document.createElement("h3");
	titleForWishList.classList.add("title-of-wish-list");
	titleForWishList.textContent = "Productos Deseados";
	divWishListSectionContainer.append(titleForWishList);

	const wishListProductsContainer = document.createElement("div");
	wishListProductsContainer.classList.add("products-on-wish-list-container");

	productsOnWishList.forEach((product) => {
		const wishListProductCard = createWishListCard(product);
		wishListProductsContainer.append(wishListProductCard);
	});

	divWishListSectionContainer.append(wishListProductsContainer);

	const wishlistBtnsContainer = document.createElement("div");
	wishlistBtnsContainer.classList.add("wishlist-buttons-container");

	const clearWishlist = document.createElement("button");
	clearWishlist.classList.add("reset-wishlist", "btn-style");
	clearWishlist.textContent = "Vaciar lista de deseos";
	clearWishlist.addEventListener("click", () => {
		if (confirm("¿Estás seguro de que quieres vaciar la lista de deseos?")) {
			clearWishList();
		}
	});

	divWishListSectionContainer.appendChild(wishlistBtnsContainer);
	wishlistBtnsContainer.appendChild(clearWishlist);
};
