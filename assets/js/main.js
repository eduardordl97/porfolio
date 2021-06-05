/*----------Mostrar Menu-------------*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/*----------Activar y remover menu-------------*/
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remover Menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}
navLink.forEach(n => n.addEventListener('click',linkAction))
/*----------Mostrar Menu-------------*/
/*----------Mostrar Menu-------------*/
/*----------Mostrar Menu-------------*/
/*----------Mostrar Menu-------------*/
/*----------Mostrar Menu-------------*/
/*----------Mostrar Menu-------------*/
