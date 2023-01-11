
ingresar = Number(prompt(`¿Cuantas facturas desea ingresar?`));

let total = 0;
let promedio = 0;
let facturas = 0;
const salir = "salir";
let valor = 0;

    for (let i = 1; i <= ingresar; i++){
    const nombre = prompt(`Ingrese nombre o si desea salir escriba "salir`);
    
    if(nombre == salir){
        alert(`Gracias por su servicio`);
        break 
    }
    valor = Number(prompt(`Ingrese el valor de cada factura`));
    console.log(`Nº Factura ${i}:\n${nombre} con valor a pagar de $${valor}`);

        total += valor
    }

    console.log(`\nHay un total de ${ingresar} facturas ingresadas`)
    parseFloat(console.log(`El total de las facturas son: ${total}`));

    promedio =  cpromedio(total, ingresar)
    function cpromedio(valor, ingrese){
        parseFloat(console.log(`El promedio es: $${valor/ingrese}`));
        return valor/ingrese
    }
    
/*    confirm(`¿Desea ver cuantas facturas superan los $1000?`)
        for(let i = 1; i < 1000; i++){
            if(valor < 1000){
                let num = valor
                console.log(`Hay un total de ${i} facturas mayores a $1000`);
            }
        }*/


