const hamburgerMain = document.getElementById("hamburgerMain");
const hamburgerMobile = document.getElementById("hamburgerMobile");
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



// Let vars
let navOpened = false;
let DocumentScrollPosition;
let hamburgerButton;




document.body.onload = () => {
    setHamburgerVariableDepOnWidth();
    addClickToHamburgerButton();
}


document.body.onresize = () => {
    setHamburgerVariableDepOnWidth();
    addClickToHamburgerButton();
}





document.body.onscroll = () => {
    let DocumentScrollPosition = document.documentElement.scrollTop;
    if (!navOpened) {
        if (window.innerWidth > 665) {
            if (DocumentScrollPosition > 370) {
                stickLogoAndMenuTop();
            } else {
                unStickLogoAndMenuTop();
            }
        }
    }

}









// Functions outiside of events

function setHamburgerVariableDepOnWidth() {
    if (window.innerWidth < 665) {
        hamburgerButton = hamburgerMobile;
    } else {
        hamburgerButton = hamburgerMain;
    }
}

function addClickToHamburgerButton() {
    hamburgerButton.addEventListener("click", function () {
        hamburgerButton.classList.toggle("is-active");
        if (hamburgerButton.getAttribute("opened") == "false") {
            revealNavigationOverlay();
        }
        else if (hamburgerButton.getAttribute("opened") == "true") {
            hideNavigationOverlay();
        }
    });
}


function hideNavigationOverlay() {
    overlayNavigation.style.width = "0%";
    hamburgerButton.setAttribute("opened", "false");
    DocumentScrollPosition = document.documentElement.scrollTop;

    if (DocumentScrollPosition > 370) {
        stickLogoAndMenuTop();
    } else {
        if (window.innerWidth > 665) {
            hamburgerButton.classList.remove("hamburger-main-blue");
            logo.classList.remove("color-main-blue");
            unStickLogoAndMenuTop();
        }
    }



    navOpened = false;
    navBackground.classList.remove("nav-background-remove-shadow");
}

function revealNavigationOverlay() {
    overlayNavigation.style.width = "100%";
    hamburgerButton.setAttribute("opened", "true");
    hamburgerButton.classList.add("hamburger-main-blue");
    logo.classList.add("color-main-blue");
    navOpened = true;
    navBackground.classList.add("nav-background-remove-shadow");

}

function unStickLogoAndMenuTop() {
    logoAndMenu.style.top = "100px";
    navBackground.style.height = "0px";
    hamburgerButton.classList.remove("hamburger-main-blue");
    logo.classList.remove("color-main-blue");
}

function stickLogoAndMenuTop() {
    logoAndMenu.style.top = "30px";
    navBackground.style.height = "96px";
    hamburgerButton.classList.add("hamburger-main-blue");
    logo.classList.add("color-main-blue");
}
