import { renderCatalog } from "./render.js";

export function initCatalog(data) {
    const checkboxes = document.querySelectorAll('.catalog-form input[name="type"]')
    const form = document.querySelector('.catalog-form')
    const select = document.querySelector('.catalog__sort-select');
    const pagination = document.querySelector('.catalog__pagination');
    const ITEMS_PER_PAGE = 6
    let currentResult = []
    let currentPage = 1

    form.addEventListener('change', update);
    select.addEventListener('change', update);
    pagination.addEventListener('click', (e) => {
        const btn = e.target.closest('.catalog__pagination-link')
        if (!btn) return 

        currentPage = Number(btn.textContent)
        const start = (currentPage - 1) * ITEMS_PER_PAGE
        const end = start + ITEMS_PER_PAGE
        renderCatalog(currentResult.slice(start, end))
        renderPagination(currentResult.length)
    })

    update()

    function update() {
        currentPage = 1
        const checkedTypes = [...checkboxes].filter(cb => cb.checked).map(cb => cb.value)
        const status = document.querySelector('.catalog-form input[name="status"]:checked').value;

        currentResult = data.filter(card => {
            const typeMatch = checkedTypes.length === 0 || checkedTypes.some(t => card.type.includes(t))
            const statusMatch = status === 'all-item' || Object.values(card.availability).some(n => n > 0);
            return typeMatch && statusMatch
        })

        const sortValue = select.value

        if (sortValue === 'price-min') {
            currentResult.sort((a, b) => a.price.new - b.price.new)
        } else if (sortValue === 'price-max') {
            currentResult.sort((a, b) => b.price.new - a.price.new)
        } else if (sortValue === 'rating-max') {
            currentResult.sort((a, b) => b.rating - a.rating)
        } 

        renderPagination(currentResult.length);

        renderCatalog(currentResult.slice(0, ITEMS_PER_PAGE));
    }

    function renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
    
        if (totalPages <= 1) {
            pagination.innerHTML = ''
            return 
        }
    
        let buttonsHTML = ''
        for (let i = 1; i <= totalPages; i++) {
            const disabled = i === currentPage ? 'disabled' : ''
            buttonsHTML += `<li class="catalog__pagination-item">
                <button class="catalog__pagination-link" ${disabled}>${i}</button>
                 </li>`
        }
    
        pagination.innerHTML = buttonsHTML
    }

}