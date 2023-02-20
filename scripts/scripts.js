const cards = document.querySelectorAll('.card');
const nav = document.querySelector('.navigation-bar');
let lastScrollPos = window.pageYOffset;   

cards.forEach(card =>{
    card.addEventListener('mousemove', function(e){

        const x =  e.pageX - card.offsetLeft;
        const y =  e.pageY - card.offsetTop;



        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
        card.style.color="white"
    })
    card.addEventListener('mouseleave', function(e){
        card.style.color="black"
    })
})


window.addEventListener("scroll", function(e){
     
    
    if (window.pageYOffset < lastScrollPos) {
        nav.style.height="3rem"
      } else {
        nav.style.height="0rem"
      }
    
    lastScrollPos = window.pageYOffset; 
  
    
});