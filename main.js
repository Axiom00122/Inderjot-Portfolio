/* ==========================================================
   CREATIVE PORTFOLIO
   main.js
========================================================== */

const navbar = document.querySelector(".navbar");

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

const hero = document.querySelector(".hero");



/* ==========================================================
        NAVBAR ON SCROLL
========================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    }

    else {

        navbar.classList.remove("scrolled");

    }

});



/* ==========================================================
        ACTIVE NAVIGATION
========================================================== */

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* ==========================================================
        SMOOTH SCROLL
========================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(

            link.getAttribute("href")

        );

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});



/* ==========================================================
        SCROLL REVEAL
========================================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("section-show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("section-hidden");

    observer.observe(section);

});



/* ==========================================================
        MOUSE GLOW
========================================================== */

document.addEventListener("mousemove", e => {

    document.body.style.setProperty(

        "--mouse-x",

        e.clientX + "px"

    );

    document.body.style.setProperty(

        "--mouse-y",

        e.clientY + "px"

    );

});



/* ==========================================================
        HERO PARALLAX
========================================================== */

window.addEventListener("mousemove", e => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    hero.style.transform =

        `translate(${x}px, ${y}px)`;

});
/* ==========================================================
        SHOOTING STARS
========================================================== */

function createShootingStar() {

    const star = document.createElement("div");

    star.classList.add("shooting-star");

    star.style.top = Math.random() * 50 + "%";
    star.style.left = "-250px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 7000);

}

setInterval(createShootingStar, 3500);



/* ==========================================================
        FLOATING PARTICLES
========================================================== */

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDelay = Math.random() * 10 + "s";

    particle.style.animationDuration =
        10 + Math.random() * 20 + "s";

    document.body.appendChild(particle);

}



/* ==========================================================
        BUTTON RIPPLE
========================================================== */

document.querySelectorAll(".primary-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        circle.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        circle.style.left = e.clientX - rect.left + "px";

        circle.style.top = e.clientY - rect.top + "px";

        button.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 700);

    });

});



/* ==========================================================
        FLOATING PLANET
========================================================== */

const planet = document.querySelector(".main-planet");

window.addEventListener("scroll", () => {

    const value = window.scrollY * 0.15;

    planet.style.transform =

        `translate(-50%,-50%) rotate(${value}deg)`;

});



/* ==========================================================
        PROJECT HOVER
========================================================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 20;

        const rotateY = (x - rect.width / 2) / 20;

        card.style.transform =

            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "perspective(1200px) rotateX(0) rotateY(0)";

    });

});



/* ==========================================================
        HERO FADE
========================================================== */

window.addEventListener("scroll", () => {

    hero.style.opacity =

        1 - window.scrollY / 900;

});



/* ==========================================================
        SCROLL PROGRESS
========================================================== */

const progress = document.createElement("div");

progress.className = "scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const total =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const percent =

        window.scrollY / total;

    progress.style.width =

        percent * 100 + "%";

});
/* ==========================================================
                LOADING SCREEN
========================================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.classList.add("loader-hide");

        },1200);

    }

});


/* ==========================================================
                MOBILE MENU
========================================================== */

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

}


/* ==========================================================
                MAGNETIC BUTTONS
========================================================== */

const magneticButtons=document.querySelectorAll(
".primary-btn,.secondary-btn"
);

magneticButtons.forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const moveX=(x-rect.width/2)/8;

        const moveY=(y-rect.height/2)/8;

        button.style.transform=
        `translate(${moveX}px,${moveY}px)`;

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translate(0,0)";

    });

});


/* ==========================================================
                PARALLAX STARS
========================================================== */

const background=document.querySelector(".space-background");

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/70;

    const y=(window.innerHeight/2-e.clientY)/70;

    background.style.transform=
    `translate(${x}px,${y}px)`;

});


/* ==========================================================
                TYPING EFFECT
========================================================== */

const subtitle=document.querySelector(".hero h2");

if(subtitle){

const originalText=subtitle.innerText;

subtitle.innerHTML="";

let index=0;

function typing(){

    if(index<originalText.length){

        subtitle.innerHTML+=originalText.charAt(index);

        index++;

        setTimeout(typing,55);

    }

}

setTimeout(typing,700);

}


/* ==========================================================
                HERO BUTTON FADE
========================================================== */

const buttons=document.querySelector(".hero-buttons");

window.addEventListener("load",()=>{

    if(buttons){

        buttons.style.opacity=1;

        buttons.style.transform="translateY(0)";

    }

});


/* ==========================================================
                NAV LINK HOVER GLOW
========================================================== */

navLinks.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.style.textShadow=

        "0 0 15px rgba(140,90,255,.8)";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.textShadow="none";

    });

});


/* ==========================================================
                RANDOM STAR TWINKLE
========================================================== */

setInterval(()=>{

    const stars=document.querySelectorAll(

        ".stars,.stars2,.stars3"

    );

    stars.forEach(star=>{

        star.style.opacity=

        Math.random()*0.4+0.1;

    });

},2500);


/* ==========================================================
                NEBULA BREATHING
========================================================== */

const nebula = document.querySelector(".nebula");

if (nebula) {

    setInterval(() => {

        nebula.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.15)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 12000,
                easing: "ease-in-out"
            }
        );

    }, 12000);

}


/* ==========================================================
                CONSOLE MESSAGE
========================================================== */

console.log(

"%cWelcome to Inderjot's Portfolio 🚀",

"color:#8a5cff;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned with HTML • CSS • JavaScript",

"color:#4ea8ff;font-size:14px;"

);