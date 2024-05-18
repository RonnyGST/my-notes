/*
Sobre Objetos:
*/


//Objetos são variáveis com vários nomes com valores (propriedades). Abaixo temos um JSON
let caneta = {
    colorOut : "Blue",
    colorInto : "Black",
    widthCM : 14
}

class person{
    constructor(name, age){
        this.name = name;  
        this.age = age;
        
        //Este é um método da classe "person". Todos os objetos que tiverem esse classe terá este método. O objetivo deste método é mudar o parâmetro "name" da classe
        this.changeName = function (name) {
            this.name = name;
        }
    }
    
}

//Criando o objeto e definindo o nome dele
let heroi = new person("David", 21);

//Mudando o parâmetro "name" do objeto.
heroi.changeName("John");

console.log(heroi.name)