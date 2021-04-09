let length = prompt('Введите длину окружности');
let perimeter = prompt('Введите периметр квадрата');
const p = 3.1415926
let diamentr = (length / p);
let storona = (perimeter / 4);

if (diamentr > storona)
    alert(`Окружность с длиной ${length} не поместиться в указанный квадрат`);
else if (diamentr <= storona)
    alert(`Окружность с длиной ${length} поместиться в указанный квадрат `);