import { assert, expect } from "chai";
import { summator } from "./summator";

describe ("summator function", () => {
    it("should return 25 in case summator(5, 5, 10, 5)", () => {
        const result = summator(5, 5, 10, 5);
        assert.strictEqual(result, 25);
    });

    it("the summator result should be number - 23", () => {
       const result = summator("5", "8", "10");
       assert.isNumber(result);
    });

});
