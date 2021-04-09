let amount = prompt('Введите сумму в USD:', 0);
let currency = prompt('выберите одну из валют EUR, UAH или AZN', 0);
switch (currency) {
    case 'EUR':
        alert(amount * 0.84 + "EUR");
        break;
    case 'UAH':
        alert(amount * 27, 80 + 'UAH');
        break;
    case 'AZN':
        alert(amount * 1.7 + 'AZN');
        break;
}