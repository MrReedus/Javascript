// Замена всех глассных в получаемой строке

let disemvowel = str => str.replace(/[aeiou]/gi, '')

// более длинный вариант решения

let disemvowel = function (str) {
    return str.replace(/[aeiou]/gi, '')
}


// Позиция числа фыибоначи 

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 числа фибоначи в этой задаче 
function nthFibo(n) {
    let a = 0;
    b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}

//  Находим площадь треугольника из двух сторон и угла между ними 

const testMath = (a, b, c) => 0.5 * a * b * Math.sin(c * Math.PI / 180);

// находим минимальное и максимальные числа, делим макс на мин и округляем в меньшую сторону
function testMath(a, b, c, d) {
    let maxNum = Math.max(a, b, c, d);
    let minNum = Math.min(a, b, c, d);
    let result = Math.floor(maxNum / minNum)
    return result;
}

// рефакторинг верхней задачи
const testMath = (a, b, c, d) => Math.floor(Math.max(a, b, c, d) / Math.min(a, b, c, d));

//! Математические функции JS
/*
*Math.E - число е, основание натурального логарифма, константа Эйлера (Непера), приблизительно 2.718...
*Math.PI - число Пи, приблизительно равно, как известно, 3.1415926...
*Math.SQRT2 -квадратный корень из 2, приблизительное значение 1.414
*Math.SQRT1_2 -квадратный корень из 1/2, приблизительное значение 0.707
*Math.LN2 - натуральный логарифм 2, приблизительное значение 0.693
*Math.LN10 - натуральный логарифм 10, приблизительное значение 2.302
*Math.LOG2E - логарифм Е по основанию 2, приблизительное значение 1.442
*Math.LOG10E -  логарифм Е по основанию 10, приблизительное значение 0.434
*Math.sin (x) - возвращает значение синуса аргумента (в радианах), от -1 до 1 естественно.
*Math.cos (x) - возвращает значение косинуса аргумента (в радианах), от -1 до 1.  
*Math.tan (x) - возвращает численное значение для тангенса угла в радианах.
*Math.asin (x) - возвращает значение (в радианах) арксинуса для аргумента, который задается от -1 до 1
*Math.acos (x) - возвращает значение (в радианах) арккосинуса для аргумента, который задается от -1 до 1
*Math.atan (x) - возвращает значение арктангенса (из промежутка от  -π/2 до π/2) для аргумента
*Math.atan2 (y, x) - функция называется арктангенс двух переменных. Она возвращает числовое значение между -\piπ и \piπ, и представляет собой угол между положительным лучом оси Х и точкой x,y.
*Math.sqrt(x) - возвращает квадратный корень из аргумента
*Math.pow(base, exponent) - возводит число "base" в степень "exponent"
*Math.log(x) - вычисляет натуральный (по основанию е) логарифм числа
*Math.exp(x) - вычисляет экспоненту - значение числа е в степени аргумента "х"
*Math.random() - возвращает случайное число от 0 (включительно) до 1
 */
// возводим число а в степень b 
function testMath(a, b) {
    return Math.pow(a, b)
}

//refactor

const testMath = (a, b) => Math.pow(a, b);

//Преобразование числа в в соответствующий символ ascii String.fromCharCode. = специальная функцмя преобразования числа (внутри codewars)

var ArrowFunc = function (arr) {
    return arr.map((item) => String.fromCharCode.(item)).join('');
}

// объединение двух массивов и сортировка их по возрастанию, без повторений элементов

function mergeArrays(arr1, arr2) {

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    if (arr1 && arr2) {
        const concatArr = arr1.concat(arr2).sort(compareNumeric);

        const uniqSet = new Set(concatArr);
        const makeUniq = (arr) => [...new Set(arr)];
        const result = makeUniq(concatArr);

        return result;
    } else {
        return [];
    };