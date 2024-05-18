/*
A FUNÇÃO require SÓ FUNCIONA NO NODE.JS
Esta é a função que importa o código exportado. Essa string é o caminho do arquivo que terá o código importado.

Você está importando o que está sendo exportado do arquivo funcoes_auxiliares

Este const irá receber um objeto que tem as funções (métodos) gets e print
*/
const funcoes = require('./funcoes_auxiliares');

console.log(funcoes.gets());


//Você também pode fazer assim para a sintaxe ficar melhor 
//Aqui você cria duas variáveis que recebe os objetos que o require está retornando.
/*
const {gets, print} = require('./funcoes_auxiliares');

Fazendo assim, poderá usar as funções direto:

print(gets());
*/