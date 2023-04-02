let unitInput = document.querySelector("#input-box")
let unitArray = []
const convertButton = document.querySelector("#convert-button")
let realUnit = 0

let feetMeter = document.querySelector('#meter-feet')
let volume = document.querySelector('#volume')
let mass = document.querySelector('#Mass')



convertButton.addEventListener('click', function calculate(){
unitArray.push(unitInput.value)

let feetToMetric = unitArray * 3.3
let metricToFeet = unitArray / 3.3

let litersToGallons = unitArray * 5
let gallonsToLiters = unitArray / 5

let kilogramsToPounds = unitArray * 7
let poundsToKilograms = unitArray / 7

feetMeter.innerHTML = `${unitArray} Meters = ${metricToFeet.toFixed(2)} Feet <br> ${unitArray} Feet = ${feetToMetric.toFixed(2)} Meters`
volume.innerHTML = `${unitArray} Liters = ${litersToGallons.toFixed(2)} Gallons <br> ${unitArray} Gallons = ${gallonsToLiters.toFixed(2)} Liters`
mass.innerHTML = `${unitArray} Pounds = ${kilogramsToPounds.toFixed(2)} Kilograms <br> ${unitArray} Kilograms = ${poundsToKilograms.toFixed(2)} Pounds`
})


