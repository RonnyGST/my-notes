function get() {
    return 10;
}

function print(text) {
    console.log(text);
}

//Aqui você está exportando um objeto que tem as funções (métodos), gets e print.
module.exports = {get, print};