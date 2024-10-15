//Exemplo de loop


//Declaramos a variável, depois colocamos a condição e por fim a expressão final. Entre chaves colocamos o código a ser executado a cada interação 
for(let i = 0; i <=10; i++){
    console.log(i + " Loop for!!!");
}

//Declaramos a variável, depois colocamos a condição. O código dentro de chaves será executado a cada interação enquanto a condição for verdadeira 
let count = 0;
while(count<=15){
    console.log(count + " Loop while!");
    count++;
}

//abaixo uma variante do loop while. Primeiro ele faz a interação, depois ele testa a condição. Sua estrutura é basicamente: faça isso(bloco de código), enquanto isso for verdadeiro.
let loop = 0
//vai printar o loop e incrementar 1 enquanto loop for menor que 7
do{
    console.log(loop);
    loop ++;
}
while(loop<7);



/****
Um loop com break. Isso pode ser útil pra parar o loop com o input de um usuário 
****/
for(let h=0; h<10;h++) {
    if (h==3) {
     continue;//O continue serve para ignorar uma ação do loop e continuar a partir da próxima. O número 3 será pulado.
    }
  if(h==7) {
    break;//Pode ser usado em todos os tipos de loop(É necessário o if para que o break aconteça)
  }
  console.log(h + " Com break!");
}




/**********
Passamos parâmetros para as funções quando queremos q a mesma função execute resultados diferentes.

Se vc declarar uma variável dentro de uma função, ela só vai existir dentro da função e não poderá chamar ela fora da função.
*********/

function add(x,y){
    return x+y;//Isso aqui é o que a função vai retornar quando chamada.
}

let result = add(5,6);//Eu posso passar o valor do parâmetro da função depois quando eu chamar ela.
console.log(result);