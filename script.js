// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// CONTACT FORM

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        form.reset();

    });

}

// ACTIVE NAVBAR

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});

// SIMPLE IMAGE HOVER EFFECT

const cards = document.querySelectorAll(".drink-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// HEADER SHADOW ON SCROLL

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

    }
    else{

        header.style.boxShadow = "none";

    }

    // MENU FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const filterCards = document.querySelectorAll(".drink-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        filterCards.forEach(card => {

            if(filter === "all"){

                card.style.display = "block";

            }
            else if(card.classList.contains(filter)){

                card.style.display = "block";

            }
            else{

                card.style.display = "none";

            }

        });

    });

});

const tooltip = document.getElementById("tooltip");

const tTitle = document.getElementById("tTitle");
const tOrigin = document.getElementById("tOrigin");
const tTaste = document.getElementById("tTaste");
const tText = document.getElementById("tText");

const beans = document.querySelectorAll(".drink-card.bean");

beans.forEach(bean => {

    bean.addEventListener("click", (e) => {

        const rect = bean.getBoundingClientRect();

        tooltip.style.display = "block";

        tooltip.style.left = rect.right + 10 + "px";
        tooltip.style.top = rect.top + "px";

        tTitle.textContent = bean.dataset.title;
        tOrigin.textContent = bean.dataset.origin;
        tTaste.textContent = bean.dataset.taste;
        tText.textContent = bean.dataset.text;

    });

});

// закрытие при клике вне
window.addEventListener("click", (e) => {

    if(!e.target.closest(".drink-card.bean")){
        tooltip.style.display = "none";
    }

});

});