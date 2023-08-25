---
title: Componentes y vistas
---

Tal como hemos visto, una app basada en SPA es una única página html (index.html) con diferentes secciones o divs cuyo contenido irá cambiando dependiendo de la interacción.

A este contenido modular lo vamos a llamar **COMPONENTE** y va a tener tres partes bien diferenciadas: 
- un **template** donde escribiremos el cógido html que corresponde al componente
- un **script** donde pondremos la lógica javascript para gestionar el comportamiento del componente.

La estructura básica de un componente o vista debería ser algo así:

```javascript title="componente.js"
export const componente = {
  template: `Código html del componente`,
  string: ()=>{
    //logica javascript para el componente
  } 
}

```

En nuestra aplicación, por el momento, vamos a tener los componentes header, footer y las vistas.

Una vista en realidad es un componente, pero que alberga el contenido de cada una de las páginas de nuestra aplicación.

Partiendo de esta base podemos decir que, por el momento, tenemos:
- Componentes:
  - header.js
  - footer.js
  - editPerfil.js
- Vistas:
  - homeVista.js
  - registroVista.js
  - loginVista.js
  - proyectosVista.js
  - proyectoDetalleVista.js
  - proyectoNuevoVista.js
  - proyectoEditarVista.js
  - adminVista.js

Vamos a comenzar a crear los componentes header y footer con su template correspondiente. Más adelante añadiremos los script.

Pero antes, vamos a crear una nueva rama de desarrollo. Podemos llamarla `vistasHtml` Cuando tengamos todo el trabajo hecho, volcaremos toda la programación de esta rama sobre la rama `main`.

## Template para header.js
Para construir los templates y vistas de nuestra spa vamos a usar los prototipos que construimos hace unos días.

Por ejemplo, el código del header del prototipo html `home.html` es el siguiente:

```html title="home.html"
<header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img
          src="./images/logo.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />

        Vanilla Games</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">A cerca de</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
          <li class="nav-item">
            <button class="ms-2 btn btn-success">
              Iniciar sesión
              <i class="bi bi-box-arrow-in-right"></i>
            </button>
          </li>
          <li class="nav-item">
            <button class="ms-2 btn btn-outline-light">
              Regístrate
              <i class="bi bi-box-arrow-in-right"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

```
Tomamos el código de dentro del header y lo añadimos al template del componente header.

:::dander Rama vistasHtml
Antes de comenzar a programar los componentes, asegúrate de que estamos en la rama `vistasHtml`.
:::

 El resultado sería algo así:

```javascript title="header.js"

export const header = {
  template: // html
  `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#"
      ><img
        src="./images/logo.svg"
        alt=""
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />

      Vanilla Games</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">A cerca de</a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="ms-2 btn btn-success">
            Iniciar sesión
            <i class="bi bi-box-arrow-in-right"></i>
          </button>
        </li>
        <li class="nav-item">
          <button class="ms-2 btn btn-outline-light">
            Regístrate
            <i class="bi bi-box-arrow-in-right"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  `
}


```

Si hechas un vistazo a tu aplicación verás que esto va cogiendo forma 😀

## Template para footer.js
Vamos a hacer ahora lo mismo. Extraigo html del footer de los prototipos y lo pego en el template de mi componente:

```javascript title="footer.js"
export const footer = {
  template: // html
  `
<nav class="navbar bg-secondary fixed-bottom small">
  <div class="container">
    <a class="navbar-brand" href="http://www.fpllefia.com">
      <img
        src="./images/logo.svg"
        alt="fpllefia"
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />
      FPLlefià
    </a>
    <span class="navbar-text">@Texto de header</span>
    <a href="#" class="nav-link">Vínculo header</a>
  </div>
</nav>
  `
}

```
## Template para vista homeVista.js

Vamos a hacer lo mismo para vista homeVista.js

```javascript title="homeVista.js"
export default {
  template: // html
  `
<div class="container">
  <h1 class="mt-5 text-center fw-bold" style="font-size: 100px">
    Vanilla Games
  </h1>
  <div class="m-5 mx-auto" style="max-width: 400px">
    <img src="./images/logo.svg" alt="fpllefia" class="img-fluid" />
  </div>
</div>
  `
}

```

De momento bastante bien, pero hay un par de cosillas que tenemos que retocar.

1. Debemos modificar nuestro index.html para añadir los estilos del `<body></body>` de los prototipos.
2. Debemos modificar los las url de las imagenes para que se muestren correctamente.

## Actualizando index.html
Vamos con el index.html

```html title="index.html" {8}
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla Games</title>
</head>
<body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
  <header></header>
  <main></main>
  <footer></footer>
  <script type="module" src="/main.js"></script>
</body>
</html>

```
## Modificando imágenes e iconos

### Para las imágenes
Para el tema de las imágenes necesitamos, lógicamente, **tener nuestras imagenes en el proyecto**. 

Para ello vamos a crear las carpetas necesarias dentro de src: `src/assets/images` y **arrastramos dentro todas las imágenes** que tenemos en nuestros prototipos.

![images](/imagenes/v1/spa/images.png)

