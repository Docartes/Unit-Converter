const resultArea = document.getElementById('result-area')
const resultOutput = document.getElementById('result')
const inputArea = document.getElementById('input-area')
const convertButton = document.querySelector('button#convert')
const resetButton = document.querySelector('button#reset')
const inputLength = document.querySelector('input#length')
const inputWeight = document.querySelector('input#weight')
const inputTemp = document.querySelector('input#temp')
const inputFrom = document.querySelector('input#from')
const inputTo = document.querySelector('input#to')
const lengthButton = document.querySelector('button#length-units')
const weightButton = document.querySelector('button#weight-units')
const tempButton = document.querySelector('button#temp-units')


function convertLength(value, from, to) {
	const toMeters = {
		mm: 0.001, cm: 0.01, m: 1, km: 1000, inch: 0.0254, foot: 0.3048, yard: 0.9144, mile: 1609.344,
		mg: 0.01, g: 1, kg: 1000, ounce: 0.0352, pound: 0.0022 
	}

	if ( !(from in toMeters) || !(to in toMeters) ) {
		return resultOutput.innerHTML = `Invalid Unit. Supported: ${Object.keys(toMeters).join(', ')}`
	}

	if ( typeof value !== 'number' || value < 0 ) {
		return resultOutput.innerHTML = 'Value cannot be a negative or not a number'
	}

	const result = value * (toMeters[from] / toMeters[to])
	Math.round(result, 6) 
	return resultOutput.innerHTML = `${value} ${from} = ${result} ${to}`
}

function clearValue() {
	inputLength.value = ''
	inputWeight.value = ''
	inputTemp.value = ''
	inputFrom.value = ''
	inputTo.value = ''
 	return 0
}

convertButton.addEventListener('click', () => {
	inputArea.classList.add('hidden')
	resultArea.classList.remove('hidden')
	convertLength((inputLength.value !== null || inputWeight.value !== null), inputFrom.value, inputTo.value)
	clearValue()
})

resetButton.addEventListener('click', () => {
	inputArea.classList.remove('hidden')
	resultArea.classList.add('hidden')
	clearValue()
})

lengthButton.addEventListener('click', () => {
	inputLength.classList.remove('hidden')
	weight.classList.add('hidden')
	inputTemp.classList.add('hidden')
})

weightButton.addEventListener('click', () => {
	inputLength.classList.add('hidden')
	inputWeight.classList.remove('hidden')
	inputTemp.classList.add('hidden')
})

tempButton.addEventListener('click', () => {
	inputLength.classList.add('hidden')
	inputTemp.classList.remove('hidden')
	inputWeight.classList.add('hidden')
})




