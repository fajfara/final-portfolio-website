const hamburger = document.querySelector(".hamburger");
const overlayNavigation = document.getElementById("overlayNavigation");
const logo = document.getElementById("logo");
const logoAndMenu = document.getElementById("logo-and-menu");
const navBackground = document.getElementById("nav-background");
const navLinks = document.querySelectorAll('.overlay-content-nav-links');

navLinks.forEach(element => {
    element.addEventListener("click", () => {
        hideNavigationOverlay();
    });
});

logo.addEventListener("click", () => {
    location.reload();
})

// Let vars
let navOpened = false;
let DocumentScrollPosition;




document.body.onscroll = () => {
    let DocumentScrollPosition = document.documentElement.scrollTop;
    if (!navOpened) {
        if (DocumentScrollPosition > 370) {
            stickLogoAndMenuTop();
        } else {
            unStickLogoAndMenuTop();
        }
    }

}


hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    if (hamburger.getAttribute("opened") == "false") {
        revealNavigationOverlay();

    } else if (hamburger.getAttribute("opened") == "true") {
        hideNavigationOverlay();

    }
});


// Functions outiside of events


function hideNavigationOverlay() {
    overlayNavigation.style.width = "0%";

    hamburger.setAttribute("opened", "false");
    DocumentScrollPosition = document.documentElement.scrollTop;
    if (DocumentScrollPosition > 370) {
        stickLogoAndMenuTop();
    } else {
        unStickLogoAndMenuTop();
        hamburger.classList.remove("hamburger-main-blue");
        logo.classList.remove("color-main-blue");
    }



    navOpened = false;
    navBackground.classList.remove("nav-background-remove-shadow");
}

function revealNavigationOverlay() {
    overlayNavigation.style.width = "100%";
    hamburger.setAttribute("opened", "true");
    hamburger.classList.add("hamburger-main-blue");
    logo.classList.add("color-main-blue");
    navOpened = true;
    navBackground.classList.add("nav-background-remove-shadow");

}

function unStickLogoAndMenuTop() {
    logoAndMenu.style.top = "13%";
    navBackground.style.height = "0%";
    hamburger.classList.remove("hamburger-main-blue");
    logo.classList.remove("color-main-blue");
}

function stickLogoAndMenuTop() {
    logoAndMenu.style.top = "3%";
    navBackground.style.height = "10%";
    hamburger.classList.add("hamburger-main-blue");
    logo.classList.add("color-main-blue");
}
