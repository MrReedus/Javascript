

// Экранирование буквенных кавычек в строках

// Чтобы добавить кавычки в js код и они отобразились, т.е написать буквальную цитату. Нужно перед ними добавить косую черту /" 

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(myStr); // => I am a "double quoted" string inside "double quotes".
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; // двойные кавычки внутри одинарных

/* 
Специальные символы для того чтобы js вывел их на экран
Код	Выход
\'	одинарная кавычка
\"	двойная кавычка
\\	обратная косая черта
\n	новая линия
\r	возврат каретки
\t	вкладка
\b	граница слова
\f	подача формы
*/

// Конкатенация +

const ourStr = "I come first. " + "I come second."; // => I come first. I come second 

// также в конкатенации можно использовать оператор +=

let ourStr = "I come first. ";
ourStr += "I come second."; // => I come first. I come second 

// Также можно вставлять переменные в строку с помощью +

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective; // или вот так, ourStrбудет иметь значение freeCodeCamp is awesome!.

// длина строки 
//Вы можете найти длину Stringзначения, написав .length после строковой переменной или строкового литерала.

console.log("Alan Peter".length); //=> 10

/* В JavaScript String значения являются неизменяемыми, что означает, что их нельзя изменить после создания.

Например, следующий код:
*/

let myStr = "Bob";
myStr[0] = "J";
//не может изменить значение myStrна Job, потому что содержимое myStrне может быть изменено. Обратите внимание, что это не означает, что myStrего нельзя изменить, просто нельзя изменить отдельные символы строкового литерала . Единственный способ изменить myStrэто — присвоить ему новую строку, например:

let myStr = "Bob";
myStr = "Job";


//!-----------------------------------------------------------------------------------------------------------------------------------------------



//! МАССИВЫ

const sandwich = ["peanut butter", "jelly", "bread"];

// Вы также можете вкладывать массивы в другие массивы, как показано ниже:
// Это также называется многомерным массивом .



const teams = [["Bulls", 23], ["White Sox", 45]];

//?Мы можем получить доступ к данным внутри массивов, используя индексы .
//?Индексы массива записываются в той же скобочной нотации, что и строки,за исключением того,
//?что вместо указания символа они указывают запись в массиве. Как и строки, массивы используют индексацию с отсчетом от нуля , поэтому первый элемент в массиве имеет индекс 0.

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1]; // => 50

//! В отличие от строк, элементы массивов изменяемы и могут свободно изменяться, даже если массив был объявлен с расширением const.

//Пример:

const ourArray = [50, 40, 30];
ourArray[0] = 15;

//? ourArrayтеперь имеет значение [15, 40, 30].

/*
Один из способов представить многомерный массив — это массив массивов.
Когда вы используете скобки для доступа к вашему массиву, первый набор скобок относится к записям в самом внешнем (первом уровне) массиве,
а каждая дополнительная пара скобок относится к следующему уровню записей внутри.

Пример */

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

/*
arr[3];
arr[3][0];
arr[3][0][1];
arr[3]есть [[10, 11, 12], 13, 14], arr[3][0]есть [10, 11, 12]и arr[3][0][1]есть 11.
*/


//!Простой способ добавления данных в конец массива — через push()функцию.

/*
.push()принимает один или несколько параметров и "помещает" их в конец массива.

Примеры:
*/

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

//? arr1 теперь имеет значение [1, 2, 3, 4]и arr2 имеет значение ["Stimpson", "J", "cat", ["happy", "joy"]].

//! Другой способ изменить данные в массиве — использовать .pop()функцию.

/* .pop()используется для извлечения значения из конца массива. Мы можем сохранить это всплывающее значение, назначив его переменной. Другими словами, .pop()удаляет последний элемент из массива и возвращает этот элемент.

Любой тип записи может быть извлечен из массива — числа, строки и даже вложенные массивы.
*/

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//? Первый console.log отобразит значение 6, а второй отобразит значение [1, 4].

//! метод .shift() работает как и .pop(), но удаляет первый элемент массива, а не последний.

сonst ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

