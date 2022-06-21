//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function powder(b) {
    for (let i = 1; i <= b; i++) {
        console.log(`${i}:${Math.pow(2, i)}`);
    }
}
powder(10);

/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)

2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)*/
function printSmile(stroka, numberOfRows) {
    let x = '';
    for (let i = 0; i < numberOfRows; i++) {
        x = x + stroka;
        console.log(x);
    }

}
printSmile(':)', 5);


/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'*/
function getWordStructure(word) {
    let countGl = 0;
    let countSg = 0;
    let countSy = 0;
    let countDg = 0;
    let vowel = 'aeiouAEIOU';
    let symbols = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
    let digits = '1234567890';
    for (let i = 0; i <= word.length; i++) {
        if (vowel.indexOf(word[i]) !== -1) {
            countGl += 1;
        } else if (symbols.indexOf(word[i]) != -1) {
            countSy += 1;
        } else if (digits.indexOf(word[i]) != -1) {
            countDg += 1;
    } 
}
countSg = word.length - countDg - countGl - countSy;
console.log('countGl =', countGl);
console.log('countSg =', countSg);
}
getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-List589760');

/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)*/

//Проверки: 'abba', 'Abba'
function isPalindrom(word) 
    {
            if(word == word.split('').reverse().join(''))
            {
                console.log('This word is palindrom!');
            }else{
                console.log('This word is not palindrom!');
            }
        }
    
    isPalindrom('occo');
