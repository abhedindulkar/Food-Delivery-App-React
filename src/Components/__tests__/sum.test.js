import sum from "../sum.js";
// // const { sum } = require("../sum");

test("test sum function", () => {
    // const sum = (a, b) => {
    //     return a + b;
    // };
    // import { sum } from "../sum";

    console.log("sum", sum);

    const result = sum(8, 3);

    expect(result).toBe(11);
});
