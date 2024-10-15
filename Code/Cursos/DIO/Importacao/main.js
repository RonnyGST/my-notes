/* 
A FUNÇÃO require SÓ FUNCIONA NO NODE.JS

Esta é a função que importa o código exportado. Essa string é o caminho do arquivo que terá o código importado.

Você está importando o que está sendo exportado do arquivo funcoes-auxiliares

Você cria duas variáveis que recebe os objetos que o require está retornando
*/

const {get, print} = require('./funcoes-auxiliares');

print(get());

//JEITO ALTERNATIVO

//Este const irá receber um objeto que tem as funções (métodos) gets e print.

/*
const funcoes = require('./funcoes-auxiliares');

funcoes.print(funcoes.get());
*/