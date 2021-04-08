let number = prompt('Введите пятиразрядное число', 0);
number = number + '';
if (number === number.split('').reverse().join(''))
    alert('palindrome');
else
    alert('NOT palindrome');