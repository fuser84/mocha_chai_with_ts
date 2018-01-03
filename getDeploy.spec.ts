import {assert, expect} from "chai";
import {getDeploy} from "./getDeploy";

describe("getDeploy function", () => {
    it("should return <<t1rat3s 2 wolleh>> in case arguments are ==> s1tar3t 2 hellow", () => {
        const result = getDeploy("s1tar3t 2 hellow");
        assert.equal(result, "t1rat3s 2 wolleh");
    });

    it("should return <<t1ra$%t3s 2 wol^leh>> in case arguments are ==> s1ta$%r3t 2 hel^low", () => {
        const result = getDeploy("s1ta$%r3t 2 hel^low");
        assert.equal(result, "t1ra$%t3s 2 wol^leh");
    });

    it("should return <<t1rat3s 2   wol5>> in case arguments are ==> s1tar3t 2   low5", () => {
           const result = getDeploy("s1tar3t 2   low5");
           assert.equal(result, "t1rat3s 2   wol5");
    });




});
