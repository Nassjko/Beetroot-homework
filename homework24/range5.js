//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
//При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let array = [];
for (var i = 0; i < 2; i++){ 
    array.push( +prompt('введите 10 чисел. №'+(i+1)));
}
console.log (array)
let negative=0;
let positive=0;
let zero=0;
let evenNumber=0;
let oddNymber=0;
for (i=0; i<array.length; i++) {
    if (array[i]===0) 
        zero++;
    else if (array[i]%2===0)
        evenNumber++;
    else
     oddNymber++;
    if (array[i]>0)
    positive++;
    else if (array[i]<0) negative++;
} 
alert (`кол-во положительных чисел= ${positive} \nкол-во отрицательных чисел= ${negative} \nкол-во четных чисел= ${evenNumber} \nкол-во нечетных чисел= ${oddNymber} \nкол-во нулей= ${zero}`
);