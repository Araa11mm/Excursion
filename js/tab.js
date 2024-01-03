
const buttons = document.querySelectorAll(".descriptionSec__flex_font");
const tabContents = document.querySelectorAll(".tab__content");

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const selectedTab = button.getAttribute('data-tab');

        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        tabContents.forEach(function(content) {
            content.style.display = "none";
        });

        document.getElementById(selectedTab).style.display = "block";
    });
});
