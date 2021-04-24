//Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. 
//И так до тех пор, пока пользователь не откажется.

let a;
let b;
let sign;
let moreCalculation = true;

function calculate() {
    a = +prompt('введите первое число');
    b = +prompt('введите второе число');
    sign = prompt('введите знак');

    if (sign === "+") {
        alert(a + b);
    } else if (sign === "-") {
        alert(a - b);
    } else if (sign === "*") {
        alert(a * b);
    } else if (sign === "/") {
        alert(a / b);
    }
}

while (moreCalculation) {
    calculate();
    moreCalculation = confirm('хочешь  решить еще один пример?');
}
