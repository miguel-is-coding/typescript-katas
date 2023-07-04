export function highestNumberFrom(numbers: Array<number>): number {
    if (isEmpty(numbers)) {
        throw new Error("There are not inserted numbers")
    }
    return Math.max(...numbers);
}

function isEmpty(numbers: Array<number>): boolean {
    return numbers.length === 0;
}
