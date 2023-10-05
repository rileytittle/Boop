/**
	{
		"api":1,
		"name":"Average All",
		"description":"Calculates the average of a list of integers.",
		"author":"Riley Tittle",
		"icon":"counter",
		"tags":"average,calculator,averaging,numbers"
	}
**/

function main(input){
	const numbers = input.text.split(" ");
	let sum = 0;
	for(let i = 0; i < numbers.length; i++){
		sum += parseInt(numbers[i]);
	}
	let avg = sum / numbers.length;
	input.text = "Average = " + avg;
}