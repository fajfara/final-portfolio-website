const hamburgerMain = document.getElementById("hamburgerMain");
const hamburgerMobile = document.getElementById("hamburgerMobile");
const overlayNavigation = document.getElementById("overlayNavigation");
const logo = document.getElementById("logo");
const logoAndMenu = document.getElementById("logo-and-menu");
const navBackground = document.getElementById("nav-background");
const navLinks = document.querySelectorAll('.overlay-content-nav-links');

navLinks.forEach(element => {
    element.addEventListener("click", () => {
        hideNavigationOverlay(hamburgerMain);
    });
});



// Let vars
let navOpened = false;
let DocumentScrollPosition;





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


hamburgerMain.addEventListener("click", function () {
    hamburgerMain.classList.toggle("is-active");
    if (hamburgerMain.getAttribute("opened") == "false") {
        revealNavigationOverlay(hamburgerMain);

    } else if (hamburgerMain.getAttribute("opened") == "true") {
        hideNavigationOverlay(hamburgerMain);

    }
});

hamburgerMobile.addEventListener("click", function () {
    hamburgerMobile.classList.toggle("is-active");
    if (hamburgerMobile.getAttribute("opened") == "false") {
        revealNavigationOverlay(hamburgerMobile);

    } else if (hamburgerMobile.getAttribute("opened") == "true") {
        hideNavigationOverlay(hamburgerMobile);

    }
});


// Functions outiside of events


function hideNavigationOverlay(hamburger) {
    overlayNavigation.style.width = "0%";
    hamburger.classList.toggle("is-active");
    hamburger.setAttribute("opened", "false");
    DocumentScrollPosition = document.documentElement.scrollTop;
    if (DocumentScrollPosition > 370) {
        stickLogoAndMenuTop();
    } else {
        if (window.innerWidth > 665) {
            hamburger.classList.remove("hamburger-main-blue");
            logo.classList.remove("color-main-blue");
            unStickLogoAndMenuTop();
        }
    }



    navOpened = false;
    navBackground.classList.remove("nav-background-remove-shadow");
}

function revealNavigationOverlay(hamburger) {
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
    hamburgerMain.classList.remove("hamburger-main-blue");
    logo.classList.remove("color-main-blue");
}

function stickLogoAndMenuTop() {
    logoAndMenu.style.top = "3%";
    navBackground.style.height = "10%";
    hamburgerMain.classList.add("hamburger-main-blue");
    logo.classList.add("color-main-blue");
}
