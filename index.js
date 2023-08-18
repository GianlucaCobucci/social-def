//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item")
//MESSAGGI
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages")

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
        if(item.id !== "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    })
})

/* MESSAGGI */
messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none"
    }, 1000);
})






