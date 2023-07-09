import {addAllNumbers} from "../../src/add-all-numbers/add-all-numbers";

describe('addAllNumbers', () => {
    it('should get the same number from a list with one number', function () {
        const numbers: number[] = [5]
        expect(addAllNumbers(numbers)).toBe(5)
    })

    it('should get the addition result from a list with several numbers', function () {
        const numbers: number[] = [5, 10, 10]
        expect(addAllNumbers(numbers)).toBe(25)
    })

    it('not allows an empty list', function () {
        try {
            const numbers: number[] = []
            addAllNumbers(numbers)
        } catch (e: any) {
            expect(e).toBeInstanceOf(Error)
            expect(e.message).toBe("There are not any numbers to add")
        }
    })
})
