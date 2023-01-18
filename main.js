const menu = document.querySelector("#menu");
const ul = document.querySelector("ul");
const close = document.querySelector("#close");
menu.addEventListener("click", function() {
    ul.classList.add("quan");
});
close.addEventListener("click", function() {
    ul.classList.remove("quan");
});