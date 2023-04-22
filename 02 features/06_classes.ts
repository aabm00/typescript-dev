/**
 * La variables declaradas fuera del contructor deben
 * ser inicializadas con un valor
 * Cuando queramos asignar diferentes valores a variables
 * en las instancias se debe definir un constructor
 * Example1 y Example2 son equivalentes
 */
class Example {
  color: string = "orange";
}

class Example1 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
}

class Example2 {
  constructor(public color: string) {}
}

/////////////////////////////////////////

/** MODIFIERS
 *
 * Se aplican tanto a metodos con la propiedades o campos
 * PUBLIC
 *
 *  - Accesibles en la clase y sus instancias
 *  - Accesibles desde clases hijas y sus instancias
 *
 * PROTECTED
 *  - Accesibles en la clase pero no en sus instacias
 *  - Accesibles desde clases hijas pero no en sus instacias
 *
 * PRIVATE
 *  - Accesibles en la clase pero no en sus instacias
 *  - NO Accesibles desde clases hijas NI en sus instacias
 */

class Vehicle {
  constructor(public color: string) {}

  toOverwrite(): void {
    console.log("Original");
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
console.log(vehicle.toOverwrite());
console.log(" ============================== ");

/**
 * Cuando se extiende una clase se puede sobreescribir sus metodos
 * Contructor:
 * - Si no se añade ninguna propiedad adicional a parte de las
 *    heredadas no es necesario poner un contructor
 * - Si añadimos nuevas propiedades debemos añadir un contructor
 *    el cual tendrá como args la propiedades del padre más las
 *    nuevas. Ademas deberemos llamar al metodo super(color) con
 *    las propiedades del padre como argumentos.
 * - Las propiedades del padre no llevaran el modificador (public)
 *    para evitar que se creen tambien en la clase hija (pertenece
 *    al padre)
 */
class Car2 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  toOverwrite(): void {
    console.log("Original overwrited");
  }

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
    this.toOverwrite();
  }
}

const car2 = new Car2(4, "red");
car2.startDrivingProcess();
