const resultArea = document.getElementById('result-area')
const resultOutput = document.getElementById('result')
const inputArea = document.getElementById('input-area')
const convertButton = document.querySelector('button#convert')
const resetButton = document.querySelector('button#reset')
const inputLength = document.querySelector('input#length')
const inputFrom = document.querySelector('input#from')
const inputTo = document.querySelector('input#to')


function convertLength(value, from, to) {
	const toMeters = {
		mm: 0.001, cm: 0.01, m: 1, km: 1000, inch: 0.0254, foot: 0.3048, yard: 0.9144, mile: 1609.344
	}

	if ( !(from in toMeters) || !(to in toMeters) ) {
		throw Error(`Invalid Unit. Supported: ${Object.keys(toMeters).join(', ')}`)
	}

	if ( value < 0 ) {
		throw Error('Value cannot be a negative')
	}

	const result = value * (toMeters[from] / toMeters[to])
	Math.round(result, 6) 
	return resultOutput.innerHTML = `${value} ${from} = ${result} ${to}`
}

function clearValue() {
	inputLength.value = ''
	inputFrom.value = ''
	inputTo.value = ''
 	return 0
}


convertButton.addEventListener('click', () => {
	inputArea.classList.add('hidden')
	resultArea.classList.remove('hidden')
	convertLength(inputLength.value, inputFrom.value, inputTo.value)
})

resetButton.addEventListener('click', () => {
	inputArea.classList.remove('hidden')
	resultArea.classList.add('hidden')
	clearValue()
})




