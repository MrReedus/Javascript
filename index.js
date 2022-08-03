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