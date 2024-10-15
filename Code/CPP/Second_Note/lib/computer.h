//Na biblioteca declaro a classe, seus métodos e propriedades
class computer{
  private:
    int fans;
    int ram;
    int storage;
    float price;

  public:

    computer(int f, int r, int s, float p);
    void setFans(int f);
    void setRam(int r);
    void setStorage(int s);
    void setPrice(float p);

    int getFans();
    int getRam();
    int getStorage();
    float getPrice();
};