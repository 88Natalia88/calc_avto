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

//увеличение стоимости моделей в зависимости от топлива
let percent;
let fuels = document.getElementsByName('fuel');
fuels.forEach(function(fuel){
    fuel.addEventListener('click', function(){
        if(petrol.checked){
            percent = price;
        }else if(diesel.checked){
            percent = price + (price / 100 * 10);
        }else if(gas.checked){
            percent = price + (price / 100 * 0.5);
        }else if(electricity.checked){
            percent = price + (price / 100 * 15);
        }
        //console.log(percent)
    })
})
 //увеличение стоимости модели в зависимости от объема двигателя
let percentVolume;
let percentPower;
let percentSum = percent + (percentVolume + percentPower);
btn.addEventListener('click', function(){
    let volumeNumber = volume.value;
    if(volumeNumber <=1.1){
        percentVolume = percent; 
    }else if(volumeNumber >= 1.2 && volumeNumber <= 1.8){
        percentVolume = (percent / 100 * 0.3);
    } else if(volumeNumber > 1.8 && volumeNumber <= 2){
        percentVolume =percent + (percent / 100 * 0.4);
    } else if(volumeNumber > 2 && volumeNumber <= 3.3){
        percentVolume =percent + (percent / 100 * 0.5);
    } else if(volumeNumber >=3.5){
        percentVolume = percent + (percent / 100 * 0.6);
    } 
    percentSum = percent + (percentVolume + percentPower);
    //console.log(percentVolume);
    //console.log(percentSum);
})
btn.addEventListener('click', function(){
    let powerNumber = power.value;
    if(powerNumber <= 100){
        percentPower = percent;
    } else if(powerNumber > 100 && powerNumber <= 125){
        percentPower = (percent / 100 * 0.2);
    } else if(powerNumber > 125 && powerNumber <= 150){
        percentPower = (percent / 100 * 0.3);
    } else if(powerNumber > 150 && powerNumber <= 175){
        percentPower = (percent / 100 * 0.4);
    } else if(powerNumber > 175 && powerNumber <= 200){
        percentPower = (percent / 100 * 0.6);
    } else if(powerNumber > 200 && powerNumber <= 225){
        percentPower = (percent / 100 * 0.8);
    } else if(powerNumber > 225 && powerNumber <= 250){
        percentPower = (percent / 100 * 10);
    } else if(powerNumber > 250){
        percentPower = (percent / 100 * 13);
    }
    //console.log(percentPower);
})
// уменьшение стоимости в зависимости от возраста
let percentAge;
let ages = document.getElementsByName('age');
ages.forEach(function(age){
    age.addEventListener('click', function(){
        if(young.checked){
            percentAge = percentSum;
        }else if(middle.checked){
            percentAge = percentSum - (price / 100 * 20);
        }else if(old.checked){
            percentAge = percentSum - (price / 100 * 30);
        }else if(oldest.checked){
            percentAge = percentSum - (price / 100 * 40);
        }
        console.log(percentAge)
    })
})

document.getElementById('btn').onclick = function() {
    if(newAuto.checked){
        document.getElementById("text-price").innerHTML = `Примерная стоимость автомобиля: ${percentSum}. Оплата будет производиться: ${pay}`;
    } else if(used.checked && one.checked){
        document.getElementById("text-price").innerHTML = `Примерная стоимость автомобиля: ${percentAge}. Оплата будет производиться: ${pay}`;
    } else if(used.checked && more.checked){
        document.getElementById("text-price").innerHTML = `Примерная стоимость автомобиля: ${percentAge - (percentAge / 100 * 10)}. Оплата будет производиться: ${pay}`;
    } else if(broken.checked){
        document.getElementById("text-price").innerHTML = `Примерная стоимость автомобиля: ${percentAge - (percentAge / 100 * 50)}. Оплата будет производиться: ${pay}`;
    }
}