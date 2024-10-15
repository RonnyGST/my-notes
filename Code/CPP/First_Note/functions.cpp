#include <iostream>
#include <math.h>


using namespace std;

#define pi 3.14;//Isso é o equivalente a uma constante do javascript, ou seja, isto não pode ter seu valor alterado
#define mostrarResultado cout << "Toda vez que eu escrever a palavra 'mostrarResultado' esta mensagem sera exibida\nSeu resultado:\n";//Com o define, podemos definir uma constante ou então uma tarefa

void write(){
    cout << pi;
    cout << "Teste de soma! Insira dois valores inteiros para ver a soma entre eles!\n";
}

int add(int x, int y){//É preciso dizer o tipo de valor que os parâmetros recebem
    int soma = x + y;
    mostrarResultado;
    return soma;
}

//Pelo que entendi, a função main precisa ser a última pois ela é a única que é executada automaticamente
int main(){
    write();

    int a, b;

    cin >> a;
    cin >> b;

    int result = add(a, b);

    cout << result;

    return 0;
}