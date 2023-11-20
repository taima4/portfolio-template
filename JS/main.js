const navbar = document.querySelector(".navbar");
const headerContent = document.querySelector(".header-content h3");
const loading = document.querySelector(".loading");
const scrollBtn = document.querySelector(".scroll-to-top");
const aboutContent = document.querySelector(".about");
const navLink = document.querySelectorAll(".nav-link");
const  activeLink =document.querySelector(".nav-link.active"); 
window.addEventListener("scroll", function () {
    if (window.scrollY >= headerContent.offsetTop) {
        navbar.style.backgroundColor = "#F8F7F7";
        navbar.style.boxShadow = "2px 2px 2px gray";
        navbar.style.height = "57.9px";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    }
    if (window.scrollY > aboutContent.offsetTop) {
        scrollBtn.classList.remove("opacity-0", "invisible");
    } else {
        scrollBtn.classList.add("opacity-0", "invisible");
    }
});

window.addEventListener("load", function () {
    this.setTimeout(function () {
        loading.classList.add("opacity-0", "invisible");
        document.body.style.overflow = "auto";
    }, 2000);
});

scrollBtn.addEventListener("click", function () {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function (e) {
        e.preventDefault();
        activeLink.classList.remove("active");
     /*  for (let j = 0; j < navLink.length; j++) {
            navLink[j].classList.remove("active");
        }*/
        navLink[i].classList.add("active");

        let currentId = this.getAttribute("href");
        let tergrtSection = document.querySelector(currentId);
        window.scroll({
            top: tergrtSection.offsetTop,
            behavior: "smooth",
        });
    });
}
