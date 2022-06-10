//Calcular el area de un triangulo rectangulo

const areaTriangulo = (base: number, altura: number): number => {
    return base * altura / 2;
}
console.log("El area del triangulo es: ", areaTriangulo(5, 5) + " cm²");