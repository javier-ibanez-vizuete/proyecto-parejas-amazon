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
