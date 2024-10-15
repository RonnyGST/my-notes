#include <iostream>
#include <math.h>
#include <locale.h>
#include <cstddef>//Esta biblioteca contém a função nulo
#include "lib/computer.h"//Importando minha classe. Caso esteja em outro diretório, coloque o caminho completo.

/*std: significa "standard".
  namespace: indica o espaço de trabalho que iremos utilizar. Ele diz onde estão as bibliotecas ou funções que estão dentro delas.
*/
using namespace std;


void ponteiros(){
  //PONTEIROS EM C++

  int a;
  int* pont1;//O asterisco indica que é um ponteiro que aponta para uma variável do tipo inteiro.

  a = 15;
  pont1 = &a;//O símbolo de & indica o endereço de memória de uma variável. Ou seja, este ponteiro estará armazenando o valor de a e seu endereço na memória.


  cout << "Valor da variavel: " << a << endl;

  //Se eu usar o ponteiro dessa maneira, ele vai me retornar o endereço na memória da variável de a.
  cout << "Valor do ponteiro (endereço da variável do primeiro byte da variavel na memoria): " << pont1 << endl;

  //Se eu usar o ponteiro dessa maneira, ele vai me retornar o valor da variável que ele aponta.
  cout << "Valor da variavel que este ponteiro esta apontando: " << *pont1 << endl;


  int* pont2 = NULL;//NULL é a função de vazio.
  cout << pont2 << endl;
  /*
  int* pont3;
  cout << "Ponteiro que nao aponta para nada: " << pont3 << endl;//Se eu usar um ponteiro que não aponta para nada, ele vai apontar para um endereço de memória randômico automaticamente.
  */

  int* pont4 = new int;//Com isso, eu reservo um espaço na memória SEM NOME para guardar um inteiro.
  *pont4 = 10;//Então eu acesso esse espaço de memória apenas e exlusivamente com esse ponteiro.
  pont4 = pont1;//Se eu mudar o endereço da memória que esse ponteiro aponta, o endereço antigo é perdido e temos uma vazão de memória.

  int* pont5 = new int;
  *pont5 = 20;
  delete pont5;//Se eu quiser mudar o endereço de memória de um ponteiro sem perder o endereço antigo e ter uma vazão de memória, eu deleto o endereço antigo para atribuir o endereço novo, evitando a vazão de memória.
  pont5 = pont2;

  string frase = "Este e um teste de frase para eu saber seu tamanho na memória! Então posso ver o tamaho de variaveis desse jeito?";
  cout << "Tamanho da frase em caracteres: " << frase.size() << endl;//Assim vejo o tamanho da frase em caracteres.
  cout << "Tamanho da frase em bytes: " << sizeof(frase) << endl;//Assim vejo o tamanho da frase em bytes.


/*
Se eu declarar uma variável com valor, e depois criar outra variável e atribuir minha primeira para ela, ela fará uma cópia do conteúdo da primeira variável na memória, diminuindo o espaço da memória. Por exemplo:
*/

  string x = "Testando frase";
  string y = x;
  cout << "Tamanho de x: " << sizeof(x) << endl;
  cout << "Tamaho de y: " << sizeof(y) << endl;


}



/*..............................................................................................*/



