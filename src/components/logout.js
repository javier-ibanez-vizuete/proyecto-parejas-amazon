const createLogOutMenu = () => {
    const accountMenuContainer = document.querySelector(".account-container");
    
    const divMenuTextContainer = document.createElement("div");
    divMenuTextContainer.classList.add("menu-logout-container");

    const paragraphToLogOut = document.createElement("p");
    paragraphToLogOut.classList.add("paragraph-logout");
    paragraphToLogOut.textContent = "Cerrar Sesion";

    const spanForLogOutName = document.createElement("span");
    spanForLogOutName.classList.add("span-for-logout-name");

    paragraphToLogOut.addEventListener("click", () => {
        localStorage.clear();
        window.location.reload();
    })
    
    paragraphToLogOut.append(spanForLogOutName);
    divMenuTextContainer.append(paragraphToLogOut);
    accountMenuContainer.append(divMenuTextContainer);
};