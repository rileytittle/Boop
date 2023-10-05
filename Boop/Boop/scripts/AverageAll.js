/**
	{
		"api":1,
		"name":"Average All",
		"description":"Calculates the average of a list of numbers.",
		"author":"Riley Tittle",
		"icon":"counter",
		"tags":"average,calculator,averaging,numbers"
	}
**/

function main(input){
	const numbers = input.text.split();
	let sum = 0;
	for(let i = 0; i < numbers.length; i++){
		sum += numbers[i];
	}
	let avg = sum / numbers.length;
	return avg;
}