import {highestNumber} from "../../src/highest-number/highest-number";

describe('getHighestNumber', () => {
    it('should return one number from an array of one number', function () {
        const numbers: Array<number> = [1]
        expect(highestNumber(numbers)).toEqual(1)
    });

    it('should return the highest number from an array', function () {
        const numbers: Array<number> = [1, 5, 3]
        expect(highestNumber(numbers)).toEqual(5)
    });

    it('should return one number from an array with identical values', function () {
        const numbers: Array<number> = [5, 5, 5]
        expect(highestNumber(numbers)).toEqual(5)
    });
})
