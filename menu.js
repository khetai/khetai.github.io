const menu = document.querySelector(".menu");
const mobilemenu = document.querySelector(".mobile-nav-toogle");
mobilemenu.addEventListener("click", () => {
    const visibility = menu.getAttribute('data-visible');
    if (visibility === "false") {
        menu.setAttribute('data-visible', true);
        mobilemenu.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        menu.setAttribute('data-visible', false);
        mobilemenu.setAttribute('aria-expanded', false);
    }
});
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("Sticky", window.scrollY > 0);
})