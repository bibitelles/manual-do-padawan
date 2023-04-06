function desenhaTriangulo(point1, point2, point3) {
    let canvas= document.getElementById("canvas")
    let context = canvas.getContext("2d");
    
    context.fillStyle = "white";
    context.strokeStyle = "black";
    context.lineWidth = 2;
    
    context.beginPath();
    context.moveTo(point1.x, point1.y);
    context.lineTo(point2.x, point2.y);
    context.lineTo(point3.x, point3.y);
    context.closePath();
    context.fill();
    context.stroke();   
}

//valor de x precisa ser entre 0 e 200 e o valor de y precisa ser entra 0 e 100
const point1 = {x: primeiroAngulo ,  y: 200};
const point2 = {x: segundoAngulo, y: 60};
const point3 = {x: terceiroAngulo, y: 60 };

desenhaTriangulo(point1, point2, point3);

let primeiroAngulo = 40
let segundoAngulo = 60
let terceiroAngulo = 80
if (primeiroAngulo+segundoAngulo+terceiroAngulo==180){
  console.log ("É um triângulo")
}
else {
  console.log ("Não é um triângulo")
}

function mostraValor() {
    var x = document.getElementById("primeiroAngulo").value;
    document.getElementById("valor1").innerHTML = x;
};
function mostraValor() {
    var x = document.getElementById("segundoAngulo").value;
    document.getElementById("valor2").innerHTML = x;
};
function mostraValor() {
    var x = document.getElementById("terceiroAngulo").value;
    document.getElementById("valor3").innerHTML = x;
};

mostraValor();