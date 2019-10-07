//Show mobile menu
const navSlide = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav-links');
    const bioButton = document.querySelector('.show-bio');
    //Toggle mobile Nav
    mobileMenu.addEventListener('click', () => {
        
        //Toggle nav
        nav.classList.toggle('nav-active');
        bioButton.classList.toggle('bio-btn-transparent');
        //mobile menu X animation
        mobileMenu.classList.toggle('toggle');
    });
   
}
//Invoke navSlide function
navSlide();

//Toggle bio visibility
function toggleVisible() {
    
    var bioSection = document.getElementById('bio')
    
    if (bioSection.style.display === "none") {

        bioSection.style.display = "block";
    } 
    else {
        bioSection.style.display = "none";
    }
}

//Form submit conformation
function ThankYouAlert() {
    alert("Thank you.");
}
