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



const renderCatalog = () => {
    // clearContainer();
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
        saveDataInStorage("userName", inputName.value)
        window.location.href = "/pages/informatica.html";
	});
};

document.addEventListener("DOMContentLoaded", () => {
	changepage();

});
