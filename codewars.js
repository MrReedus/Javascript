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


