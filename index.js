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

const lengthUnits = {
	mm: 0.001, cm: 0.01, m: 1, km: 1000, inch: 0.0254, foot: 0.3048, yard: 0.9144, mile: 1609.344
}

const weightUnits = {
	mg: 0.01, g: 1, kg: 1000, ounce: 0.0352, pound: 0.0022 
}

const tempUnits = {
	celcius: 0, kelvin: 273, fahrenheit: 32
}


function convert(value, from, to, units) {
	if ( !(from in units) || !(to in units) ) {
		return resultOutput.innerHTML = `Invalid Unit. Supported: ${Object.keys(units).join(', ')}`
	}

	if ( typeof value !== 'number' || value < 0 ) {
		return resultOutput.innerHTML = 'Value cannot be a negative or not a number'
	}

	const result = value * (units[from] / units[to])
	result.toFixed(6) 
	return resultOutput.innerHTML = `${value} ${from} = ${result} ${to}`
}

function convertTemp(value, from, to) {
	if ( typeof value !== 'number' ) {
		return resultOutput.innerHTML = 'Value cannot be not NaN'
	}

	let result = 0
	let tempKelvin = 0

	if ( from == 'celcius' || from == 'c' ) {
		tempKelvin = value + 273.15
	} else if ( from == 'fahrenheit' || from == 'f' ) {
		tempKelvin = (value - 32) * 5/9 + 273.15
	} else if ( from == 'kelvin' || from == 'k' ) {
		tempKelvin = value
	} else {
		return resultOutput.innerHTML = 'Invalid from unit'
	}

	if ( to == 'celcius' || to == 'c' ) {
		result = tempKelvin  - 273.15
	} else if ( to == 'fahrenheit' || to == 'f' ) {
		result = (tempKelvin - 273.15) * 9/5 + 32
	} else if ( to == 'kelvin' || to == 'k' ) {
		result = tempKelvin
	} else {
		return resultOutput.innerHTML = 'Invalid from unit'
	}

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
	
	if ( !(inputLength.classList.contains('hidden')) ) {
		convert(Number(inputLength.value), inputFrom.value, inputTo.value, lengthUnits)
		clearValue()
	} 

	if ( !(inputWeight.classList.contains('hidden')) ) {
		convert(Number(inputWeight.value), inputFrom.value, inputTo.value, weightUnits)
		clearValue()
	}

	if ( !(inputTemp.classList.contains('hidden')) ) {
		convertTemp(Number(inputTemp.value), inputFrom.value, inputTo.value)
		clearValue()
	}

	clearValue()
})

resetButton.addEventListener('click', () => {
	inputArea.classList.remove('hidden')
	resultArea.classList.add('hidden')
	clearValue()
})


lengthButton.addEventListener('click', () => { 
	inputLength.classList.remove('hidden') 
	inputWeight.classList.add('hidden') 
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