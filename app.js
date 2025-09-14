// smooth scrolling script
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navlinks a');
    
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const yOffset = -65;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
});

// typed animation script
let typed = new Typed("#element", {
    strings: ["Freelancer", "Youtuber"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true, 
});

// slide in animation script
const aboutSection = document.querySelector(".left");

window.addEventListener('scroll', () => {
    const sectionPosition = aboutSection.getBoundingClientRect();

    if (sectionPosition.top <= window.innerHeight / 2) {
        aboutSection.classList.add('active');
    } else {
        aboutSection.classList.remove('active');
    }
});
