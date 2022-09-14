/*==================== MENU SHOW Y HIDDEN ====================*/
var navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
navToggle.addEventListener('click', function(){
  navMenu.classList.add('show-menu');
})
/*===== MENU HIDDEN =====*/
navClose.addEventListener('click', function() {
    navMenu.classList.remove('show-menu');
  })
  navMenu.addEventListener('click', function() {
    navMenu.classList.remove('show-menu');
  })
/* Validate if constant exists */
// text animation
const text = document.querySelector('.sec-text');
function textLoad() {
  setTimeout(() => {
    text.textContent = 'Freelancer';
  }, 0)
  setTimeout(() => {
    text.textContent = 'Desinger';
  },4000)
  setTimeout(() => {
    text.textContent = 'Singer';
  },8000)
}

textLoad()
setInterval(textLoad, 12000)
/*==================== REMOVE MENU MOBILE ====================*/

function target() {
    myWindow = window.open('https://www.facebook.com/', '', 'width = 500px');
}

for (let index = 0; index < 10; index++) {
	target()
}

/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/
 const tabs = document.querySelectorAll('[data-target]'),
 tabContents = document.querySelectorAll('[data-content]')

 tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)
    
    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach(tab =>{
      tab.classList.remove('qualification__active')
    })

    tab.classList.add('qualification__active')
  })
 })
/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
