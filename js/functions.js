function suma() {

    var a;
    var b;
    var suma;
    
    a= parseInt (prompt("por favor ingresar el primer valor"));
    b= parseInt (prompt("por favor ingresar el segundo valor"));
    
    suma = a + b;
    
    alert(" el resultado de la sum es:" + suma);    
}

function opBasicas(){

    var a; 
    var b; 
    var suma;
    var resta;
    var multiplicacion;
    var division;
 
    a= parseInt(prompt("Por favor ingrese el primer valor"));
    b= parseInt(prompt("Por favor ingrese el segundo valor"));

    suma = a + b; 
    resta = a-b;
    multiplicacion= a*b;
    division= a/b;

    alert(" el resultado de la suma es:" + suma);
    alert(" el resultado de la resta es:" + resta);    
    alert(" el resultado de la multiplicacion:" + multiplicacion);    
    alert(" el resultado de la division:" + division);    
}

function nMayor() {

    var a;
    var b;
    
    a= parseInt (prompt("por favor ingresar el primer valor a comparar"));
    b= parseInt (prompt("por favor ingresar el segundo valor a comparar"));

    if (a == b){ 
    alert("los valores ingresados son iguales")    
    }else if (a>b){
        alert("El numero mayor es " + a) 
    }else{
        alert("El numero mayor es " + b)   
    }

}

function nMenor() {
    var a;
    var b;
    var c;
    
    a= parseInt (prompt("por favor ingresar el primer valor a comparar"));
    b= parseInt (prompt("por favor ingresar el segundo valor a comparar"));
    c= parseInt (prompt("por favor ingresar el tercer valor a comparar"));

    if (a<=b){
        menor = a
    }else if (b<=a){
        menor = b
    }else{
        menor = c
    }
    
    alert ("El número " + menor + " es el menor")
}


function parOimpar(){

    var a;

    a=parseInt (prompt("Por favor digite el valor"));

    if (a%2==0){
        alert("El valor ingresado es un número par")
    } else {
        alert("El valor ingresado es un número impar")
    }
}

function Cuadrado(){

    var a;

    a= parseInt (prompt("Por favor digite el valor"));

    a= a*a;

    alert("El valor al cuadrado del número digitado es: " + a);
}

function area(){

    var a;
    var b;
    var area;

    a= parseInt(prompt("Por favor ingrese el valor de la base del triangulo"));
    b= parseInt(prompt("Por favor ingrese el valor de la altura del triangulo"));

    area = a*b/2

    alert("El valor del triangulo es : " + area);

}

function centimetros() {

    var a;
    var centimetros;

    a= parseInt(prompt("Pro favor ingrese el valor de los metros que quiere convertir en centimetros"));

    centimetros= a*100;

    alert("El valor de " + a + " metros en centimetros es: " + centimetros + " centimetros");
}

function añ0nacimiento(){

    var a;
    var edad;

    a= parseInt(prompt("Por favor ingrese su edad"));

    edad= 2022-a;

    alert("Su año de naciemiento es: " + edad);
}

function capital(){

    var c;
    var a;
    var g_a;
    var g_t;

    c= parseInt(prompt("Por favor ingrese el valor de su capital"));
    a= parseInt(prompt("Por favor ingrese el numero de años"));

    g_a= c*(0.24*a);
    g_t= g_a+c;

    alert("La ganancia total es: " + g_a);
    alert("La ganacia total es: " + g_t);

}

function colegio(){

    var a;
    var b;
    var c;
    var d;
    var e;
    var resultado;

    a= parseInt(prompt("Por favor ingrese la primera calificacion del estudiante"));
    b= parseInt(prompt("Por favor ingrese la sengunda calificacion del estudiante"));
    c= parseInt(prompt("Por favor ingrese la tercera calificacion del estudiante"));
    d= parseInt(prompt("Por favor ingrese la cuarta calificacion del estudiante"));
    e= parseInt(prompt("Por favor ingrese la quinta calificacion del estudiante"));

    resultado= (a+b+c+d+e)/5;

    if (resultado >= 3){
        alert("El promedio del estudiante es de: " + resultado + " por lo cual aprobo");
    } else{
        alert("El promedio del estudiante es de: " + resultado + " por lo cual reprobo");
    }
}