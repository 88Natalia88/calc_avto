// Задание под звездочкой
//1. Определите, что год находится в интервале от 2000 до 2100 с 
//   помощью только регулярного выражения.
let years = document.getElementById('year');
let result = document.getElementById('result');
let btn = document.getElementById('btn');
btn.addEventListener('click', yearString); 
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


