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
