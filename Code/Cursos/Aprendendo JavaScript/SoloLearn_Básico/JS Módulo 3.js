let valorcompra = 2000;
if (valorcompra>=2000) {
    console.log("Desconto:");
    if (valorcompra<3000) {//vc pode colocar if um dentro do outro, mas esse segundo só será executado se o primeiro for verdadeiro pois ele está dentro do primeiro e depende dele pra poder fazer essa verificação também.
        console.log("Menor q 3 mil");
    }
}

let moeda = 250;
let preço = 37;

if (moeda<preço) {
    console.log("Dinheiro insuficiente, tente novamente.");
}else{
    console.log("Pagamento concluído!");
}



let level = 57;

if (level==99) {
    console.log("Max level");
}else if (level>40) {
    console.log("Master");
}else {
    console.log("Loser");
}




let choice = 1;
//O switch é uma alternativa ao if else quando vc quer fazer várias verificações.
switch(choice){
  case 1:
      console.log("Sports");
      break;
  case 2:
      console.log("Business");
      break;
  case 3:
      console.log("Technology");
      break;//O break é pra parar a execução do código 
  default://Vai executar um código se nenhuma das opções combinar com o valor da variável.
      console.log("Nenhuma das opções");
}


let age = 18;

switch(true){//Este parâmetro diz: escolha entre os casos verdadeiros abaixo 
    case age <= 5:
        console.log( "cartoon");
        break;
    case age <= 17:
        console.log( "animation");
        break;
    case age >= 18:
        console.log("movie" );
        break;
}


let fruta = "uva";

switch (fruta) {
    case "maçã":
        console.log("Suco de " + fruta);
        break;
        
    case "banana":
    case "abacate"://Vc pode colocar dois case pra executar a mesma coisa
        console.log("Vitamina de " + fruta);
        break;
    case "uva":
        console.log("Suco de " + fruta);
        console.log("Esse suco é bom!");//Vc pode colocar mais de um comando em um único case. Vc também pode usar outras coisas como if ou loops em um case, depende do q vc quer fazer.
        break;
    
    
    default:
        console.log("Nenhuma vitamina");
}


let idade = 10;
let isAdult = (age<18)? "Já é adulto. Sua idade é:"+idade : "Não é adulto. Sua idade é:"+idade;//Aqui temos um operador ternário. Ele é uma alternativa curta para o if else. Vc declara a variável, depois coloca uma condição seguida de um ponto de interrogação. Se for verdadeiro, executará o que está antes dos dois pontos, porém se for falso executará o que está depois dos dois pontos.
console.log(isAdult);