void vetores(){
  //VETORES EM C++

  //Vetores são basicamente arrays unidimensionais.
  
/*................................................................................................*/
  //Alocação estática. Aqui estou reservando espaço na memória antes de compilar. Isso chamamos de alocação estática. 
  
  //Um vetor é uma estrutura de dados que armazena um conjunto de valores do mesmo tipo. Assim como uma array, a posição de um vetor é iniciada em 0.
  //int vetor1[5];//Cria um vetor de 5 posições. O valor entre colchetes indica o tamanho do vetor. Dessa maneira ele reserva 5 espaços na memória para guardar valores do tipo inteiro.
  
  //vetor1[0] = 20;//Posso definir o valor de cada posição do vetor individualmente dessa maneira.
  //cout << vetor1[3] << endl;//Se eu tentar acessar um valor de uma posição que não foi definida, ele vai retornar um valor aleatório armazenado na memória.

  int vetor2[4] = {5,12};//Posso declarar o vetor e definir os valores dele de uma vez dessa maneira, mas se eu não definir todos os valores, ele vai atribuir 0 aos valores que não foram definidos.
  cout << vetor2[1] << endl;

  int vetor3[] = {45,98,10};//Posso declarar o vetor sem dizer quantos elementos ele vai ter e já atribuir seus valores.
  cout << vetor3[2] << endl;


/*................................................................................................*/
  //Alocação dinâmica. Aqui estou reservando espaço na memória em tempo de execução do códigos. Isso chamamos de alocação dinâmica.
  int vetSize;

  cout << "Digite o tamanho do vetor: \n";
  cin >> vetSize;

  int* vet1 = new int[vetSize];//Ponteiro que reserva um espaço na memória do tamanho do vetor que o usuário informa.
  for (int i = 0; i < vetSize; i++){
    cout << "Digite o valor da posição " << i << " do vetor.\n";
    cin >> vet1[i];
  }

  cout << "Estes são os valores de seu vetor:\n";
  cout << "[ ";
  
  for (int i = 0; i < vetSize; i++){
    cout << vet1[i] << " ";
  }
  cout << "]\n";

  char quest;
  cout << "Deseja deletar o vetor? (1/y para sim, 2/n para não)\n";
  cin >> quest;
  if (quest == '1' || quest == 'y'){
    delete [] vet1;//Deleta o conteúdo do vetor.
    cout << "Vetor deletado com sucesso!\n";
  }else{
    cout << "Vetor não deletado.\n";
  }
}


/*..............................................................................................*/



void matrizes(){
  //MATRIZES EM C++

  //Matrizes são basicamente arrays bidimensionais.

  int matriz1[3][2];//Cria uma matriz de 3 linhas e 2 colunas (pois como são arrays, se conta a partir do 0). Primeiro indica a linha (x) e depois a coluna (y).
  matriz1[0][0] = 11;//Aqui eu defino o valor da primeira posição da matriz, ou seja, a primeira linha e primeira coluna.
  matriz1[0][1] = 12;
  matriz1[1][0] = 21;
  matriz1[1][1] = 22;
  matriz1[2][0] = 31;
  matriz1[2][1] = 32;

  for (int i = 0; i < 3; i++){//Aqui eu percorro as linhas da matriz
    for(int j = 0; j < 2; j++){
      cout << matriz1[i][j] << " ";
    }
    cout << endl;
  }

  //char cubo[3][3][3];//Cria uma matriz tridimensional.

  //Desenhar uma forma na tela:
  int x = 0;
  int y = 0;
  char shape;
  
  cout << "Informe a quantidade de linhas da sua matriz: \n";
  cin >> x;
  cout << "Informe a quantidade de colunas da sua matriz: \n";
  cin >> y;
  cout << "Informe o símbolo ou charactere que você deseja imprimir na matriz: \n";
  cin >> shape;
 
  char plano[x][y];

  //Aqui vou definir cada membro da matriz como o símbolo que o usuário informou.
  for (int i = 0; i < x; i++){
    for (int j = 0; j < y; j++){
      plano[i][j] = shape;
    }
  }

  //Aqui vou imprimir cada símbolo em minha matriz
  for (int i = 0; i < x; i++){
    for (int j = 0; j < y; j++){
      cout << plano[i][j] << " ";
    }
    cout << endl;
  }
  /*Como isto está funcionando:
  O primeiro for percorre as linhas da matriz. O segundo as colunas. Na primeira execução do for da linha, vou percorrer o for para todas as colunas da primeira linha, após esse for de colunas acabar, volto para o for de linhas para fazer a segunda linha, e então volto para o for das colunas para imprimir todas essas colunas dessa outra linha, e assim por diante.
  */
}



/*..............................................................................................*/
//CLASSES:

//Para declarar uma classe, usamos a palavra chave class, seguida do nome da classe.
class person{
  //Todos os atributos e métodos que estiverem dentro de private serão privados (o mesmo acontece com protected e public).

