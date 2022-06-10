//Convertidor de fahrenheit a celsius


const converter2 = (fahrenheit: number, valorFijo: number = 1.8, fijo: number = 32) => {
    return (fahrenheit - fijo) / valorFijo;
}

console.log("El resultado de la conversion es: ", converter2(100), " grados celsius");