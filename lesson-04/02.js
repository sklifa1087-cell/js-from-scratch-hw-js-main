/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
let someArray = [1,2,3,4,5,3,2,4,9,9]

function findUniqueElements(array) {
    let newArray = []; //если ел из array не присутствует в newArray то мы должны этот эл добав в newArray push
    for (let i = 0; i< array.length; i++) {
        // for (let j = 0; j< i; j++)
        // if (array[i] === array[j]){
        //     newArray.push(array[i])
        // }
        if (!includesElement(newArray,array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

newArray = findUniqueElements(someArray)
console.log(newArray);
