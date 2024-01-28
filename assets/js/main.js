/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// ==========*MENU SHOW=====*
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY > 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]')
const scrollActive =()=>{
    const scrollDowm=window.scrollY
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
                sectionTop=current.offsetTop-58,
                sectionId= current.getAttribute('id'),
                sectionsClass=document.querySelector('.nav__menu a[href*='+sectionId+']')
        if (scrollDowm>sectionTop&&scrollDowm>=sectionTop+sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'

// Previously select topc(if user selected)
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon=()=> themeButton.classList.contains(iconTheme)? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='ri-moon-line'? 'add':'remove'](iconTheme)
}
themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 400,

})
sr.reveal('.home__data, .join__container, .footer')
sr.reveal('.home__img',{origin:'bottom'})
sr.reveal('.enjoy__card, .popular__card',{interval: 100})
sr.reveal('.about__data',{origin:'right'})
sr.reveal('.about__img',{origin:'left'})



// toggle pop out menu
// Selecting Corner Menu Wrapper Element
const cornerMenuWrapper = document.getElementById('corner-menu-wrapper')
 
// Pop out / Hiding Menu Items when Corner Menu button is clicked
cornerMenuWrapper.querySelector('#corner-menu-btn').addEventListener('click', e=>{
    // prevent default
    e.preventDefault()
 
    if(cornerMenuWrapper.classList.contains('show')){
        // Hide the Menu Items
        cornerMenuWrapper.classList.remove('show')
        // Update Menu Button Icon
        cornerMenuWrapper.querySelector('#corner-menu-btn').innerHTML = `<span class="material-symbols-outlined">menu</span>`
    }else{
        // Show the Menu Items
        cornerMenuWrapper.classList.add('show')
        // Update Menu Button Icon
        cornerMenuWrapper.querySelector('#corner-menu-btn').innerHTML = `<span class="material-symbols-outlined">close</span>`
    }
})