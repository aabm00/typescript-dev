## FUNCIONAMIENTO

- La aplicacion crea un `framework simple` emulando `react`, `vue`, o `angular`.
- Trata de aplicar todos los conceptos aprendidos aplicando `patterns para OOP` (programacion orientada a objetos)
- Trata de aplicar todos los conceptos aprendidos aplicando `patterns para OOP` (programacion orientada a objetos)

- Se ha instalado `parcel` de forma global con `yarn`

  - `yarn global add parcel-bundler`
  - `npm install -g parcel-bundler`

- se ha instalado la libreria `cocurrently` para poder `ejecutar` varios comando de forma `concurrente` en un unico terminal.

  - `npm install concurrently --save-dev`

- Para `ejecutar` el `servidor` y la `aplicación` en 2 terminales separados ejecutar:

  - `npm run start:db`
  - `npm run start:parcel`

- Para `ejecutar` el `servidor` y la `aplicación` de forma concurrente en un unico terminal ejecutar:
  - `npm run start`

**PARCEL**

- `Parcel` mira en el fichero `index.html` los `tags scripts`
  que contienen `ficheros typescript`
- Los `compila` a JS
- Inserta el fichero `index.html` en la carpeta `dist` con los
  `tags scripts` como ficheros `javascript`

- Arranca un servidor en [http://localhost:1234](http://localhost:1234)

**JSON-SERVER**

- Para usar `json-server` se debe de crear un fichero `db.json` en el proyecto que será donde se guardarán los datos.
- - Arranca un servidor en [http://localhost:3000](http://localhost:3000)

**tsconfig.json**

- Se ha creado un `fichero de configuracion typescript`:

  - `tsconfig.json`
  - Se ha utilizado el comando:
    `tsc --init`

- **NO** se han configurado las siguientes propiedades para separar los ficheros typescript de los compilados JS ya que al utilizar `PARCEL` este se encarga de crear la carpeta `dist`:
  `"rootDir": "./src"`
  `"outDir": "./build"`

## ESTRUCTURA DE LA APP

- Esta dividido en 2 modulos
  - `models`:
    - Contiene las clases para manejar datos, y representar modelos (Usersm Productos etc)
    - Guarda los datos en una base de datos en memoria `json-server` instalado globalmente.
  - `views`:
    - Maneja el `HTML` y los `eventos` causados por el usuario (clicks, etc)

### MODELS

- `Class Eventing`

  - Encargada de los eventos.
  - `events`: Es un objeto donde la `key` es el `evento` y el `value` es la `array de callbacks` definidas para este evento.
  - `on` y `trigger`
    - `on`: Añade nuevos eventos a events o solo las `callbacks` a aquellos existentes
    - `trigger`: Ejecuta todas las `callbacks` del evento lanzado

- `Class Collection`

  - Es la clase generica que nos permite crear collecciones de Modelos de cualquier tipo. P.e podemos crear una colección de Users.
  - Funcionalidad:
    - `models`. Array de modelos (users)
    - `on` y `trigger`: Delega los eventos a la clase `Eventing`
    - `fetch`: recupera modelos de la BD, los deserializa y los coloca en `models` y emite un evento `change`

- `Class Model`

  - Es la clase generica que nos permite crear modelos de cualquier tipo. p.e. User
  - `on` y `trigger`: Delega los eventos a una implementación de la interface de la clase `Event`.
  - `get`, `set` y `getAll`: Delega la gestión de atributos a una implementación de la interface `ModelAttributes`.
  - `fetch` y `save`: Delega la gestión de atributos a una implementación de la interface `Sync`.

### VIEWS

- `Class View`

  - Es la clase abstracta generica de la que dependen todas las otras vistas de edicion o detalle de un item (modelo)
  - Para crear una vista necesitamos:
    - `Element`: el elemento del dom donde insertarla
    - `model`: el modelo de datos que se visualizará en la vista (User, etc)
  - Vistas que extienden `View`
    - `UserEdit`
      - `UserShow`
      - `UserForm`

- `Class CollectionView`

  - Es la clase abstracta generica de la que dependen todas las vistas de listado de items (modelo)
  - Para crear una vista necesitamos:
    - `Element`: el elemento del dom donde insertarla
    - `Collection`: La coleccion de datos (modelo) que se visualizará en la vista (Users, etc)
  - Vistas que extienden `View`
    - `UserList`
