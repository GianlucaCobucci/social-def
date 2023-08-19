const root = document.documentElement;
//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item")
//MESSAGGI
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
//THEME CUSTOM
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
//CHANGE THEME COLOR 
const colorPalette = document.querySelectorAll(".choose-color span");
let primaryHue = 252;
//CHANGE BACKGOUND COLOR 
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
let lightColorLightness = "95%";
let whiteColorLightness = "100%";
let darkColorLightness = "17%";
//ACTIVE BAR SUI MESSAGGI
const category = document.querySelector(".category");
const activeBar = document.querySelector(".active-bar");

/* SIDEBAR */
//rimuovi active da tutti gli items della sidebar
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}
//aggiungi active (striscia viola) a tutti gli items della sidebar
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id !== "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    })
})

/* MESSAGGI */
//cerca chat
messageSearch.addEventListener("keyup", () => {
    const value = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        const name = chat.querySelector("h5").textContent.toLowerCase();
        chat.style.display = name.includes(value) ? "flex" : "none";
    });
});
//sottolinea messaggi quando menu item è cliccato
messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none"
    }, 1000);
})

/* THEME CUSTOM */
//apri e chiudi modale
theme.addEventListener("click", () => {
    themeModal.style.display = "grid";
});
themeModal.addEventListener("click", (event) => {
    if (event.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
});

/* CHANGE THEME COLOR */
//cambia colore principale
colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        changeActiveColorClass()
        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }
        color.classList.add("active")
        document.documentElement.style.setProperty("--primary-color-hue", primaryHue);
    });
});
//togli active 
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove("active");
    })
}

/* CHANGE BACKGOUND COLOR  */
//cambia colore backgound
const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness)
    root.style.setProperty("--white-color-lightness", whiteColorLightness)
    root.style.setProperty("--dark-color-lightness", darkColorLightness)
}
const setActiveBackground = (activeBG) => {
    bg1.classList.remove("active");
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    activeBG.classList.add("active");
};
bg1.addEventListener("click", () => {
    lightColorLightness = "95%";
    whiteColorLightness = "100%";
    darkColorLightness = "17%";
    setActiveBackground(bg1);
    changeBG();
});
bg2.addEventListener("click", () => {
    lightColorLightness = "15%";
    whiteColorLightness = "20%";
    darkColorLightness = "95%";
    setActiveBackground(bg2);
    changeBG();
});
bg3.addEventListener("click", () => {
    lightColorLightness = "0%";
    whiteColorLightness = "10%";
    darkColorLightness = "95%";
    setActiveBackground(bg3);
    changeBG();
});

/* ACTIVE BAR SUI MESSAGGI */
// Funzione per gestire il clic sugli elementi della categoria
category.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName === "H6") {
        // rimuovi la classe "active" dall'elemento attualmente attivo
        const currentActiveElement = category.querySelector(".active");
        currentActiveElement.classList.remove("active");
        // aggiungi la classe "active" all'elemento cliccato
        clickedElement.classList.add("active");
        // sposta la barra bianca sotto l'elemento cliccato
        const elementOffsetLeft = clickedElement.offsetLeft;
        activeBar.style.left = `${elementOffsetLeft}px`;
    }
});