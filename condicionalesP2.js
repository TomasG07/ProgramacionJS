//Ejemplo
/*Dado un numnero, separarlo en centenas, decenas y unidades, 
intercambiar la posicion entre las cenetenas y las unidades
e imprimir el numero final*/

var numeroCompleto= 738;
if ( numeroCompleto < 1000 && numeroCompleto > 99){
    var centenas = parseInt(numeroCompleto/100);
    console.log(centenas);
    var decenas = numeroCompleto % 100;
    decenas= parseInt(decenas/10);
   console.log(decenas);
    //Unidades  
    var unidades = numeroCompleto %10; 
    console.log(unidades);
    console.log("El valor final es "+unidades + decenas + centenas);
}else {
    console.log("Ingrese un numero valido (por favor un numero de 3 Digitos.)");
}

//Switch 
var conSwitch ="Luis";
var edad =18;
switch(conSwitch){
    case 2:
        console.log("El valor ingresado es: 2");
        break;
    case 6:
        console.log("El valor ingresado es 6");
        break;
    case "Luis":
         console.log("Hola Luis");
         if (edad==18){
             console.log("Felicidades sos mayor de edad");
         }
         break;
    default:
        console.log("El valor ingresado es Distinto");
        break;
         
}