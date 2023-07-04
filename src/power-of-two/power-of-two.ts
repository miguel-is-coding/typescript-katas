export function getPoweredByTwoFrom(numbers: Array<number>): Array<number> {
    const numbersPoweredByTwo: Array<number> = []
    for (let number of numbers) {
        numbersPoweredByTwo.push(Math.pow(number, 2))
    }
    return numbersPoweredByTwo
}
