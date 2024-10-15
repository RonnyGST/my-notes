//Um JSON é uma maneira simplificada e organizada de passar valores, usando chave(nome q a gente dá. Identificador) e valor (qualquer valor q a gente queira)

//É assim que se cria um JSON. Ele tem o objetivo de transferir dados.

//NOTA: ele seria uma estrutura que guarda várias variáveis? Afinal, posso declarar ele com let ou com o const

//A variável market é um objeto literal, com chave e valor
let market = {
    name : "Ronny",//name é a chave e depois eu dou um valor para ela 
    age : 19,
    products : {//Isto seria um objeto?
        0 : ["Mouse", 29.90, 5.99],//Dentro do JSON, nunca se esqueça da vírgula!
        1 : ["Teclado", 85.90, 12.50],
        2 : ["Processador", 1249.90, 27.49],
        3 : ["Placa de vídeo", 2349.90, 44.99]
    }
}
console.log(market.name);
/*
Pra pegar um objeto específico da estrutura de dados, basta colocar um . e o nome do objeto.
*/
function generateInvoice(market){
    console.log("Seu nome é " + market.name);
    console.log("Sua idade é " + market.age);
    
    /*
    Declaro a variável. O "in" significa: percorra. Então seria pra ele percorrer a lista de produtos dentro de market.
    */
    for(let index in market.products){
        //Declarando duas ou mais variáveis ao mesmo tempo
        let[productName, productPrice, productFrete]= market.products[index];
        /*
        Com o "for in"(um tipo diferente de "for"), o index será incremetado automaticamente percorrendo os elementos da lista de products. O for in é próprio pra percorrer objetos. Isto é um processo de desestruturação. Vc está pegando os elementos da lista e colocando eles nas variáveis q vc criou respectivamente.
        */
        console.log("Seus produtos são " + productName + " O preço é " + productPrice + " E o frete é " + productFrete);
    }
    
    
}
generateInvoice(market);




/*****
CRIANDO A CLASSE DE UM OBJETO
*****/


/*objetos podem ter funções, ou seja, podem ter comportamentos*/

//Pra vc declarar e chamar uma variável dentro da classe, vc precisa do "this."
class formaDeBolo{//Esse é o nome da classe
    constructor(saborMassa, saborRecheio){
    /*
    Essa é a função padrão, com dois parâmetros. Toda vez q vc criar uma classe vc tem q criar o constructor por padrão
    A função constructor serve pra atribuir os valores pra dentro da classe. Ele sempre deve ter esse nome.
    */
        this.saborMassa = saborMassa;
        /*
        Isto seria pra colocar a variável saborMassa como propriedade dentro da estrutura de dados da classe
        */
        /*
        Quando vc escreve "this.saborMassa", vc está dizendo que a propriedade q vai existir dentro da estrutura de dados da sua classe será sabor massa, e o valor desta propriedade q vai existir será o parâmetro saborMassa q vc criou.
        */
        this.saborRecheio = saborRecheio;
    }
    
    /*
    Isto é uma função. Quando vc está dentro de uma classe, n é necessário escrever a palavra chave function.
    */
    escrever(){
        console.log(`Este bolo é de ${this.saborMassa} com recheio de ${this.saborRecheio}`);
        /*
        Aqui se faz necessário usar o "this." antes da variável pois vc está usando a variável em si, não o valor dela. Vc está chamando a variável.
        */
    }
}

/*
Um objeto é quando vc usa a classe(instancia a classe).
Quando vc escreve "new", vc está dizendo que quer uma nova instância (no caso a formaDeBolo). Estes parâmetros em forma de string são os valores dos parâmetros criados em "constructor". Sendo assim, vc criou um objeto pois usou a classe formaDeBolo. O "constructor" significa q ele será chamado quando vc criar um objeto, como nesse caso.
*/
let boloFesta = new formaDeBolo("chocolate", "baunilha");

console.log(boloFesta);
/*
Vc pode acessar um valor específico do objeto apenas digitando . e o nome da variável em questão, como: boloFesta.saborRecheio
*/

let boloEspecial = new formaDeBolo("milho", "prestígio");//Isto é outro objeto

boloFesta.escrever();//Aqui vc pode executar uma ação específica do objeto.

boloEspecial.escrever();

boloFesta.saborRecheio = "morango";//Posso mudar os valores das variáveis depois
boloFesta.escrever();


//Lembre-se, vc pode chamar funções dentro de funções. Então vc poderia ter uma função q chama várias funções ao mesmo tempo!