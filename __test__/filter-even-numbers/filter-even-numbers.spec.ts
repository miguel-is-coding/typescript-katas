import {filterEvenNumbers} from "../../src/filter-even-numbers/filter-even-numbers";

describe('filterEvenNumbers', () => {
    it('should get an empty list from a list with one odd number', function () {
        expect(filterEvenNumbers([1])).toStrictEqual([])
    })

    it('should get a list from a list with one even number', function () {
        expect(filterEvenNumbers([2])).toStrictEqual([2])
    })

    it('should get a list from a list with multiple even numbers', function () {
        expect(filterEvenNumbers([2,3,5,8])).toStrictEqual([2,8])
    })

    it('should get an empty list from a list with multiple odd numbers', function () {
        expect(filterEvenNumbers([3,5,9])).toStrictEqual([])
    })
})
