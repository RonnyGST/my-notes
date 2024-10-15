//include serve para incluir bibliotecas
#include <iostream>//Esta biblioteca nos permite realizar entradas e saídas com o c++
#include <math.h>//Biblioteca que nos dá funções matemáticas

using namespace std;//Fazendo essa declaração, eu não irei precisar digitar std:: para ter uma saída no terminal

//Essa é a minha função principal. Para declarar uma função, tenho que indicar primeiro o tipo de retorno que ela vai ter, que neste caso será um valor inteiro
int main() {

    //std significa "standart/padrão", ou seja, estamos chamando a função padrão da biblioteca iostream
    std::cout << "Congratulations on your first c++ code!\nCode author:\nRonny\n"; //cout é a função de saída do c++. Os dois símbolos de menor é para indicar qual vai ser a saída
    cout << "Acredito que consigo aprender muitas coisas pela frente!!\n";

    int numero1 = 7, numero2 = 2;//É possível declarar duas variáveis do mesmo tipo na mesma linha, basta separar elas por vírgula
    cout << "Divisao errada: " << numero1 / numero2 << endl;//Se o resultado da divisão de dois números inteiros for um número decimal, será retornado o quociente da divisão
    cout << "Divisao correta: " << (float)numero1 / (float)numero2 << endl;//Para obter o resultado exato, temos que dizer que queremos um float como resultado, e não um inteiro
    cout << "Potencia: " << pow(10,2) << endl;//Usando a função de potência da biblioteca math.h, onde o primeiro parâmetro é o número da base e o segundo é o expoente

    int num ;
    num = 225;
    cout << num << endl;//endl serve para indicar o fim da linha

    float height = 1.85;
    cout << height << endl;

    double bigNumber = 8.3e307;//A variável do tipo double pode guardar números maiores que vão até e307
    cout << bigNumber << endl;

    char letra = 'k';//A variável do tipo char só pode guardar uma única letra entre aspas simples
    cout << letra << endl;

    string word = "Variáveis do tipo string guardam mais de um caractere, mas tem que estar entre aspas duplas";
    cout << word << endl;

    int idade;
    cout << "Qual a sua idade?\n";
    cin >> idade;//A função de para receber uma entrada no c++ é o cin seguido de dois símbolos de maior para indicar o que vai ser a entrada
    cout << "Que legal! Gostei de saber que vc tem " << idade << " anos de idade!\n";

    system("pause");//Para a aplicação até algum botão ser pressionado
    
    return 0;
}