  //O que for declarado dentro de private só pode ser acessado dentro da classe.
  private:


  //O que for declarado como public pode ser acessado fora da classe, seja em funções soltas ou de outras classes.
  public:

  string sayAnything(string word){
    return word;
  }

  void sayHello(){
    cout << "Hello World!\n";
  }
};




class car{
  private:
    int year = 1990;
    string mark;
    float price, km;

  public:
    void setYear(int y){
      year = y;
    }

    void setMark(string mark){
      //Em casos específicos em que o nome do seu argumento for o mesmo da propriedade da classe, podemos usar o this-> para indicar que é propriedade da classe.
      this->mark = mark;
    }

    void setPrice(float p){
      price = p;
    }


    int getYear(){
      return year;
    }

    string getMark(){
      return mark;
    }

    float getPrice(){
      return price;
    }

    float getKm(){
      return km;
    }    

};






class cake{
  private:
    int camadas;
    string sabor;
    float preco;

  public:
  //Método construtor: com este método, posso passar as propriedades do objeto no momento da criação. O método constructor leva o mesmo nome da classe.

    cake(int x, string y = "Sabor indefinido", float z = 0.0){//Caso o usuário não informe algum dos parâmetros, o valor padrão será utilizado.
      camadas = x;
      sabor = y;
      preco = z;
    }
};





//Aqui declaro uma classe cujo métodos não fazem nada de início, eles são apenas declarados. Este jeito é mais organizado para trabalhar com arquivos separados
class phone{
  private:
    string mark;
    int memory;
    float price;

  public:
    phone(string m, int mem, float p);

    void setMark(string m);
    void setMemory(int mem);
    void setPrice(float p);
};
void executeClass(){
  person Robert;//Para criar um objeto a partir de uma classe, colocamos a classe em questão e depois o nome do objeto.
  Robert.sayHello();//Aqui eu chamo o método sayHello() da classe person.

  car Fiat;
  cout << Fiat.getYear() << endl;
  Fiat.setYear(2002);
  cout << Fiat.getYear();


  cake chocolate(3, "Chocolate", 5.50);//Exemplo de criação de um objeto usando a função constructor para definir as propriedades no momento da criação.
  
}


/*..............................................................................................*/






/*..............................................................................................*/
//Importação de classes de outros arquivos

void executeImport(){
  computer intel(4, 8, 500, 1200.00);
  cout << "The price of the computer is: " << intel.getPrice() << endl;
  system("pause");
}


/*..............................................................................................*/





int main() {
  //vetores();
  //ponteiros();
  //matrizes();
  //executeClass();
  executeImport();
  /*Para executar vários arquivos c++ ao mesmo tempo, será preciso compilar eles ao mesmo tempo para criar um executável
  Use o comando: 
  g++ (arquivo main ou principal com a extensão. Caso esteja em outro diretório que não seja o atual, forneça o caminho) (arquivos secundários com extensão separados por espaço que precisam ser compilados também. Caso necessário, forneça o diretório) -o (nomeDoArquivo.exe)
  O nomeDoArquivo.exe pode ser qualquer nome, pois este será o nome do arquivo do seu executável, caso seja necessário forneça um caminho de diretório se deseja salvá-lo em outro diretório.
  Neste projeto de importação de arquivos em c++ seria deste jeito no terminal usando estes comandos: g++ main.cpp lib/computer.cpp -o output/import.exe
  */
  return 0;
}


//Desta maneira posso dizer o que os métodos da classe phone fazem. É importante designar suas funções após a função main()

//Para indicar suas funções, coloco a qual classe este método pertence seguido de dois pontos ":" duas vezes "::", e depois o nome da função.
phone::phone(string m, int mem=0, float p=0.0){
  mark = m;
  memory = mem;
  price = p;
}
void phone::setMark(string m){//Métodos que não são o constructor precisam indicar o tipo de método, neste caso ele é um void
  mark = m;
}
void phone::setMemory(int mem){
  memory = mem;
}
void phone::setPrice(float p){
  price = p;
}
