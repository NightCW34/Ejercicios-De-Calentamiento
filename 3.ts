//Convertidor de megabytes a gigabytes


const converter3 = (megabytes: number): number => {
    return megabytes / 1024;
}

//Mostrar resultado
console.log("El resultado de la conversion es: ", converter3(1024) + " GB");