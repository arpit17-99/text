document.querySelectorAll(".butt").forEach((element) => {  
  element.addEventListener("click", function(e){
    calculator.display.value += e.target.getAttribute('data-value');
  })
})

document.querySelectorAll(".buttr").forEach((element) => {  
  element.addEventListener("click", function(e){
    calculator.display.value = e.target.getAttribute('data-value');
  })
})

document.querySelectorAll(".butr").forEach((element) => {  
  element.addEventListener("click", function(e){
    calculator.display.value =eval(calculator.display.value);
  })
})


document.addEventListener("keyup", function(e){
  e.stopImmediatePropagation()
  if (event.key >= 0 && event.key <= 9) {
    calculator.display.value += event.key
  }

  if (event.key == '.'||event.key == '+'||event.key == '-'||event.key == '*'||event.key == '%'||event.key == '/'||event.key == '=') {
    calculator.display.value += event.key;
  }
  if (event.key =='Enter') {
    calculator.display.value = eval(calculator.display.value);
  }
  if (event.key =='Backspace'||event.key=='c'||event.key=='C') {
    calculator.display.value = ' ';
  }
})
