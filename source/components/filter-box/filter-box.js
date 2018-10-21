import './filter-box.styl'

let FilterBox = {
    showLocationList: () => {
        let block = $(".location-input__tips")
        let locations = [
            {name: 'Город'},
            {id: 1, name: 'Москва', link: '#msk'},
            {id: 2, name: 'Санкт-Питербург', link: '#spb'},
            {name: 'Область'},
            {id: 3, name: 'Подмосковье', link: '#msk-region'},
            {id: 4, name: 'Ленинградская область', link: '#spb-region'},
            {id: 5, name: 'Новая Москва', link: '#msk-new'}
        ]

        locations.forEach(function(item) {
            let element = item.link === undefined 
                                        ? '<div class="location-input__tips-category">' + item.name + '</div>'
                                        : '<a href="' + item.link + '" class="location-input__tips-item">' + item.name + '</a>'
            block.append(element)
        })
    }
}

export default FilterBox