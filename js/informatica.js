// ARRAY DE PRODUCTOS (OBJETOS)




const createProductInfo = (product) => {
	const divInfoContainer = document.createElement("div");
	divInfoContainer.classList.add("product-info-container")

	const h3ProductPrice = document.createElement("h3");
	h3ProductPrice.textContent = `${product.price}€`;
	divInfoContainer.append(h3ProductPrice);

	const h2ProductName = document.createElement("h2");
	h2ProductName.textContent = product.name;
	h2ProductName.classList.add("product-name");
	divInfoContainer.append(h2ProductName);
	
	const btnBuyProduct = document.createElement("button");
	btnBuyProduct.classList.add("btn");
	btnBuyProduct.textContent = "Comprar";
	divInfoContainer.append(btnBuyProduct);
	// const productInfo = document.createElement("div");
	// productInfo.classList.add("product-info");

	// const infoDiv = document.createElement("div");

	// const productPrice = document.createElement("h3");
	// productPrice.textContent = product.price + " €";
	// const productTitle = document.createElement("p");
	// productTitle.textContent = product.name;

	// const containerButtonDiv = document.createElement("div");
	// infoDiv.classList.add("container-shop-btn")
	// infoDiv.textContent = "Comprar";

	// productInfo.append(infoDiv);
	// productInfo.append(productPrice);
	// productInfo.append(productTitle);
	// productInfo.append(containerButtonDiv);

	return divInfoContainer;
}

const createProductImg = (img, title) => {
	const imageContainer = document.createElement("div");
	imageContainer.classList.add("image-container");
	
	const productImg = document.createElement("img");
	productImg.src = img;
	productImg.alt = title;

	imageContainer.append(productImg);

	return imageContainer;
}

const createProductCard = (product) => {
	const productCardDiv = document.createElement("div");
	productCardDiv.classList.add("product-card");

	const {image, name} = product;
	const img = createProductImg(image, name);
	productCardDiv.append(img);

	const productInfoDiv = createProductInfo(product);
	productCardDiv.append(productInfoDiv);

	return productCardDiv;
}

products.forEach((product) => {
	const productsContainer = document.getElementById("products");

	const productCard = createProductCard(product);

	productsContainer.append(productCard);
});





