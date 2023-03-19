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
//оплата
const card = document.querySelector('#card');
const cash = document.querySelector('#cash');
const check = document.querySelector('#check');
//кнопка
const btn = document.getElementById('btn');

//console.log(old);

//объект моделей
const opel = {'Astra':'Astra',
'Mokka' : 'Mokka', 
'Zafira' : 'Zafira', 
'Corsa' : 'Corsa',
};
const reno = {'Logan' : 'Logan',
'Sandero' : 'Sandero',
'Duster' : 'Duster',
'Kaptur' : 'Kaptur',
};
const mazda = {'CX-5' : 'CX-5',
'CX-9' : 'CX-9',
'CX-3' : 'CX-3',
'CX-7' : 'CX-7',
};
const jaguar = {'E-Pace' : 'E-Pace',
'F-Pace' : 'F-Pace',
'I-Pace' : 'I-Pace',
'F-Type' : 'F-Type',
};
    console.log(jaguar['F-Pace'])



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


 // добавление моделей в селект
brand.addEventListener('change', addModel);
function addModel(){
    let item1 = brand.options; //список всех наших option
    //console.log(item1)
    document.querySelector('.model__select').innerHTML = null;
    if(item1[1].selected === true){
        for(let id in opel){
            const option = document.createElement('option');
            option.value = id;
            option.text = opel[id];
            document.querySelector('.model__select').append(option);
        }
    }
    if(item1[2].selected === true){
        for(let id in reno){
            const option = document.createElement('option');
            option.value = id;
            option.text = reno[id];
            document.querySelector('.model__select').append(option);
        }
    }
    if(item1[3].selected === true){
        for(let id in mazda){
            const option = document.createElement('option');
            option.value = id;
            option.text = mazda[id];
            document.querySelector('.model__select').append(option);
        }
    }
    if(item1[4].selected === true){
        for(let id in jaguar){
            const option = document.createElement('option');
            option.value = id;
            option.text = jaguar[id];
            document.querySelector('.model__select').append(option);
        }
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

const pay = document.querySelectorAll('payment');
console.log(pay);


const ownersAll = document.querySelector('.ownersAll');
document.getElementById('btn').onclick = function() {
//let value = document.querySelector('.brand__select').selectedOptions[0].value;
let index = brand.selectedIndex; //нашли все индексы наших option
let item1 = brand.options; //список всех наших option
let brandNew = item1[index].textContent;
let modelNew = model.value;
//console.log(value);
if(opel['Astra'] === modelNew  && newAuto.checked && petrol.checked && volume.value == 1.4 && power.value == 104 && card.checked){
    document.getElementById("text-price").innerHTML = `Вы выбрали новый ${brandNew} ${modelNew}. Стоимость составит: 1 мил 900 тыс рублей. Оплата будет картой`;
} else if(opel['Astra'] === modelNew  && newAuto.checked && petrol.checked && volume.value == 1.6 && power.value == 115){
    document.getElementById("text-price").innerHTML = `Вы выбрали новый ${brandNew} ${modelNew}. Стоимость составит: 2 мил 500 тыс рублей`;
} else if(opel['Astra'] === modelNew  && newAuto.checked && petrol.checked && volume.value == 2 && power.value == 130){
    document.getElementById("text-price").innerHTML = `Вы выбрали новый ${brandNew} ${modelNew}. Стоимость составит: 3 мил рублей`; 
} else if(opel['Astra'] === modelNew  && newAuto.checked && diesel.checked && volume.value == 2 && power.value == 130){
    document.getElementById("text-price").innerHTML = `Вы выбрали новый ${brandNew} ${modelNew}. Стоимость составит: 3 мил 300 тыс рублей`; 
} else if(opel['Astra'] === modelNew  && (newAuto.checked || used.checked || broken.checked) && diesel.checked && (volume.value == 1.4 || 1.6) && (power.value == 104 || 115)){
    document.getElementById("text-price").innerHTML = `Сожалеем. Но с такими параметрами не предусмотено топливо дизель`; 
} else if(opel['Astra'] === modelNew  && used.checked && petrol.checked && volume.value == 1.4 && power.value == 104){
    ownersAll.style = "display:initial";
    document.getElementById("text-price").innerHTML = `Вы выбрали новый ${brandNew} ${modelNew}. Стоимость составит: 1 мил 300 тыс рублей`; 
}
}