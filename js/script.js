/*=============  Scroll section active link  =====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLink = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*================= remove toggle icon and navbar when click navbar link (scroll) ===========================*/

navLink.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});
 
/*=============  Scroll section active link  ================================== */

let section = document.querySelectorAll('section');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar link
            navLink.forEach(links => {
                links.classList.remove('active');
            });
            // active section for Animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll
        else{
            sec.classList.remove('show-animate');
        }
    });

    /*======================= Sticky navbar =========================*/
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
}

/*===================== Scroll Reveal========================== */

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.portfolio-box, .contact form,.skills-column ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .education-box ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .title', { origin: 'right' });


