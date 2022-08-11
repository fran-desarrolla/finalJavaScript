// defino el objeto que voy a utilizar mediante class
/*const precioPanComun = 90
const precioPanPapa = 100
const precioCarne = 150
const precioPollo = 200
const precioQueso = 40
const precioJamon = 70
const precioLechuga = 30
const precioTomate = 45
const precioPapasChicas = 120
const precioPapasMedianas = 150
const precioPapasGrandes = 180
const precioGaseosaChica = 200
const precioGaseosaMediana = 240
const precioGaseosaGrande = 260
const precioDescuento = 0.90
*/

const btnInicio = document.getElementById("btnInicio")
const selInicio = document.getElementById("selInicio")
const selPan = document.getElementById("selPan")
const selMedallon = document.getElementById("selMedallon")
const selJqlt = document.getElementById("selJqlt")
const selPapas = document.getElementById("selPapas")
const selGaseosa = document.getElementById("selGaseosa")
const selFinal = document.getElementById("selFinal")

const btnAtras = document.getElementById("btnAtras")
const btnSiguiente = document.getElementById("btnSiguiente")

var contador = 0


btnInicio.onclick = () =>{
   ocultaTodo() 
   selPan.style.display = "flex"
   muestraBotones()
    aumentaContador()
    console.log(contador)
   
}

btnAtras.onclick = () =>{
    disminuyeContador()
    mueveSlide()
        console.log(contador)
}

btnSiguiente.onclick = () =>{
    aumentaContador()
    mueveSlide()
    console.log(contador)
}

function aumentaContador(){
    contador = contador + 1
}

function disminuyeContador(){
    contador = contador - 1
}

function mueveSlide(){
if(contador == 0){
    ocultaTodo()
    selInicio.style.display="flex"
    ocultaBotones()}else if (contador == 1){
        ocultaTodo()
        selPan.style.display="flex"
    }else if (contador == 2){
        ocultaTodo()
        selMedallon.style.display="flex"
    }else if (contador == 3){
        ocultaTodo()
        selJqlt.style.display="flex"
    }else if (contador == 4){
        ocultaTodo()
        selPapas.style.display="flex"
    }else if (contador == 5){
        ocultaTodo()
        muestraBotones()
        selGaseosa.style.display="flex"
    }else{
        ocultaTodo()
        selFinal.style.display="flex"
        btnSiguiente.style.display="none"
    }
}


function muestraBotones(){
    btnAtras.style.display ="flex"
    btnSiguiente.style.display ="flex"
}

function ocultaBotones(){
    btnAtras.style.display ="none"
    btnSiguiente.style.display ="none"
}

function ocultaTodo(){
    selInicio.style.display = "none"
    selPan.style.display = "none"
    selMedallon.style.display = "none"
    selJqlt.style.display = "none"
    selPapas.style.display = "none"
    selGaseosa.style.display = "none"
    selFinal.style.display = "none"
}




