import {getPoweredByTwoFrom} from "../../src/power-of-two/power-of-two";

describe('powerOfTwo', () => {
    it('should return a list powered by two from a list with one number', function () {
        const numbers: Array<number> = [2]
        expect(getPoweredByTwoFrom(numbers)).toEqual([4])
    });
})
