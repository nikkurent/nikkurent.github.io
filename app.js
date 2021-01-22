const navBar = document.querySelector('.navbar-toogle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');
const backArrow = document.querySelector('.back-arrow');
const links = document.querySelectorAll('.nav-links li');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const education = document.querySelector('.education');
const contacts = document.querySelector('.contacts');


/* Mobile Navbar */
navBar.addEventListener('click', active);

links.forEach((link) =>{
    link.addEventListener('click', active)
})

function active(){
    navBar.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('active')
}

/* Navbar Scroll Links */
links[0].addEventListener('click', ()=>{
    about.scrollIntoView(false);
})
links[1].addEventListener('click', ()=>{
    projects.scrollIntoView(true);
})
links[2].addEventListener('click', ()=>{
    education.scrollIntoView(true);
})
links[3].addEventListener('click', ()=>{
    contacts.scrollIntoView(true);
})


/* Back to top */
backArrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


/* Animations  */
gsap.registerPlugin(ScrollTrigger);

    /* Hero Animations */
    gsap.from('#clip', {
        x:-1000,
        duration: 1,
        ease: "power2.out",

    })
    gsap.from('.hero-img', {
        x:1000,
        duration: 1,
        ease: "power2.out",
    })

    /* About Animations */
    gsap.from(".about .title-text", {
        scrollTrigger: {
            trigger: ".about .title-text",
            start: "top center"
        },
        x: -1000,
        duration: .7,
        ease: "power2.out",
        stagger: .3
      });

    gsap.from(".about .about-img", {
        scrollTrigger: {
            trigger: ".about",
            start: "top center",
        },
        x: 800,
        duration: 1.2,
        ease: "power2.out",
      });

    /* Projects Animations */
    let width = window.matchMedia("(min-width: 1050px)");
    if (width.matches) {
        gsap.from(".events-images", {
            scrollTrigger: {
                trigger: ".events-images",
                start: "top center"
            },
            x: 1000,
            duration: 1,
            ease: "power2.out",
        });

        
        gsap.from(".sudoku-img", {
            scrollTrigger: {
                trigger: ".sudoku-img",
                start: "center bottom"
            },
            x: 1000,
            duration: 1,
            ease: "power2.out",
        });
    }

    /* Education Animations */
    gsap.from(".animation", {
        scrollTrigger: {
            trigger: ".education",
            start: "center bottom"
        },
        x: -1000,
        duration: .6,
        ease: "power2.out",
        stagger: .3,
    });

    /* Footer Animations */
    gsap.from("footer a", {
        scrollTrigger: {
            trigger: "body",
            start: "bottom bottom",
        },
        rotation: -690,
        duration: 1,
        ease: "power2.out",
    });










