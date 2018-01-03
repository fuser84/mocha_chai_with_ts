// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.

type v = number | string | boolean;

export function isInArray(a: v[], ...rest: v[]  ): boolean {
    const arr1: v[] = a;
    if (rest.every((item) => arr1.indexOf(item) > -1)) {
        return true;
    }
    return false;
}

// let res = isInArray(["hello", 2, 3, 4], 4, "hello", 3 );
//
// console.log(res);
