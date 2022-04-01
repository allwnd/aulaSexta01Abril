
/*

//Comandos de Escrita.
console.log("Olá Mundo");
// alert("Olá Mundo");
document.write("Nome");
document.writeln("Olá Mundo");


var numero1 = parseInt(prompt("Digite um número inteiro: "));
var numero2 = +(prompt("Digite um número inteiro: "));

var soma = numero1 + numero2;
document.write(numero1 + " + " + numero2 + " = " + soma);

*/

const body = document.querySelector('body');
console.log(body);

let ul = document.createElement('ul');
body.appendChild(ul);

let carrosAntigos = ["Impala", "Marea Turbo", "Vectra", "Scort", "Karmann Ghia"];

for (let i = 0; i < carrosAntigos.length; i++) {
    let li = document.createElement('li');
    li.innerText = carrosAntigos[i];

    li.setAttribute('id', "carro-" + (i + 1));
    li.setAttribute('class', "carro");
    li.setAttribute('title', carrosAntigos[i]);

    ul.appendChild(li);
}
