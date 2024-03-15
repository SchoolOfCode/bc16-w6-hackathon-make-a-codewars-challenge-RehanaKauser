import { test, expect,  } from "vitest";
import {findTheDaysInMonth} from "/main.js";

 const monthDays = [
    {month: "January", days: 31},
    {month: "February", days: 28},
    {month: "March", days: 31},
    {month: "April", days: 30},
    {month: "May", days: 31},
    {month: "June", days: 30},
    {month: "July", days: 31},
    {month: "August", days: 31},
    {month: "September", days: 30},
    {month: "October", days: 31},
    {month: "November", days: 30},
    {month: "December", days: 31},
    {month: "someRandomMonth", days: undefined},
   ];

// Define a test for finding out the number of days in a specific month
 test("find out how many days in the specific month", () => {
// Define the expected result   
 const expected = [{month: "January", days: 31}, {month: "March", days: 31}, {month: "May", days: 31}, {month: "July", days: 31},
 {month: "August", days: 31}, {month: "October", days: 31}, {month: "December", days: 31} ];
// Execute the function and check the result
 expect(findTheDaysInMonth(monthDays)).toStrictEqual(expected);

 });


