/* ======================================================
   Mostasharak Medical Clinic
   main.js
   ====================================================== */


/* ===============================
LOADER
=============================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.classList.add("hide");

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/* ===============================
MOBILE MENU
=============================== */

const mobileMenu = document.querySelector(".mobile-menu");

const navbar = document.querySelector(".navbar");

if(mobileMenu){

    mobileMenu.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}


/* ===============================
CLOSE MENU AFTER CLICK
=============================== */

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

    });

});


/* ===============================
STICKY HEADER
=============================== */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});


/* ===============================
BACK TO TOP
=============================== */

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.classList.add("show");

    }

    else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});