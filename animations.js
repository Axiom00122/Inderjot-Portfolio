/* ==========================================================
        ADVANCED ANIMATION ENGINE
        animations.js
========================================================== */

class AnimationController{

    constructor(){

        this.init();

    }

    init(){

        this.heroAnimation();

        this.parallaxBackground();

        this.revealProjects();

        this.floatingCards();

        this.glowEffect();

    }

}

/* ==========================================================
        HERO ENTRANCE
========================================================== */

AnimationController.prototype.heroAnimation=function(){

    const hero=document.querySelector(".hero-content");

    if(!hero) return;

    hero.animate(

        [

            {

                opacity:0,

                transform:"translateY(80px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],

        {

            duration:1500,

            easing:"ease-out",

            fill:"forwards"

        }

    );

};

/* ==========================================================
        PARALLAX BACKGROUND
========================================================== */

AnimationController.prototype.parallaxBackground=function(){

    const background=document.querySelector(".space-background");

    if(!background) return;

    window.addEventListener("mousemove",(e)=>{

        const x=(window.innerWidth/2-e.clientX)/80;

        const y=(window.innerHeight/2-e.clientY)/80;

        background.animate(

            [

                {

                    transform:

                    `translate(${x}px,${y}px)`

                }

            ],

            {

                duration:1200,

                fill:"forwards"

            }

        );

    });

};

/* ==========================================================
        PROJECT REVEAL
========================================================== */

AnimationController.prototype.revealProjects=function(){

    const cards=document.querySelectorAll(".project-card");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.animate(

                    [

                        {

                            opacity:0,

                            transform:

                            "translateY(100px)"

                        },

                        {

                            opacity:1,

                            transform:

                            "translateY(0)"

                        }

                    ],

                    {

                        duration:1000,

                        fill:"forwards"

                    }

                );

            }

        });

    },{

        threshold:.2

    });

    cards.forEach(card=>observer.observe(card));

};

/* ==========================================================
        FLOATING CARDS
========================================================== */

AnimationController.prototype.floatingCards=function(){

    const cards=document.querySelectorAll(".glass-card");

    cards.forEach((card,index)=>{

        card.animate(

            [

                {

                    transform:"translateY(0)"

                },

                {

                    transform:"translateY(-10px)"

                },

                {

                    transform:"translateY(0)"

                }

            ],

            {

                duration:4000+(index*400),

                iterations:Infinity

            }

        );

    });

};

/* ==========================================================
        BUTTON GLOW
========================================================== */

AnimationController.prototype.glowEffect=function(){

    const buttons=document.querySelectorAll(

        ".primary-btn"

    );

    buttons.forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.animate(

                [

                    {

                        boxShadow:

                        "0 0 0px #8a5cff"

                    },

                    {

                        boxShadow:

                        "0 0 35px #8a5cff"

                    }

                ],

                {

                    duration:300,

                    fill:"forwards"

                }

            );

        });

    });

};

new AnimationController();
/* ==========================================================
        SHOOTING STAR ENGINE
========================================================== */

class ShootingStars {

    constructor() {

        this.start();

    }

    start() {

        setInterval(() => {

            this.create();

        }, 2500);

    }

    create() {

        const star = document.createElement("div");

        star.className = "shooting-star";

        star.style.top = Math.random() * 45 + "%";

        star.style.left = "-300px";

        star.style.opacity = Math.random();

        star.style.animationDuration =

            2 + Math.random() * 2 + "s";

        document.body.appendChild(star);

        setTimeout(() => {

            star.remove();

        }, 4500);

    }

}

new ShootingStars();


/* ==========================================================
        FLOATING PARTICLES
========================================================== */

class FloatingParticles {

    constructor() {

        this.create();

    }

    create() {

        for(let i=0;i<45;i++){

            const particle=document.createElement("div");

            particle.className="particle";

            particle.style.left=Math.random()*100+"vw";

            particle.style.top=Math.random()*100+"vh";

            particle.style.animationDelay=

            Math.random()*15+"s";

            particle.style.animationDuration=

            15+Math.random()*20+"s";

            document.body.appendChild(particle);

        }

    }

}

new FloatingParticles();


