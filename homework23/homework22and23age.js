let age = prompt("Какой у тебя возраст?", '');
if (age >= 0 && age < 2) {
    alert("Вы ребенок");
} else if (age >= 12 && age < 18) {
    alert("так ты подросток");
} else if (age >= 18 && age < 60) {
    alert("Взрослый вы человек ");
} else if (age >= 60) {
    alert("Вы пенсионер");
}