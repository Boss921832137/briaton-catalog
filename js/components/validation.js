export function initValidation() {
    const modal = document.querySelector('.modal')
    const modalText = document.querySelector('.modal__text')
    const modalBtn = document.querySelector('.modal__close')

    modalBtn.addEventListener('click', () => {
        modal.classList.remove('modal--active')
    })

    const validation = new JustValidate('.questions__form')
    validation
        .addField('#name', [
            { rule: 'required', errorMessage: 'Введите имя' },
            { rule: 'minLength', value: 3, errorMessage: 'Минимум 3 символа' },
            { rule: 'maxLength', value: 20, errorMessage: 'Максимум 20 символов' },
        ])
        .addField('#email', [
            { rule: 'required', errorMessage: 'Введите почту' },
            { rule: 'email', errorMessage: 'Введите корректную почту' },                
        ])
        .addField('#agree', [
            { rule: 'required', errorMessage: 'Необходимо согласие' },
        ])
        .onSuccess((e) => {
            const formData = new FormData(e.target)

            fetch('https://httpbin.org/post', {
                method: 'POST',
                body: formData
            })
                .then((response) => {
                    if (response.ok) {
                        showModal('Отправлено успешно');
                    } else {
                        showModal('сервер вернул ошибку');
                    }
                })
                .catch(() => {
                    showModal('Сбой сети');
                })
            })

    function showModal(text) {
        modalText.textContent = text
        modal.classList.add('modal--active')
    }
} 