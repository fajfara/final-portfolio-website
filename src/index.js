import 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'reset-css';
import './sass/main.sass';




const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
});
