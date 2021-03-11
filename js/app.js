const dotsBtn = document.querySelector(".profile__details-dots");
const dotsOptions = document.querySelector(".profile__details-options");

dotsBtn.addEventListener("click", showMenu);

document.addEventListener("DOMContentLoaded", function () {
    if (!dotsOptions.classList.contains("profile__details-options--active")) {
        dotsOptions.classList.add("profile__details-options--closed");
    } else {
        dotsOptions.classList.remove("profile__details-options--closed");
    }
});

function classListener() {
    // menu.classList.remove("header-nav--mobile-active");
    // console.log("entered transition in else");

    if (
        dotsOptions.classList.contains("profile__details-options--active") &&
        dotsOptions.classList.contains("profile__details-options--closed")
    ) {
        dotsOptions.classList.remove("profile__details-options--active");
        console.log("entered transition in else");
    }
}

function showMenu() {
    if (!dotsOptions.classList.contains("profile__details-options--active")) {
        dotsOptions.classList.add("profile__details-options--active");
        dotsOptions.classList.remove("profile__details-options--closed");
        console.log("entered if");
    } else {
        dotsOptions.classList.add("profile__details-options--closed");
        dotsOptions.addEventListener("animationend", classListener);
        console.log("entered else");
    }
    console.log("function ended");
}
