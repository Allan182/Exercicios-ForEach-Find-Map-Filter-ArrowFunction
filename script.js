import { pessoa } from "./dados.js";

const outSaida = document.querySelector(".container");


/* 1 - Crie uma listagem do nome das pessoas no HTML;

    pessoa.forEach((e) => {
    let p = document.createElement("p");
    p.textContent = e.people;
    outSaida.appendChild(p)
}); */



/* 2 - Crie um card  com as informações de afiliação, mãe e pai de cada pessoa.

    pessoa.forEach((e) => {

    let card = document.createElement("div");
    card.classList.add("card");
    let afiliacao = document.createElement("p");
    let pai = document.createElement("p");
    let mae = document.createElement("p");

    afiliacao.textContent = `Pessoa: ${e.people}`;
    pai.textContent = `Pai: ${e.dad}`;
    mae.textContent = `Mãe: ${e.mom}`;

    card.appendChild(afiliacao);
    card.appendChild(pai);
    card.appendChild(mae);
    outSaida.appendChild(card);

}); */


/* 3 -  Crie um array com todos os estados que aparecem no endereço das pessoas.


let array = pessoa.map(e => {
    return (e.cep.state);
});

console.log(array); */



/* 4 - Crie um array com apenas os capixabas.


let ArrayCapixabas = pessoa.filter(e => {
    return e.cep.state == "ES";
})

console.log(ArrayCapixabas); */


/* 5 - Faça uma listagem das cidades do ES que aparecem no array;


let cidades = "";

let cidadesCapixabas = pessoa.forEach(e => { // pessoa.map
    if (e.cep.state == "ES") {
        cidades += e.cep.city + "\n" // Console.log(e.cep.city);
    }
}
);

console.log(cidades); */



/* 6 - Retorne um array com as filhas da “Lucia de Oliveira Barreto” 



let filhasLucia = pessoa.filter(e => {
    if (e.mom == "Lucia de Oliveira Barreto") {
        return e.people;
    }
});

console.log(filhasLucia); */


/* 7 Verifique se “Maria Isabela Paula Vasgestian” é mãe. */

let encontraMae = pessoa.filter(e => e.mom == "Maria Isabela Paula Vasgestian"); // Filter retorna um Array, Seja com Elementos [x, x] ou [] caso a expressão seja false; 

let verificaMae = (array) => { // Verifica se a função Encontra Mãe retorna um Array Length 0 ou seja vazio ou se o Array contem algum elemento.

    return (array.length > 0) ? array : "Não é mãe"; //  -> Operador Ternario


    /*  if (array.length > 0) {     //  If -> Else 
          return array;
      } else {
          return "Não é mãe!!!";
      } */

};

console.log(verificaMae(encontraMae));