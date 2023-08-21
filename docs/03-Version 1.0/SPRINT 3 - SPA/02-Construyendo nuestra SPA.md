---
title: Construyendo nuestra SPA
---

# Construyendo nuestra SPA
Como desarrollador quiero crear una infraestructura básica para la creación del proyecto basada en vite. Además quiero crear un repositorio y publicarlo en github y desplegar la app en github pages.

## Esto es lo que vamos a hacer:

1. Instalaremos **Node.js** que a su vez instalará **npm**
2. Crearemos un **proyecto html/javascript** utilizando vite dentro de nuestra carpeta de proyecto
3. Analizaremos el proyecto ejemplo para comprender la estructura de archivos que incluye una spa.
4. Modificaremos el **scaffolding** (las carpetas y archivos) de nuestro proyecto con algunos 'componentes' básicos.
5. Crearemos el archivo **vite.config** y verificamos que todo funciona de forma correcta
6. Instalaremos Bootstrap y Bootswach
7. Crearemos un sistema de despliegue continuo basado en GitHub Pages utilizando la dependencia **gh-pages**.

### 1. Instalando Node.js

Este apartado no tiene misterio. Te vas a la [web de Node.js](https://nodejs.org/es) y  descargas el paquete correspondiente a tu sistema operativo y lo instalas. (Ya sabes: continuar, continuar, continuar...)

:::tip 
Puede que ya tengas instalado nodejs. Si quieres comprobarlo y saber la versión que hay instalada: 
1. Abre un terminal 
2. Escribe ```node -v``` .Te aparecerá la versión actual de Nodejs.

Si la versión que tienes no está actualizada, entonces descarga el instalador de la web oficial y ejecutalo para actualizar Nodejs.
:::


### 2. Construyendo una app con vite
- En primer lugar debemos asegurarnos de cambiar a la rama `main`. Veremos que en la raiz de nuestro proyecto solo tenemos el archivo *readme.md*
- Abrimos un terminal en el propio VSCode (`ctrl+mayus+ñ`) para crear nuestro proyecto. Ejecuta la siguiente linea de código. 
  :::note No olvides el punto
  El punto significa que debe crearse el proyecto en la misma carpeta que estás ahora mismo, es decir, en vanillagames10
  :::

  ```
  npm create vite .
  ```
- Te preguntará si quieres borrar los archivos que hay en la carpeta. Dile que sí, porque lo único que tenemos es el readme.md que ya verás que nos va a respetar.
- Indicaremos que queremos un proyecto basado en **Vanilla** javascript (es decir, javascript puro)
- Indicaremos que usamos **javascript** (no queremos typescript)
- En este momento nos habrá creado los archivos y las carpetas básicas para una app. Solo nos falta instalar las dependencias. Para ello usamos npm desde el terminal:
  ```
  npm install
  ```
  Fíjate que ahora se ha creado una carpeta nueva llamada node_modules. Aquí están instaladas todas las librerias que vamos a necesitar. (De momento, esa carpeta mejor no tocarla 😅)
- Para acabar vamos a levantar un servidor de pruebas. Si abrimos esta url en un navegador podremos ver como va quedando nuestro proyecto. De momento veremos la plantilla básica que nos ofrece vite.
  ```
  npm run dev
  ```

  ```
  VITE v4.4.9  ready in 199 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
  ```
![localhost](/imagenes/v1/spa/localhost.png)

:::danger Commit
¿Que tal un commit antes de seguir?   Podría ser algo así: 

  "*Crea proyecto con vite*"

(Por cierto, asegúrate de estar en la **rama main**.)

:::

### 3. Analizando el proyecto de ejemplo
Veamos los archivos y carpetas que nos ha creado vite:

![Scaffolding](/imagenes/v1/spa/scaffolding.png)

Los archivos más importante son el `index.html` y `main.js`

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>

```



Lo que tenemos aquí es un index.html que se cargará en el navegador. Este tiene un div con id="app". En este div es donde se inyecta toda la aplicación. **¡Y no tenemos nada más!** El resto de los componentes se irán contruyendo desde javascript.

Este es el archivo main.js que cargamos desde index.html:

```javascript title="main.js"
import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

```

En el main.js podemos ver como inicialmente cargamos tres archivos, el style.css, un archivo .svg (una imagen) y el archivo counter.js, el cual tiene el código correspondiente al contador que hemos visto en la página principal. 

A continuacion, haciendo uso de `innerHTML` inyectamos en el div 'app' un fragmento de código html (un div que incluye unos enlaces, un botón, una imagen, etc.). 

Es decir, **estamos construyendo la página desde el archivo main.js**

Ahora que vemos de qué va esto, vamos a contruir nuestra propia estructura para el proyecto que estamos desarrollando.

### 4. Modificando nuestro Scaffolding
Hemos visto que todo funciona bien. De momento... Porque ahora vamos a contruir la estructura de archivos con una vista principal y algunos objetos a modo de componentes.

Hagamos lo siguiente:
- Eliminamos los archivos counter.js, index.html, main.js y style.css y creamos una estructura de carpetas como esta:
```
        node_modules  
        src
            componentes
                header.js
                footer.js
            vistas
                homeVista.js
            index.html 
            main.js
        .gitignore  
        package.json  
        package-lock.json  
```

- Modificamos index.html para que solo tenga las etiquetas header, main y footer y enlazamos el archivo main.js
```html title="index.html"
        <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vanilla Games</title>
          </head>
          <body>
            <header></header>
            <main></main>
            <footer></footer>
            <script type="module" src="/main.js"></script>
          </body>
        </html>
```
- Creamos la vista principal y los componentes header y footer con un 'template' básico
```js title="home.js"
        export default {
            template: `<h1>home</h1>`
        }
```
        
```js title="header.js"
        export const header = {
            template: `header`
        }
```
- En main.js importamos los componentes header y footer y los inyectamos en sus etiquetas correspondients. También cargamos la vista home.js en la etiqueta main
```js title="home.js"
import { header } from './componentes/header'
import { footer } from './componentes/footer'

//Importamos la vista por defecto (que será home)
async function cargarVista(){
  const componenteHome = await import('./vistas/homeVista')
  const homeVista = componenteHome.default
  //Inyectamos la vista home
  document.querySelector('main').innerHTML = homeVista.template
}
cargarVista()

//Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

//Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template
```
- Con estos cambios la app ha dejado de funcionar. Eso es porque no encuentra el index.html y main.js en la raiz del proyecto. 
  
  Así que vamos a configurar vite para que sepa dónde buscar los archivos index.html y main.js

## 5. Configurando vite con el archivo `Vite.config.js`
Creamos el archivo `vite.config.js` en la raiz del proyecto y copiamos el siguiente código (que puedes encontrar en el manual de vite). En los comentarios verás que función tiene cada línea aunque de momento no le des demasiada importancia.

```js title="vite.config.js"
import path from 'path' // Para gestionar directorios

export default {
  // Definimos la carpeta donde buscar cuando se carga la aplicación (donde estará el main.js)
  root: path.resolve(__dirname, 'src'), 
  
  build: {
    rollupOptions: {
        /*
            Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
            interna de Rollup de Vite.
        */
        input: {
            main: path.resolve(__dirname, 'src/index.html'), // Indicamos las páginas que debe analizar
        },
        output: {
            dir: path.resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
            format: 'es', //Formato de ES modules
        },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
},
  server: {
    /*port: 8080, */ // Podemos definir el puerto de salida
    hot: true
  }
}
```

Observa que los componentes header y footer los exportamos con un nombre fijo `export const header = {}`, y `export const footer = {}`. Pero en el caso de homeVista usamos `export default {}` Esto lo hacemos para poder gestionar el cambio de páginas de la aplicación. Mas adelante lo explicaremos con más detalle.

¡Ahora sí que podemos ver nuestra aplicación funcionando! 

Está compuesta de tres componentes, el header.js que hemos inyectado en la etiqueta `<header>`, el footer.js que hemos inyectado en la etiqueta `<footer>` y el componente homeVista.js que hemos inyectado en la etiqueta `<main>`.

A este último (homevista.js) le hemos añadido al final la palabra `vista`para indicar que representa una página web, en este caso la página Home.

![home](/imagenes/v1/spa/home.png)


## 4. Instalando Bootstrap, Bootswatch y SASS

En la construcción de prototipos html hemos utilizado Bootstrap mediante el cdn. Es una manera sencilla y rápida, pero en los proyectos reales solemos descargar los archivos para no tener que depender de terceros.

Como hemos visto anteriormente, Bootstrap funciona con SASS, por lo que necesitamos instalar y configurar nuestro proyecto para que convierte los archivos sass en css estandar.

- Para instalar bootstrap y  bootswatch abre un terminal y ejecuta la siguiente linea de comandos:
  ```
  npm i bootstrap bootswatch @popperjs/core
  ```
  :::info
  En lugar de escribir `install`escribimos `i`
  :::
- Instala ahora sass
  ```
  npm i sass -D
  ```
  :::info
  Utilizamos -D para indicar que la dependencia instalada es de desarrollo, es decir, no la necesitaremos cuando despleguemos nuestra app en producción
  :::
  
Si la instalación se ha completado con éxito podemos ver en el archivo package.json las dependencias instaladas:

```json title="package.json" {12,16,17,18}
{
  "name": "vanillagames10",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "sass": "^1.66.1",
    "vite": "^4.1.0"
  },
  "dependencies": {
    "@popperjs/core": "^2.11.8",
    "bootstrap": "^5.3.1",
    "bootswatch": "^5.3.1"
  }
}

```
- Vamos a crear ahora la carpeta `src/scss` y dentro creamos el archivo `styles.scss `
- Modificamos el archivo `vite.config.js` para que se procese **sass** añadiendo la siguiente linea:
```js
alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch')
    }
