import {fizzBuzz} from "../../src/fizz-buzz/fizz-buzz";

describe('fizzBuzz', () => {
    it('should get a list with one number from number one', function () {
        expect(fizzBuzz(1)).toStrictEqual(["1"])
    })

    it('should get a list with numbers ending with the provided number', function () {
        expect(fizzBuzz(2)).toStrictEqual(["1", "2"])
    })

    it('should replace number divisible by three for fizz in the list', function () {
        expect(fizzBuzz(6)).toStrictEqual(["1", "2", "fizz", "4", "buzz", "fizz"])
    })

    it('should replace number divisible by five for buzz in the list', function () {
        expect(fizzBuzz(10)).toStrictEqual(["1", "2", "fizz", "4", "buzz", "fizz", "7", "8", "fizz", "buzz"])
    })

    it('should replace number divisible by five and three for fizzbuzz in the list', function () {
        expect(fizzBuzz(15)).toStrictEqual(["1", "2", "fizz", "4", "buzz", "fizz", "7", "8", "fizz", "buzz", "11", "fizz", "13", "14", "fizzbuzz"])
    })
})
