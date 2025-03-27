const createLoginAndUserName = () => {
	const inputLogin = document.querySelector("#loginInput");
	const btnContinue = document.querySelector(".continue-btn");
	const spanForUserName = document.querySelector(".span-for-user-name");

	btnContinue.addEventListener("click", (event) => {
		event.preventDefault();
		if (!inputLogin.value) {
			window.location.reload();
		}
		const divLoginContainer = document.querySelector(".login-background-container");
		divLoginContainer.style.display = "none";
		saveDataInStorage("username", inputLogin.value);
        document.title = "Informatica | Amazon.es"
        saveDataInStorage("document-title", document.title);
		spanForUserName.textContent = getDataFromStorage("username");
		window.location.reload();
	});
	if (getDataFromStorage("username")) {
		spanForUserName.textContent = getDataFromStorage("username");
	}
};
