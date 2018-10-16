//exercicio 4 com o bônus

let meninosAndMeninas = ["Alfredo", "Pedro", "Anastácio", "Waldisney","Alexandrina", "Francisca", "Josefa", "Marinalva"];
let contador = 0;

for(let i = 0; i < meninosAndMeninas.length; i++) {
    for(let y = i + 1; y < meninosAndMeninas.length; y++) {
        console.log(`${meninosAndMeninas[i]} e ${meninosAndMeninas[y]} podem formar casal.`);
        contador++;
    }
}

console.log(`A quantidade possível de casais é ${contador}.`);