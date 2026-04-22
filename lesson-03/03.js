// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
    if (a>b && a>c){
        return a;
    } else if (b>a && b>c){
        return b;
    } else{
        return c;
    }
}
let d = findLargest(2,6,7)
console.log(d)