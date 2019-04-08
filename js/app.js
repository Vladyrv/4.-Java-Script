var calculadora = {
	visor: document.getElementById("display"),
	init: (function () {
		    this.visor.textContent = "0";
	
            var valor1, valor2, valor3, sw1, operador, deci, swi;
            deci=0;
            swi=0;
            sw1=0;

            var resultado = document.getElementById("display");
            var reset = document.getElementById("on");
            var suma = document.getElementById("mas");
            var menos = document.getElementById("menos");
            var por = document.getElementById("por");
            var divide = document.getElementById("dividido");
            var decimal = document.getElementById("punto");
            var igual = document.getElementById("igual");
            var cero = document.getElementById("0");
            var uno = document.getElementById("1");
            var dos = document.getElementById("2");
            var tres = document.getElementById("3");
            var cuatro = document.getElementById("4");
            var cinco = document.getElementById("5");
            var seis = document.getElementById("6");
            var siete = document.getElementById("7");
            var ocho = document.getElementById("8");
            var nueve = document.getElementById("9");
            var signo = document.getElementById("sign");
            var r2 = document.getElementById("raiz");

            cero.addEventListener("click",function(){
                if ((resultado.textContent.length)<8) {
                    inicial();
                    resultado.textContent = resultado.textContent + "0";
                }
            } 
            ) 
            
           var teclas = document.getElementsByClassName("tecla");
           
           for ( let i=0;i < teclas.length; i++) { 
                teclas[i].addEventListener("mousedown",function(){
                    teclas[i].setAttribute("style","transform:scale(0.95,0.95)")
                    })
                teclas[i].addEventListener("mouseup",function(){
                    teclas[i].setAttribute("style","transform:scale(1,1)")
                })
            }
           
            uno.addEventListener("click",function(){
                if ((resultado.textContent.length)<8) {
                    inicial();
                    resultado.textContent = resultado.textContent + "1";
                }
            } 
            ) 
            dos.addEventListener("click",function(){
                if ((resultado.textContent.length)<8) {
                    inicial();
                    resultado.textContent = resultado.textContent + "2";
                }
            } 
            ) 
            tres.addEventListener("click",function(){
                if ((resultado.textContent.length)<8) {
                    inicial();
                    resultado.textContent = resultado.textContent + "3";
                }
            } 
            ) 
            cuatro.addEventListener("click",function(){
                if ((resultado.textContent.length)<8) {
                    inicial();
                    resultado.textContent = resultado.textContent + "4";
                }
            } 
            ) 
            cinco.addEventListener("click",function(){
                if ((resultado.textContent.length)<8) {
                    inicial();
                    resultado.textContent = resultado.textContent + "5";
                }
            } 
            ) 
            seis.addEventListener("click",function(){
                if ((resultado.textContent.length)<8) {
                    inicial();
                    resultado.textContent = resultado.textContent + "6";
                }
            } 
            ) 
            siete.addEventListener("click",function(){
                if ((resultado.textContent.length)<8) {
                    inicial();
                    resultado.textContent = resultado.textContent + "7";
                }
            } 
            ) 
            ocho.addEventListener("click",function(){
                if ((resultado.textContent.length)<8) {
                    inicial();
                    resultado.textContent = resultado.textContent + "8";
                }
            } 
            ) 
            nueve.addEventListener("click",function(){
                if ((resultado.textContent.length)<8) {
                    inicial();
                    resultado.textContent = resultado.textContent + "9";
                }
            } 
            )  
            
            decimal.onclick = function(e){
                if (deci=="0"){
                    resultado.textContent = resultado.textContent + ".";
                    deci=1;
                } 
            }

            signo.onclick = function(e){
                if(resultado.textContent!=0){
                resultado.textContent = parseFloat(resultado.textContent)*(-1)     
                }
            }
            
        function inicial(){
            if (resultado.textContent=="0"){
                resultado.textContent = "";
            } 
            if (swi==1){
                resultado.textContent = "";
                swi=0;
                    
            }
        }

        reset.onclick = function(){
           resetear();
        }    

        
        function resetear(){
            resultado.textContent = "0";
            valor1=0;
            valor2=0;
            deci=0;
            operador="";
            swi=0;
        }

        function limpiar(){
            resultado.textContent="";
            sw1=0;
            deci=0;
        } 

        suma.onclick = function(e){
            valor1 = resultado.textContent;
            operador = "+";
            limpiar();
        }
        menos.onclick = function (e){
            valor1 = resultado.textContent;
            operador = "-";
            if (resultado.textContent=="0"){
                resultado.textContent = "-";
            } else {
                limpiar();
            }
        }
        por.onclick = function(e){
            
            valor1 = resultado.textContent;
            operador = "*";
            limpiar();
        }
        divide.onclick = function (e){
            valor1 = resultado.textContent;
            operador = "/";
            limpiar();
        }

        igual.onclick = function(e){
            if (resultado.textContent!="0"){
                if (sw1==0){
                    valor2 = resultado.textContent;
                    valor3 = resultado.textContent;
                    sw1 = sw1+1;
                } else {
                    valor1 = resultado.textContent;
                    valor2=valor3;    
                }
                deci=1;
                swi=1;
                resolver();
            } else {
                resultado.textContent="0";
            }    
            if (resultado.textContent.length>7){
                console.log(resultado.textContent.length)
                resultado.textContent=resultado.textContent.substring(0,8);
            }
        }

        r2.onclick = function(e){
            valor1 = resultado.textContent;
            resultado.textContent=Math.sqrt(valor1); 
            if (resultado.textContent.length>7){
                console.log(resultado.textContent.length)
                resultado.textContent=resultado.textContent.substring(0,8);
            }    
            
        }

        function resolver(){
            var respuesta;
            switch (operador){
                case "+":
                    respuesta = parseFloat(valor1)+parseFloat(valor2);
                    break;
                case "-":
                    respuesta = parseFloat(valor1)-parseFloat(valor2);
                break;    
                case "*":
                    respuesta = parseFloat(valor1)*parseFloat(valor2);
                break;
                case "/":
                    respuesta = parseFloat(valor1)/parseFloat(valor2);
                break;
                
            }
            
            resultado.textContent =respuesta;
        }

})
};

calculadora.init();