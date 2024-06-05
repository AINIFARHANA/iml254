/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const shadowHeader = () => {
    const header = document.getElementById('header');
    
    window.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}

window.addEventListener('scroll', shadowHeader);

/* SCROLL REVEAL ANIMATION */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,  
    scale: 1.1,
});

sr.reveal('.home__data, .favorite__container, .section__title, .experience-box, .feature-vd');
sr.reveal('.home__circle, .home__img, .taylor__container, .taylor__data', { delay: 600, scale: 0.5 });
sr.reveal('.home__rainbow, .home__moon, .family__data, .family__title, .hana__header', { delay: 1000, interval: 100 });
sr.reveal('.home__ribbon, .new__card, .right_col', { delay: 1200 });
sr.reveal('.aboutme__img, .new__data, .contact__img, .music__description, .music__images', { origin: 'left' });
sr.reveal('.brands-box, .describe__container, .memories__img', { origin: 'right' });
sr.reveal('.aboutme__list, .contact__data, .photo__container, .music__indicator', { origin: 'right' });
sr.reveal('.banner__item, .family__img, .music__title, .music__subtitle', { interval: 100});
sr.reveal('.hobby__data')
sr.reveal('.hobby__img, .hobby__indicator, .music__img', {rotate: {z:-15}})


const parentContainer = document.querySelector('.school__container');

parentContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.classList.contains('read-more-btn');
    if (!isReadMoreBtn) return;
    const currentText = current.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
    current.textContent = current.textContent.includes('Read More') ? "READ LESS ..." : "READ MORE ...";
})

