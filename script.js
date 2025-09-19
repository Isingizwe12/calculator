let numberButtons = document.querySelectorAll(".number-btn");
let outputInput=document.getElementById("output-input");

numberButtons.forEach(btn=>{
  btn.addEventListener("click",function(){
    outputInput.value += btn.innerText;
  });
})
// operation buttons

let addBtn=document.getElementById("add-btn");
addBtn.addEventListener("click",function(){
  outputInput.value += "+";
})
let subBtn=document.getElementById("sub-btn");
subBtn.addEventListener("click",function(){
  outputInput.value += "-";
})
let mulBtn=document.getElementById("mul-btn");
mulBtn.addEventListener("click",function(){
  outputInput.value += "*";
})
let diviBtn=document.getElementById("divi-btn");
diviBtn.addEventListener("click",function(){
  outputInput.value += "/";
})
let moduBtn=document.getElementById("modu-btn");
moduBtn.addEventListener("click",function(){
  outputInput.value += "%";
})
let dotBtn=document.getElementById("dot-btn");
dotBtn.addEventListener("click",function(){
  outputInput.value += ".";
})
// AC button
let acBtn=document.getElementById("ac-btn");
acBtn.addEventListener("click",function(){
  outputInput.value="";
})
// Del button
let delBtn=document.getElementById("del-btn");
delBtn.addEventListener("click",function(){
  outputInput.value=outputInput.value.slice(0,-1);
});
// equal button
let equalBtn=document.getElementById("equal-btn");
equalBtn.addEventListener("click",function(){
  try{
    outputInput.value = math.evaluate(outputInput.value);
  }catch(e){
    outputInput.value = "Error";
  }});


