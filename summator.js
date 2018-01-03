"use strict";
// 2)
// писать функцию summator(), которая сумирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
Object.defineProperty(exports, "__esModule", { value: true });
function summator(...rest) {
    const re = rest.reduce((sum, current) => {
        if (typeof current === "string") {
            return sum + parseFloat(current);
        }
        return sum + current;
    }, 0);
    return re;
}
exports.summator = summator;
let result = summator("5", "55", "5");
console.log(result);
//# sourceMappingURL=summator.js.map