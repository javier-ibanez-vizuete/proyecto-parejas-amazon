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
    })
    if (isTouchDevice) {
        accountMenuContainer.addEventListener("click", (event) => {
            event.stopPropagation();
            divMenuTextContainer.style.visibility = "visible";
        })
        document.addEventListener("click", (event) => {
            event.stopPropagation()
            divMenuTextContainer.style.visibility = "hidden";
        })
    } else {
        accountMenuContainer.addEventListener("mouseenter", () => {
            console.log("Entrando en el div");
            divMenuTextContainer.style.visibility = "visible";
        })

        accountMenuContainer.addEventListener("mouseleave", () => {
            console.log("SAliendo del div");
            divMenuTextContainer.style.visibility = "hidden";
        })
    }

    
    paragraphToLogOut.append(spanForLogOutName);
    divMenuTextContainer.append(paragraphToLogOut);
    accountMenuContainer.append(divMenuTextContainer);
};