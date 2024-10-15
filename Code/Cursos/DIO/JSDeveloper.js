
//ANOTAÇÕES DIO JAVASCRIPT DEVELOPER


let num = 5.86 / 3.79;

console.log(num);
//O método toFixed serve para converter o número em uma string e definir uma quantidade fixa de casas decimais, arredondando o número.
console.log(num.toFixed(2));


//Como dizer pro código se um número é par ou não


let numero = 10;

let numeroPar = (numero % 2) === 0;
console.log(numeroPar);

/*O método pow serve para fazer a operação matemática de potência de maneira mais simples. 
Primeiro passamos o número que queremos fazer a operação como o primeiro parâmetro, depois passamos por qual número queremos potencializar como segundo parâmetro. 
Se for 2, é ao quadrado, se for 3 é ao cubo, etc.*/
console.log(Math.pow(numero, 2));




//Os nomes das classes sempre precisam começar com letra maiúscula e ser no singular por convenção e boas práticas 
class Car{
    constructor(ano, modelo, preco){
        this.ano = ano;
        this.modelo = modelo;
        this.preco = preco;
    }
    
    escrever(){
        console.log(this.ano);
    }
}

let carro = new Car(1997, "Fiat", 89000);
let moto = new Car(2001, "Onix", 3200);

console.log(carro);

//Posso criar outra propriedade do objeto assim
carro.marca = "Forza";
console.log(carro)

//Posso deletar uma propriedade do objeto assim
delete carro.modelo;
console.log(carro);

//Posso mudar uma propriedade já existente do objeto
carro.ano = 2017;
console.log(carro.ano);

console.log(moto);
carro.escrever();




//ARRAYS

const alunos = ["Maria", "José", "Pedro"];

//O método push é um método de array que adiciona elementos para a array
alunos.push("Lucas");

//Também posso adicionar elementos assim
alunos[4] = "Renan";
console.log(alunos);

//Posso alterar elementos já existentes assim
alunos[1] = "Samuel";
console.log(alunos);
