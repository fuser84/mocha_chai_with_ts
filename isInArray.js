"use strict";
// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.
Object.defineProperty(exports, "__esModule", { value: true });
function isInArray(a, ...rest) {
    const arr1 = a;
    if (rest.every((item) => arr1.indexOf(item) > -1)) {
        return true;
    }
    return false;
}
exports.isInArray = isInArray;
// let res = isInArray(["hello", 2, 3, 4], 4, "hello", 3 );
//
// console.log(res);
//# sourceMappingURL=isInArray.js.map