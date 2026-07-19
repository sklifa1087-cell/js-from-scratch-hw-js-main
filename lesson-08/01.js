/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(string) {
const words = string.split(' ');
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word) {
            result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
        }
    }
    
    return result.join(' ');

}
const res = capitalizeWords("hello world from javascript")
console.log(res);
