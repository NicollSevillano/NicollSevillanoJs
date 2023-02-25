//DOM
let boton1 = document.getElementById("boton1");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let boton2 = document.getElementById("boton2");

//Eventos
boton1.addEventListener("click", (e) => {
    e.preventDefault();
    let var1 = input1.value;
    let var2 = input2.value;
    if(ArrayFacturas.length == 0){
        ArrayFacturas.push(new Factura("1", `${var1}`, (var2*21)/100, `${((var2*21)/100)+parseFloat(var2)}`));
    }
    else{
        ArrayFacturas.push(new Factura(parseInt(ArrayFacturas[ArrayFacturas.length-1].numero) + 1, `${var1}`, (var2*21)/100, `${((var2*21)/100)+parseFloat(var2)}`));
    }
    TableRender(ArrayFacturas);
      //Local storage
    localStorage.setItem(ArrayFacturas);
})

//Local storage
// boton2.addEventListener("click", BorrarLS);
// function BorrarLS(){
    // if(array2 != null){
    //     array.forEach(item => {
    //         array.pop();
    //     })
    //         localStorage.clear();
    //         tBody.innerHTML = "";
    //         tFooter.innerHTML = "";
    // }    
    // console.log(JSON.parse(localStorage.getItem("Facturas")));
//       localStorage.clear();
//       TableRender(ArrayFacturas);    
// }

function calcularPrecioTotal(lista){
    return valor = lista.reduce((valor, item) => valor + item.total, 0);
}

class Factura{
    constructor(numero, servicio, iva, total){
        this.numero = numero;
        this.servicio = servicio;
        this.iva = parseFloat(iva);
        this.total = parseFloat(total);
    }
}

let table2 = document.createElement("table");
let tBody2 = document.createElement("tbody");
function TableRender(array){
    table2.innerHTML = 
    `<th>Numero</th><th>Servicio</th><th>IVA</th><th>Total</th><th></th><th>Total Final</th>`                
    tBody2.innerHTML = array.map(factura =>
        `<tr>
            <td>${factura.numero}</td>
            <td>${factura.servicio}</td>
            <td>${factura.iva}</td>
            <td>${factura.total}</td>
            <td><button onclick="Borrar(${factura.numero})">Eliminar</button></td>
        </tr>`
    ).join("");
    tBody2.innerHTML += 
    `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>${calcularPrecioTotal(ArrayFacturas)}</td>
    </tr>`
    document.getElementById("body").appendChild(table2);
    table2.appendChild(tBody2);
    table2.style.margin ="auto auto";
    table2.style.gap ="10px";
}
let ArrayFacturas = [];
function Agregar(factura){
    ArrayFacturas.push(factura);
    TableRender(ArrayFacturas);
}
function Borrar(numero){
    if(ArrayFacturas.length > 1){    
        ArrayFacturas[0].numero==numero?ArrayFacturas.shift():ArrayFacturas = ArrayFacturas.filter(factura => factura.numero !== numero);
    }
    else{
        if(ArrayFacturas[0].numero==numero){
            ArrayFacturas.pop();
        }
    }
    TableRender(ArrayFacturas);
}
TableRender(ArrayFacturas);

let table3 = document.createElement("table");
let tBody3 = document.createElement("tbody");
fetch('../TP3/sucursales.json')
    .then (Response => Response.json())
    .then (sucursales => {
        table3.innerHTML = 
            `<th>Nombre</th><th>Sucursal</th><th>Telefono</th>`     
            sucursales.map(sucursal => {
                tBody3.innerHTML += 
                `<tr>
                    <td>${sucursal.nombre}</td>
                    <td>${sucursal.sucursal}</td>
                    <td>${sucursal.nroTelefono}</td>      
                </tr>`;
    })                 
        document.getElementById("foot").appendChild(table3);
        table3.appendChild(tBody3);
        table3.style.marginLeft = "auto";
        table3.style.marginRight = "auto";
        table3.style.border =  "1px solid #000";
        tBody3.style.border = "1px solid #000";
})