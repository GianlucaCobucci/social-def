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
//CHANGE COLOR 
const colorPalette = document.querySelectorAll(".choose-color span");
let primaryHue = 252; 

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

/* THEME CUSTOMIZATION */
//apri e chiudi modale
theme.addEventListener("click", () => {
    themeModal.style.display = "grid";
});

themeModal.addEventListener("click", (event) => {
    if (event.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
});

/* CHANGE COLOR */
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