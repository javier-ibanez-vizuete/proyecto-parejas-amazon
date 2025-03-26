const bodyContainer = document.querySelector(".body-container")

const createBackToTopButton = () => {
	const btnBackToTop = document.createElement("button");
	btnBackToTop.classList.add("btn-back-to-top");
	btnBackToTop.innerHTML = `
    		<svg class="svgIcon" viewBox="0 0 384 512">
				<path
					d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z">
				</path>
			</svg>`;
	document.body.appendChild(btnBackToTop);
};

const createFloatingTrollyButton = () => {
	
	const divFloatingTrollyContainer = document.createElement("div");
	divFloatingTrollyContainer.classList.add("floating-trolly-button");

	const spanFloatingTrolly = document.createElement("span");
	spanFloatingTrolly.classList.add("span-floating-products-on-trolly");
	spanFloatingTrolly.textContent = 0;
	divFloatingTrollyContainer.append(spanFloatingTrolly);

	const btnFloatingTrolly = document.createElement("button");
	const imgFloatingTrolly = document.createElement("img");
	imgFloatingTrolly.src = "/media/icons/icon-trolly-products-white.png"
	imgFloatingTrolly.alt = "black basket";
	btnFloatingTrolly.append(imgFloatingTrolly);
	divFloatingTrollyContainer.append(btnFloatingTrolly);

	bodyContainer.append(divFloatingTrollyContainer);
};