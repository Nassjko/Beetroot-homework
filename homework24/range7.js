//Запросить у пользователя число и на сколько цифр его сдвинуть. 
//Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let a =prompt('введите число');
let c = +prompt('на сколько цифр сдвинуть это число?');

function shift(str, count) {
  let i = str.length > 0 ? count % str.length : 0
 
  return str.slice(i)+str.slice(0, i)
}
alert (shift (a, c))

