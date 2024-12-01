const inputEl = document.getElementById("input-box")
const inputBtn = document.getElementById("input-btn")
const metersEl = document.getElementById("meters")
const litersEl = document.getElementById("liters")
const kilosEl = document.getElementById("kilos")


inputBtn.addEventListener("click", function(){
    const inputUnit = Number(inputEl.value)
    inputEl.value = ""
    render(inputUnit) 
})

function render(inputUnit) {
    const meter = (inputUnit * 3.281).toFixed(2)
    const feet = (inputUnit * 0.3048).toFixed(2)
    const liter = (inputUnit * 0.264172).toFixed(2)
    const gallons = (inputUnit * 3.78541).toFixed(2)
    const kilos = (inputUnit * 2.20462).toFixed(2)
    const pounds = (inputUnit * 0.453592).toFixed(2)

    let renderLength = `<p>${inputUnit} meters = ${meter} feet | ${inputUnit} feet = ${feet} meters</p>`
    metersEl.innerHTML = renderLength

    let renderVolume = `<p>${inputUnit} liters = ${liter} gallons | ${inputUnit} gallons = ${gallons} liters</p>`
    litersEl.innerHTML = renderVolume

    let renderMass = `<p>${inputUnit} kilos = ${kilos} pounds | ${inputUnit} pounds = ${pounds} kilos</p>`
    kilosEl.innerHTML = renderMass
}
