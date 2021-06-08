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
/*----------Dark Mode-------------*/
$(document).ready(function(){
    
    $('#change-theme').click(function(){
        if(localStorage.getItem('light-mode')=== 'true'){
            document.body.classList.toggle('dark')
            $("#selector-theme").children("i").removeClass('bx-moon');
            $("#selector-theme").children("i").addClass("bx-sun");
    
            localStorage.setItem('light-mode','false') 
            localStorage.setItem('dark-mode','true') 
                   
        

        }else{
            document.body.classList.toggle('dark')
            $("#selector-theme").children("i").removeClass('bx-sun');
            $("#selector-theme").children("i").addClass("bx-moon");
            localStorage.setItem('light-mode','true') 
            localStorage.setItem('dark-mode','false') 

        }
            
            
    })
      
    if(localStorage.getItem('light-mode')=== 'true'){
        document.body.classList.remove('dark')
        $("#selector-theme").children("i").removeClass('bx-sun');
        $("#selector-theme").children("i").addClass("bx-moon");
       
        
    }else if(localStorage.getItem('dark-mode')=== 'true'){
        document.body.classList.add('dark')
        $("#selector-theme").children("i").removeClass('bx-moon');
        $("#selector-theme").children("i").addClass("bx-sun");
     
    }

    
})


/*----------Typed-------------*/
let typed2 = new Typed('#typed2', {
    strings: ['^1000 Eduardo',],
    typeSpeed: 200,
    fadeOut: true,     
});
/*----------Swiper-------------*/
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});

/*----------Mostrar Menu-------------*/
/*----------Mostrar Menu-------------*/
