/**
 *
 * autor: Samuel Paloma
 * 08 Julio 2024
 */

let arregloNumeros = [];
let iterar;
let resultado = '';
let resultados = '';
let iteracion;
let i;

arregloNumeros = [1,2,3,4,5];
/*for ( i = 0; i <= arregloNumeros; i++) {
    arregloNumeros.push(i);
}
*/
for(iterar=0; iterar < arregloNumeros.length; iterar++){
    resultado += '<li class="list-group-item">'+arregloNumeros[iterar]+'</li>';
}
document.getElementById('numero-uno').innerHTML = resultado;


for(iterar= 0; iterar < arregloNumeros[iterar]; iterar++){
    let factor = 1;
    for (iteracion = 1; iteracion <= arregloNumeros[iterar]; iteracion++){
    factor *= iteracion;
    console.log(iteracion);
    }
    resultados += '<li class="list-group-item"> '+ factor +'</li>';
}

document.getElementById('numero-dos').innerHTML = resultados;
