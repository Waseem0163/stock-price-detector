const priceEl = document.getElementById("price")
const timeEl = document.getElementById("time")
const imgEl = document.getElementById("price-arrow")


// to show current time at the opening of the site
timeEl.textContent = "Time: " + new Date().toLocaleTimeString()

let prePrice = 0

setInterval(() => {
    let time = new Date().toLocaleTimeString()
    let currentPrice = Math.random().toFixed(2)

    setDetails(time, currentPrice)

}, 2000)


const setDetails = (time, currentPrice) => {
    priceEl.textContent = "Price: " + currentPrice
    timeEl.textContent = "Time: " + time

    if(currentPrice > prePrice) {
        imgEl.setAttribute("src", "./assets/green.png")

    } else if(currentPrice < prePrice) {
        imgEl.setAttribute("src", "./assets/red.png")

    } else {
        imgEl.setAttribute("src", "./assets/gray.png")
    }

    prePrice = currentPrice
}