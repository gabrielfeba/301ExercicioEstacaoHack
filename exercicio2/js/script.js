let numerodousuario;
let numerochave = Math.round(Math.random() * 49 + 1);
while(numerodousuario != numerochave) {
    numerodousuario = prompt("Qual o numero?");
    if(Number(numerodousuario) === numerochave) {
        alert("Você acertou!");
    } else if(numerodousuario > numerochave) {
        alert("É um numero menor!");
    } else if(numerodousuario < numerochave) {
        alert("É um numero maior!");
    }
}

