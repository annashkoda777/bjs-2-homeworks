"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x1;
	let x2;
	let d = b ** 2 - 4 * a * c;
	if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d === 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	}
	return arr;
}
console.log(solveEquation());


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 1200;
	let S = amount - contribution;
	let e = S * (P + (P / (((1 + P) ** countMonths) - 1)));
	let v = e * countMonths;
	v = v.toFixed(2);
}
console.log(calculateTotalMortgage(v));