//? emovedFromOurArrayбудет иметь значение строки Stimpson, и ourArrayбудет иметь ["J", ["cat"]].


//! unshift()работает точно так же .push(), но вместо добавления элемента в конец массива unshift()добавляет элемент в начало массива.

//Пример:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

//? После shift, ourArrayбудет иметь значение ["J", "cat"]. После unshift, ourArrayбудет иметь значение ["Happy", "J", "cat"].

//! создадим массив в переменной myList со спискjv продуктов и с номерами им соответсвующими (рандомно)

const myList = [
    ["banana", 5],
    ["coffe", 12],
    ["cola", 55],
    ["cheese", 76],
    ["milk", 6]
];


//!========================================================================================================================
//**************************************************************************************************************************/
//!========================================================================================================================

//!\****************ФУНКЦИИ*************************\

//В JavaScript мы можем разделить наш код на многократно используемые части, называемые функциями .

//Вот пример функции:

function functionName() {
    console.log("Hello World");
}
functionName() // Вызов функции.

//?Вы можете вызвать или вызвать эту функцию, используя ее имя, за которым следуют круглые скобки,
//?например: functionName();Каждый раз, когда функция вызывается, она выводит сообщение Hello Worldна консоль разработчика.
//?Весь код между фигурными скобками будет выполняться каждый раз при вызове функции.

// Фактические значения, которые вводятся (или «передаются» ) в функцию при ее вызове, называются аргументами, ниже приведена функция с двумя параметрами
// в аргументы можно передавать разные значения, сколько угодно раз. 

function testFun(param1, param2) {
    console.log(param1, param2);
}

//? Функция должна что-то возвращать, чтобы вернуть значение из функции нужно использовать оператор return. Пример ниже.


function plusThree(num) {
    return num + 3;
}

const answer = plusThree(5); // answer = 8; т.к в аргумент мы передали число 5 (5 + 3 = 8 )

//! Но использование  return в функции не обязательно, в случаее если у функции нет return инструкции, при её вызове функция обрабатывает внутренний код, но возвращаемое значенние будет равно undefined

let sum = 0;

function addSum(num) {
    sum = sum + num;
}

addSum(3);

// addSum это функция без return оператора. Функция изменит глобальную sum переменную, но возвращаемое значение функции равно undefined.

//!Переменные, объявленные внутри функции, а также параметры функции имеют локальную область видимости. Это означает, что они видны только внутри этой функции.

function myTest() {
    const loc = "foo";
    console.log(loc);
}

myTest();
console.log(loc);

//* Вызов myTest() функции отобразит строку foo в консоли. Строка console.log(loc)(вне myTest функции) выдаст ошибку, так как loc не определена вне функции.

//! Можно иметь как локальные , так и глобальные переменные с одинаковыми именами. При этом локальная переменная имеет приоритет над глобальной.

const someVar = "Hat";

function myFun() {
    const someVar = "Head";
    return someVar;
}

//* Функция myFun вернет строку, Head поскольку присутствует локальная версия переменной.




///! Операторы IF ELSE 

//?if Операторы используются для принятия решений в коде. Ключевое слово if указывает JavaScript выполнять код в фигурных скобках при определенных условиях, определенных в скобках. Эти условия известны как Booleanусловия, и они могут быть только trueили false.

//?Когда условие оценивается как true, программа выполняет оператор внутри фигурных скобок. Когда логическое условие оценивается как false, оператор внутри фигурных скобок не будет выполняться.

/*/Псевдокод

если ( условие истинно ) {
  оператор выполнен
}
*/
function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

//*est(true)возвращает строку It was trueи test(false)возвращает строку It was false.
//*Когда testвызывается со значением true, ifоператор оценивает myCondition, так это trueили нет. Поскольку это так true,
//*функция возвращает значение It was true. Когда мы вызываем testсо значением false, неmyCondition выполняется и оператор в фигурных скобках не выполняется и функция возвращает значение . true It was false

//! Операторы сравнения

