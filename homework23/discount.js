let amount = prompt('Сумма покупки более 200:');
if (amount >= 200 && amount < 300)
    alert(amount / 100 * 97 + ' к оплате с учетом скидки 3%');
else if (amount >= 300 && amount < 500)
    alert(amount / 100 * 95 + ' к оплате с учетом скидки 5%');
else if (amount >= 500)
    alert(amount / 100 * 93 + ' к оплате с учетом скидки 7%');