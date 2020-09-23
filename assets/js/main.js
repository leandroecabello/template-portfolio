// variables
let btnMenu = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')
let linkMenu = document.querySelectorAll('.linkMenu')
let header = document.querySelector('#header')
let aboutMe = document.querySelector('#about-me')
let project = document.querySelector('#project')

// Functions   
const toggleMenu = event => {
    btnMenu.classList.toggle('is-active')
    menu.classList.toggle('active')
    event.preventDefault()
}

const scrollAnchor = (element, param) => {
    element.scrollIntoView({block: param, behavior: 'smooth'})
}

const scrollAnchorCondition = (element, param1, param2) => {
    if(screen.width < 1024){
        scrollAnchor(element,param1)
    }else{
        scrollAnchor(element,param2)
    }
}

// Events
window.addEventListener('scroll', () => {
    window.scrollY > 100 && (header.style.background = 'rgba(109, 12, 232,0.7)')
    window.scrollY < 100 && (header.style.background = 'transparent')
  });

btnMenu.addEventListener('click', toggleMenu, false)

for(let a of linkMenu){
    a.addEventListener('click', (event) => {
        let attr = a.attributes[0].value
        if(attr === '#about-me'){
            scrollAnchorCondition(aboutMe, "start", "end")
        }else if(attr === '#project'){
            scrollAnchorCondition(project, "start", "center")
        }else if(attr === '#contact'){
            scrollAnchor(document.querySelector('#contact'), "start")
        }
        toggleMenu(event)
    })
}

// ScrollReveal
ScrollReveal().reveal('.coverPage-image', { delay: 350 })
ScrollReveal().reveal('#coverPage-info-greeting', { delay: 350 })
ScrollReveal().reveal('#coverPage-info-presentation', { delay: 450 })
ScrollReveal().reveal('#coverPage-info-profession', { delay: 550 })
ScrollReveal().reveal('#aboutMe-title', { delay: 250 })
ScrollReveal().reveal('.aboutMe-content', { delay: 350 })
ScrollReveal().reveal('#aboutMe-content-skills-title', { delay: 350 })
ScrollReveal().reveal('.skill-items', { delay: 450 })
ScrollReveal().reveal('#project-title', { delay: 250 })
ScrollReveal().reveal('.content-project', { delay: 450 })
ScrollReveal().reveal('#contact-title', { delay: 250 })
ScrollReveal().reveal('.contact-farewell', { delay: 350 })
ScrollReveal().reveal('.content-contacts-icons', { delay: 550 })