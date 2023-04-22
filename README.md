# SGrider – Typescript The Complete Developer’s Guide 2022-12

## 1 - Getting Started with Typescript -

- [typescript- playground](https://www.typescriptlang.org/play)
  - Pagina de typescript con este playgrounf para practicar TS y ver el codigo compilado a JS
- `npm install -g typescript`
  - Instalamos typescript globalmente
- `npm install -g ts-node`
  - Instalamos `ts-node` globalmente.
  - Es un `command tools` que nos permite `compilar` y `ejecutar` `typescript` con un solo comando en el terminal

### 01_fetchjson

- [Fake JSON API](https://jsonplaceholder.typicode.com/)
  - Utilizaremos esta API JSON para recuperar datos generales desde diferentes endpoints
- `npm install axios`
- Para compilar y ejecutar el programa con el `compilador de typescript` y luego ejecutar con `node`:
  - `tsc index.ts` Compila y crea index.js
  - `node index.js` Ejecuta el programa
- Para compilar y ejecutar el programa con un solo comando utilizamos el modulo instalado `ts-node`
  - `ts-node index.ts`

## 9 - Design Patterns with Typescript

### 03_maps

- Ver `README` del proyecto.

**TYPE DEFINITION CLASSES**

- `Type Definition Files` para Typescript.
  - Se pueden utilizar librerias Javascript (JS) con Typescript (TS)
    pero se necesitan los `Type Definition Files` para saber los tipos de datos que las variables, funciones, etc, de la libreria tienen para que Typescript no se queje.
  - Algunas librerias JS como por ejemplo `axios` ya viene con los `Type Definition Files` por defecto pero otras no.
  - En los casos que las librerias JS no tenga los `Type Definition Files` typescript no dará un error:
    - `Could not find a declaration file for module 'module name'`
  - Debemos importar el `Type Definition Files` utilizando:
    - `npm install @types/<library name>`
      en el caso de la libreria `faker`:
    - `npm install @types/faker`
  - Podemos buscar los `Type Definition Files` en la web [npmjs](https://www.npmjs.com/) para más información
  - Una vez instalados podemos acceder a los `Type Definition Files` en:
    - `import faker from 'faker';`
    - Aprentando la tecla `CTRL` y clicando en `faker`
    - Se abrirá un fichero `index.d.ts` donde se nos muestran todos los tipos.
    - Es una fuente de información importante en el caso de que tengamos dudas sobre algún tipo. p.e `faker` tiene un objecto `address` con las funciones `latitude` y `longitude` que devuelven `string` cuando normalmente deberia ser `number`

## 10 - More on Design Patterns

### 04_sort

- Ver `README` del proyecto.

**ABSTRACT CLASSES**

- `No instanciable`. No se puede instanciar directamente,
- `parent Class`. Solo debe ser usada como `parent class`
- `Implementation for some methods`.
  - Puede contener implementaciones para algunos metodos
  - Estos metodos pueden hacer referencia a otros metodos todavia no existentes (No obstante debemos de declararlos como abstractos)
- las clases hijas (que heredan de la abstracta) deben implementar los `metodos abstractos`, y deben contener las `propiedades abstractas`

**INTERFACES VS ABSTRACT CLASSES**

- **NOTA** Siempre intentaremos usar `interfaces` para que `abstract clases` (herencia)

- `INTERFACES`

  - Crea un contrato entre diferentes clases.
    - Una clase que implemente una `interface` debe implementar lo que especifica esa `interface`
    - Una funcion con un argumento que tenga como tipo una `interface` debe cumplir el contrato establecido por la `interface`
  - Debe ser usada cuando tenemos una variedad de objetos que deben trabajar juntos (cumplir unos requisitos mínimos) aunque sean diferentes en otros aspectos y tenga propositos diferentes.
  - Crea un bajo acoplamiento
    - Cada clase que implemente la interface es totalmente autonoma

- `ABSTRACT CLASSES`

  - Crea un contrato entre diferentes clases.
  - Cuando estamos definiendo clases muy similares o con un objetivo similar como por ejemplo ordenar items en diferentes tipo de colecciones (string, numeros, linkedlist, etc) -> Clase abstracta Sorter
  - Crea un alto acoplamiento entre clases (debido a la herencia)
    - Las clases que heredan de Sorter podrian funcionar sin Sorter
    - Sorter no funciona sin clases hijas

**TYPES GUARD**

- `typeof`

  - Para tipo primitivos
  - number, string, boolean, symbol

- `instanceof`
  - Otros tipo de valor creados con un constructor

`const collection: number[] | string`

if (this.collection `instanceof` Array) {
Nos permite trabajar con un array de numeros sin problemas
Nos mostrará las propiedades y metodos para Arrays
}

else if ( `typeof` this.collection === 'string' ) {
Nos permite trabajar con un string
Nos mostrará las propiedades y metodos para string
}

else {....}

**ACCESOR METHODS**

- Nos permite acceder a propiedades de un clase u objeto literal a traves de:

  - `get property`
  - `set property`

- EXAMPLE.
  export class NumbersCollection {
  constructor(public data: number[]) {}

  `get length()`: number {
  return this.data.length;
  }
  }

## 11 - Reusable Code

### 05_stats

- Ver `README` del proyecto.

**STATIC METHODS**

- Permite llamar a un metodo directamente desde la clase sin tener que crear una instancia
- Se puede utilizar para crea instancias de una Clase

  **TUPLAS**

  - Nos permite definir el `orden` y los `tipos` de los elementos de las filas recuperadas desde un fichero `CSV`

  `10/08/2018,Man United,Leicester,2,1,H,A Marriner`

  export `type` MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
  ];

  **ENUM**

  - Cuando lo aplicamos nos permite elegir entre uno de los posibles valores
    export `enum` **MatchResult** {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
    }

  **COMPOSITION**

  - Es `delegar trabajos` de una clase a otra.
  - Una `clase A` define una `instancia` de otra `clase B` la cual será la encargada de realizar una `tarea especifica`.
  - Esta `instancia` de la `clase B` se puede pasar como `argumento` en el `constructor` de la `clase A` y puede tener como tipo una `interface` de manera que podriamos pasar diferentes implementaciones (`clase B`, `clase C` y `clase D` las cuales implementan la misma `interface`).

  **COMPOSITION vs INHERITANCE**

  - Siempre intentaremos usar `composition`
  - Relaciones entre 2 clases para:
    - `Herencia`: Se caracteriza por _Clase B_ `es una` _Clase A_
    - `Composición `: Se caracteriza por _Clase A_ `tiene una` _Clase B_ o mejor dicho `tiene una referencia a la instancia` de la _clase B_ a la cual delegará trabajo

## 12 - Advanced Generics

### 06_generics

- Ver proyecto.

## 13 - Lets Build a Web Framework

### 07_web

- Ver `README` del proyecto.
