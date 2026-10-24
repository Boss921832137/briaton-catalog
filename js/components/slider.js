import { createCard } from "./createCard.js"
import { initTooltips } from "./tooltip.js"

export function initSlider(data) {
    const dayCards = data.filter(card => card.goodsOfDay)
    const slidesHTML = dayCards.map(card => `<li class="day-products__item swiper-slide">${createCard(card)}</li>`).join('')
    const wrapper = document.querySelector('.day-products__list')
    wrapper.innerHTML = slidesHTML

    initTooltips(wrapper)

    new Swiper('.day-products__slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.day-products__navigation-btn--next',
            prevEl: '.day-products__navigation-btn--prev',
        }
    })
}
