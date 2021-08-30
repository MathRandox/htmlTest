var canvas = document.getElementById('lienzo');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';

function borrar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function validaNumero(evt){
    var code = (evt.which) ? evt.which : evt.keyCode;    
    if(code==8) { //barra espacidora.
      return true;
    } else if(code>=48 && code<=57) { //solo numeros.
      return true;
    } else{ // otros.
      return false;
    }
}  


function mostrarDibujo(){  

    var relleno = document.getElementById("siOno");
    relleno.addEventListener("change", function() {
        console.log(relleno.value);
    });

    var valor = document.getElementById("longi").value;    

    if(document.getElementById('cuadrado').checked){
        borrar()
        ctx.beginPath();
        ctx.rect(50, 0, valor, 100);
        if(relleno.value == "1"){
            ctx.fill();
        }        
        ctx.fillStyle = 'green';
        ctx.stroke();    
        
    }
    if(document.getElementById('circulo').checked){
        borrar()
        ctx.clearRect(0, 0, 0, 0);  
        ctx.beginPath();
        ctx.arc(75, 75, valor, 0, 2 * Math.PI);
        if(relleno.value == "1"){
            ctx.fill();
        }  
        ctx.fillStyle = 'green';
        ctx.stroke();
    }
}