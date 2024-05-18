function generate(){
    let numA = Math.floor(Math.random() * 10);
    let numB = Math.floor(Math.random() * 10);
    let numC = Math.floor(Math.random() * 10);
    let numD = Math.floor(Math.random() * 10);
    let numE = Math.floor(Math.random() * 10);
    let numF = Math.floor(Math.random() * 10);
    
    console.log(numA);
    console.log(numB);
    console.log(numC);
    console.log(numD);
    console.log(numE);
    console.log(numF);
}

function not(){
    //gerando um número aleatório. Método 1
    console.log(Math.floor(Math.random() * 20));

    //Gerando um número aleatório. Método 2
    console.log(parseInt(Math.random() * 20));
}


generate();