let age_1 = 10
let age_2 = 18
let age_3 = 60
    /*1 *:
        Преобразовать написанный код в 26 - 33 пунктах в функцию, принимающую на вход возраст.*/
const checkAge = function(age) {
    if (age < age_1) {
        console.log("age_1 == ", age_1)
    } else if (age < age_2) {
        console.log("You don’ t have access cause your age is " + age_1 + " It’ s less then")
    } else if (age >= age_2 && age <= age_3) {
        console.log("Welcome!")
    } else {
        console.log("Keep calm and look Culture channel")
    }
}
checkAge(17)
checkAge(18)
checkAge(61)
    //Вывести в консоль результат работы функции с возрастами 17, 18, 61
    /*2*:
    Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.*/

/*const checkAge = function(age) {
    if (typeof(age) === 'number') {
        if (age < age_1) {
            console.log("age_1 == ", age_1)
        } else if (age < age_2) {
            console.log("You don’ t have access cause your age is " + age_1 + " It’ s less then")
        } else if (age >= age_2 && age <= age_3) {
            console.log("Welcome!")
        } else {
            console.log("Keep calm and look Culture channel")
        }
    } else {
        console.log("Wrong varuable")
    }
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge('61')
    /*3**:
    Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number*/

/*const checkAge = function(age) {
    if (age == Number(age)) {
        if (age < age_1) {
            console.log("age_1 == ", age_1)
        } else if (age < age_2) {
            console.log("You don’ t have access cause your age is " + age_1 + " It’ s less then")
        } else if (age >= age_2 && age <= age_3) {
            console.log("Welcome!")
        } else {
            console.log("Keep calm and look Culture channel")
        }
    } else {
        console.log("Wrong varuable")
    }
}
checkAge(1)
checkAge(18)
checkAge(60)
checkAge('61')
checkAge('ar')*/