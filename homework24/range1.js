let a = +prompt('введите первое число диапазона');
let b = +prompt('введите второе число диапазона');
let result = 0;
while (a <= b) {
    result = result + a;
    a++;
}
alert(result);