//? В JavaScript существует множество операторов сравнения . Все эти операторы возвращают логическое значение true или false значение.
//? Самый простой оператор — это оператор равенства ==. Оператор равенства сравнивает два значения и возвращает true, эквивалентны false они или нет.
//? Обратите внимание, что равенство отличается от присваивания ( =), которое присваивает значение справа от оператора переменной слева.

function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

/*
Если myValравно 10, оператор равенства возвращает true, поэтому код в фигурных скобках будет выполнен, и функция вернет значение Equal.
В противном случае функция вернется Not Equal. Чтобы JavaScript мог сравнить два разных типа данных (например, numbersи strings),
он должен преобразовать один тип в другой. Это известно как приведение типа. Однако, как только это произойдет, он может сравнивать термины следующим образом:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
*/

//! Строгое равенство ( ===) является аналогом оператора равенства ( == ). Но ихъ отличие в том что строгое неравенствол не осуществляет преобразование типов,
//!т.е "3" === 3 вёрнет false, а если мы бы использовали "==", то значения сперва бы привелись к одному типу данных, а потом сравнились, вернулось бы true.

//! Чтобы определить тип значения или переменной нужно использовать оператор typeof 
/*
typeof 3
typeof '3'
typeof 3возвращает строку numberи typeof '3'возвращает строку string.
*/

//! Оператор неравенства !=
/*
Оператор неравенства ( !=) противоположен оператору равенства.
Это означает не равно и возвращает falseто, что вернулось бы к равенству, trueи наоборот.
Как и оператор равенства, оператор неравенства преобразует типы данных значений при сравнении.
*/

1 != 2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

/*
Оператор строгого неравенства ( !==) является логической противоположностью оператора строгого равенства.
 Это означает «Строго не равно» и возвращает результат falseтам, где возвращалось бы строгое равенство,
  true и наоборот . Оператор строгого неравенства не будет преобразовывать типы данных.
*/

3 !== 3  // false
3 !== '3' // true
4 !== 3  // true

//!Оператор «больше чем» ( > ) сравнивает значения двух чисел. Если число слева больше числа справа, возвращается true. В противном случае возвращается false.

//Как и оператор равенства, оператор «больше чем» будет преобразовывать типы данных значений при сравнении.


5 > 3  // true
7 > '3' // true
2 > 3  // false
'1' > 9  // false

//!Оператор больше или равно ( >= ) сравнивает значения двух чисел. Если число слева больше или равно числу справа, возвращается true. В противном случае возвращается false.

//Как и оператор равенства, оператор больше или равно будет преобразовывать типы данных при сравнении.


6 >= 6  // true
7 >= '3' // true
2 >= 3  // false
'7' >= 9  // false

//!Оператор меньше чем ( < ) сравнивает значения двух чисел. Если число слева меньше числа справа, возвращается true. В противном случае возвращается false. Как и оператор равенства, оператор меньше преобразует типы данных при сравнении.

2 < 5 // true
'3' < 7 // true
5 < 5 // false
3 < 2 // false
'8' < 4 // false

//Меньше либо равно <= аналогично >=

//! оператор И &&
//?Иногда вам нужно будет протестировать более одной вещи за раз. Логический оператор and&& ( ) возвращает true значение тогда и только тогда, когда операнды слева и справа от него истинны.
//?Тот же эффект может быть достигнут путем вложения оператора if внутрь другого оператора if:

if (num > 5) {
    if (num < 10) {
        return "Yes";
    }
}
return "No";

// аналогично 

if (num > 5 && num < 10) {
    return "Yes";
}
return "No";

//!Логический оператор or || ( ) возвращает trueзначение, если один из операндов равен true. В противном случае возвращается false.

//Логический оператор or состоит из двух символов вертикальной черты: ( || ). Обычно это можно найти между клавишами Backspace и Enter.
//Шаблон ниже должен выглядеть знакомым по предыдущим путевым точкам:

if (num > 10) {
    return "No";
}
if (num < 5) {
    return "No";
}
return "Yes";

//вернется, Yes только если numнаходится между 5и 10(включая 5 и 10). Та же логика может быть записана как:

