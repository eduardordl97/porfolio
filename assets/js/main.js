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

/*----------SCROLL REVEAL-------------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home_title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home_img',{delay: 400}); 
sr.reveal('.home_social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about_img',{}); 
sr.reveal('.about_subtitle',{delay: 400}); 
sr.reveal('.about_text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle',{}); 
sr.reveal('.container-box',{}); 
sr.reveal('.box1',{delay: 100}); 
sr.reveal('.box2',{delay: 200}); 
sr.reveal('.box3',{delay: 300}); 
sr.reveal('.box4',{delay: 400}); 
sr.reveal('.box5',{delay: 500}); 
sr.reveal('.box6',{delay: 600}); 
sr.reveal('.box7',{delay: 700}); 
sr.reveal('.box8',{delay: 800}); 
sr.reveal('.box9',{delay: 900}); 


/*SCROLL WORK*/
sr.reveal('.porfolio_container',{}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 
sr.reveal('.contact__form',{}); 

//FORM

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'aplication/json'
        }
    })
    if (response.ok){
        this.reset()
        alert('Gracias por contactarme')
    }
}


