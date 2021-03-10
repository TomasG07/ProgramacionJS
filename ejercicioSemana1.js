const codigoDulce = "c4f2";
const dinero = 500;
var opcion=0;
var cambio=0;
/*Codigo de dulces con su respectivo precio:
Chocolate: xc23 Precio: 12.50
Paleta : c4f2 Precio: 5.75
Chicle: gt74 Precio : 4.25
Galleta: l2k8 Precio:: 9.10
*/
if (dinero >= 12.50 && codigoDulce == "xc23"){
    cambio=dinero-12.50;
    console.log("Compra del chocolate exitosa, gracias por su preferencia. Su cambio es de: "+cambio);
    if (dinero <12.50){
        console.log("La compra no se realizo, Dinero insuficiente");

    }
}else if (dinero >= 5.75 && codigoDulce == "c4f2"){
    cambio=dinero-5.75;
    console.log("Compra de la paleta exitosa, gracias por preferirnos. Tu cambio es de: "+cambio);
    if (dinero<5.75){
        console.log("La compra no se realizo, Dinero insuficiente");
    }

}else if (dinero >= 4.25 && codigoDulce == "gt74"){
    cambio=dinero-4.25;
    console.log("Compra del chicle exitosa, gracias por su preferencia. Tu cambio es de: "+cambio);
    if (dinero<4.25){
        console.log("La compra no se realizo, el dinero es insuficiente.")
    }
}else if (dinero >= 9.10 && codigoDulce == "l3k8"){
    cambio=dinero-9.10;
    console.log("Compra de la galleta a sido exitosa, gracias por su preferencia. Tu cambio es de: "+cambio);
    if (dinero<9.10){
        console.log("La compra no se realizo, el dinero es insuficiente.")
    }
}else if (dinero<4.25){
    console.log("Dinero insuficiente para cualquier compra");

}else if (codigoDulce !="xc23"||codigoDulce!="c4f2"|| codigoDulce!="gt74"||codigoDulce!="l3k8"){
    console.log("El codigo que ingresaste no le pertenece a ningun producto");

}