document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.header__menu_stil a');
  
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // чтобы не перейти на другую страницу
            event.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
