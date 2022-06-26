'use strict';

// Task 3**

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех 
//сотрудников во всех отделах.
const enterprises = [{
    id: 1,
    name: "Предприятие 1",
    departments: [{
            id: 2,
            name: "Отдел тестирования",
            employees_count: 10,
        },
        {
            id: 3,
            name: "Отдел маркетинга",
            employees_count: 20,
        },
        {
            id: 4,
            name: "Администрация",
            employees_count: 4,
        },
    ]
},
{
    id: 5,
    name: "Предприятие 2",
    departments: [{
            id: 6,
            name: "Отдел разработки",
            employees_count: 50,
        },
        {
            id: 7,
            name: "Отдел маркетинга",
            employees_count: 20,
        },
        {
            id: 8,
            name: "Отдел охраны труда",
            employees_count: 5,
        },
    ]
},
{
    id: 9,
    name: "Предприятие 3",
    departments: [{
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
    }, ]
}
];

enterprises.forEach(function(arr) {
let sum = arr.departments.map(item => item.employees_count).reduce((prev, next) => prev + next);
if (sum == 0 || arr.departments.employees_count == 0) {
    console.log(`${arr.name} (нет сотрудников)`);
} else {
    console.log(`${arr.name} (${sum} сотрудников)`);
}
arr.departments.forEach(function(dep) {
    if (dep.employees_count == 0) {
        console.log(` - ${dep.name} (нет сотрудников)`);
    } else {
        console.log(` - ${dep.name} (${dep.employees_count} сотрудников)`);
    }
});
});
// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, 
// к которому относится).
function getEnterpriseName(argument) {
enterprises.forEach(function (item) {
    item.departments.find(el => {
        if(el.id == argument || el.name == argument){
        console.log(item.name);}
    });
}); 
}
getEnterpriseName("Отдел аналитики");

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятияfunc    
let countDepart = 0;
let counId = 0;
let newId = enterprises.filter(function(elem){
counId += elem.departments.length;
});
countDepart = enterprises.length;
let countAll = countDepart + counId + 1; 

function addEnterprise (name){
let newEnter = {
    id: countAll,
    name,
    departments: []  
};
enterprises.push(newEnter);
console.log(enterprises);
} addEnterprise("Название нового предприятия");


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, 
//в которое будет добавлен отдел и название отдела.
let countD = 0;
let countEnt = enterprises.length;
enterprises.filter(function (elem) {
countD += elem.departments.length;
});
let count = countD + countEnt + 1;

function addDepartment(argument, name) {
let newDep = {
    id: count,
    name,
    employees_count: Math.floor(Math.random() * 100) + 1
};
enterprises.find(function (element) {
    if (element.id == argument) {
        element.departments.push(newDep);
    }console.log(element);
});
}
addDepartment(5, "Название нового отдела");

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
function editEnterprise(argument, name) {

enterprises.find(function(element) {
    if (element.id == argument) {
        element.name = name;
    }
    console.log(element);
});
}
editEnterprise(1, "Новое название предприятия");

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
function editDepartment(argument, name) {
enterprises.forEach(function (element) {
    element.departments.find(item => {
        if (item.id == argument) {
            item.name = name;
        }
    });
    console.log(element);
});
}
editDepartment(7, "Новое название отдела");

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
function deleteEnterprise(argument) {
let newEnterprises = enterprises.filter(elem => elem.id !== argument);
console.log(newEnterprises);
}
deleteEnterprise(9);

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, 
//если в нем нет сотрудников.

function deleteDepartment(id) {
const enter = enterprises.map((element) => {
    let arr = [];
    for (let i = 0; i < element.departments.length; i++) {
        if (element.departments[i].id !== id) {
            arr.push(element.departments[i]);
        } else {
            if (element.departments[i].employees_count !== 0) {
                console.log( `We can't remove "${element.departments[i].name}" because it has employees`);
                arr.push(element.departments[i]);
            }
            }
        }
    element.departments = arr;
    return element;
});
console.log(enter);    
}
deleteDepartment(8);
