// TASK 01
// По нажатию b-1 выполняется функция f1. Функция считывает значение из i-1 и с помощью includes ищет данный элемент в массиве a1. Выводит в out-1 результат работы метода.
// Как тестируется - ввожу числа и проверяю результат.


let a1 = [4, 12, 4, 2, 15, 98];

const f1 = () => {
    // обратите внимание в массиве только ЧИСЛА!
    let in1 = +document.querySelector('.i-1').value;
    console.log(a1.includes(in1));
    document.querySelector('.out-1').innerHTML = a1.includes(in1);
}

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция считывает значение из i-2 и с помощью includes проверяет наличие подобного элемента в массиве a2. Выводит в out-2  false, если такого элемента нет в массиве, и ИНДЕКС элемента если есть. Констатация наличия выполняется через includes. Нахождение индекса либо через indexOf или через цикл. Сравните данную задачу с задачей 2 из юнита 1. Подумайте какой из методов: includes, indexOf более удобен для данной задачи.
// Как тестируется - ввожу числа и проверяю результат.


let a2 = [4, 12, 4, 2, 15, 98];

const f2 = () => {
    let in2 = +document.querySelector('.i-2').value;
    console.log(a2.includes(in2));
    console.log(a2.indexOf(in2));
    if (a2.includes(in2) === true) {
        document.querySelector('.out-2').innerHTML = a2.indexOf(in2);
    } else {
        document.querySelector('.out-2').innerHTML = false;
    }

}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция считывает значение из i-3 и с помощью includes ищет данный элемент во вложенных массивах массива a3. Выводит в out-3  false, если такого элемента нет и true если есть. Обратите внимание! Только числа!
// Как тестируется - пусть a3 = [ [4,5] ,  [6,5]]; ввожу число 6 и на вывод получаю true
// Как тестируется - пусть a3 = [ [4,5] ,  [6,5]]; ввожу число 4 и на вывод получаю true
// Как тестируется - пусть a3 = [ [4,5] ,  [6,5]]; ввожу число 7 и на вывод получаю false


let a3 = [[3, 4, 5], [6, 7, 1], [5, 6, 7, 1, 12], [134, 234, 432]];

const f3 = () => {
    let in3 = +document.querySelector('.i-3').value;
    for ( let i = 0; i < a3.length; i++) {
        console.log(a3[i].includes(in3))
        // console.log(a3[i]) 
        if ( a3[i].includes(in3) === true) {
            document.querySelector('.out-3').innerHTML = true;
            break;
        } else {
            document.querySelector('.out-3').innerHTML = false;
        }
    }
    
}

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция считывает значение из i-4 и с помощью includes ищет данный элемент во вложенных массивах массива a4. Выводит в out-4  false, если такого элемента нет и ключ вложенного массива в котором такой элемент есть(если есть). Обратите внимание! Только числа! Если ключей несколько, то выводятся через пробел.


let a4 = { 
    a: [1, 2, 3], 
    b: [3, 1, 5, 8], 
    c: [88, 77, 66] };

const f4 = () => {
    let in4 = +document.querySelector('.i-4').value;
    let out= '';

    for(  key in a4) {
        // console.log(a4[key]);
        // console.log(a4[key].includes(in4));
        if(a4[key].includes(in4)) {
            console.log(key)
            out +=`${key} `;
            console.log(out); 
            
        }  else {
            out += `${false} `;
        }
        
    }
    document.querySelector('.out-4').textContent= out;
}

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция считывает значение из i-5-1 и индекс с которого начинается поиск в массиве с i-5-2 и с помощью includes  ищет данный элемент в массиве a5 c позиции указанной в i-5-2. Выводит в out-5 false если такого элемента при поиске с указанной позиции нет и true если есть.
// Введите пары и изучите поведение
// число 22 и индекс старта 3 - false
// число 22 и индекс старта 0 - true
// число 44 и индекс старта 8 - true


let a5 = [22, 33, 44, 55, 66, 77, 88, 33, 44, 55, 66, 77];

