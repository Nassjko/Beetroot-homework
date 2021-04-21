//Определить количество цифр в введенном числе.
let a = +prompt('введите число');
a= Math.abs(a);
let devider = 10;
let midresult=a/devider;

for (i=1; midresult>=1; i++) {
    devider*=10;
    midresult=a/devider;
}
alert(`количество цифр в введенном числе ${i}`);