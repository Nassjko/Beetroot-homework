//Запросить 2 числа и найти только наибольший общий делитель.
let a = +prompt('введите первое число');
let b = +prompt('введите второе число');
let max, min;
if (a < b) {
    min = a;
    max = b;
} else {
    min = b;
    max = a;
}
let d = max
while (d > 0) {
    if (max % d === 0 && min % d === 0) {
        break;
    } else {
        d = d - 1
    }
}
alert("наибольший общий делитель = " + d);