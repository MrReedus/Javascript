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


