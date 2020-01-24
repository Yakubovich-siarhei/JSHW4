// let select = document.getElementById('select');
// let create = document.getElementById('create');
// let spruse = document.getElementById('form-spruse');
// let fern = document.getElementById('form-fern');
// let form = document.getElementById('form');
// let saveButtom = document.getElementById("save");
// let main = document.getElementsByClassName("main")
// let ul = document.getElementsByClassName("ul")
// let arrTable = [];
let tables = document.querySelector('.tables')
let save_table = document.querySelector('.save_table')

let logPersons = localStorage.getItem('table');
let table = document.getElementById('table');

let table2 = document.querySelector('.table2')

let name = document.getElementById('name');
let   description = document.getElementById('description'),
    area = document.getElementById('area'),
    age = document.getElementById('age'),
    growth = document.getElementById('growth'),
    inp = document.getElementById('inp');


tables.onclick = function generateTable() {
  var table = `<div class="divName">
    <div class="divy">Название</div>
    <div class="divy">Описание</div>
    <div class="divy">Область применения</div>
    <div class="divy">Где произрастает</div>
    <div class="divy">Возраст</div>
    <div class="divy">Класс опасности</div>
  </div>`;
  document.getElementById('table').innerHTML += table;  

  table2.style.display = 'flex'
} 


let t = table;

save_table.addEventListener("click", function create() {
  if (t !== ' ') {
    person = {
        name: name.value,
        description: description.value,
        area: area.value,
        age: age.value,
        growth: growth.value,
        inp: inp.value
    }
    console.log(person)
  } 
    logPersons.push(person);
    localStorage.setItem("table", JSON.stringify(logPersons));
    console.log(logPersons)
    fetch('http://localhost:3000/users', {
      method: 'post',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(person)
  })
    return true;  
    
   
});

logPersons = JSON.parse(logPersons);

if (logPersons === null) {
    logPersons = [];
}
console.log(logPersons)

// //кнопка создать
// create.onclick = function(){show();}

// function show(){
//   form.style.display =='none' ? form.style.display ='block' : form.style.display = 'none';};

// // выбираем селектор (ель,папоротник)
// function Selected(number) {
//     let selecttor = number.value;
//       if (selecttor==1) {
//         spruse.style.display='block';
//         fern.style.display='none';
//       } else if (selecttor==2) {
//         spruse.style.display='none';
//         fern.style.display='block';
//       }
// };

// // //заносим данные выбранных checkbox в input
// // let inputs = Array.prototype.slice.call(document.getElementsByClassName("checkbox")),
// //     inp = document.querySelector("#inp");
// //     inputs.forEach(function (c) {
// //     c.onclick = function () {
// //         let a = [];
// //         inputs.forEach(function (b) {
// //             b.checked && a.push(b.value)
// //         });
// //         inp.value = a
// //     }
// // });

// // let  add = document.getElementById("add");
// // var list = document.querySelector("#list");
// // function headerList() {
// //   list.innerHTML = "";
// //   list.innerHTML +=
// //     "<ul class='headerList'>"+
// //       "<li>название</li>"+
// //       "<li>применение</li>"+
// //       "<li>описание</li>"+
// //       "<li>возраст</li>"+
// //       "<li>где растет</li>"+
// //       "<li>класс</li>"+
// //     "</ul>"
// // }

// // add.addEventListener("click", function() {
// //   list.innerHTML = "";
// //   headerList();
// // });


// //создание таблицы
// document.querySelector('.create').onclick = function insertRow(id) {
//   let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
//   let row = document.createElement("tr");
//   let td1 = document.createElement("td");
//     td1.appendChild(document.createTextNode(document.getElementById("name").value))
//   let td2 = document.createElement("td")
//     td2.appendChild(document.createTextNode(document.getElementById("inp").value))
//   let td3 = document.createElement("td")
//     td3.appendChild(document.createTextNode(document.getElementById("description").value))
//   let td4 = document.createElement("td")
//     td4.appendChild(document.createTextNode(document.getElementById("age").value))
//   let td5 = document.createElement("td")
//     td5.appendChild(document.createTextNode(document.getElementById("area").value))
//   let td6 = document.createElement("td")
//     td6.appendChild(document.createTextNode(document.getElementById("growth").value))
//   let td7 = document.createElement("td")
//     td7.appendChild(button = document.createElement("input"))
//       button.type = "button";
//       button.value = "ИЗМЕНИТЬ";
//   let td8 = document.createElement("td")
//     td8.appendChild(button2 = document.createElement("input"))
//       button2.type = "button";
//       button2.value = "УДАЛИТЬ";   
//       td8.setAttribute ('onmousedown', 'this.parentNode.parentNode.removeChild (this.parentNode);'); 
     
    
//   row.appendChild(td1);
//   row.appendChild(td2);
//   row.appendChild(td3);
//   row.appendChild(td4);
//   row.appendChild(td5);
//   row.appendChild(td6);
//   row.appendChild(td7);
//   row.appendChild(td8);
//   tbody.appendChild(row);
// }





// module.exports = function() {
	
// 	var data = { users: [] }
	
// 	for (var i = 0; i < 1000; i++) {
// 		data.users.push( { id: i, name: 'userok' + i, age: i } )		
// 	}
	
// 	return data;
// }


// function insertRow(id) {
//   let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
//   let row = document.createElement("tr");
//   let td1 = document.createElement("td");
//     td1.appendChild(document.createTextNode(document.getElementById("name").value));
//   let td2 = document.createElement("td")
//     td2.appendChild(check1 = document.createElement("input"))
//     check1.type = "checkbox"
//     check1.checked = "true"
//     check1.disabled = "true";
//     td2.appendChild(document.createTextNode(document.getElementById("inp").value))
//   let td3 = document.createElement("td")
//     td3.appendChild(document.createTextNode(document.getElementById("description").value))
//   let td4 = document.createElement("td")
//     td4.appendChild(document.createTextNode(document.getElementById("age").value))
//   let td5 = document.createElement("td")
//     td5.appendChild(document.createTextNode(document.getElementById("area").value))
//   let td6 = document.createElement("td")
//     td6.appendChild(document.createTextNode(document.getElementById("growth").value))
//   let td7 = document.createElement("td")
//     td7.appendChild(button = document.createElement("input"))
//       button.type = "button";
//       button.value = "ИЗМЕНИТЬ";
//   let td8 = document.createElement("td")
//     td8.appendChild(button2 = document.createElement("input"))
//       button2.type = "button";
//       button2.value = "УДАЛИТЬ";   
//       td8.setAttribute ('onmousedown', 'this.parentNode.parentNode.removeChild (this.parentNode);'); 
     
    
//   row.appendChild(td1);
//   row.appendChild(td2);
//   row.appendChild(td3);
//   row.appendChild(td4);
//   row.appendChild(td5);
//   row.appendChild(td6);
//   row.appendChild(td7);
//   row.appendChild(td8);
//   tbody.appendChild(row);
// }


// // сохранение не работает
// saveButtom.addEventListener('click',function(){
//   localStorage.setItem('form',main.innerHTML );
// });