if (num > 10 || num < 5) {
    return "No";
}
return "Yes";


//! Оператор else 
//? когда условие для if оператора истинно, выполняется блок кода, следующий за ним. Что делать, если это условие ложно? Обычно ничего бы не случилось. С elseоператором может быть выполнен альтернативный блок кода.

if (num > 10) {
    return "Bigger than 10";
} else {
    return "10 or Less";
}

//! Если есть несколько условий то можно использовать else if вместе 

if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}

//! Порядок важен в if, else if заявлениях.

/*Функция выполняется сверху вниз, поэтому вам нужно быть осторожным с тем, какой оператор идет первым.

Возьмите эти две функции в качестве примера.

Вот первое:*/

function foo(x) {
    if (x < 1) {
        return "Less than one";
    } else if (x < 2) {
        return "Less than two";
    } else {
        return "Greater than or equal to two";
    }
}
// А второй просто меняет порядок операторов:

function bar(x) {
    if (x < 2) {
        return "Less than two";
    } else if (x < 1) {
        return "Less than one";
    } else {
        return "Greater than or equal to two";
    }
}
//?Хотя эти две функции выглядят почти одинаково, если мы передаем число обеим, мы получаем разные выходные данные.

foo(0)
bar(0)

//foo(0) вернет строку Less than one и bar(0) вернет строку Less than two.

//! *********************************************************************************************************************************************
//! *********************************************************************************************************************************************

//* Далее буду писать по большей части только код, иногда буду комментировать для ясности.

//! *********************************************************************************************************************************************
//! *********************************************************************************************************************************************


function testSize(num) {

    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    }

}

testSize(7);



const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}

golfScore(5, 4);

// switch case

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    return answer;
}

caseInSwitch(1);

// default option switch case

function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    return answer;
}

switchOfStuff(1);

// Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
    let answer = "";

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

sequentialSizes(1);

// Replacing If Else Chains with Switch

function chainToSwitch(val) {
    let answer = "";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
}

// Returning Boolean Values from Functions | возвращаем результат сравнения аргументов функции, вернётся true или false

function isLess(a, b) {

    return a < b;
}

isLess(10, 15);

// Return Early Pattern for Functions 

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    } // Если условие выполнится, вёрнятся undefined и функция остановится и никогда не дойдет до нижних вычислений.

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// можно упростить стрелочной функцией
const abTest = (a, b) => (a < 0 || b < 0) ? undefined : Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

abTest(2, 2);

// Counting Cards | вариант решения через if alse

let count = 0;

function cc(card) {

    if (card >= 2 && card <= 6) {
        count++;
    } else if (card !== 10 && card >= 7 && card <= 9) {
        count;
    } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count--;
    }
    if (count > 0) {
        return count + " Bet"
    } else {
        return count + " Hold"
    }

}

// counting Cards | Альтернативный вариант через SWITCH CASE

let count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count;
            break;
        case 7:
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    if (count > 0) {
        return count + " Bet"
    } else {
        return count + " Hold"
    }
}

// Oblects 

const myDog = {
    name: "Gosha",
    legs: 4,
    tails: 1,
    friends: ["human", "meat"]  nkkj bb
};

// Accessing Object Properties with Dot Notation | доступ к свойствам объекта через точку

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};


const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// Доступ к свойствам объекта с помощью нотации скобок

const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};


const entreeValue = testObj['an entree'];
const drinkValue = testObj['the drink'];

//  С помощью переменных

const testObj = {
    12: "Namath",
    16: "Montana", // = playerNumber
    19: "Unitas"
};


const playerNumber = 16;  // = 16 в объекте
const player = testObj[playerNumber];   // как итог получим доступ к значению  "Montana" под ключём 16


// меняем свойства объекта

const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = 'Happy Coder' // теперь name = Happy Coder


// Добавление новых свойств к объекту JavaScript

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "bow-bow";
// или так myDog["bark"] = "bow-bow"


// удаление свойства объекта

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails;

// Использование объектов для поиска 

// Setup
function phoneticLookup(val) {
    let result = "";

    const lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };

    result = lookup[val]

    return result;
}

