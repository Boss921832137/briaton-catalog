import {initCatalogMenu} from './components/menu.js'
import {initLocation} from './components/location.js'
import {initAccordion} from './components/accordion.js'
import {renderCards} from './components/render.js'
import {countFilters} from './components/filters.js'
import {initBasket} from './components/basket.js'
import {initCatalog} from './components/catalog.js'
import {initSlider} from './components/slider.js'
import {initValidation} from './components/validation.js'








window.addEventListener('DOMContentLoaded', async () => {
    initCatalogMenu()
    initLocation()
    initAccordion()
    initValidation()

    const data = await renderCards()
    countFilters(data)
    initCatalog(data)
    initBasket(data)
    initSlider(data)
});

