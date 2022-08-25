const cards = document.getElementById('card-dinamica')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const loading = document.getElementById('loading')

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {

    try {
        loadingData(true)

        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()

        // console.log(data)

        pintarCard(data)

    } catch (error) {
        console.log(error)

    } finally {
        loadingData(false)
    }

}

const loadingData = (estado) => {
    
    if(estado){
        loading.classList.remove('d-none')
    }else {
        loading.classList.add('d-none')
    }

}

const pintarCard = data => {
    // console.log(data)  

    data.results.forEach(item => {
        // console.log(item)

        const clone = templateCard.cloneNode(true)
        clone.querySelector('h5').textContent = item.name
        clone.querySelector('p').textContent = item.species
        clone.querySelector('img').setAttribute('src', item.image)
        fragment.appendChild(clone)
    });

    cards.appendChild(fragment)
}

