
class Singleton {
  private static instance: Singleton;

  private constructor() { }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}



const sfirst = Singleton.getInstance();
const ssecond = Singleton.getInstance();

if (sfirst === ssecond) {
  console.log('Singleton works.');
} else {
  console.log('Singleton failed.');
}