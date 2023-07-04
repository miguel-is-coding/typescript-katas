export function highestNumberFrom(numbers: Array<number>): number {
    if (numbers.length === 0) {
        throw new Error("There are not inserted numbers")
    }
    return Math.max(...numbers);
}
