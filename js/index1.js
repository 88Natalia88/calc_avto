// Задание под звездочкой
//1. Определите, что год находится в интервале от 2000 до 2100 с 
//   помощью только регулярного выражения.
const years = document.getElementById('year');
const result = document.getElementById('result');
const btn = document.getElementById('btn');
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

const text = document.getElementById('text');
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', capitalize);
function capitalize(){
    let b = /\W*\w*(\w)\1\w*\W*/g;
    let textNew1 = text.value.replace(b, " ");
    //text.value = text.value.replace("([a-z])\\1+", "");//(/\W*\w*(\w)\1\w*\W*/g, " ");
    document.getElementById('text1').textContent = textNew1;
}

//console.log(text)

// 3.Удалите одной регуляркой все повторяющиеся слова из строки,
// например для 'ааву ааа ааа ап' должно вернуть 'ааву xxx ап'.

btn1.addEventListener('click', replaced);
function replaced(){
    let a = /\b(\w+)\s+\1/g;
    let textNew = text.value.replace(a, "$1");
    document.getElementById('text1').textContent = textNew;
}
 // 4. Решите предыдущую задачу с учётом того, что слово может повторяться много раз.
 // Например  'ааву ааа ааа ааа ап ааа ааа ааа ап' должно вернуть 'ааву xxx ап'
 btn1.addEventListener('click', clean);
 function clean(){
    let c = /(\w+\s)\1+/g;
    let textNew2 = text.value.replace(c, "$1");
    document.getElementById('text1').textContent = textNew2;
 }
 