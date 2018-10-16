//exercicio 4 sem o bônus

let meninos = ["Alfredo", "Pedro", "Anastácio", "Waldisney"];
let meninas = ["Alexandrina", "Francisca", "Josefa", "Marinalva"];
let contador = 0;

for(let menino of meninos) {
    for(let menina of meninas) {
        console.log(`O ${menino} e a ${menina} formam casal.`);
        contador++;
    }
}

console.log(`A quantidade possível de casais é ${contador}.`);