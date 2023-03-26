// Задание под звездочкой
//1. Определите, что год находится в интервале от 2000 до 2100 с 
//   помощью только регулярного выражения.
const years = document.getElementById('year');
const result = document.getElementById('result');
const button = document.getElementById('button');
button.addEventListener('click', yearString); 
function yearString(){
    regexp = /^(20\d\d|2100)$/;
    let year = years.value;
    if(regexp.test(year)){
    result.value = 'Ваш год входит в интервал от 2000 до 2100';
    } else{
    result.value = 'Ваш год не входит в интервал';
    }
}

//2.Удалите одной регуляркой все слова из предложения, 
//   содержащие две одинаковые, следующие друг за другом буквы.

const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', changeOne);
function changeOne(){
let textNew = text.value.replace(/\W*\w*(\w)\1\w*\W*/ugi, " ");
document.getElementById('result1').textContent = textNew;

   //console.log(textNew)
}

// 3.Удалите одной регуляркой все повторяющиеся слова из строки,
// например для 'ааву ааа ааа ап' должно вернуть 'ааву xxx ап'.

const text1 = document.getElementById('text1');
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function (){
    let textNew1 = text1.value.replace(/\b(\w+)[\s]+\1/ug, "$1");
    document.getElementById('result2').textContent = textNew1;

    //console.log(textNew1)
});

 // 4. Решите предыдущую задачу с учётом того, что слово может повторяться много раз.
 // Например  'ааву ааа ааа ааа ап ааа ааа ааа ап' должно вернуть 'ааву xxx ап'

const text2 = document.getElementById('text2');
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', changeThree);
function changeThree(){
    let textNew2 = text2.value.replace(/(\w+\s)\1+/ug, "$1");
    document.getElementById('result3').textContent = textNew2;
    
    //console.log(textNew2)
}


