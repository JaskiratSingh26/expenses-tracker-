let product_name=document.getElementById("des")
let category=document.getElementById("options")
let amount=document.getElementById("amount")
let table=document.querySelector("table")
let button=document.getElementById("add")
button.addEventListener('click',()=>{
    var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var ceel3=row.insertCell(2)
  cell1.innerHTML = product_name.value;
  cell2.innerHTML = category.value;
  ceel3.innerHTML=amount.value;

})