---
title: Componentes y vistas
---

Tal como hemos visto, una app basada en SPA es una única página html (index.html) con diferentes secciones o divs cuyo contenido irá cambiando dependiendo de la interacción.

A este contenido modular lo vamos a llamar **COMPONENTE** y va a tener tres partes bien diferenciadas: 
- un **template** donde escribiremos el cógido html que corresponde al componente
- un **script** donde pondremos la lógica javascript para gestionar el comportamiento del componente
- un **style** donde pondremos los estilos de ese componente, si son exclusivos.

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
Tomamos el código de dentro del header y lo añadimos al template del componente header. El resultado sería algo así:

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
Para el tema de las imágenes necesitamos, lógicamente, tener nuestras imagenes en el proyecto. 

Para ello vamos a crear las carpetas necesarias dentro de src: `src/assets/images` y arrastramos dentro todas las imágnes que tenemos en nuestros prototipos.

![images](/imagenes/v1/spa/images.png)

Ahora vamos a modificar las urls de los templates. Donde antes teníamos `src="./images/nombreimagen.png" ahora debemos poner: `src="/assets/images/logo.svg"`

:::note Fíjate que
Fíjate que para vite, cuando una ruta comienza por `/` significa que comienza por la carpeta raiz definida en vite.config.js, que en nuestro caso es `src`
:::

Modificamos todas las de las imagenes de header.js, footer.js y homeVista.js y...  ¡¡¡lo tenemos!!!

![homeVista](/imagenes/v1/spa/homeVista.png)

### Para los iconos
Primero necesitamos instalar la libreria de bootstrap-icons
```
npm i bootstrap-icons
```


A continuación debemos importar los iconos en nuestro archivo styles.scss

```css title="styles.scss"
$bootstrap-icons-font-dir: "../node_modules/bootstrap-icons/font/fonts";
@import "bootstrap-icons/font/bootstrap-icons";
```

:::note ✍ TAREA ✍

Es tu turno. Crea las siguientes vistas con sus respectivos templates: 
  - registroVista.js
  - loginVista.js
  - proyectosVista.js
  - proyectoDetalleVista.js
  - proyectoNuevoVista.js
  - proyectoEditarVista.js
  - adminVista.js

Para comprobar como se ven puedes cambiar las vista por defecto del archivo main.js
:::

