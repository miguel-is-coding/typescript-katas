export function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(currentNumber=> isEven(currentNumber))
}

function isEven(value: number) {
    return value % 2 === 0;
}
