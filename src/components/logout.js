const createLogOutMenu = () => {
	const accountMenuContainer = document.querySelector(".account-container");

	const isTouchDevice = window.matchMedia("(hover: none)").matches;

	const divMenuTextContainer = document.createElement("div");
	divMenuTextContainer.classList.add("menu-logout-container");

	const paragraphToLogOut = document.createElement("p");
	paragraphToLogOut.classList.add("paragraph-logout");
	paragraphToLogOut.textContent = "Cerrar Sesion";

	const spanForLogOutName = document.createElement("span");
	spanForLogOutName.classList.add("span-for-logout-name");
	spanForLogOutName.textContent = ` (${getDataFromStorage("username")})`;

	paragraphToLogOut.addEventListener("click", () => {
		localStorage.clear();
		window.location.reload();
	});
	if (isTouchDevice) {
		accountMenuContainer.addEventListener("click", (event) => {
			event.stopPropagation();
			divMenuTextContainer.style.visibility = "visible";
		});
		document.addEventListener("click", () => {
			setTimeout(() => {
				divMenuTextContainer.style.visibility = "hidden";
			}, 400);
		});
	} else {
		accountMenuContainer.addEventListener("mouseenter", () => {
			divMenuTextContainer.style.transitionDuration = "0.3s";
			divMenuTextContainer.style.visibility = "visible";
		});

		accountMenuContainer.addEventListener("mouseleave", () => {
			divMenuTextContainer.style.transitionDuration = "0.3s";
			divMenuTextContainer.style.visibility = "hidden";
		});
	}

	paragraphToLogOut.append(spanForLogOutName);
	divMenuTextContainer.append(paragraphToLogOut);
	accountMenuContainer.append(divMenuTextContainer);
};
