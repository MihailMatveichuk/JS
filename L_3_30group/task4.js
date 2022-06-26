'use strict';

// Task 4****
// В файле task4.txt вы найдете разноуровневый массив объектов. Очень похожий на массив из 3го задания, 
//только количество вложенностей может быть не ограничено. 
// Задание: написать функцию: 
// Функция строит древовидный список компании.
// При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с 
//соблюдение вложенности подразделений.
const company = [
    {
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Отдел тестирования",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 2,
              name: "Тестирование Web",
              parent: 2,
              users_count: 5,
            },
            {
              id: 3,
              name: "Тестирование Mobile",
              parent: 2,
              users_count: 0,
            },
          ]
        },
        {
          id: 4,
          name: "Отдел маркетинга",
          parent: 1,
          users_count: 30,
        },
        {
          id: 5,
          name: "Администрация",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 6,
              name: "Бухгалтерия",
              parent: 5,
              users_count: 10,
            },
            {
              id: 7,
              name: "Менеджмент",
              parent: 5,
              users_count: 15,
              children: [
                {
                  id: 8,
                  name: "Подраздел менеджмента 1",
                  parent: 7,
                  users_count: 5,
                },
                {
                  id: 9,
                  name: "Подраздел менеджмента 2",
                  parent: 7,
                  users_count: 10,
                }
              ]
            },
            {
                id: 10,
                name: "HR",
                parent: 5,
                users_count: 1,
            }
          ]
        },
      ]
    }
  ];
  company.map(function(arr) {
      let sum = arr.children.map(item => item.users_count).reduce((prev, next) => prev + next);
      if (sum == 0 || arr.children.users_count == 0) {
          console.log(`${arr.name} (нет сотрудников)`);
      } else {
          console.log(`${arr.name} (${sum} сотрудников)`);
      }
      arr.children.map(function(item) {
          if (item.users_count == 0) {
              console.log( `-- ${item.name} (нет сотрудников)`);
          } else {
              console.log( `-- ${item.name} (${item.users_count} сотрудников)`);
          }
      });
      arr.children.map(function(item) {
        if (item.children.users_count == 0) {
            console.log( `--- ${item.children.name} (нет сотрудников)`);
        } else {
            console.log( `--- ${item.children.name} (${item.children.users_count} сотрудников)`);
        }
    });
  });


