export function initLocation() {
    const locationBtn = document.querySelector('.location__city')
    const name = document.querySelector('.location__city-name')
    const cityBtns = document.querySelectorAll('.location__sublink')

    locationBtn.addEventListener('click', () => {
        locationBtn.classList.toggle('location__city--active')
    })
    
    cityBtns.forEach(cityBtn => {
        cityBtn.addEventListener('click', () => {
            name.textContent = cityBtn.textContent
            locationBtn.classList.remove('location__city--active')
        })
    });

}