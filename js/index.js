const btn = document.getElementById('btn');
const power = document.getElementById('power');
const volume = document.getElementById('volume');
const brand = document.querySelector('.brand');
const model = document.querySelector('.model');
const fuel = document.querySelector('.fuelAll');
const state = document.querySelector('.stateAll');
const owners = document.querySelector('.ownersAll');
const age = document.querySelector('.ageAll');
const payment = document.querySelector('.paymentAll');

//console.log(fuel)

document.getElementById('btn').onclick = function() {
var value = document.querySelector('.model__select').selectedOptions[0].value;
document.getElementById("text-price").innerHTML = value;
console.log(value);
}
