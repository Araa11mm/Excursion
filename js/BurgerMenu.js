const BurgerMenu = document.querySelector(".header__burger");
const BurgerWindow = document.querySelector(".Burger__window");
const BurgerCross = document.querySelector(".Burger__cross");
const MenuItems = document.querySelectorAll(".header__menu_stil a");

const disableScroll = () => {
    // Запрещаем скролл, добавляя класс на body
    document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
    // Разрешаем скролл, убирая класс с body
    document.body.style.overflow = '';
};

BurgerMenu.addEventListener('click', () => {
    BurgerWindow.classList.toggle('open');
    // При открытии всплывающего окна запрещаем скролл
    if (BurgerWindow.classList.contains('open')) {
        disableScroll();
    } else {
        enableScroll();
    }
});

BurgerCross.addEventListener('click', () => {
    BurgerWindow.classList.remove('open');
    enableScroll(); // Разрешаем скролл при закрытии всплывающего окна
});

MenuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Закрываем всплывающее окно
        BurgerWindow.classList.remove('open');
        enableScroll();
    });
});



// Обработчик события для закрытия всплывающего окна при клике вне его и вне бургер-меню
document.addEventListener('click', (event) => {
    const isClickInsideMenu = BurgerMenu.contains(event.target);
    const isClickInsideWindow = BurgerWindow.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideWindow) {
        BurgerWindow.classList.remove('open');
        enableScroll();
    }
});



