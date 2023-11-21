


## Hablemos de NodeJS

<div style={{width: 200, margin: '0 auto 0 auto'}}>

  ![npm](/imagenes/v1/spa/nodejs.png)

</div>

Node.js es una plataforma de programación que nos va a permitir crear aplicaciones y sitios web usando el lenguaje de programación JavaScript. 

A diferencia de JavaScript que **normalmente se ejecuta en navegadores** web, Node.js **permite que JavaScript también se ejecute en servidores**, lo que lo hace útil para crear aplicaciones web de alto rendimiento y aplicaciones de red. 

Osea, que si antiguamente usabamos javascript ejecutándolo en el navegador (para realizar tareas como validación, mejorar la interactividad, etc) y php ejecutándolo en el servidor (para hacer consultas a bases de datos, gestionar archivos, etc.) ahora... ¡tachan! ... Podemos utilizar javascript tanto en el lado del cliente como en el lado del servidor, sustituyendo a otros lenguajes como php, python, java, etc. **¡Javascript para todo! 😎**.

Nosotros no lo usaremos en el lado del servidor (aunque molaría mucho) porque ya estamos usando un servicio como back-end. Nuestro amado Supabase.

:::info Node.js
**Node.js** fue creado por Ryan Dahl y su desarrollo comenzó en 2009. Dahl presentó Node.js como un entorno de tiempo de ejecución (runtime) en la conferencia JSConf en 2009. 

La plataforma se basa en el motor de JavaScript V8 de Google, que también se utiliza en el navegador Google Chrome. 

Node.js se ha convertido en una tecnología muy influyente en el mundo del desarrollo web y ha ganado popularidad debido a su capacidad para construir aplicaciones web en tiempo real y escalables utilizando JavaScript tanto en el lado del servidor como en el cliente.

<details>
<summary>Te explico algunas de las ventajas de usar Node.js con más detalle:</summary>

- **Uso compartido de código**: Node.js permite a los desarrolladores utilizar JavaScript tanto en el lado del cliente como en el del servidor. Esto facilita el uso compartido de código y la lógica entre el frontend y el backend, lo que puede simplificar el desarrollo y reducir la duplicación de esfuerzos.

- **Empaquetado y construcción eficiente**: Herramientas como npm (Node Package Manager) permiten gestionar fácilmente dependencias y paquetes para proyectos frontend. Además, Node.js es utilizado comúnmente con herramientas como Webpack y Gulp para empaquetar, minificar y compilar el código frontend, lo que facilita la gestión de assets y optimiza el rendimiento.

- **Desarrollo asincrónico**: Node.js está diseñado para operaciones asincrónicas y no bloqueantes. Esta característica encaja bien con las aplicaciones frontend, donde a menudo se manejan solicitudes de red y operaciones que pueden bloquear el flujo en un entorno síncrono.

- **Herramientas y entornos de desarrollo**: Node.js ofrece una amplia gama de herramientas y módulos que son útiles para el desarrollo frontend, como navegadores basados en Node.js (por ejemplo, Puppeteer para automatizar tareas de navegación), módulos para interactuar con APIs y librerías de manipulación de archivos.

- **Servidores de desarrollo rápidos**: Node.js puede ser utilizado para crear servidores de desarrollo rápidos y ligeros para proyectos frontend, lo que facilita la visualización y prueba de las aplicaciones en local antes de implementarlas en producción.

- **Herramientas para automatización**: Node.js se integra bien con herramientas de automatización de tareas, como la ejecución de pruebas unitarias, pruebas de rendimiento y tareas de construcción, lo que puede mejorar la eficiencia y calidad del desarrollo frontend.

- **Integración con frameworks frontend**: Algunos frameworks frontend, como React y Angular, utilizan herramientas y bibliotecas que son amigables con Node.js. Esto permite una integración más fluida entre el backend y el frontend en proyectos donde se utilizan estos frameworks.

- **Comunidad activa y recursos disponibles**: La comunidad de Node.js es grande y activa, lo que significa que hay una gran cantidad de recursos, tutoriales y bibliotecas disponibles para abordar diferentes aspectos del desarrollo frontend utilizando Node.js.

</details>
:::


En resumen, ¡Node.js mola mucho! Nos va a facilitar mucho el desarrollo frontend al permitir la utilización de JavaScript en ambos lados, cliente y servidor. Además:
- Nos va a facilitar el **manejo de dependencias** (por ejemplo con ***npm***) 
- Nos va a brindar **herramientas de automatización en la creación de proyectos** (por ejemplo con **vite**)
- Y proporcionar una **integración fluida con frameworks y bibliotecas frontend populares** (como podrían ser React, Vue, etc.).

