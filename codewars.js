// Замена всех глассных в получаемй строке

let disemvowel = str => str.replace(/[aeiou]/gi, '')

// более длинный вариант решения

let disemvowel = function (str) {
    return str.replace(/[aeiou]/gi, '')
} 
