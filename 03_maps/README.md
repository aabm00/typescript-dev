## FUNCIONAMIENTO

- La aplicacion coloca en un `mapa de google`, `Company` y `User`
  via latitud y longitud.

  `INTERFACES` - Usadas en argumento de metodo

- Se ha instalado `parcel` de forma global con `yarn`

  - `yarn global add parcel-bundler`
  - `npm install -g parcel-bundler`

- Para ejecutar la aplicación ejecutar:

  - `parcel index.html`

**PARCEL**

- `Parcel` mira en el fichero `index.html` los `tags scripts`
  que contienen `ficheros typescript`
- Los `compila` a JS
- Inserta el fichero `index.html` en la carpeta `dist` con los
  `tags scripts` como ficheros `javascript`

- Arranca un servidor en [http://localhost:1234](http://localhost:1234)

- No se podrá ver los mapas porque no tengo una `Apikey` en
  `google maps` y para tenerla hay que abrir una cuenta con
  targeta de credito
