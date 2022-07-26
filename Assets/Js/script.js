/*======= Montrer menu =========*/
const navMenu = document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')
/*================ SI LES CONST EXIST ============*/
if(navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.add('show')
    })
} 
if(navClose){
    navClose.addEventListener('click' , () =>{
        navMenu.classList.remove('show')
    })
}    
/*========= Retirer le menu mobile ========*/
const navLink = document.querySelector('.nav_links')

function linkAction(){
    //Aciver le lien 
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    //Retirer le Menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}