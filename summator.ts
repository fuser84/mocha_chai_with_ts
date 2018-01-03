
// 2)
// писать функцию summator(), которая сумирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

type val = string | number;

export function summator(...rest: val[]): number {
    const re = rest.reduce((sum: number, current: val) => {
        if (typeof current === "string") {
            return sum + parseFloat(current);
        }
        return sum + current;

    }, 0);

    return re;
}

let result = summator("5", "55", "5");
console.log(result);

