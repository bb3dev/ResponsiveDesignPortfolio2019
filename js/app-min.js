const navSlide=()=>{const mobileMenu=document.querySelector('.mobile-menu');const nav=document.querySelector('.nav-links');const bioButton=document.querySelector('.show-bio');mobileMenu.addEventListener('click',()=>{nav.classList.toggle('nav-active');bioButton.classList.toggle('bio-btn-transparent');mobileMenu.classList.toggle('toggle')})}
navSlide();function toggleVisible(){var bioSection=document.getElementById('bio')
if(bioSection.style.display==="none"){bioSection.style.display="block"}
else{bioSection.style.display="none"}}
function ThankYouAlert(){alert("Thank you.")}