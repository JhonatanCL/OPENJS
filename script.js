var button = document.querySelector("#calculo");
  
function calcular(monto){
  var descuento = 0;
  if ((monto >= 1000)&&(monto<=2500)) { 
    descuento = 15
  }else if((monto > 2500)&&(monto<=4000)){
    descuento = 30
  }else if(monto > 4000){
    descuento = 50
  }else{
    descuento = 0
  }
  return(descuento)
}

button.addEventListener("click",function(event){
  var monto =  document.querySelector("#monto").value;    
  var descuento = calcular(monto);
  var cantDescuento = monto * (descuento/100);
  var total = monto - cantDescuento;

  document.querySelector("#porcentaje").textContent = descuento + "%";
  document.querySelector("#descuento").textContent = "S/ " + cantDescuento;
  document.querySelector("#resultado").textContent = "S/ " + total;
})