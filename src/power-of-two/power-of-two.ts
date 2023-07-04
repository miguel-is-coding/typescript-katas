export function getPoweredByTwoFrom(numbers: Array<number>): Array<number> {
    if (Math.pow(numbers[0], 2) === numbers[0] * numbers[0]) {
        return [numbers[0]]
    }
    return []
}
