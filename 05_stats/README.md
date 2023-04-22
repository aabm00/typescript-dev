## FUNCIONAMIENTO

- La aplicacion obtiene datos de un `fichero CSV` y entonces realiza `PARSE - ANALYZE - REPORT`sobre los datos obtenidos y crea un fichero `report.html` que podemos arratrarlo al browser para visualizarlo

- En este proycto se tocan:

  - `STATIC METHODS`
  - `TUPLAS`
  - `ENUM`
  - `GENERICS`
  - `INTERFACES`
  - `COMPOSITION`

**tsconfig.json**

- Se ha creado un `fichero de configuracion typescript`:

  - `tsconfig.json`
  - Se ha utilizado el comando:
    `tsc --init`
  - Se han configurado las siguientes propiedades para separar los ficheros typescript de los compilados JS:
    `"rootDir": "./src"`
    `"outDir": "./build"`

- En esta aplicacion se va a visualizar los resultados en la consola por lo tanto vamos a trabajar con el compilador de typescript `tsc` y con `nodemon` para no tener que ejecutar `tsc` cada vez que realizamos cambios.
- Se ha instalado `concurrently` y `nodemon` locamente.
- `nodemon` reejecuta el fichero `build/index.js` cada vez que este cambia
- `concurrently` permite la ejecución concurrente de comandos.
- Ver los `scripts` utilizados en `package.json`

- Al ejecutar `tsc` sabra que tiene que mirar en `./src` que ficheros debe compilar y los debe colocar en `./build`
- Con `tsc -w` activamos el modo `watch` que recompila cada vez que hay cambios en los ficheros typescript automaticamente.
- Para arracar el fichero y ver resultados, despues de compilar deberiamos ejecutar `node build/index.js` cada vez que se realizan cambios. Para evitar se usa `nodemon build/index.js` de forma que cada vez hay cambios en `index.js` se ejecuta.
- Por lo tanto en el script de `package.json` se combinan los 2 comandos para que `compile` y se `ejecute` cada vez que hay cambios

- Para ejecutar la aplicación ejecutar:
  `npm start`
  - Es posible que la primera vez que se ejecute de errores ya que al ejecutarse de forma concurrente se ejecute `nodemon build/index.js` antes de que se haya compilado `index.ts` y por lo tanto todavia no tengamos `index.js`
