let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введите число');
    const inputNumbered = Number(input);

    const notANumber = Number.isNaN(inputNumbered);

    if (notANumber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    };

    numbers.push(inputNumbered);

    if (input === null && numbers !== []) {
        for (const number of numbers) {
            total += number;
        }
        break;
    };
};

console.log(`Общая сумма чисел равна ${total}`);
