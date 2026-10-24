export function initCatalogMenu() {
    const catalogBtn = document.querySelector('.header__catalog-btn')
    const menu = document.querySelector('.main-menu')
    const closeBtn = document.querySelector('.main-menu__close')

    catalogBtn.addEventListener('click', () => {
        menu.classList.add('main-menu--active')
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('main-menu--active')
    });
}