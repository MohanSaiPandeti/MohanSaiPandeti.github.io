/* ==========================================================
   MOHAN SAI PANDETI PORTFOLIO V3
   script.js
========================================================== */

/* ==========================
   Smooth Scrolling
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});

/* ==========================
   Sticky Navbar Shadow
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});

/* ==========================
   Fade-Up Animation
========================== */

const fadeElements = document.querySelectorAll(

    ".section, .project-card, .info-card, .skill-category, .education-card, .experience-card"

);

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

fadeElements.forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

/* ==========================
   Active Navbar Link
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

const sectionHeight = section.clientHeight;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

/* ==========================
   Back To Top Button
========================== */

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================
   Footer Year
========================== */

const footer = document.querySelector("footer p");

if(footer){

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Mohan Sai Pandeti. All Rights Reserved.`;

}

/* ==========================
   Reveal Hero
========================== */

window.addEventListener("load",()=>{

document.querySelector(".hero-content").style.opacity="1";

document.querySelector(".hero-content").style.transform="translateY(0)";

});

/* ==========================
   Hero Initial State
========================== */

const hero=document.querySelector(".hero-content");

hero.style.opacity="0";

hero.style.transform="translateY(30px)";

hero.style.transition="all .8s ease";

/* ==========================
   Console Signature
========================== */

console.log(

"%cPortfolio developed by Mohan Sai Pandeti",

"color:#2563EB;font-size:18px;font-weight:bold;"

);

console.log(

"%cSoftware Engineer | Java Full Stack Developer | Backend Developer",

"color:#6B7280;font-size:13px;"

);