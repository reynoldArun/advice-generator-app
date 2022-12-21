
const paraEl = document.querySelector('.advice__para')
const titleEL = document.querySelector('.advice__title')
const circleEL = document.querySelector('.advice__circle')
const url = "https://api.adviceslip.com/advice"


let count = 1;
circleEL.addEventListener('click', () => {
    count++;
    FetchData()
})

const FetchData = async() => {
    try {
        const response = await fetch(`${url}/${count}`)
        const result = await response.json()
        paraEl.innerHTML = result.slip.advice
        titleEL.innerHTML = `ADVICE #${result.slip.id}`
    } catch (error) {
        console.log(error)
    }
}

FetchData()