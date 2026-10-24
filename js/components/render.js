import {createCard} from './createCard.js'
import { initTooltips } from './tooltip.js'

export async function renderCards() {
    const response = await fetch('./data/data.json')
    const data = await response.json()
    
    renderCatalog(data)

    return data
} 

export function renderCatalog(cards) {
    const list = document.querySelector('.catalog__list')
    list.innerHTML = cards.map(card => `<li class="catalog__item">${createCard(card)}</li>`).join('')

    initTooltips(list)
}