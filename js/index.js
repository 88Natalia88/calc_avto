const btn = document.getElementById('btn');
const power = document.getElementById('power');
const volume = document.getElementById('volume');
const brand = document.querySelector('.brand__select');
const model = document.querySelector('.model__select');
const fuel = document.querySelector('.fuelAll');
const state = document.querySelector('.stateAll');
const owners = document.querySelector('.ownersAll');
const age = document.querySelector('.ageAll');
const payment = document.querySelector('.paymentAll');

//console.log(fuel)
const opel = {'Astra':'Astra',
'Mokka' : 'Mokka', 
'Zafira' : 'Zafira', 
'Corsa' : 'Corsa',
}
const reno = {'Logan' : 'Logan',
'Sandero' : 'Sandero',
'Duster' : 'Duster',
'Kaptur' : 'Kaptur',
}
const mazda = {'CX-5' : 'CX-5',
'CX-9' : 'CX-9',
'CX-3' : 'CX-3',
'CX-7' : 'CX-7',
}
const jaguar = {'E-Pace' : 'E-Pace',
'F-Pace' : 'F-Pace',
'I-Pace' : 'I-Pace',
'F-Type' : 'F-Type',
}
//console.log(opel)
/*
//получение value марок
// 1 вариант
brand.addEventListener('change', function() {
    const n = this.value;
    //console.log(n)
})*/
  // 2 вариант
brand.onchange = function(){
    let item = brand.value;
    //console.log(item)
}

 // получение текста из option
brand.addEventListener('change', changeBrand);
function changeBrand(){
    let index = brand.selectedIndex; //нашли все индексы наших option
    let item1 = brand.options; //список всех наших option
    let brandNew = item1[index].textContent;
    //console.log(index)
    //console.log(item1)
    //document.getElementById("text-price").innerHTML = brandNew;
    console.log(brandNew);
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


document.getElementById('btn').onclick = function() {
let value = document.querySelector('.brand__select').selectedOptions[0].value;
document.getElementById("text-price").innerHTML = value;
console.log(value);
}
