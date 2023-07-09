export function addAllNumbers(numbers: number[]): number {
    if (isEmpty(numbers)) {
        throw new Error("There are not any numbers to add")
    }
    return numbers.reduce((previousNumber, currentNumber) => previousNumber + currentNumber);
}

function isEmpty(numbers: number[]) {
    return numbers.length === 0;
}