Ahora vamos a modificar las urls de los templates. Donde antes teníamos `src="./images/nombreimagen.png" ahora debemos poner: `src="/assets/images/logo.svg"`

:::note Fíjate que
Fíjate que para vite, cuando una ruta comienza por `/` significa que comienza por la carpeta raiz definida en vite.config.js, que en nuestro caso es `src`
:::

Modificamos todas las de las imagenes de header.js, footer.js y homeVista.js y...  ¡¡¡lo tenemos!!!

![homeVista](/imagenes/v1/spa/homeVista.png)

### Para los iconos
Primero necesitamos **instalar la libreria de `bootstrap-icons`**
```
npm i bootstrap-icons
```


A continuación debemos **importar los iconos** en nuestro archivo `styles.scss`. Para ello añade el siguiente código:

```css title="styles.scss"
$bootstrap-icons-font-dir: "../node_modules/bootstrap-icons/font/fonts";
@import "bootstrap-icons/font/bootstrap-icons";
```

¡Ya tenemos nuestra primera vista con imágenes e iconos!

:::note ✍ TAREA ✍

Es tu turno. Crea las siguientes vistas con sus respectivos templates: 
  - registroVista.js
  - loginVista.js
  - proyectosVista.js
  - proyectoDetalleVista.js
  - proyectoNuevoVista.js
  - proyectoEditarVista.js
  - adminVista.js

Para comprobar como se ven puedes cambiar las vista por defecto del archivo main.js modificando la línea 

```javascript title="main.js"
const componente = await import('./vistas/loginVista')
```
:::

## Programando la lógica de los componentes y vistas (script)

Ahora ya tenemos las vistas con su código html básico en el `template`.

Pero recuerda que en los prototipos  hemos implementamos algo de javascript para gestionar las validaciones utilizando bootstrap.js. Por lo tanto, necesitamos añadir ese código a cada una de las vistas.

Lo haremos en la propiedad string de nuestro componente.

Vemos un ejemplo con la vista `registro.js`

#### Lógica para `registro.js`

Añadimos el método script() y dentro copiamos el código javascript que hemos programado en el prototipo:

```javascript title="registro.js"
export default {
  template: // html
  `
  ...
  `,
  script: () => {
    console.log('vista registro cargada')
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formRegistro')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
    // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
      // Detenemos el evento enviar (submit)
        event.preventDefault()
        event.stopPropagation()
      }
      // Y añadimos la clase 'was-validate' para que se muestren los mensajes
      formulario.classList.add('was-validated')
    })
  }
}
```

Ahora solo nos falta ejecutar el script justo después de haber inyectado el componente en nuestra app.

Por lo tanto, necesitamos modificar el `main.js`

```javascript title="main.js" {10-13}
import { header } from './componentes/header'
import { footer } from './componentes/footer'

import './scss/styles.scss'

// Importamos la vista por defecto (que será home)
async function cargarVista () {
  const componente = await import('./vistas/registroVista')
  const vista = componente.default
  // Inyectamos la vista home
  document.querySelector('main').innerHTML = vista.template
  // Ejecutamos la lógica de la vista
  vista.script()
}
cargarVista()

// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

// Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template

```

:::danger 👉TAREA👈
Muy bien, es el momento de hacer lo mismo para el resto de las vistas. 

Verifica que todo funciona ok modificando el main.js para ir cargando las vistas conforme las actualizas.

Por cierto, no olvides **ir haciendo commits** conforme avanzas en tu trabajo.

¡Qué te diviertas!
:::

## Volcando el trabajo en la rama principal. Primer PullRequest

Llegados a este punto ¡ya hemos dado un buen empujón a nuestro proyecto!

Una vez hemos revisado que todo funciona correctamente, es hora de volcar todo el trabajo dedicado a la creación de las vistas en la rama principal `main`.

Para ello haremos un pullRequest desde la rama `vistasHtml`a la rama `main`.

:::danger No te olvides...
Asegúrate de que ha subido todas las modificaciones de tu rama vistashtml
:::

Nos vamos a la página web de GitHub y abrimos nuestro repositorio. Alli veremos las ramas y commits realizados.

Desde la misma página de Github, podemos hacer click sobre el item del menú superior `PullRequest`y luego `Nuevo PullRequest`

Ahora debes indicar la rama destino (que será `main`) y la rama original (que será `vistasHtml`)

![pullrequest](/imagenes/v1/spa/pullrequest.png)

Luego creamos el pullRequest añadiendo un mensaje informativo de qué hemos añadido a la rama principal

![pullrequest](/imagenes/v1/spa/pullrequest2.png)

Solo nos falta hacer el `merge pullRequest` y confirmarlo. Una vez hecho esto, si vuelves a revisar la rama `main`, verás que se han incorporado todos los cambios.

## Visualizando repositorio con 'Git Graph'
Para acabar, vamos a utilizar una extensión de VSCode que nos permite visualizar la evolución de nuestro repositorio de forma gráfica. Una vez instalada puedes mostrar toda la info de forma gráfica haciendo click en el item de la barra inferior de VSCode con nombre Git Graph:

![pullrequest](/imagenes/v1/spa/gitgraph.png)

Fíjate como podemos ver en qué momento hemos creado el proyecto. En qué punto creamos una rama especifica `prototipos`que hemos usado para escribir código html, aunque no hemos volcado (mediante merge) ese código en la rama principal.

También puedes ver como, por error 😅, he creado parte de las vistas trabajando directamente en la rama principal. Pero después he creado la rama `vistashtml`para acabar de modificar el trabajo. Esta rama sí que la he volcado ('merge') sobre la rama principal `main`, donde ahora tenemos todo el trabajo própio de la app.

