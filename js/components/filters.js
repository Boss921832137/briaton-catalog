export function countFilters(data) {
    const checkboxes = document.querySelectorAll('.catalog-form input[name="type"]')

    checkboxes.forEach(checkbox => {
        const value = checkbox.value

        const count = data.filter(product => product.type.includes(value)).length
        const counter = checkbox.closest('.custom-checkbox').querySelector('.custom-checkbox__count')
        counter.textContent = count
    });
}