## Hablemos de 'npm'

<div style={{width: 200, margin: '0 auto 0 auto'}}>

  ![npm](/imagenes/v1/spa/npm.png)

</div>

Como te iba diciendo, necesitamos **instalar en nuestro ordenador** **Node.js** para poder empezar a crear aplicaciones web basadas en javascript.

A la vez que instalamos Nodejs, se nos va a instalar **npm**, que es un gestor de paquetes que nos va a ir de perlas, ya lo verás.

:::info ¿Qué es npm?
NPM (Node Package Manager) es una herramienta que se utiliza en el entorno de Node.js para gestionar las bibliotecas y paquetes de código reutilizable que los desarrolladores utilizan en sus proyectos. En términos más simples, podrías pensar en NPM como una especie de "tienda" en línea donde puedes encontrar y descargar piezas de código que hacen tareas específicas.
<details>
<summary>Algunos ejemplos de lo que puedes hacer con NPM:

</summary>
Cuando los desarrolladores crean código útil, a menudo lo empaquetan en lo que se llama un "paquete". Estos paquetes pueden contener funciones, clases y otras partes de código que se pueden utilizar en diferentes proyectos. 

NPM hace que sea fácil para los desarrolladores compartir sus paquetes y para otros desarrolladores instalarlos y usarlos en sus propios proyectos.

Algunos ejemplos de lo que puedes hacer con NPM incluyen:

**Instalar paquetes**: Puedes utilizar NPM para buscar y descargar paquetes específicos que necesitas para tu proyecto. Por ejemplo, si necesitas una librería para trabajar con fechas, puedes usar NPM para instalarla.

**Gestionar dependencias**: Cuando tu proyecto utiliza múltiples paquetes, es probable que algunos dependan de otros. NPM ayuda a gestionar estas dependencias, asegurando que las versiones correctas estén instaladas y funcionen juntas sin conflictos.

**Actualizar paquetes**: A medida que los desarrolladores mejoran y actualizan sus paquetes, puedes usar NPM para actualizarlos en tu proyecto y obtener las últimas mejoras y correcciones de errores.

**Compartir código**: Si creas algo útil, puedes empaquetarlo y publicarlo en el registro de NPM para que otros desarrolladores lo utilicen. Esto promueve la colaboración y la reutilización de código.
</details>

:::

## Hablemos de Vite
<div style={{width: 200, margin: '0 auto 0 auto'}}>
  <img src="https://vitejs.dev/logo-with-shadow.png" />
</div>

**Y finalmente instalaremos Vite**. 

¡Vite es una pasada! Con el podremos montar un proyecto en muy pocos segundos: nos creará el scaffolding (las carpetas de nuestra app), traducirá nuestro scss a css normal y el javascript más moderno a una versión que todos los navegadores entiendan, y muchas cosas más. Es una herramienta fantástica.


:::info ¿Qué es Vite?

**Vite** es un entorno de desarrollo para construir aplicaciones web rápidas. 

Se enfoca en acelerar el proceso de desarrollo al recargar rápidamente los cambios y al aprovechar el sistema de módulos nativos de JavaScript. 

También es amigable con diferentes lenguajes y formatos, lo que facilita la creación de aplicaciones web modernas y eficientes.

<details>
<summary>Algunas características clave de Vite incluyen:</summary>


**Desarrollo rápido en tiempo real**: Vite utiliza un servidor de desarrollo en tiempo real que permite recargar rápidamente el navegador cuando se realizan cambios en el código. Esto acelera el proceso de iteración y facilita la visualización de los cambios inmediatamente.

**Carga de módulos nativos**: Vite aprovecha el sistema nativo de módulos de JavaScript (ECMAScript Modules) para cargar los módulos de manera más eficiente. Esto mejora el rendimiento y reduce la necesidad de empaquetar y transpilar código durante el desarrollo.

**Desarrollo basado en ES modules**: Vite fomenta el uso de ECMAScript Modules, lo que permite importar módulos de manera más directa y clara, y reduce la necesidad de configuraciones complicadas de bundling (empaquetado).

**Soporte para múltiples lenguajes y formatos**: Vite admite no solo JavaScript, sino también TypeScript, CSS, SASS, Less y otros lenguajes y formatos de manera nativa, lo que simplifica el proceso de desarrollo cuando se utilizan múltiples tecnologías.

**Optimización para producción**: Aunque Vite está diseñado principalmente para el desarrollo, también ofrece opciones para crear una versión optimizada y lista para producción de la aplicación, incluida la generación de archivos estáticos y la optimización de recursos.

