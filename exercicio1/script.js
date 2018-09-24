let renda = Number(prompt("Qual o seu salário?"));
let idade = Number(prompt("Qual sua idade?"));
let emprestimo = Number(prompt("Qual o valor do empréstimo?"));

if(idade < 21 || idade > 55 || renda <= 1000 || emprestimo > 15*renda || emprestimo < 500){
    console.log("Empréstimo negado");
    if(emprestimo < 500){
        console.log("Apenas empréstimo igual ou maior que 500 reais.");
    } else if(idade < 21) {
        console.log("Sua idade é menor do que 21 anos.");
    } else if(idade > 55) {
        console.log("Sua idade é maior que 55 anos.");
    } else if(emprestimo > 15*renda) {
        console.log("Seu salario menor do que 15 vezes o valor do empréstimo.");
    } else if(renda <= 1000) {
        console.log("Sua renda deve ser maior que 1000 reais");
    }
}
else{
    let parcelas = Number(prompt("Qual o número de parcelas?"));
    if(parcelas < 3 || parcelas > 24){
        console.log("O número de parcelas deve ser entre 3 e 24.");
    }
    else{
        let i = 1;
        while(i <= parcelas) {
            emprestimo = emprestimo * 1.085;
            i++;
        }
        let valorDaParcela = emprestimo / parcelas;
        console.log(`O empréstimo foi aprovado! O número de parcelas ficou de ${parcelas} vezes no valor de ${valorDaParcela}. Totalizando um pagamento de ${emprestimo}.`)
    }
    
}