/* ==========================================================
        PROJECT 3D HOVER
========================================================== */

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateX=-(y-rect.height/2)/18;

        const rotateY=(x-rect.width/2)/18;

        card.style.transform=

        `perspective(1200px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        scale(1.02)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=

        "perspective(1200px) rotateX(0) rotateY(0)";

    });

});


/* ==========================================================
        NEBULA BREATHING
========================================================== */

const nebula=document.querySelector(".nebula");

if(nebula){

setInterval(()=>{

    nebula.animate(

    [

        {

            transform:"scale(1)"

        },

        {

            transform:"scale(1.15)"

        },

        {

            transform:"scale(1)"

        }

    ],

    {

        duration:12000,

        easing:"ease-in-out"

    });

},12000);

}


/* ==========================================================
        HERO PARALLAX DEPTH
========================================================== */

const heroTitle=document.querySelector(".hero h1");

const heroSubtitle=document.querySelector(".hero h2");

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/60;

    const y=(window.innerHeight/2-e.clientY)/60;

    if(heroTitle){

        heroTitle.style.transform=

        `translate(${x}px,${y}px)`;

    }

    if(heroSubtitle){

        heroSubtitle.style.transform=

        `translate(${x/2}px,${y/2}px)`;

    }

});


/* ==========================================================
        RANDOM STAR TWINKLE
========================================================== */

setInterval(()=>{

    document.querySelectorAll(

        ".stars,.stars2,.stars3"

    ).forEach(star=>{

        star.animate(

        [

            {

                opacity:.15

            },

            {

                opacity:.35

            },

            {

                opacity:.15

            }

        ],

        {

            duration:2500

        });

    });

},2500);


/* ==========================================================
        GLASS SHIMMER
========================================================== */

document.querySelectorAll(".glass-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.animate(

        [

            {

                transform:"translateY(0)"

            },

            {

                transform:"translateY(-12px)"

            }

        ],

        {

            duration:400,

            fill:"forwards"

        });

    });

});
/* ==========================================================
        INTRO ANIMATION
========================================================== */

window.addEventListener("load",()=>{

    document.body.animate(

    [

        {

            opacity:0

        },

        {

            opacity:1

        }

    ],

    {

        duration:1200,

        easing:"ease-out",

        fill:"forwards"

    });

});


/* ==========================================================
        PLANET ORBIT MOVEMENT
========================================================== */

const orbitElements=document.querySelectorAll(".orbit");

let orbitAngle=0;

function animateOrbits(){

    orbitAngle+=0.08;

    orbitElements.forEach((orbit,index)=>{

        orbit.style.transform=

        `rotate(${orbitAngle*(index+1)}deg)`;

    });

    requestAnimationFrame(animateOrbits);

}

animateOrbits();


/* ==========================================================
        CURSOR TRAIL
========================================================== */

const trail=[];

for(let i=0;i<15;i++){

    const dot=document.createElement("div");

    dot.className="cursor-dot";

    document.body.appendChild(dot);

    trail.push(dot);

}

let mouseX=0;

let mouseY=0;

document.addEventListener("mousemove",e=>{

    mouseX=e.clientX;

    mouseY=e.clientY;

});

function animateTrail(){

    let x=mouseX;

    let y=mouseY;

    trail.forEach(dot=>{

        dot.style.left=x+"px";

        dot.style.top=y+"px";

        x+=(parseFloat(dot.style.left||x)-x)*0.25;

        y+=(parseFloat(dot.style.top||y)-y)*0.25;

    });

    requestAnimationFrame(animateTrail);

}

animateTrail();


/* ==========================================================
        STAGGER SECTION ANIMATION
========================================================== */

const revealObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const children=[...entry.target.children];

            children.forEach((child,index)=>{

                child.animate(

                [

                    {

                        opacity:0,

                        transform:"translateY(60px)"

                    },

                    {

                        opacity:1,

                        transform:"translateY(0)"

                    }

                ],

                {

                    duration:800,

                    delay:index*120,

                    fill:"forwards",

                    easing:"ease-out"

                });

            });

        }

    });

},

{

    threshold:.25

});

document.querySelectorAll("section").forEach(section=>{

    revealObserver.observe(section);

});


/* ==========================================================
        LOGO PULSE
========================================================== */

const logo=document.querySelector(".logo");

if(logo){

    setInterval(()=>{

        logo.animate(

        [

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.08)"

            },

            {

                transform:"scale(1)"

            }

        ],

        {

            duration:2000

        });

    },5000);

}


/* ==========================================================
        PARALLAX PLANET GLOW
========================================================== */

const glow=document.querySelector(".planet-glow");

window.addEventListener("mousemove",e=>{

    if(!glow) return;

    const x=(e.clientX/window.innerWidth)*30;

    const y=(e.clientY/window.innerHeight)*30;

    glow.style.transform=

    `translate(${x}px,${y}px)`;

});


/* ==========================================================
        PERFORMANCE LOOP
========================================================== */

function animationLoop(){

    requestAnimationFrame(animationLoop);

}

animationLoop();


/* ==========================================================
        WEBSITE READY
========================================================== */

console.log(

"%cPortfolio Ready 🚀",

"color:#9B5CFF;font-size:18px;font-weight:bold;"

);