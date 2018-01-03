"use strict";
// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.
Object.defineProperty(exports, "__esModule", { value: true });
function getUnique(...arr) {
    const array = [];
    for (const item of arr) {
        if (array.indexOf(item) !== -1)
            continue;
        array.push(item);
    }
    return array;
}
exports.getUnique = getUnique;
let p = getUnique(1, "hi", 8, 8, 50, 50, "hi");
console.log(p);
//# sourceMappingURL=getUnique.js.map