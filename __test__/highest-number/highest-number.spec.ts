import {highestNumberFrom} from "../../src/highest-number/highest-number-from";

describe('getHighestNumber', () => {
    it('should return one number from an array of one number', function () {
        const numbers: Array<number> = [1]
        expect(highestNumberFrom(numbers)).toEqual(1)
    });

    it('should return the highest number from an array', function () {
        const numbers: Array<number> = [1, 5, 3]
        expect(highestNumberFrom(numbers)).toEqual(5)
    });

    it('should return one number from an array with identical values', function () {
        const numbers: Array<number> = [5, 5, 5]
        expect(highestNumberFrom(numbers)).toEqual(5)
    });

    it('should throw exception from an empty array', function () {
        try {
            const numbers: Array<number> = []
            highestNumberFrom(numbers)
        } catch (e: any) {
            expect(e).toBeInstanceOf(Error)
            expect(e.message).toBe("The inserted array is empty")
        }
    });
})
