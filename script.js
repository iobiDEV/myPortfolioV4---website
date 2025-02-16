let skills = document.querySelectorAll('.skills')
let contactMe = document.querySelectorAll('.contact')

skills.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default jump-to behavior
        
        // Get the target section id from the href
        const targetId = this.getAttribute('skills');
        const targetSection = document.querySelector(targetId);
        
        // Smooth scroll to the section
        targetSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});