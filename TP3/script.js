
// function ingresar(){
//     window.location.href ="pag2.html";
// }
// let ingre = document.getElementById("ingresar");
// ingre.addEventListener("click",ingresar);

//Creación de tabla
let table = document.createElement("table");
let tBody = document.createElement("tbody");
let tHeader = document.createElement("thead");
let tfooter = document.createElement("tfoot");
table.appendChild(tHeader);
table.appendChild(tBody);
table.appendChild(tfooter);
document.getElementById("body").appendChild(table);

//Agregar columnas (headers: Nº, Servicio, IVA, Total)
let fila1 = document.createElement("tr");
let col1 = document.createElement("th");
col1.innerHTML = "Nº";
let col2 = document.createElement("th");
col2.innerText = "Servicio";
let col3 = document.createElement("th");
col3.innerHTML = "IVA";
let col4 = document.createElement("th");
col4.innerHTML = "Total";
fila1.appendChild(col1);
fila1.appendChild(col2);
fila1.appendChild(col3);
fila1.appendChild(col4);
tHeader.appendChild(fila1);

//Agregar datos
class Factura{
    constructor(numero, servicio, iva, total){
        this.numero = numero;
        this.servicio = servicio;
        this.iva = iva;
        this.total = parseFloat(total);
    }
}
const array = [];
const array2 = JSON.stringify("Factura")
function Refrescar(){
    if(tBody.childElementCount>0){
        tBody.innerHTML = "";
    }
    array.forEach(x => {
        let fila = document.createElement("tr");
        let cola = document.createElement("td");
        let colb = document.createElement("td");
        let colc = document.createElement("td");
        let cold = document.createElement("td");
        cola.innerHTML = `${x.numero}`;
        colb.innerHTML = `${x.servicio}`;
        colc.innerHTML = `${x.iva}`;
        cold.innerHTML = `${x.total}`;
        fila.appendChild(cola);
        fila.appendChild(colb);
        fila.appendChild(colc);
        fila.appendChild(cold);
        tBody.appendChild(fila);
    });
}
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
boton1.addEventListener("click", (e) => {
    e.preventDefault();
    let var1 = input1.value;
    let var2 = input2.value;
    array.push(new Factura(``, `${var1}`, `${(var2*21)/100}` , `${((var2*21)/100)+parseFloat(var2)}`));
    Refrescar();
    localStorage.setItem("Facturas", JSON.stringify(array));
})

boton2.addEventListener("click", Agregar);
function calcularPrecioTotal(lista){
    return valor = lista.reduce((valor, item) => valor + item.total, 0);
}
function Agregar(e){
    e.preventDefault();
    tfooter.innerHTML = "";
    let fila = document.createElement("tr");
    let cola = document.createElement("td");
    let colb = document.createElement("td");   
    let colc = document.createElement("td");
    let cold = document.createElement("td");    
    cola.innerHTML = ``;
    colb.innerHTML = ``;
    colc.innerHTML = `Total`;
    cold.innerHTML = `${calcularPrecioTotal(array)}`;
    fila.appendChild(cola);
    fila.appendChild(colb);
    fila.appendChild(colc);
    fila.appendChild(cold);
    tfooter.appendChild(fila);
}
// function busqueda(){
//     const tableReg = document.getElementById('tabla');
//     const searchText = document.getElementById("buscar").value.toLowerCase();
//     let total = 0;
//     for(let i = 1; i < table.rows.length; i++){
//         if(table.rows[i].classList.contains("nobusqueda")){
//             continue;
//         }
//         let buscar = false;
//         const celda = table.rows[i].getElementsByTagName("td");
//         for(let j = 0; i < celda.length && !buscar; j++){
//             const comparar = celda[j].innerHTML.toLowerCase();
//             if(searchText.length == 0 || comparar.indexOf(searchText) > -1){
//                 buscar = true;
//                 total++
//             }
//         }
//         if(buscar){
//             tableReg.rows[i].style.display = '';
//         }
//         else{
//             tableReg.rows[i].style.display = 'none';
//         }
//     }
//     const lastTR = searchText.rows[searchText.rows.length - 1];
//     const td = lastTR.querySelector("td");

// 
// boton2.addEventListener("click", BorrarLS);
// function BorrarLS(){
//     if(array2 != null){
//         array.forEach(item => {
//             array.pop();
//         })
//             localStorage.clear();
//     }    
//     console.log(JSON.parse(localStorage.getItem("Facturas")));
//     Refrescar();     
// }
// Refrescar();