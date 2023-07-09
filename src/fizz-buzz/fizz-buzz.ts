export function fizzBuzz(number: number): string[] {
    let fizzBuzzGameResults: string[] = []
    for (let currentNumber: number = 1; currentNumber <= number; currentNumber++) {
        fizzBuzzGameResults.push(fizzBuzzNumber(currentNumber));
    }
    return fizzBuzzGameResults
}

function fizzBuzzNumber(number: number): string {
    if (isDivisible(number, 15)) {
        return "fizzbuzz"
    }
    if (isDivisible(number, 3)) {
        return "fizz";
    }
    if (isDivisible(number, 5)) {
        return "buzz";
    }
    return number.toString();
}

function isDivisible(dividend: number, divisor: number) {
    return dividend % divisor === 0;
}


