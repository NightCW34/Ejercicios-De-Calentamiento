//Calcular el perimetro de un cuadrado
const perimetro = (base: number, altura: number): number => {
    return 2 * (base + altura);
}
console.log("El perimetro del cuadrado es: ", perimetro(5, 5) + " cm");