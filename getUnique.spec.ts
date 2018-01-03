import { assert, expect } from "chai";
import { getUnique } from "./getUnique";

type variable = number | string;

describe( "getUnique function", () => {
    it("should return unique array ==> getUnique(1, \"hi\", 8, 8, 50, 50, \"hi\") => 1, \"hi\", 8, 50", () => {
        const result: variable[] = getUnique(1, "hi", 8, 8, 50, 50, "hi");
        expect(result).to.have.same.members([1, "hi", 8, 50]);
    });
});
