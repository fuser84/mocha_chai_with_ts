"use strict";
// 4)
// Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// цифры и специальные символы должны остаться на месте
// s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
// s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// s1tar3t 2   low5  ->  t1rat3s 2   wol5
Object.defineProperty(exports, "__esModule", { value: true });
function getDeploy(a) {
    const re1 = /\d+/;
    const re2 = /\W+/;
    const re3 = /[a-zA-Z]{1,}/;
    const resString = a.split(" ");
    let str = "";
    for (const item of resString) {
        const obj = {};
        const newStr = item.split("");
        for (let i = 0; i < newStr.length; i++) {
            if (newStr[i].match(re1)) {
                obj[`+${newStr[i]}`] = i;
            }
            if (newStr[i].match(re2)) {
                obj[newStr[i]] = i;
            }
        }
        const revertString = item.split("").filter((id) => {
            return id.match(re3);
        });
        revertString.reverse();
        for (const key of Object.keys(obj)) {
            const num = parseInt(key, 10);
            if (typeof num === "number" && !isNaN(num)) {
                revertString.splice(obj[key], 0, num.toString());
            }
            else {
                revertString.splice(obj[key], 0, key);
            }
        }
        const res = revertString.join("");
        str += res + " ";
    }
    return str.trim();
}
exports.getDeploy = getDeploy;
console.log(getDeploy("s1ta$%r3t 2 hel^low"));
