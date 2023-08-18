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
const searchMessage = () => {
    const value = messageSearch.value.toLowerCase();
    //console.log(value);
    message.forEach(chat => {
        let name = chat.querySelectorAll("h5").textContent.toLowerCase();
        if (name.includes(value)) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = "none";
        }
    });
};

messageSearch.addEventListener("keyup", searchMessage);

//sottolinea messaggi quando menu item è cliccato
messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none"
    }, 1000);
})

/* THEME CUSTOMIZATION */
//apri modale
const openThemeModal = () => {
    themeModal.style.display = "grid";
}
 
const closeThemeModal = (event) => {
    if(event.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none"
    }
}

//chiudi modale
themeModal.addEventListener("click", closeThemeModal)

theme.addEventListener("click", openThemeModal)




