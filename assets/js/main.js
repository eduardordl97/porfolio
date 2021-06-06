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




function change(){
    if(document.getElementsByClassName('bx-moon')){
        document.getElementById('change-theme').classList.remove('bx-moon');
        document.getElementById('change-theme').classList.add('bx-sun');
    }else if(document.getElementsByClassName('bx-sun')){
        document.getElementById('change-theme').classList.remove('bx-sun');
        document.getElementById('change-theme').classList.add('bx-moon');
    }
   
     

}
document.getElementById('selector-theme').onclick = function(){
    change();
}

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
$(document).ready(function(){
    var theme = $('#theme')  
        
    $('#change-theme').click(function(){
        if(localStorage.getItem('light-mode')=== 'true'){
            theme.attr('href',"./assets/css/styles-DM.css") 
                if(theme.attr('href',"./assets/css/styles-DM.css")){ 
                    localStorage.setItem('light-mode','false') 
                    localStorage.setItem('dark-mode','true') 
                }else{
                    localStorage.setItem('light-mode','true') 
                    localStorage.setItem('dark-mode','false') 
                }

        }else{
            theme.attr('href',"./assets/css/styles.css")
                if(theme.attr('href',"./assets/css/styles.css")){ 
                    localStorage.setItem('light-mode','true') 
                    localStorage.setItem('dark-mode','false') 
                }else{
                    localStorage.setItem('light-mode','false') 
                    localStorage.setItem('dark-mode','true') 
                }
        }
            
            
    })
      
    if(localStorage.getItem('light-mode')=== 'true'){
        theme.attr('href','./assets/css/styles.css') 
        
    }else if(localStorage.getItem('dark-mode')=== 'true'){
        theme.attr('href','./assets/css/styles-DM.css')
    }
    
})
/*----------Mostrar Menu-------------*/
/*----------Mostrar Menu-------------*/
/*----------Mostrar Menu-------------*/
/*----------Mostrar Menu-------------*/
/*----------Mostrar Menu-------------*/
