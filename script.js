const salir = "salir";

class Facturas{
    constructor(nombre, valor){
        this.nombre = nombre;
        this.valor = Number(valor);
    }
}

let arrayFacturas = []

function AgregarFacturas() {
    console.log()
    ingresar = Number(prompt(`¿Cuantas facturas desea ingresar?`));

    for (let i = 1; i <= ingresar; i++){
        const nombre = prompt(`Ingrese nombre o si desea salir escriba "salir`);
        if(nombre == salir){
            alert(`Gracias por su servicio`);
            break 
        }
        let valor = prompt(`Ingrese el valor de cada factura`);
        console.log(`Nº Factura ${i}:\n${nombre} con valor a pagar de $${valor}`);

        let nuevaFactura = new Facturas(nombre, valor);
        arrayFacturas.push(nuevaFactura);
    }
    
}
AgregarFacturas()

console.log(`\nHay un total de ${ingresar} facturas ingresadas`);

function total(lista){
    return valor = lista.reduce((i, item) => i + item.valor, 0);
}
console.log(`Precio final: ${total(arrayFacturas)}`);

function promedio(lista){
    return valor = total(lista)/lista.length ;
}
console.log(`El promedio es: ${promedio(arrayFacturas)}`);

arrayFacturas.filter(factura => factura.valor > 1000);
const lista1 = arrayFacturas.filter(factura => factura.valor > 1000);
lista1.forEach(element => {
    console.log(`${element.nombre}, ${element.valor}`);
});

// arrayFacturas.sort((a, b) => a - b);
// arrayFacturas.forEach(element => {
//     console.log(`${element.nombre}, ${element.valor}`);
// });