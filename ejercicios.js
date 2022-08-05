//FUNCION SALUDO//

function saludar(){
    let nombre=prompt("Bienvenido a MikiShirt, Indicar tu nombre")
    console.log("Buenas noches "+nombre)
}


//PEDIDO DEL CLIENTE//

class listaDeStock {
    constructor(nombre, precio, talles) {
        this.nombre  = nombre;
        this.precio  = parseInt(precio);
        this.talles = talles;
    }
}

class listaDeCamisetas{
    constructor(club, precio, talle){
        this.club = club;
        this.precio = parseInt(precio);
        this. talle = talle;
    }
}

//ARRAYS//
const productos = [];
const camisetasInt=[
    {
        club: "Borussia Dortmund",
        precio: 10.000,
        talle: "S-M-L-XL"
    },
    {
        club: "Manchester City",
        precio: 13.000,
        talle: "S-M"
    }
    {
        club: "Manchester United",
        precio: 13.000,
        talle: "S-M"
    }

];

saludar();

let camisetas=prompt("Que camiseta queres comprar?\nFutbol internacional\nFutbol nacional\nSelecciones\nVersiones Retro\n(Escribir SALIR para volver al menu)")
let precio=0

//CONDICION//


while(camisetas!="SALIR"){
    switch(camisetas){
        case "Futbol Internacional":
        case "Futbol internacional":
        case "futbol internacional":
            Internacional=new listaDeStock("Futbol Internacional", 10000, "TALLES S,M,L,XL");
            console.log ("El precio de las camisetas internacionales arranca desde $10.000");
            precio=precio+10000;
            let consultaInt=prompt("Desea consultar las camisetas disponibles?");
            if (consultaInt=="si"){
                console.table(camisetasInt)
            }else{
               alert("No hay problema, te devolvemos al menu principal para que puedas elegir tu mejor opcion");
            }
            break;

        case "Futbol Nacional":
        case "Futbol nacional":
        case "futbol nacional":
            camisetaNacional= new listaDeStock("Futbol nacional", 8000,"TALLES S,M,L,XL");
            console.log ("El precio de las camisetas nacionales arranca desde $8.000");
            precio=precio+8000;
            let talleNac="talles" in camisetaNacional;
            console.log("Existen los siguientes talles para estos productos "+camisetaNacional.talles);
            let consultaNac=prompt("Desea realizar la compra de una Camiseta Nacional?")
            if (consultaNac=="si"){
                productos.push(new listaDeStock("Futbol nacional", 8000,"TALLES S,M,L,XL" ));
            }else{
               alert("No hay problema, te devolvemos al menu principal para que puedas elegir tu mejor opcion");
            }
            break;

        case "Selecciones":
        case "selecciones":
            camisetaSelecciones= new listaDeStock("Selecciones", 12000, "TALLES M,L");
            console.log ("El precio de las camisetas de seleccion arranca desde $12.000");
            precio=precio+12000;
            let talleSelec="talles" in  camisetaSelecciones;
            console.log("Existen los siguientes talles para estos productos "+camisetaSelecciones.talles);
            let consultaSelec=prompt("Desea realizar la compra de una Camiseta de Selecciones")
            if (consultaSelec=="si"){
                productos.push(new listaDeStock("Selecciones", 12000, "TALLES M,L" ));
            }else{
               alert("No hay problema, te devolvemos al menu principal para que puedas elegir tu mejor opcion");
            }
            break;

        case "Versiones Retro":
        case "Versiones retro":
        case "versiones retro":
            camisetaRetro= new listaDeStock("Versiones Retro", 15000, "Pocos talles-consultar");
            console.log ("El precio de las camisetas de futbol Version Retro arranca desde $15.000")
            precio=precio+15000;
            let talleRetro="talles" in  camisetaRetro;
            console.log("Existen los siguientes talles para estos productos "+camisetaRetro.talles);
            let consultaRetro=prompt("Desea realizar la compra de una Camiseta Version Retro?")
            if (consultaRetro=="si"){
                productos.push(new listaDeStock("Versiones retro", 15000, "Pedí por encargo"));
            }else{
               alert("No hay problema, te devolvemos al menu principal para que puedas elegir tu mejor opcion");
            }
            break;

        default:
            console.log("Ese producto no está en stock");
            break;
    }

    camisetas=prompt("Que camiseta queres comprar?\nFutbol internacional\nFutbol Nacional\nSelecciones\nVersiones Retro\n(Escribir SALIR para volver al menu)")
}

//DETALLES DE LOS PRODUCTOS//

console.table(productos);


//TOTAL A PAGAR//
console.log("Has seleccionado los siguientes articulos: "+this.nombre+"\nTotal a pagar $"+precio);