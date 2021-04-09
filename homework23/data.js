let date = prompt('Введите дату в таком формате: число-месяц-год ');
date = date.split('-');
let nextDate = new Date(date[2], date[1] - 1, date[0]); //месяцы начинаются с 0
nextDate.setDate(nextDate.getDate() + 1);
alert(nextDate);