**Extensibilidad**: Vite es modular y extensible, lo que significa que los desarrolladores pueden personalizar su flujo de trabajo agregando plugins y ajustando la configuración según sea necesario.
</details>

:::

## Hablemos de GitHub Pages

<div style={{width: 200, margin: '0 auto 0 auto'}}>

  ![npm](/imagenes/v1/spa/githubpages.png)

</div>

Si recuerdas ( y si no... vayan a repasar 👉[Entorno de desarrollo](#)), justo antes de empezar a maquetar los prototipos con html, estuvimos preparando nuestro entorno de desarrollo (la versión básica).

Estuvimos instalando VSCode, configurándolo con plugins como Prettier, etc. Pero también instalamos Git y lo conectamos con GitHub, que como recordarás, es un repositorio en la nube.

Pues bien, GitHub tiene tambien una funcionalidad que nos va a ir a las mil maravillas: **GitHub Pages**.

Con GitHub Pages tendremos un **servidor de pruebas** para que podamos ir desplegando nuestra aplicación y ver como funciona tal y como lo haría **una vez desplegada en producción**. 


:::info

**GitHub Pages** es un servicio ofrecido por GitHub que permite a los usuarios **alojar sitios web estáticos** directamente desde sus repositorios de GitHub. En otras palabras, te permite convertir tu repositorio de GitHub en un sitio web público que cualquiera puede visitar en línea.

<details>
<summary>Aquí hay algunas características clave de GitHub Pages:
</summary>

Alojamiento de sitios web estáticos: GitHub Pages es ideal para alojar sitios web estáticos, que consisten en archivos HTML, CSS, JavaScript, imágenes y otros recursos que no requieren procesamiento en el servidor.

Fácil configuración: Configurar un sitio web en GitHub Pages es relativamente sencillo. Puedes crear una rama especial llamada "gh-pages" en tu repositorio y colocar tus archivos HTML y otros recursos en esa rama. Alternativamente, puedes utilizar la rama "main" o "master" como la fuente de tu sitio.

Personalización del dominio: Puedes personalizar el dominio de tu sitio web en GitHub Pages, lo que significa que puedes tener una dirección web personalizada en lugar de la URL predeterminada proporcionada por GitHub.

Soporte para Jekyll: Jekyll es un generador de sitios estáticos que está integrado con GitHub Pages. Te permite crear sitios web atractivos utilizando plantillas y contenido almacenado en tus repositorios de GitHub.

Gratuito para repositorios públicos: GitHub Pages es gratuito para repositorios públicos, lo que significa que puedes crear y alojar sitios web públicos sin costo adicional. Sin embargo, si deseas mantener tu repositorio privado y usar GitHub Pages, es posible que necesites una suscripción de pago.

Documentación y proyectos personales: Muchos desarrolladores utilizan GitHub Pages para alojar documentación de proyectos, blogs personales, portafolios y otros tipos de contenido estático.
</details>

:::

## Y finalmente, hablemos de ESLint

<div style={{width: 200, margin: '0 auto 0 auto'}}>

  ![npm](/imagenes/v1/spa/eslint.png)

</div>

Para el diseño de los prototipos html nos hemos ayudado de **Prettier**, un plugin de VSCode que nos ayuda a dar formato al codigo html y css, pero para javascript tenemos una herramienta mucho más potente llamada **EsLint**.

A la hora de escribir nuestro código es importante mantener las formas, utilizando estructuras correctas y manteniendo ciertas pautas. Por ejemplo: 
- ¿Debo poner punto y coma al final de cada linea? 
- ¿Puedo declarar variables y luego no usarlas? 
- ¿Puedo dejar espacios entra lineas de código? 
- ¿Cuantos espacios debo poner al tabular?

Una vez tengo claras todas estas reglas, puedo utilizar un **Linter** para que se encargue de vigilar que las estoy cumpliendo que nuestro código es **consistente**. 

Con esto vamos a evitar malas prácticas escribiendo el código y podremos detectar errores de sintaxis antes de ejecutar nuestros scripts.

**Existen algunos estandar**s a la hora de escribir código que tienen sus propias reglas. Por ejemplo:
- Airbnb
- StandardJS
- Google
- XO
Nosotros nos basaremos en el estandard **StandardJS**.


:::info ¿Qué es un linter?

Un linter es una herramienta de programación que **analiza el código fuente de un programa en busca de errores**, inconsistencias y patrones de código que no siguen las convenciones y mejores prácticas de programación. 

Los linters modernos son herramientas que ayudan a los desarrolladores a escribir un **código más limpio, legible y coherente**. 

<details>
<summary>
Algunos de los aspectos que un linter puede verificar incluyen:
</summary>

**Errores de sintaxis**: Identificar errores de sintaxis que podrían causar que el programa no funcione correctamente.

**Convenciones de estilo**: Encontrar discrepancias en la forma en que el código está formateado y escrito, como indentación, uso de comillas, espaciado, etc.
**Mejores prácticas**: Advertir sobre patrones de código que podrían ser ineficientes o propensos a errores.

**Compatibilidad con estándares**: Verificar si el código sigue las convenciones y estándares de programación establecidos por la comunidad o el equipo de desarrollo.

**Errores lógicos**: Detectar posibles errores lógicos, como variables no utilizadas o condicionales que siempre se evalúan de la misma manera.

**Seguridad**: Advertir sobre posibles problemas de seguridad, como el uso de funciones potencialmente peligrosas.

**Documentación**: Identificar la falta de comentarios o documentación en el código.

Los linters se pueden configurar para funcionar con diferentes lenguajes de programación y se integran con los flujos de trabajo de desarrollo. Pueden ejecutarse automáticamente en el momento de la compilación, en un entorno de desarrollo integrado (IDE) o a través de la línea de comandos. Algunos linters populares incluyen **ESLint para JavaScript**, Pylint para Python y RuboCop para Ruby.

</details>

:::

## ESlint como linter predeterminado
En nuestro caso usaremos una libreria llamada **ESLint** como linter para que vigile el código de nuestros proyectos, que configuraremos para que se ajuste al StandardJS.

Nosotros usaremos el linter que más exito ha tenido en la programación con javascript: **ESLint**.



Vale, ahora ya nos suena qué es cada cosa y para que sirve, es hora de actualizar nuestro entorno de trabajo. Después crearemos nuestro proyecto basado en **NodeJs** con la herramienta **Vite** e instalaremos las **dependencias** necesarias con **npm**, como puede ser **ESLint**, para mejorar nuestro flujo de trabajo en el desarrollo de nuestra **SPA**.

¿Estas preparado?


## Esto es lo que vamos a hacer:

1. Instalaremos **Node.js** que a su vez instalará **npm**
2. Crearemos un **proyecto html/javascript** utilizando vite dentro de nuestra carpeta de proyecto
3. Analizaremos el proyecto ejemplo para comprender la estructura de archivos que incluye una spa.
4. Modificaremos el **scaffolding** (las carpetas y archivos) de nuestro proyecto con algunos 'componentes' básicos.
5. Crearemos el archivo **vite.config** y verificamos que todo funciona de forma correcta
6. Instalaremos Bootstrap y Bootswach
7. Instalaremos ESLint
8. Crearemos un sistema de despliegue continuo basado en GitHub Pages utilizando la dependencia **gh-pages**.

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

- Modificamos `index.html` para que solo tenga las etiquetas header, main y footer y enlazamos el archivo main.js
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
- En `**main.js**` importamos los componentes header y footer y los inyectamos en sus etiquetas correspondients. También cargamos la vista `home.js` en la etiqueta main
```js title="main.js"
import { header } from './componentes/header'
import { footer } from './componentes/footer'

// Importamos la vista por defecto (que será home)
async function cargarVista () {
  const componente = await import('./vistas/homeVista')
  const vista = componente.default
  // Inyectamos la vista home
  document.querySelector('main').innerHTML = vista.template
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
- Finalmente importamos los estilos de scss

```js title="main.js"
// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'

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

## 7. Instalando ESLint

- Para utilizar en nuestro proyecto ESLint, en primer lugar instalaremos en **VSCode** el pluging **ESLint de Microsoft**.
  
  ![Eslint plugin](/imagenes/v1/spa/eslintplugin.png)






- Ahora instalamos **Eslint con la configuración standard**  
  ```npm init @eslint/config -- --config semistandard
  ```
  Esto nos instalará ESLint con la configuración Standard. Puedes comprobar que se ha creado un archivo de configuración con nombre `.eslintrc.cjs`

- Finalmente vamos a configurar VSCode para que al grabar (pulsando ctrl + s) ESLint haga su trabajo, reparando, si puede, algunos errores de sintaxis y avisando (con una línea subrayada roja) cuando puede haber un posible error en el código. 
  
  
- Para ello:
  - Abre la paleta de comandos con `ctrl + shift + P` y escribe `settings json`
  - Selecciona las preferencias de usuario: `Preferences: Open User Settings (JSON)`
  - Asegurate de que tienes las siguiente linea en el archivo json
    ```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    }
    ```

  Ahora, si abres un archivo y pulsas `ctrl + S` verás como actua ESLint.

## 8. Desplegando la aplicación en un servidor de pruebas (GitHub Pages)
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




    

