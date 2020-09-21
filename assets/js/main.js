
let btnMenu = document.querySelector('.hamburger');
let menu = document.querySelector('.menu')
//let logo = document.querySelector('.logo')
let linkMenu = document.getElementsByTagName('li')
let animate = document.querySelectorAll('.animate')    
let header = document.querySelector('#header')

// method
    
const toggleMenu = event => {
    btnMenu.classList.toggle('is-active');
    menu.classList.toggle('active');
    event.preventDefault();
}

window.addEventListener('scroll', function () {
    window.scrollY > 100 && (header.style.background = 'rgba(109, 12, 232,0.5)');
    window.scrollY < 100 && (header.style.background = 'transparent');
  });

// event
btnMenu.addEventListener('click', toggleMenu, false);

for(let li of linkMenu){
    li.addEventListener('click', (event) => {
        console.log('click enlace')
        toggleMenu(event)
    })
}

ScrollReveal().reveal('.coverPage-image', { delay: 350 });
ScrollReveal().reveal('#coverPage-info-greeting', { delay: 350 });
ScrollReveal().reveal('#coverPage-info-presentation', { delay: 450 });
ScrollReveal().reveal('#coverPage-info-profession', { delay: 550 });
ScrollReveal().reveal('#aboutMe-title', { delay: 250 });
ScrollReveal().reveal('.aboutMe-content', { delay: 350 });
ScrollReveal().reveal('#aboutMe-content-skills-title', { delay: 250 });
ScrollReveal().reveal('.skill-items', { delay: 450 });