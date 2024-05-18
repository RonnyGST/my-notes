/*
Exemplo de array. Na DIO eles comparam variáveis com caixas e arrays com armários. Use array como alternativa para não criar várias variáveis
*/

//Essa variável é um vetor. Vetores guardam vários dados do mesmo tipo na mesma variável.
let armario = ["Item 1" , "Item 2" , "Item 3" , 25 , 16];

//o .pop é uma função de array que exclui o último elemento da array. Quando vc coloca o . depois da variável array, vc poderá usar vários métodos que modificam a array.
armario.pop();
armario.shift();//Remove o primeiro elemento 

console.log(armario);//Para pegar o valor específico, selecione ele com a posição correspondente na array e coloque entre colchete 


/******
Exemplo de matriz. Matriz são vetores alinhados um em cima do outro, como se fosse uma tabela. Na matriz, vc pode guardar diferentes tipos de dados, como números e strings por exemplo. 

Da mesma forma que os vetores, quando vc chama a matriz e coloca um ponto na frente vc pode modificar ela com vários métodos.

Além dos métodos, vc pode usar as propriedades em ambos os casos. As propriedades falam sobre o vetor ou matriz. Por exemplo, o .length diz quantos elementos existem no vetor ou quantos vetores existem na matriz 
******/

let biVetor = [
        ["Ana ", 21 , " Cachorro"],
        ["Pedro ", 17 , " Gatos"],
        ["Larissa ", 26, " Coelho"]
    ];
    
console.log(biVetor[1][2]);//O primeiro colchete seleciona o vetor, o segundo seleciona o elemento dentro do vetor escolhido.

console.log(armario.length);


/****
No geral, quando vc coloca um ponto depois de uma ação, vc poderá usar as propriedades ou métodos daquela ação na programação.
*****/




/********
OPERADORES LOGIGOS

&& (AND) if(condição1 && condição2). Só poderá executar o código se ambas as condições forem verdadeiras

|| (OR) if(condição1 || condição2). Executará o código se uma condição ou a outra for verdadeira

! (NOT) if(!condição). Negação, se a condição não for verdadeira faça isso. Ou se vc quer transformar a condição em false, use a exclamação. Caso vc queira transformar a condição em true, use duas exclamação (!!), pois assim ele vai inverter.
*******/


//Nomeie suas funções com o padrão Camel case e com verbos de ação 
function assar(pao, nome){
    console.log("Torrada feita com " + pao);
    console.log("Pedido de " + nome);
}
//Quando não definimos um valor para o parâmetro, ele retorna com o valor default: undefined
assar("pão de forma");

function fazerSorvete(sabor, nome = "Joana"){
    //vc pode passar um valor default na hora de criar o parâmetro, pois assim se não houver um valor na hora de chamar a função, ele exibirá este valor default 
    console.log("Sorvete de " + sabor);
    console.log("Para o(a) cliente " + nome);
}

fazerSorvete("creme");


function getFirstName(name){
    /*o método split serve para quebrar o texto quando ele encontrar determinado caractere ao longo do texto, nesse caso o caractere em questão seria o espaço. 
    Então toda vez que tiver um espaço no texto da variável "name", o texto será quebrado.
    Você pode usar usar nenhum caractere de separação para separar a string por caractere, por exemplo:
    const name = 'ronny';
    let firstName = name.split("");//O resultado aqui seria uma array com as letras ['r','o', 'n', 'n', 'y']
    
    Quando vc usa o split pra quebrar o texto, ele guarda cada pedaço do texto em um vetor (array). 
    Para vc acessar a parte específica que deseja, coloque a posição em questão entre colchetes no final da declaração.*/
    let firstName = name.split(" ")[0];
    return firstName;
}

let userName = getFirstName("Ronny Gustavo Santos Teixeira");

console.log(userName);


/****
Levei um bom tempo pra resolver esse código  ;-;
*****/

function totalSalas(num){
  //Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];


//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= num; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays. O .includes() retorna true ou false.
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);


//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if (temTesouro) {
        console.log("Tesouro na sala " + sala + "!");
    } else if (temMonstro) {
        console.log("Monstro na sala " + sala + "!");
    }
}
}
totalSalas(5)

