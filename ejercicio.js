/* Para calucular el promedio de practicas de un curso, se tomara 
la calificacion de las 4 practicas que se hicieron, de esas 4 se 
va a eliminar la practica con menor calificacion y se obtendra el 
promedio de las 3 practicas restantes */
const calificacion1 = 2;
const calificacion2 = 4;
const calificacion3 = 10;
const calificacion4 = 7;
var  calificacionmenor = calificacion1;
var promedio=0;
  
if (calificacion2 < calificacion1){
    calificacionmenor=calificacion2;
}else if  (calificacion2 < calificacionmenor){
    calificacionmenor=calificacion3;

}else if (calificacion4 < calificacionmenor){
    calificacionmenor= calificacion4;
}
console.log("La calificacion menor es: "+calificacionmenor);
promedio = (calificacion1+calificacion2+calificacion3+calificacion4-calificacionmenor)/3;
console.log(promedio);
console.log("El resultado del promedio de las 3 notas mas altas es: "+promedio);
  