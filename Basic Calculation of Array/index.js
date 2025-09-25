let input = prompt("Enter numbers separated by commas (e.g., 10, 20, 30):");

let parts = input.split(",").map(s => s.trim());
let numbers = [];

for (let part of parts) {
    let num = parseFloat(part);
    if (!isNaN(num)) {
        numbers.push(num);
    }
}
if (numbers.length > 0) {
    let sum = 0;
    let max = numbers[0];
    let min = numbers[0];

    for (let num of numbers) {
        sum += num;
        if (num > max) max = num;
        if (num < min) min = num;
    }
    let average = sum / numbers.length;

    console.log("Array:", numbers);
    console.log("Sum:", sum);
    console.log("Average:", average);
    console.log("Max:", max);
    console.log("Min:", min);
} else {
    console.log("No valid numbers were entered.");
}
