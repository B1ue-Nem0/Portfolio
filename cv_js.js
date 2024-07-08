/* show menu dropdown*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

/*show*/
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*hidden*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*hice menu*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')

}

navLink.forEach( n => n.addEventListener('click', linkAction))
/*scroll active menu*/
