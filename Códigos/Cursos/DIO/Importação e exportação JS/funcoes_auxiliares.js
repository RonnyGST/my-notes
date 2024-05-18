function gets(){
    return 10;
}

function print(text){
    console.log(text);
}

//Aqui você está exportando um objeto que tem as funções (métodos), gets e print.
module.exports = {gets, print};

console.log(3)