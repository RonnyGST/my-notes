console.log("Olá mundo!");//Coloque entre aspas se for escrever texto
console.log(19);/*Não precisa de aspas pra printar números*/
console.log(65+20);
console.log(398-23);
console.log(100/5);
console.log(3*4);
console.log((2+5)*3);//O que está dentro do parênteses será calculado primeiro
let name="Ronny";//Declarando a variável e já atribuindo um valor pra ela
console.log(name);
let coin;
coin=1350;//Atribuindo um valor pra variável depois q declarou ela
let x = 2;
let y = 3;
console.log(x**y);//É assim que se faz exponencial 
let a = 36;
let b = 1/2;
console.log(a**b);//É assim que faz raíz quadrada. Pra fazer raíz cúbica, basta colocar o valor "1/3" em "b" e assim por diante 
let bolas = 100;
let caixas = 3;
//estou distribuindo 100 bolas em 3 caixas
console.log(bolas % caixas);//Com o módulo "%" eu descubro o resto
let contador = 5;
contador++;//É o mesmo que contador=contador+1
console.log(contador);
let score = 200;
score --;
console.log(score);
console.log(x++);//2 pois ele vai mostrar x antes de ser incrementado
console.log(x);//3 pois x foi incrementado na sentença anterior (se o ++ ou -- estiver antes da variável neste caso, ele iria incrementar antes de mostrar no output)
console.log(++a);//37, pois o incremento veio antes, isso se chama prefixo 
score+=10;//A lógica para isso é que pega o valor atual de score e soma com o valor que você deseja(pode ser uma variável inclusive). Pode ser usado em todos os sinais matemáticos(+-*/%)
console.log(score);
console.log("Primeira linha\nSegunda linha\nTerceira linha!");//Para vc quebrar as linhas, use "\n" na string
console.log(`Usando o back-sticks
Com o back-sticks vc pode quebrar a linha sem usar \ n`);//se quiser adicionar uma variável com string aqui, vai precisar usar a sintaxe:... ${variável em questão}...




//Logo abaixo uma função com um loop e uma condição 
let i = 0
function cont(i) {
    while (i<10){
        i++;
    }
   if (i<10){
       return i;
   }else{
       return i+" Contagem concluída";
   }
}
console.log(cont(i));


