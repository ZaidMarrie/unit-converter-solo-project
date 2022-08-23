const convertButton = document.getElementById("convertBtn");
convertButton.addEventListener("click", renderConversion);

function renderConversion(event) {
	const numberInputValue = document.getElementById("numberInput").textContent;
	const lengthDisplayEl = document.getElementById("lengthConversion");
	const volumeDisplayEl = document.getElementById("volumeConversion");
	const massDisplayEl = document.getElementById("massConversion");

	lengthDisplayEl.textContent = convertLength(numberInputValue);
	volumeDisplayEl.textContent = convertVolume(numberInputValue);
	massDisplayEl.textContent = convertMass(numberInputValue);
}

function convertLength(measurement) {
	measurement = parseFloat(measurement);
	const multiplier = 3.281;

	const feet = measurement * multiplier;
	const meters = measurement / multiplier;
	const feetConversionText = `${measurement} meters = ${feet.toFixed(3)} feet`;
	const metersConversionText = `${measurement} feet = ${meters.toFixed(3)} meters`;

	return `${feetConversionText} | ${metersConversionText}`;
}

function convertVolume(measurement) {
	measurement = parseFloat(measurement);
	const multiplier = 0.264;

	const gallons = measurement * multiplier;
	const litres = measurement / multiplier;
	const gallonsConversionText = `${measurement} litres = ${gallons.toFixed(3)} gallons`;
	const litresConversionText = `${measurement} gallons = ${litres.toFixed(3)} litres`;

	return `${gallonsConversionText} | ${litresConversionText}`;
}

function convertMass(measurement) {
	measurement = parseFloat(measurement);
	const multiplier = 2.204;

	// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
	const pounds = measurement * multiplier;
	const kilos = measurement / multiplier;
	const poundsConversionText = `${measurement} kilos = ${pounds.toFixed(3)} pounds`;
	const kilosConversionText = `${measurement} gallons = ${kilos.toFixed(3)} kilos`;

	return `${poundsConversionText} | ${kilosConversionText}`;
}
