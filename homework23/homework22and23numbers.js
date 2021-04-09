let number = prompt('Введите трехзначное число', 0);
if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
    alert('Есть одинаковые цифры');
} else
    alert("Нет одинаковых цифр");