/*class Combo {
    constructor(pan, precioPan, medallon, cantidadMedallon, precioMedallon, queso, jamon, lechuga, tomate, precioQueso, precioJamon, precioLechuga, precioTomate, sizePapas, papas, gaseosa, sizeGaseosa, precioGaseosa, descuento, precioDescuento, totalCombo) {

        this.pan = pan;
        this.precioPan = precioPan;
        this.medallon = medallon;
        this.cantMedallon = cantidadMedallon;
        this.precioMedallon = precioMedallon;
        this.queso = queso;
        this.jamon = jamon;
        this.lechuga = lechuga;
        this.tomate = tomate;
        this.precioQueso = precioQueso;
        this.precioJamon = precioJamon;
        this.precioLechuga = precioLechuga;
        this.precioTomate = precioTomate;
        this.sizePapas = sizePapas;
        this.papas = papas;
        this.gaseosa = gaseosa;
        this.sizeGaseosa = sizeGaseosa;
        this.precioGaseosa = precioGaseosa;
        this.descuento= descuento;
        this.precioDescuento = precioDescuento;
        this.totalCombo = totalCombo;

    }
    seleccionaPan() {
        this.pan = prompt("seleccione el tipo de pan que desea (normal - de papa)")
        while (this.pan !== "normal" && this.pan !== "de papa" && this.pan !== "fin") {
            this.pan = prompt("seleccione el tipo de pan que desea (normal - de papa)")
        }
        if (this.precioPan == "normal") {
            this.pan = precioPanComun

        } else {

            this.precioPan = precioPanPapa
        }

       
   let tabla = document.getElementById("tabla");
        tabla.innerHTML = `<tr><td> Pan  ${this.pan} </td> <td> $${this.precioPan} </td></tr>`
    
    
    }
    
    
    seleccionaMedallon() {

        this.medallon = prompt("seleccione el tipo de medallon que desea (carne - pollo)")

        while (this.medallon !== "carne" && this.medallon !== "pollo") {
            this.medallon = prompt("seleccione el tipo de medallon que desea (carne - pollo)")
        }

        this.cantMedallon = prompt("seleccione la cantidad de medallones (1 - 2 - 3)")

        while (isNaN(this.cantMedallon) || this.cantMedallon < 1 || this.cantMedallon > 3) {
            this.cantMedallon = prompt("seleccione la cantidad de medallones (1 - 2 - 3)")
        }
        this.cantMedallon = parseInt(this.cantMedallon)

        if (this.medallon == "pollo") {
            this.precioMedallon = precioPollo * this.cantMedallon
        } else {
            this.precioMedallon = precioCarne * this.cantMedallon
        }


        if (this.cantMedallon == 1) {
            
            let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td> ${this.cantMedallon} medallón de ${this.medallon} </td> <td> $${this.precioMedallon} </td></tr>`
        } else {
            
            let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td> ${this.cantMedallon} medallones de ${this.medallon} </td> <td> $${this.precioMedallon} </td></tr>`
        }
    }


    seleccionaQueso() {
        this.queso = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()


        while (this.queso !== "si" && this.queso !== "no" && this.queso !== "sí") {
            this.queso = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
        }

        if (this.queso == "no") {
            let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>Sin queso</td><td></td></tr>`
            this.precioQueso = 0
        } else {
            this.precioQueso = precioQueso
            let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>Queso</td> <td> $${this.precioQueso} </td></tr>`
        }
    }

    seleccionaJamon() {
        this.jamon = prompt("¿Desea su hamburguesa con jamón? (sí - no)").toLowerCase()


        while (this.jamon !== "si" && this.jamon !== "no" && this.jamon !== "sí") {
            this.jamon = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
        }

        if (this.jamon == "no") {
            let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>Sin jamón</td><td></td></tr>`
            this.precioJamon = 0
        } else {
            this.precioJamon = precioJamon
            let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>Jamon</td> <td> $${this.precioJamon} </td></tr>`
        }
    }
    

    seleccionaLechuga() {
        this.lechuga = prompt("¿Desea su hamburguesa con lechuga? (sí - no)").toLowerCase()


        while (this.lechuga !== "si" && this.lechuga !== "no" && this.lechuga !== "sí") {
            this.lechuga = prompt("¿Desea su hamburguesa con lechuga? (sí - no)").toLowerCase()
        }

        if (this.lechuga == "no") {
            let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>Sin lechuga</td><td></td></tr>`
            this.precioLechuga = 0
        } else {
            this.precioLechuga = precioLechuga
            let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>Queso</td> <td> $${this.precioLechuga} </td></tr>`
        }
    }
    

    seleccionaTomate() {
        this.tomate = prompt("¿Desea su hamburguesa con tomate? (sí - no)").toLowerCase()


        while (this.tomate !== "si" && this.tomate !== "no" && this.tomate !== "sí") {
            this.tomate = prompt("¿Desea su hamburguesa con tomate? (sí - no)").toLowerCase()}

        if (this.tomate == "no") {
            let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>Sin tomate</td><td></td></tr>`
            this.precioTomate = 0
        } else {
            this.precioTomate = precioQueso
            let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>Tomate</td> <td> $${this.precioTomate} </td></tr>`
        }
    
    }



    seleccionaPapas() {
        this.sizePapas = prompt("¿Qué tamaño de papas desea? (chicas - medianas - grandes)").toLowerCase()


        while (this.sizePapas !== "chicas" && this.sizePapas !== "medianas" && this.sizePapas !== "grandes") {
            this.sizePapas = prompt("¿Qué tamaño de papas desea? (chicas - medianas - grandes)").toLowerCase()
        }

        if (this.sizePapas == "chicas") {
            this.papas = precioPapasChicas
        } else if (this.sizePapas == "medianas"){
            this.papas = precioPapasMedianas
        } else {
            this.papas = precioPapasGrandes 
        }
        
        let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>Papas ${this.sizePapas}</td> <td> $${this.papas} </td></tr>`
    }

   seleccionaGaseosa(){
        this.gaseosa = prompt("¿Qué gaseosa desea? (Coca - Fanta - Sprite)").toLowerCase()

        while (this.gaseosa !== "coca" && this.gaseosa !== "fanta" && this.gaseosa !== "sprite") {
            this.gaseosa = prompt("¿Qué gaseosa desea? (Coca - Fanta - Sprite)").toLowerCase()
        }
      
        
        this.sizeGaseosa = prompt("¿Qué tamaño de gaseosa desea? (chica - mediana - grande)").toLowerCase()

        while (this.sizeGaseosa !== "chica" && this.sizeGaseosa !== "mediana" && this.sizeGaseosa !== "grande") {
            this.sizeGaseosa = prompt("¿Qué tamaño de gaseosa desea? (chica - mediana - grande)").toLowerCase()
        }

        if(this.sizeGaseosa == "chica"){
            this.precioGaseosa = precioGaseosaChica
        }else if(this.sizeGaseosa == "mediana"){
            this.precioGaseosa = precioGaseosaMediana
        }else{
            this.precioGaseosa = precioGaseosaGrande
        }

   let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>${this.gaseosa} ${this.sizeGaseosa}</td> <td> $${this.precioGaseosa} </td></tr>`
}

aplicaDescuento(){

    this.descuento = prompt ("Es jubilado o estudiante (si - no)").toLowerCase()

    while(this.descuento !=="si" && this.descuento !== "no" && this.descuento !=="sí"){
        this.descuento = prompt ("Es jubilado o estudiante (si - no)").toLowerCase()
    }

    if (this.descuento =="si"){
        this.totalCombo = this.totalCombo * precioDescuento
        

        let tabla = document.getElementById("tabla");
        tabla.innerHTML += `<tr><td>Descuento por jubilado o estudiante - 10%</td> <td></td></tr><tr><td>TOTAL</td><td>$${this.totalCombo}</td></tr>`
    }

}


calculaTotal(){
    this.totalCombo = this.precioPan + this.precioMedallon + this.precioJamon + this.precioQueso + this.precioLechuga + this.precioTomate + this.precioGaseosa + this.papas;

    let tabla = document.getElementById("tabla");
    tabla.innerHTML += `<tr><td id="totalCombo">TOTAL</td> <td>$${this.totalCombo} </td></tr>`

   
}


}

 

const combo1 = new Combo()

combo1.seleccionaPan()
combo1.seleccionaMedallon()
combo1.seleccionaQueso()
combo1.seleccionaJamon()
combo1.seleccionaLechuga()
combo1.seleccionaTomate()
combo1.seleccionaPapas()
combo1.seleccionaGaseosa()
combo1.calculaTotal()
combo1.aplicaDescuento()*/


