export function initTooltips(container) {
    tippy(container.querySelectorAll('.tooltip__btn'), {
        allowHTML: true,
        content(reference) {
            return reference.parentElement.querySelector('.tooltip__content').innerHTML
        }
    })
}