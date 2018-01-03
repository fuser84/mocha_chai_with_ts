// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.

type variable = number | string;

export function getUnique(...arr: variable[]): variable[] {
    const array: variable[] = [];
    for (const item of arr) {
        if (array.indexOf(item) !== -1) continue;
        array.push(item);
    }
    return array;
}

let p = getUnique(1, "hi", 8, 8, 50, 50, "hi");
console.log(p);
