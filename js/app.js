//Show mobile menu
const navSlide = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-links li');
    const bioButton = document.querySelector('.show-bio-btn');
    //Toggle mobile Nav
    mobileMenu.addEventListener('click', () => {
        
        //Toggle nav
        nav.classList.toggle('nav-active');
        bioButton.classList.toggle('bio-btn-transparent');
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation ='';
            }
            else{
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + .4}s`;
            }
        });
        //mobile menu X animation
        mobileMenu.classList.toggle('toggle');
    });
   
}
//Invoke navSlide function
navSlide();


//Show and close bio menu
// Select DOM Items
const showBio = document.querySelector('.show-bio');
const menu = document.querySelector('.menu');
const bio = document.querySelector('.bio');
const closeMenu = document.querySelector('#exit');

// Set Initial State Of Menu
let showMenu = false;

showBio.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        
        menu.classList.add('show');
        bio.classList.add('show');

        // Set Menu State
        showMenu = true;
    } else {
        
        menu.classList.remove('show');
        bio.classList.remove('show');

        // Set Menu State
        showMenu = false;
    }
}

