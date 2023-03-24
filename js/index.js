//модель и марка
const brand = document.querySelector('.brand__select');
const model = document.querySelector('.model__select');
//топливо
const petrol = document.getElementById('petrol');
const diesel = document.getElementById('diesel');
const gas = document.getElementById('gas');
const electricity = document.getElementById('electricity');
//объем и мощность
const volume = document.getElementById('volume');
const power = document.getElementById('power');
//состояние авто
const newAuto = document.querySelector('#new');
const used = document.querySelector('#used');
const broken = document.querySelector('#broken');
//владельцы
const one = document.querySelector('#one');
const more = document.querySelector('#more');
//возраст авто
const young = document.querySelector('#young');
const middle = document.querySelector('#middle');
const old = document.querySelector('#old');
const oldest = document.querySelector('#oldest');
//кнопка
const btn = document.getElementById('btn');

//console.log(old);

//объект моделей
const opel = [{'value':'Astra', 'id' : 'Astra', 'price' : 1900000},
{'value' : 'Mokka', 'id' : 'Mokka', 'price' : 2000000}, 
{'value' : 'Zafira', 'id' : 'Zafira', 'price' : 2200000}, 
{'value' : 'Corsa', 'id' : 'Corsa', 'price' : 1700000},
];
const reno = [{'value' : 'Logan', 'id' : 'Logan', 'price' : 1500000},
{'value' : 'Sandero', 'id' : 'Sandero', 'price' : 2100000},
{'value' : 'Duster', 'id' : 'Duster', 'price' : 2090000},
{'value' : 'Kaptur', 'id' : 'Kaptur', 'price' : 2500000}
];
const mazda = [{'value' : 'CX-5', 'id' : 'CX-5', 'price' : 2500000},
{'value' : 'CX-9', 'id'  : 'CX-9', 'price' : 2700000},
{'value' : 'CX-3', 'id'  : 'CX-3', 'price' : 2600000},
{'value' : 'CX-7', 'id'  : 'CX-7', 'price' : 2800000},
];
const jaguar = [{'value' : 'E-Pace', 'id' : 'E-Pace', 'price' : 5500000},
{'value' : 'F-Pace', 'id' : 'F-Pace', 'price' : 5000000},
{'value' : 'I-Pace', 'id' : 'I-Pace', 'price' : 10000000},
{'value' : 'F-Type', 'id' : 'F-Type', 'price' : 12500000},
];

 // добавление моделей в селект
brand.addEventListener('change', addModel);
function addModel(){
    let item1 = brand.options; //список всех наших option
    //console.log(item1)
    document.querySelector('.model__select').innerHTML = null;
    if(item1[1].selected === true){
        for(let i = 0; i < opel.length; i++){
            const option = document.createElement('option');
            option.value = opel[i].value;
            option.text = opel[i].id;
            option.price = opel[i].price;
            document.querySelector('.model__select').append(option);
        }
    }
    if(item1[2].selected === true){
        for(let i = 0; i < reno.length; i++){
            const option = document.createElement('option');
            option.value = reno[i].value;
            option.text = reno[i].id;
            option.price = reno[i].price;
            document.querySelector('.model__select').append(option);
        }
    }
    if(item1[3].selected === true){
        for(let i = 0; i < mazda.length; i++){
            const option = document.createElement('option');
            option.value = mazda[i].value;
            option.text = mazda[i].id;
            option.price = mazda[i].price;
            document.querySelector('.model__select').append(option);
        }
    }
    if(item1[4].selected === true){
        for(let i = 0; i < jaguar.length; i++){
            const option = document.createElement('option');
            option.value = jaguar[i].value;
            option.text = jaguar[i].id;
            option.price = jaguar[i].price;
            document.querySelector('.model__select').append(option);
        }
    }
}
//выбор оплаты
let pay;
btn.addEventListener('click', checkPay);
function checkPay(){
    let payment = document.getElementsByName('payment');
    for(let i = 0; i < payment.length; i++){
        if(payment[i].checked){
            pay = payment[i].value;
            break;
        }
    }
    //console.log(pay);
}

//добавление класса с владельцами и возрастом авто
const radios = document.querySelectorAll('input[type=radio][name="state"]');
const ownersAll = document.querySelector('.ownersAll');
const ageAll = document.querySelector('.ageAll');

radios.forEach(function (radio){
radio.addEventListener('change', function(){
    if(used.checked || broken.checked){
        ownersAll.style.display = "grid";
        ageAll.style.display = "grid";
    }else {
        ownersAll.style.display = "none";
        ageAll.style.display = "none";
    }
    //console.log(radio.value);
})
})

//находим стоимость конкретной модели
let price;
btn.addEventListener('click', changePrice);
function changePrice(){
    let modelNew = model.value;
    for(let i = 0; i < opel.length; i++){
        if(modelNew === opel[i].value){
            price = opel[i].price;
        }
    }
    for(let i = 0; i < reno.length; i++){
        if(modelNew === reno[i].value){
            price = reno[i].price;
        }
    }
    for(let i = 0; i < mazda.length; i++){
        if(modelNew === mazda[i].value){
            price = mazda[i].price;
        }
    }
    for(let i = 0; i < jaguar.length; i++){
        if(modelNew === jaguar[i].value){
            price = jaguar[i].price;
        }
    }
    //console.log(price);
}


document.getElementById('btn').onclick = function() {
//let value = document.querySelector('.brand__select').selectedOptions[0].value;
//let index = brand.selectedIndex; //нашли все индексы наших option
//let item1 = brand.options; //список всех наших option
//let brandNew = item1[index].textContent;
let percentDiesel = price + (price / 100 * 10);
let percentGas = price + (price / 100 * 0.5);
let percentElectricity = price + (price / 100 * 15);

if(newAuto.checked && petrol.checked){
    document.getElementById("text-price").innerHTML = `Примерная стоимость автомобиля: ${price}. Оплата будет производиться: ${pay}`;
} else if(newAuto.checked && diesel.checked){
    document.getElementById("text-price").innerHTML = `Примерная стоимость автомобиля: ${percentDiesel}. Оплата будет производиться: ${pay}`;
} else if(newAuto.checked && gas.checked){
    document.getElementById("text-price").innerHTML = `Примерная стоимость автомобиля: ${percentGas}. Оплата будет производиться: ${pay}`;
} else if(newAuto.checked && electricity.checked){
    document.getElementById("text-price").innerHTML = `Примерная стоимость автомобиля: ${percentElectricity}. Оплата будет производиться: ${pay}`;
}


}
// создание объекта и из него селект
/*for(let id in opel){
    const option = document.createElement('option');
    option.value = id;
    option.text = opel[id];
   // document.querySelector('.model__select').append(option);
}
for(let id in mazda){
    const option = document.createElement('option');
    option.value = id;
    option.text = mazda[id];
    //document.querySelector('.model__select').append(option);
}
for(let id in reno){
    const option = document.createElement('option');
    option.value = id;
    option.text = reno[id];
    //document.querySelector('.model__select').append(option);
}
for(let id in jaguar){
    const option = document.createElement('option');
    option.value = id;
    option.text = jaguar[id];
    //document.querySelector('.model__select').append(option);
}*/
/*
//получение value марок
// 1 вариант
brand.addEventListener('change', function() {
    const n = this.value;
    //console.log(n)
})
  // 2 вариант
brand.onchange = function(){
    let item = brand.value;
    //console.log(item)
}*/