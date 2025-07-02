let displayValue ='';
function clearDisplay(){
  displayValue  = '';

document.getElementById("display").value = displayValue;
}
function deleteLastChar(){
  displayValue = displayValue.slice(0,-1);
  document.getElementById("diplay").value.displayValue;
}
function appendValue(value){
  displayValue += value;
  document.getElementById("display").value = displayValue;
}
function CalculateResult(){
  try {
    displayValue = eval (displayValue);
  
  document.getElementById("display").value = displayValue;
  }catch(error ){
  document.getElementById("display").value = 'error'
  };
  

  
}