```
El archivo vite.config.js quedaría así:
```js  title="vite.config.js"
import path from 'path'

export default {
  root: path.resolve(__dirname, 'src'), // Carpeta donde alojamos el archivo main.js
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch'),
    }
  },
  build: {
    rollupOptions: {
        /*
            Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
            interna de Rollup de Vite.
        */
        input: {
            main: path.resolve(__dirname, 'src/index.html'), // Indicamos las páginas que debe analizar
        },
        output: {
            dir: path.resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
            format: 'es', //Formato de ES modules
        },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
},
  server: {
    /*port: 8080,*/  // Podemos definir el puerto de salida
    hot: true
  }
}
```
- En el archivo `styles.scss` cargamos la libreria bootstrap
```js title="styles.scss"
// Import all of Bootstrap's CSS
@import "~bootswatch/dist/yeti/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/yeti/bootswatch";

```
- Finalmente añadimos la libreria bootstrap en el archivo main.js

```js title="main.js"
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
```

- Ejecutamos nuestro proyecto para verificar que todo está ok mediante `npm run dev`. Deberíamos ver nuestra aplicación con las clases de **bootstrap** aplicandose y los estilos de **Bootswatch yeti**

![yeti](/imagenes/v1/spa/yeti.png)

- Continuamos configurando el archivo vite.config.js para que al generar las los archivos para desplegar en producción (páginas minificadas en la carpeta **dist**), las urls comiencen con `./` de manera que evitemos problemas al visualizar nuestra web cuando la subamos a un servidor como GitHub Pages. Para ello añadimos el código: 
```js
base: './'
```

También necesitamos decirle a vite que, cada vez que hagamos un build, se reescriba la carpeta dist. Para ello añadimos la siguiente opción:
```json
build: {
    emptyOutDir: true, // Esto vaciará el directorio de salida antes de construir
    ...
}
```

Nuestro archivo vite.config.js quedaría así:
```js title="vite.config.js"
import path from 'path'

