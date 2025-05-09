let cities = [ "New York", "Los Angeles", "Chicago", "Houston", "Phoenix" ];
console.log(cities)


cities[ cities.length - 1 ] = "Philadelphia"; // cambia el último elemento por "Philadelphia". 
console.log(cities)

console.log("Ejemplo de bucle for clásico:");
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

//COMPROBAR SI EL VALOR ES DIFERENTE DE CERO
// En este caso, se está comprobando si la variable "prueba" es diferente de cero.
const prueba = 9
console.log(prueba !==0)

// Salida:
// El valor de i es: 0
// El valor de i es: 1
// El valor de i es: 2
// El valor de i es: 3
// El valor de i es: 4