const smallnav = document.querySelector('.smallnav');
const small_list = document.querySelectorAll('.small_list');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const blank = document.querySelector('.blank');
const navHeight = header.offsetHeight;

document.getElementById('contact-form').addEventListener('submit', function(event) {

    event.target.reset();  // This resets all form fields to their initial values 
});

document.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
        e.preventDefault(); // Prevent zoom with Ctrl + Mouse Wheel
    }
}, { passive: false });

document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
        e.preventDefault(); // Prevent zoom with Ctrl/Cmd + or -
    }
});

small_list.forEach(links =>{
    links.addEventListener('click' , ()=>{
        smallnav.style.height = '0';
    })
})

//for scroll event//
window.addEventListener('scroll' , ()=>{

    if(window.scrollY >= navHeight){
        document.documentElement.style.setProperty('--topPadding', navHeight+'px');
    }
   });

   //for nav bar click event//
menu.addEventListener('click', () => {
    if (smallnav.style.height === '0px' || smallnav.style.height === '') {
        smallnav.style.height = '208px';  
    } else {
        smallnav.style.height = '0';
    }
});

/*--------for right click events---------*/
window.addEventListener('contextmenu', (event) => {
    event.preventDefault();  // Disable right-click
    alert("Right-click is disabled!");
});

window.addEventListener('keydown', (event) => {
    // Disable F12
    if (event.key === 'F12') {
        event.preventDefault();
        alert("F12 is disabled!");
    }
    // Disable Ctrl+Shift+I (DevTools)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        alert("Developer Tools are disabled!");
    }
    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
        alert("View Source is disabled!");
    }
});

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';  // Restores original size after 0.3s
    }, 200);
  });
});

