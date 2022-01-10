//Este es un comentario de una linea

/*Este es un comentario
multilinea*/
/*
alert ("Estoy vivo");

console.log("Este es un mensaje para la consola");

var nombre = "Arturo Gabriel";
var apellidos =" Cuellar Merino";
var edad = 26;

console.log(nombre,apellidos,edad);

alert("Mi nombre es: " + nombre );

console.log(" Mis apellidos son: " + apellidos);

alert("Mi nombre es: "+ nombre + "\nApellidos: "+ apellidos +"\nMi edad es: "+ edad);

var numero1 = 5;
var numero2 = 7;
var resultado = numero1 - numero2;

console.log(" El resultado de la resta es : " + resultado);

//Sintaxis de una funcion
function nombreFuncion(parametro){
    instrucciones;
}*/

//Declaracion de funcion
/*
function saludar(){
    alert("Hola a todos");
}

saludar();


//Expresion de funcion anonima

var Cantar = function(){
    alert("A mi me gusta cantar");
}

Cantar();

//Funcion sin parametros

function sumar(){
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert ("La suma de la funcion sin parametros es: " + suma);
}

sumar();

//Funcion con pametros

function restar(num1,num2,resta){
    var num1 = 6;
    var num2 = 8;
    var resta = num1 - num2;
    alert("La resta de la funcion con parametros es: " + resta);
}

restar();

//Otra funcion con parametros
function cuadrado(cuadrado){
    var rescuadrado = cuadrado * cuadrado;
    alert("El cuadrado del numero es: "+ rescuadrado);
}

cuadrado(4);

function operaciones(num1, num2, num3,suma, resta, multi){
    var suma=num1+num2+ num3;
    var resta=num1-num2-num3;
    var multi = num1 * num2 *num3;
    alert("La suma es: "+ suma + "\n La resta es: " + resta + "\n La multiplicacion es: " + multi);
}

operaciones(5,6,7);
*/
//Area triangulo con parametros
function areat(base, altura){
    var area = (base * altura)/2;
    alert ("Esta es el area del triangulo: " + area);
}

areat(3,5);
//Area cuadrado sin parametros
function arearec(){
    var bas = 3;
    var alt = 5;
    var resultado = (bas * alt);
    alert("El area es: " + resultado);
}

arearec();
//Area circulo con Parametros

function areacir(radio){
    var resultado = (Math.PI *(radio * radio));
    alert("El area del circulo es: "+ resultado);
}

areacir(3);