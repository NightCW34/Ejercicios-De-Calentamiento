//Convertidor de celsius a fahrenheit

const converter1 = (celsius: number): number => {
    return celsius * 1.8 + 32;
}

//Mostrar Resultado
console.log("El resultado de la conversion es: ", converter1(100) + " grados fahrenheit");
