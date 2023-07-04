import {highestNumberFrom} from "../../src/highest-number/highest-number-from";

describe('getHighestNumber', () => {
    it('should get one number from a list with one number', function () {
        const numbers: Array<number> = [1]
        expect(highestNumberFrom(numbers)).toEqual(1)
    });

    it('should get the highest number from a number list', function () {
        const numbers: Array<number> = [1, 5, 3]
        expect(highestNumberFrom(numbers)).toEqual(5)
    });

    it('should get one number from a list with identical values', function () {
        const numbers: Array<number> = [5, 5, 5]
        expect(highestNumberFrom(numbers)).toEqual(5)
    });

    it('should throw exception from an empty list', function () {
        try {
            const numbers: Array<number> = []
            highestNumberFrom(numbers)
        } catch (e: any) {
            expect(e).toBeInstanceOf(Error)
            expect(e.message).toBe("There are not inserted numbers")
        }
    });
})
