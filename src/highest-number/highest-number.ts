export function highestNumber(numbers: Array<number>): number {
    if (numbers.length === 0) {
        throw new Error("The inserted array is empty")
    }
    return Math.max(...numbers);
}
