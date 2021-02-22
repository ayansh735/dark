const menu = document.querySelector("#menu");
const ul = document.querySelector("nav ul");
const li = document.querySelectorAll("nav ul li");

menu.addEventListener("click", () => {
    ul.classList.toggle("open");
    li.forEach(link => {
        link.classList.toggle("fade");
    });
});