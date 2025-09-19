let numberButtons = document.querySelectorAll(".number-btn");
let outputInput=document.getElementById("output-input");

numberButtons.forEach(btn=>{
  btn.addEventListener("click",function(){
    outputInput.value += btn.innerText;
  });
})




