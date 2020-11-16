function suma(){
    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;
    
    /*
    Esta instruccion if, no es necesaria, solo es un ejemplo
    de como se puede mejorar un codigo.
    */
    if(n1==="" || n2===""){
         alert("Valores Vacios")
    }else if(isNaN(n1) || isNaN(n2)){
         alert("No son Numeros")
    }else{
         //Realiza la suma y muestra el resultado por un alert
         alert(parseInt(n1) + parseInt(n2));
    }
}

//Captura el elemento btn
const btn = document.getElementById("btnSumar");
//Asigna un addEventListener al boton, para que al dar clic en el, se ejecute la funcion suma
btn.addEventListener("click",suma);
/*
Note que la funcion suma no tiene los parentesis, ya que en este caso no queremos que la funcion
se ejecute inmediatamente, si no que, estamos esperando que el usuario de clic en el boton para 
luego llamar la funcion.
*/ 