export default {
  root: path.resolve(__dirname, 'src'), // Carpeta donde alojamos el archivo main.js
  base: './',
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch'),
    }
  },
  build: {
    emptyOutDir: true, // Esto vaciará el directorio de salida antes de construir
    rollupOptions: {
        /*
            Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
            interna de Rollup de Vite.
        */
        input: {
            main: path.resolve(__dirname, 'src/index.html'), // Indicamos las páginas que debe analizar
        },
        output: {
            dir: path.resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
            format: 'es', //Formato de ES modules
        },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
},
  server: {
    /*port: 8080,*/
    hot: true
  }
}
```
## 6. Creando versión de distribución

Vamos a crear la versión de distribución de nuestra app. Esto creará una carpeta **dist** con todos archivos html y css minificados. 
- Para ello, desde la terminal, ejecuta:
  ```
  npm run build
  ```

  Y efectivamente se ha creado una carpeta en la raiz del proyecto con los archivos necesarios. Esta es la carpeta que debemos subir a nuestro servidor de pruebas/producción.

- Prueba a abrir con live server el archivo index.html de la carpeta dist. Debería verse la aplicación funcionando correctamente.


## 7. Desplegando la aplicación en un servidor de pruebas (GitHub Pages)
Vamos a montarnos un sistema para poder hacer despliegue continuo. Así cada vez que actualicemos nuesta app, subiremos los cambios al repositorio y la publicaremos en el servidor de GitHub Pages.

- Creamos un repositorio de git para el proyecto y lo sincronizamos con github (para ello utilizamos las herramientas de vscode)
- Instalamos gh-pages con `npm i gh-pages -D`
- Ahora creamos, en el package.json, el script **deploy** necesario para poder ejecturar el deploy a gh pages. 

El archivo quedaría así: 

```json title="package.json"
{
  "name": "trabajos_alumnos",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build --emptyOutDir",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^5.0.0",
    "sass": "^1.58.3",
    "vite": "^4.1.0"
  },
  "dependencies": {
    "@popperjs/core": "^2.11.6",
    "bootstrap": "^5.2.3"
  }
}
```
- Ahora ya podemos ejecutar `npm run build` para contruir nuestra carpeta **dist** y a continuación `npm run deploy` para que se cree la rama gh-pages y se publique. Pruébalo.
- Finalmente, vamos a comprobar que se ha creado una **rama con nombre gh-pages** para el despliegue de nuestra app.
  
  ![rama github pages](/imagenes/v1/spa/ramagh.png)

- Ahora solo falta configurar la rama gh-pages para que sea una página publica y muestre nuestra aplicación desplegada. Para ello entra en `Settings` (menú superior) y `Pages` (menú lateral izquierdo). A continuación selecciona la rama gh-pages y haz click en `save`

:::note Nota
Para poder publicar en GitHub Pages nuestro repositorio debe ser público. Si no lo es, puedes cambiar su visibilidad desde `Settings` (La opción está al final de la página).
:::

  ![gh](/imagenes/v1/spa/ghpublic.png)

  En breve aparecerá la url. (Ten paciencia que a veces tarda unos minutos. Ves haciendo F5 hasta que aparezca)

  ![gh](/imagenes/v1/spa/ghpublic2.png)

¡Y ya puedes visitar la página en el servidor!




    

