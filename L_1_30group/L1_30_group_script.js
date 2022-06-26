 let age_1 = 17;
 let age_2 = 18;
 let age_3 = 60;
 const age = prompt("Insert value", " ");
 const checkAge = function(age) {
     if (age == Number(age)) {
         if (age < age_1) {
             alert("age_1 == ", age_1);
         } else if (age < age_2) {
             alert("You don’ t have access cause your age is " + age_1 + " It’ s less then");
         } else if (age >= age_2 && age <= age_3) {
             alert("Welcome!");
         } else {
             alert("Keep calm and look Culture channel");
         }
     } else {
         alert("Wrong varuable");
     }
 }
 checkAge(age);