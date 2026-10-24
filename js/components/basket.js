 export function initBasket(data) {
    const basket = document.querySelector('.basket');
    const basketBtn = basket.closest('.header__user-item').querySelector('.header__user-btn');
    const counter = document.querySelector('.header__user-count');
    const emptyBlock = document.querySelector('.basket__empty-block');
    const basketList = document.querySelector('.basket__list')
    const list = document.querySelector('.catalog__list')

    function updateBasket() {
        const count = basketList.querySelectorAll('.basket__item').length
        counter.textContent = count
        
        if (count === 0) {
            emptyBlock.style.display = ''
        } else {
            emptyBlock.style.display = 'none'
        }
    }

    basketBtn.addEventListener('click', () => {
        basket.classList.toggle('basket--active')
    });

    list.addEventListener('click', (e) => {
        e.preventDefault()

        const button = e.target.closest('[data-id]')
        if (!button) return 

        const card = data.find(el => el.id === Number(button.dataset.id))
        basketList.insertAdjacentHTML('beforeend', createBasketCard(card));

        updateBasket()
    })

    basketList.addEventListener('click', (e) => {
        e.preventDefault()
        const closeBtn = e.target.closest('.basket__close');
        if (!closeBtn) return

        closeBtn.closest('.basket__item').remove()
        updateBasket()
    })

    updateBasket()
}

export function createBasketCard(card) {
    return `
        <li class="basket__item">
            <div class="basket__img">
                <img src="${card.image}" alt="Фотография товара" height="60" width="60">
            </div>
            <span class="basket__name">${card.name}</span>
            <span class="basket__price">${card.price.new} руб</span>
            <button class="basket__close" type="button">
                <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
                <use xlink:href="images/sprite.svg#icon-close"></use>
                </svg>
            </button>
        </li>
    `
}