import { test, expect, describe } from "vitest";

// defining the value of each Month in an array
const monthDays = [
    ['January', 31]
    ['February', 28]
    ['March', 31]
    ['April', 30]
    ['May', 31]
    ['June', 30]
    ['July', 31]
    ['August', 31]
    ['September', 30]
    ['October', 31]
    ['November', 30]
    ['December', 31]
];

//test each month in the array to check that the number of days returned corresponds to the month
describe('monthDays', function() {
    // Test case for January
    it('should return 31 for January', function() {
        const result = monthDays("January");
        expect(result).toBe(31);
    })
})


//  // Test case for a non-existing month
//  it('should return undefined for an unknown month', function() {
//     const result = monthDays("SomeRandomMonth");
//     expect(result).toBe(undefined);
//  })