// Проверка объектов на свойства

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) { //! hasOwnProperty проверяет содержится ли checkProp в obj
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

// можно упростить в одну строчку с помощью стрелочной функции

const checkObj = (obj, checkProp) => obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";

// Управление сложными объектами

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Jimmy Bakswell",
        "title": "superstar",
        "release_year": 2022,
        "formats": [
            "CD",
            "8T",
            "LP"
        ]
    }
];

// Доступ к вложенным объектам

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside['glove box']; //получаем значение maps


//Доступ к вложенным массивам

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1]

// Коллекция записей 


const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};


function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== '') {
        records[id][prop].push(value);
    } else if (value === '') {
        delete records[id][prop];
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Цикл while

const myArray = [5, 4, 3, 2, 1, 0];
let i = 0;
while (i < 5) {
    i++;
}

// Цикл for с массивом 

const myArray = [];
for (let i = 1; i <= 5; i++) {
    myArray.push(i) // добавляет в пустой массив значения итерации цикла
}

// пушим в массив нечетные числа от 1 до 9
const myArray = [];
for (let i = 1; i < 10; i += 2) {
    myArray.push(i)
};

// В обратном порядке 
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

//Перебор массива с помощью цикла for 

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
    console.log(total);
}

// Вложение циклов 

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) { // внутренний цикл позволяет перебрать вложенный массив и добраться до его элементов
            console.log(arr[i][j]); // выведет в консоль все элементы массива
            product *= arr[i][j]; // пермножение на каждый элемент массива
        }
    }
    return product;
}
// Перебираем вложенный массив и на каждой итерации перемножаем его на элемент записываю результат в переменную product

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Цикл do...while 

const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while (i <= 10) {
}

// получится myArray = [10], i = 11;

//! рекурсия

// Пример рекурсии, функция вычисляющая факториал переданного числа, вызывает сама себя.

function fac(num) {
    if (num < 0) return // улучшили функцию для отрицательных значения.
    if (num === 1) return num // ограничили функцию, т.е когда num станет равен 1 функция прекратит перемножение.
    return num * fac(num - 1) // к примеру передаём 5, 5 * fac(5-1) 5*4 = 20, далее вызывается 4,
    // результат предыдущий умножается на 3 т.к 4-1 = 3 , далее вызывается 3 и и умножается на 2, и так пока не дойдет до единицы где она и ограничивается.
}


console.log(fac(-5)) // 120

// Эта рекурсивная функция выполняет сложение первых n элементов переданного массива.

function sum(arr, n) {

    if (n <= 0) {
        return 0;
    } else {
        return arr[n - 1] + sum(arr, n - 1)
    }

}

//? можно упростить в одну строчку, но это плохо читаемо (наверное).

const sum = (arr, n) => (n <= 0) ? 0 : arr[n - 1] + sum(arr, n - 1);

// Задача поиск профиля .
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return 'No such property'
            }
        }
    } return "No such contact";
}

// Возвращение случайного числа Math.random()

function randomFraction(a) {
    return Math.random(a);
}

// Генерация случайного числа от 0 до 9 
function randomWholeNum() {

    return Math.floor(Math.random() * 10); // Math.floor округляет число до ближайшего целого числа.
    //Math.random()никогда не может быть полностью возвращено a 1 и, поскольку мы округляем в меньшую сторону, на самом деле невозможно получить 20. Этот метод даст нам целое число между 0и 19.
}

// Генерация случайных чисел в диапазоне 

Math.floor(Math.random() * (max - min + 1)) + min

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}
console.log(randomRange(1, 10)) // сгенерируется случайное число от 1 до 10

//! Функция parseInt() анализирует строку и возвращает целое число. Вот пример:

const a = parseInt("007"); // 7

const convertToInteger = str => parseInt(str)
// или же 
function convertToInteger(str) {
    return parseInt(str)
}
// преобразование числа из двоичной сисетемы чисел parseInt(string, radix);

function convertToInteger(str) {
    return parseInt(str, 2)
}

