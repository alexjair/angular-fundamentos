const username: string = "alexjair";
const password: string | number = 245214;

//funciones
const sum = (a: number, b: number) => {
  return a + b;
}

//ejecujar
sum(1,6);

class clsPersona {
  //atributos
  public age: number;
  private pass: number;
  public lastname: string;

  //constructor
  constructor(
    vAge: number,
    vLastname: string,
    vPass: number
  ){
    this.age = vAge;
    this.lastname = vLastname;
    this.pass = vPass;
  }

  //setter getter
  /*
  public get getPass() {
      return this.pass;
  }

  public set setPass(sPass: number) {
      if (sPass <= 0 || sPass >= 200) {
          throw new Error('The age is invalid');
      }
      this.pass = sPass;
  }
  */

}

const jair = new clsPersona(38, "Alexander Jair",53455);
