/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas
 * @return Valor que retorna
 */

function cambiarUnidades(id, valor){
    var metro,pulgada,pie,yarda;

    if(valor.includes(",")){
        valor  = valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("Se ingrese in valor no valido" + id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
        /*document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";*/
    }else if( id == "metro"){
        metro = valor;
        pulgada= 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
        /*document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidades.unid_pie.value = 3.28084*valor;
        document.lasUnidades.unid_yarda.value = 1.09361*valor;*/
    }else if(id == "Pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;/*
        document.lasUnidades.unid_metro.value = 0.0254*valor;
        document.lasUnidades.unid_pie.value = 0.0833333*valor;
        document.lasUnidades.unid_yarda.value = 0.0277778*valor;*/
    }else if(id == "yarda"){
        yarda = valor;
        metro = 0.9144*valor;
        pulgada = 36*valor;
        pie = 3*valor;
        /*document.lasUnidades.unid_metro.value = 0.9144*valor;
        document.lasUnidades.unid_pulgada.value = 36*valor;
        document.lasUnidades.unid_pie.value = 3*valor;*/
    }else if(id == "pie"){
        pie = valor;
        metro = 0.3048*valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
        /*document.lasUnidades.unid_metro.value = 0.3048*valor;
        document.lasUnidades.unid_pulgada.value = 12*valor;
        document.lasUnidades.unid_yarda.value = 0.333333*valor;*/
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

function convertirGR(id){
    var grad,rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id == "radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}


function mostrar_ocultar(valorMO) {
    if(valorMO == "val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO === "val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}

function calcularsuma(){
    var num1,num2;

    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}

function calcularresta(){
    var num1,num2;

    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}
function calcularmulti(){
    var num1,num2;

    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
}
function calculardivi(){
    var num1,num2;

    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
}

function cargarWeb(){
    var cant, unidad, urlComp;
    cant =  document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado(){
    var urlComp, can,un;

    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];
    //console.log(urlComp);
    document.getElementById('dist').value = can + " " + un;
}

function guardarLocalStorage(){
    let distancia, unidad;

    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('Unidades')[0].value;
    localStorage.setItem("distanciaLS",distancia);
    localStorage.setItem("unidadesLS",unidad);
    window.open('2_web.html');
}

function cargarLocalStorage(){
    let cant, un;
    cant  = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");
    document.getElementById("dist").value  = cant + " " + un;
}

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var margen = 5;
    var xMax = canvas.width;
    var yMax = canvas.height;

    ctx.fillStyle = "#333899";
    ctx.fillRect(0 + margen,yMax = 40,40,40);

    ctx.arc(xMax/2,yMax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#8b4c99";
    ctx.fill();
}

var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    var posx = event.clientX;
    var posy = event.clientY;
    console.log(posx,posy);

    canvas.onmousedown =  function () {bandera = true};
    canvas.onmouseup =  function () {bandera = false};

    if(bandera){
        ctx.fillRect(posx,posy,5,5);
        ctx.fill();
    }

}

function LimpiarCanvas(){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}

function dibujarCuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx  = canvas.getContext("2d");

    var anchoMax = canvas.width;
    var alturaMax = canvas.height;

    ctx.beginPath();
    for(var i = 0; i<alturaMax;){
        ctx. moveTo(0,i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle = "#e3e0ec";
        ctx.stroke();
        i = i+20;
    }
    ctx.closePath();

    ctx.beginPath();
    for(var i = 0; i<anchoMax;){
        ctx. moveTo(i,0);
        ctx.lineTo(i,alturaMax);
        ctx.strokeStyle = "#e3e0ec";
        ctx.stroke();
        i = i+20;
    }
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle="#d91c00";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle="#d91c00";
    ctx.stroke();
    ctx.closePath();


}


function dibujarImagen(posX, posY){
    var canvas = document.getElementById("myCanvas");
    var ctx  = canvas.getContext("2d");

    console.log(posX,posY);
    var img  = new Image();

    img.src = "images/auto.png";

    canvas.width = canvas.width;
    img.onload = function (){
        ctx.drawImage(img, posX, posY);
    }
}

x = 0;
dx = 2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx  = canvas.getContext("2d");

    var img  = new Image();

    img.src = "images/auto.png";

    canvas.width = canvas.width;
    img.onload = function (){
        ctx.drawImage(img, x, 100);
    }

    if(x>canvas.width){
        x=0;
    }

    x += dx;
}