console.log("Cadastro de Alunos!!!");

let numeroAluno = 28;

for (let i = 0; i <= numeroAluno ; i++) {

if(i == 0) {
    console.log("O número atual é ZERO")
}

else if(i % 2 == 0) {
    console.log("O número " +i+ " é PAR")
} 

else {
    console.log(`O número ${i} é Ímpar`);    
}

}
/*let contador = 0;

while (contador <= numeroAluno) {
    
    
    if(contador == 0) {
        console.log("O número atual é ZERO")
    }
    
    else if(contador % 2 == 0) {
        console.log("O número " +contador+ " é PAR")
    } 
    
    else {
        console.log(`O número ${contador} é Ímpar`);    
    }

    contador++;
}

let nomesalunos = ["Renan", "Rafael", "Ana", "Thiago"];

for (let nome of nomesalunos) {
    console.log("Esta pessoa se chama " + nome);
}

nomesalunos.forEach(nome => {
    console.log("O nome é " + nome);

});*/