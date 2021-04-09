let year = prompt('Введите год', 0);
if (year % 4 == 0 && year % 100 !== 0) {
    alert('высокосный год');
} else
    alert("невысокосный год");