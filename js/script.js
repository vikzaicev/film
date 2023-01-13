const API_URL_Primiers = "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2020&month=JANUARY"
const API_KEY = 'f91b94ee-3656-4f20-8097-58e3b35b5316'

getFilms(API_URL_Primiers)

async function getFilms(url) {
    try {
        const resp = await fetch(url,
            {method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            }})
        const respData = await resp.json()
        console.log(respData);
        showFilms(respData)
    }
    catch (error) {
        console.log(error);
    }
}

function showFilms(data) {
    const itemsEl = document.querySelector('.main__items')

    data.items.forEach(film => {
        const filmEl = document.createElement('div')
        filmEl.classList.add('main__item')
        filmEl.innerHTML = `
        <div class="main__image">
        <img src="${film.posterUrl}"
            alt="${film.nameRu}">
        </div>
        <div class="main__title">${film.nameRu}</div>
        <div class="main__category">боевик</div>
        <div class="main__rating">8</div>`
        itemsEl.appendChild(filmEl)
    });
}