const f5 = () => {
    let in1 = +document.querySelector('.i-5-1').value;
    let in2 = +document.querySelector('.i-5-2').value;
    console.log(a5.includes(in1, in2));
    
    document.querySelector('.out-5').innerHTML = a5.includes(in1, in2);

}

// TASK 06
// По нажатию b-6 выполняется функция f6. Функция считывает строку из i-6 и с помощью includes и ищет данный элемент в СТРОКЕ a6. Выводит в out-6 false если искомой строки нет в a6 и true если есть.
// Изучите поведение введя по очереди Hi, HI, WIFI, wifi, wiFI


let a6 = ['Hi', 'wiFI'];

const f6 = () => {
    let in6 = document.querySelector('.i-6').value;
    console.log(a6.includes(in6));
    document.querySelector('.out-6').textContent = a6.includes(in6);
}

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция принимает 2 параметра, первый массив, второй - искомое число. Функция должна эмулировать работу метода includes с помощью цикла. Что понимается под эмуляцией? Мы не используем метод includes ( и indexOf тоже), а циклом перебираем массив и с помощью if решаем задачу. Функция должна только либо выводить в out-7 false, если искомого числа нет в массиве, или true если есть.


let a7 = [21, 22, 23, 24, 25, 26, 27];

const f7 = (arr, elem) => {

    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
           document.querySelector('.out-7').textContent = true;
           break
        } else {
            document.querySelector('.out-7').textContent = false;
        }
    }
   
}
// f7(a7, 20);

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция должна получить символ из i-8 и с помощью includes проверить есть ли подобный символ в строке a8 или нет. Если есть - вывести true, если нет false;


let a8 = 'JSbestever';

const f8 = () => {
    let in8 = document.querySelector('.i-8').value;
    console.log(a8.includes(in8));
    document.querySelector('.out-8').textContent = a8.includes(in8);
}

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция должна получить из i-9 символ и с помощью includes искать его в массиве a9. Обратите внимание на сложность. Если пользователь ввел символ в нижнем регистре то функция должна c помощью includes искать и в нижнем и в верхнем регистре символ в массиве. Если пользователь ввел число - то искать число. Считаем, что пользователь может ввести либо символы латинского алфавита, либо числа. Вывод true, false в out-9.
// пример пользователь ввел B => true
// пример пользователь ввел a => true
// пример пользователь ввел 5 => true
// пример пользователь ввел Z => false

let a9 = ['A', 'b', 'c', 'C', 'D', 12, 5, 'd', 1];

const f9 = () => {
    
    let in1 = document.querySelector('.i-9').value;
    let in2 = +document.querySelector('.i-9').value;
    let out = false;
    

    if (a9.includes(in1.toLowerCase()) || a9.includes(in1.toUpperCase())) {
        out = true;
   
      } else if (a9.includes(in2)) {
         
        out = true;
          
    }
    document.querySelector('.out-9').innerHTML = out;
    
}

// TASK 10
// Ну и на прокачку ваших скиллов. Часто попадется вопрос, в чем отличие includes от indexOf? Ответ - в поведении с NaN. Изучите и запомните пример ниже.

const a10 = [67, '55', 2, 5, '4', '8', 8, '66', '54', 11, NaN];

const f10 = () => {
    if (a10.indexOf(NaN) !== -1) {
        // не выполнится
        console.log('Сработал indexOf');
    }

    if (a10.includes(NaN)) {
        // выполнится
        console.log('Сработал includes');
    }
}

// TASK 11
// Ну и на прокачку ваших скиллов. Выполните код ниже. Изучите консоль. По очереди расскоментируйте строки  и смотрите на результат. Проанализируйте.

const a11 = [[1, 2], 
{ a: 1 }, 
true, '', [1], Infinity, undefined, null];

const f11 = () => {
    let c = [1, 2];
    // c = {a:1};
    // c = true;
    // c = '';
    // c = [1];
    // c = Infinity;
    // c = undefined;
    // c = null;
    console.log(a11.includes(c));
}

document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', f4);
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', () => {
    f7(a7, 23);
});
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', f10);
document.querySelector('.b-11').addEventListener('click', f11);