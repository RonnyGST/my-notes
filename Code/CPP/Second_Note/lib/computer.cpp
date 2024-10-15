//Aqui eu defino o que os métodos fazem. É importante designar suas funções após a função main()
#include "computer.h"//É assim que faço a importação de uma biblioteca que eu mesmo criei. Coloco o nome da biblioteca entre aspas sem sinais de maior e menor
#include <iostream>

using namespace std;//Necessário para não precisar colocar o std:: antes de cada função quando for chamada.


computer::computer(int f, int r, int s, float p){
  fans = f;
  ram = r;
  storage = s;
  price = p;
}
 
void computer::setFans(int f){
  fans = f;
}
void computer::setRam(int r){
  ram = r;
}
void computer::setStorage(int s){
  storage = s;
}
void computer::setPrice(float p){
  price = p;
}

int computer::getFans(){
  return fans;
}
int computer::getRam(){
  return ram;
}
int computer::getStorage(){
  return storage;
}
float computer::getPrice(){
  return price;
}