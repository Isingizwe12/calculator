let numberButtons = document.querySelectorAll(".number-btn");
let outputInput=document.getElementById("output-input");

numberButtons.forEach(btn=>{
  btn.addEventListener("click",function(){
    outputInput.value += btn.innerText;
  });
})
let addBtn=document.getElementById("add-btn");
addBtn.addEventListener("click",function(){
  outputInput.value += "+";
})

let equalBtn=document.getElementById("equal-btn");
equalBtn.addEventListener("click",function(){
  try{
    outputInput.value = eval(outputInput.value);
  }catch(e){
    outputInput.value = "Error";
  }});


