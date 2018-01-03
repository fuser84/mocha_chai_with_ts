import {assert, expect} from "chai";
import {getDeploy} from "./getDeploy";

describe("getDeploy function", () => {

    it("should return <<t1rat3s 2 wolleh>> in case arguments are ==> s1tar3t 2 hellow", () => {
        const result = getDeploy("s1tar3t 2 hellow");
        assert.exists(result);
        assert.equal(result, "t1rat3s 2 wolleh");
    });

    it("should return <<t1ra$%t3s 2 wol^leh>> in case arguments are ==> s1ta$%r3t 2 hel^low", () => {
        const result = getDeploy("s1ta$%r3t 2 hel^low");
        assert.exists(result);
        assert.equal(result, "t1ra$%t3s 2 wol^leh");
    });

    it("should return <<t1rat3s 2   wol5>> in case arguments are ==> s1tar3t 2   low5", () => {
           const result = getDeploy("s1tar3t 2   low5");
           assert.exists(result);
           assert.equal(result, "t1rat3s 2   wol5");
    });

    it("function should return string", () => {
        const result = getDeploy("s1tar3t 2   low5");
        assert.isString(result, "t1rat3s 2   wol5");
    });
});