// Услоный / Тернарный оператор ? :
function checkEqual(a, b) {
    return a === b ? 'Equal' : 'Not Equal'
} // проверяем на равенство два числа

//Несколько условных операторов 

function checkSign(num) {
    return (num > 0) ? 'positive'
        : (num < 0) ? 'negative'
            : 'zero'
}

// Рекурсия для создания обратного отсчета

function countdown(n) {
    if (n < 1) { // условие прекращения выполнения функции
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n); // добавляем элементы в начало массива
        return countArray;
    }
}
console.log(countdown(10)) // [10,9,8,7,6,5,4,3,2,1]

// Рекурсия для диапазона чисел

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    } else {
        const numbers = rangeOfNumbers(startNum + 1, endNum);
        numbers.unshift(startNum)

        console.log(numbers)
        return numbers;
    }
};
console.log(rangeOfNumbers(1, 5)) // [ 1, 2, 3, 4, 5 ]



//! Методы массивов

//!Перебор: forEach

//Метод arr.forEach позволяет запускать функцию для каждого элемента массива.

//Его синтаксис:

arr.forEach(function (item, index, array) {
    // ... делать что-то с item
});
//Например, этот код выведет на экран каждый элемент массива:

// Вызов alert для каждого элемента
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
//А этот вдобавок расскажет и о своей позиции в массиве:

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} имеет позицию ${index} в ${array}`);
});
//Результат функции (если она вообще что-то возвращает) отбрасывается и игнорируется.

//! map
//Метод arr.map является одним из наиболее полезных и часто используемых.

//Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

//Синтаксис:

let result = arr.map(function (item, index, array) {
    // возвращается новое значение вместо элемента

});
//Например, здесь мы преобразуем каждый элемент в его длину:


let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6


/*// ! Шпаргалка по методам массива:

Для добавления/удаления элементов:

push (...items) – добавляет элементы в конец,
pop() – извлекает элемент с конца,
shift() – извлекает элемент с начала,
unshift(...items) – добавляет элементы в начало.
splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
Для поиска среди элементов:

indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
findIndex похож на find, но возвращает индекс вместо значения.
Для перебора элементов:

forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
Для преобразования массива:

map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
sort(func) – сортирует массив «на месте», а потом возвращает его.
reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
split/join – преобразует строку в массив и обратно.
reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
Дополнительно:

Array.isArray(arr) проверяет, является ли arr массивом.*/





let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Eugine: 100
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum) // 490 сумма всех значений объекта

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
};

multiplyNumeric(menu)
console.log(menu) // удваиваем значения объекта если они числовые

// Проверка объекта на существование свойств

function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}


// преобразование строк в массив, а затем обратно массив в строку с reverse
function testArray(a, b) {
    let array = (a + b).split('');
    array.unshift('Иванов');
    array.reverse()
    let myString = array.join("")
    return myString;
}


// задача на возвращение дня из даты полученного из строки

function testDateTime(a, b) {
    var myDateA = new Date(a)
    var myDateB = new Date(b)
    if (Date.parse(a) > Date.parse(b)) {
        myDateA.getDay()
        switch (myDateA.getDay()) {
            case 0:
                return ('Воскресенье');
                break;
            case 1:
                return ('Понедельник');
                break;
            case 2:
                return ('Вторник');
                break;
            case 3:
                return ('Среда');
                break;
            case 4:
                return ('Четверг');
                break;
            case 4:
                return (' Пятница');
                break;
            case 5:
                return ('Суббота');
                break;
        }

    } else {
        myDateB.getDay()
        switch (myDateB.getDay()) {
            case 0:
                return ('Воскресенье');
                break;
            case 1:
                return ('Понедельник');
                break;
            case 2:
                return ('Вторник');
                break;
            case 3:
                return ('Среда');
                break;
            case 4:
                return ('Четверг');
                break;
            case 4:
                return (' Пятница');
                break;
            case 5:
                return ('Суббота');
                break;
        }
    }
}

console.log(testDateTime("29 October 1909 10:27", "28 March 1909 00:59"));





















