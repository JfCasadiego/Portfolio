const cards = document.querySelectorAll('.card');
const nav = document.querySelector('.navigation-bar');
const textSecont = document.querySelector(".writing-second-words")


let lastScrollPos = window.pageYOffset;   

cards.forEach(card =>{
    card.addEventListener('mousemove', function(e){

        const x =  e.pageX - card.offsetLeft;
        const y =  e.pageY - card.offsetTop;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
        
    })

    card.addEventListener('mouseenter', function(e){
        card.style.color="white"       
    })


    card.addEventListener('mouseleave', function(e){
        card.style.color="black"
    })
})

window.addEventListener("scroll", function(e){

    if (window.pageYOffset < lastScrollPos) {
        nav.style.top="0px"
      } else {
        nav.style.top="-3rem"
      }
    
    lastScrollPos = window.pageYOffset;   
});

const textLoad = () => {
    let delay = 0;
  
    const texts = [    "Freelancer.",    "Front-End developer.",    "Back-End developer.",    "Full-Stack developer.",  ];
  
    texts.forEach((text, index) => {
      setTimeout(() => {
        textSecont.textContent = text;
      }, delay + index * 4000);
    });
  };
  
  textLoad();
  setInterval(textLoad, 16000);