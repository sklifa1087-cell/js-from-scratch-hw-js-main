/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 53 // тестовое значение, можно изменять
let grade 
// your code
function  grade (score){
if (score >=90 && score <=100) {
return grade ="A";
} else if (score >=80 && score <=89){
    return grade="B";
} else if (score >=70 && score <=79){
    return grade="C";
} else if (score >=50 && score <=69){
    return grade="D";
} else if (score >=0 && score <=49){
    return grade="A";
} else {
    return ("нужно еще подучить! ")
}

}console.log(grade)
