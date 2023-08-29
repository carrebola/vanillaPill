---
title: Componente enrutador.js
---

Por el momento tenemos los componentes header.js y footer.js cargados sobre sus etiquetas respectivas.

Por otro lado tenemos una serie de **vistas** que inyectamos en la etiqueta `<main></main>`.

Vamos a programar la lógica necesaria para que **podamos cargar las vistas desde nuestro navegador, como si de páginas html independientes se tratase.**

Para ello programaremos un componente que llamaremos `enrutador.js`

## Cómo funciona nuestro enrutador

En realidad, la función de este componente es inyectar el template de las las vistas en la etiqueta main y cargar sus scripts. Así que la primera pregunta que debemos hacernos es: ¿Cuando debe hacerlo? 

Se me ocurren tres posibles casos:
1. Cuando alguien escribe la ruta en el navegador
2. Cuando alguien navega por el historial (adelante o atrás)
3. Cuando alguien hace click sobre un enlace.

Así que de momento vamos a necesitar una función (más bien un método) que escuche estos eventos. Lo llamaremos: **observadorRutas()**

Por otro lado, necesitamos un método que se encargue de inyectar el template de las las vistas en la etiqueta main y cargar sus scripts. A esta función la vamos a llamar: **router()**


Y finalmente, necesitamos un objeto donde poner el nombre de todas las posibles vistas. Para ello crearemos una propiedad que, sorpresa, llamaremos: *rutas* 

## Componente **enrutador.js**

Antes de comenzar trabajar, vamos a crear una nueva rama a partir de la rama `main`. Llamémosla `Enrutador` (Que original... 😒)

Ahora sí. Creamos el archivo `enrutador.js` dentro de la carpeta `componentes` y programamos la estructura básica a partir de las premisas explicadas. Quedaría algo así:

```javascript title="enrutador.js"

export const enrutador = {
  rutas: {},
  router: () => {},
  observadorRutas: () => {}
}


```

Ahora vamos a actualizar el objeto rutas con las vistas importadas. 

```javascript title="enrutador.js"
export const enrutador = {
  rutas: {
    home: import('../vistas/homeVista.js'),
    // Usuarios
    admin: import('../vistas/adminVista.js'),
    registro: import('../vistas/registroVista.js'),
    login: import('../vistas/loginVista.js'),
    // Proyectos
    proyectos: import('../vistas/proyectosVista.js'),
    proyectoNuevo: import('../vistas/proyectoNuevoVista.js'),
    proyectoEditar: import('../vistas/proyectoEditarVista.js'),
    proyectoDetalle: import('../vistas/proyectoDetalleVista.js'),
    404: import('../vistas/404.js')
  },
  router: () => {},
  observadorRutas: () => {}
}
```

:::note Recuerda
Cuando creemos una vista nueva en nuestro proyecto debemos venir a este archivo y actualizar esta propiedad
:::


### Método observadorRutas()

Nuestro sistema de navegación se basará en modificar la url utilizando el símbolo **#**. Así, cuando queramos navegar a la vista **proyectos** utilizaremos la url `www.miproyecto/#/proyectos`. En realidad no cargaremos nuevas páginas, sino que actualizaremos el contenido de la etiqueta `<main>`. 

Nuestro sistema de navegación se basará en la siguiente metodología:
1. Lanzaremos el método observadorRutas()en el archivo `main.js` para que se ejecute nada más cargar la app y comience escuchar los posibles eventos en el navegador.:
2. Para detectar si alguien ha hecho clic en un enlace , **detectaremos el evento click** en el cuerpo del documento (en el `<body>`) usando  
  ```js
  // Capturamos los eventos click sobre el body
  document.body.addEventListener('click', (event)=>{...})
  ```
3. Obtendremos el elemento sobre el que se ha hecho click y comprobaremos que se trata de una etiqueta `<a>` con la clase '**router-link**'
    ```js 
    document.body.addEventListener('click', event => {
      // Evitamos que se cargue la página
      const link = event.target
      if (link.classList.contains('router-link')) {
        console.log('router-link')
        event.preventDefault()
        ...
    ```
4. Extraeremos el contenido del atributo **href** (el cual contendrá el nombre de la vista a cargar)
  ```js
  // Leemos el contenido del href
  const href = link.getAttribute('href') 
  ```
5. Y actualizaremos la barra de navegación del navegador incluyendo la url en el historial de navegación
  ```js
  // Actualizamos url del navegador
  window.history.pushState({ path: href }, '', href)
  ``` 
6. Por otro lado vamos a **escuchar el evento *cambio en la barra de navegación* `popstate`**. Cuando detectemos un cambio llamaremos al método **router()** para actualizar la vista:
  ```js
  // Capturamos eventos pushState (cambios en la url del navegador)
  window.addEventListener('popstate', (e) => {
    // Llamamos a router para que cargue la vista
    enrutador.router()
  }) 
  ```

El método **observadorRutas()** quedaría así:

```js title="enrutador.js"
observadorRutas: () => {
    document.body.addEventListener('click', event => {
      // Evitamos que se cargue la página
      const link = event.target
      if (link.classList.contains('router-link')) {
        console.log('router-link')
        event.preventDefault()
        // Obtenemos la ruta del enlace sin el .html
        const href = link.getAttribute('href')
        // Añadimos la nueva ruta al historial

        // (El método pushState() permite agregar un nuevo estado a la pila del historial del navegador. Esto significa que una nueva entrada de historial se agrega a la pila y la URL del navegador se actualiza sin recargar la página.)
        window.history.pushState({ path: href }, '', href)
        // y ejecutamos el router de nuevo para que detecte los cambios con el evento popstate
        enrutador.router()
      }
    })

    // Detectamos cuando alguien navega por el historial con los botones avanzar y retroceder del navegador.
    window.addEventListener('popstate', (e) => {
      console.log('evento popstate - Te estás moviendo por el historial')
      enrutador.router()
    })
  }

```
:::info
  *(El método **pushState()** permite agregar un nuevo estado a la pila del historial del navegador. Esto significa que una nueva entrada de historial se agrega a la pila y la URL del navegador se actualiza sin recargar la página.)*
:::   


### Método router()

Ahora vamos a crear el método `router()`. Este será el que cargue las vistas en la app. 

Esta función se dispara cada vez que se produce un cambio en la url del navegador. 
Dentro del método **router()** se obtiene el **hash** de la ruta modificada mediante `window.location.hash`. 
Después, se utiliza este hash resultante para obtener la vista correspondiente del objeto rutas.

:::note Nota
También hemos contemplado la posibilidad de pasar un parámetro en la ruta. PEro esto ya lo veremos más adelante
:::

Con esta lógica podemos detectar: 
- cuando se navega por el historial o 
- cuando se introduce directamente una url en la barra de navegación para poder cargar la vista correspondiente

```javascript
    // Capturamos el hash # que ha cambiado en la url
    const pathCompleto = window.location.hash
    // Separamos la ruta del posible parametro que reciba
    const path = pathCompleto.split('/')[1]
    const parametro = pathCompleto.split('/')[2]
```
Si la vista no existe cargaremos la vista `404.js` para indicar que la página no existe.

Si la vista existe, se obtiene el objeto de la vista mediante la propiedad **default** de la promesa. 
```js
    const componenteVista = await enrutador.rutas[path]
```

:::info
  
  *(Fijate que para acceder a una propiedad del objeto **rutas** no usamos el punto sino los corchetes **[**path**]**. De esta manera podemos **acceder a una propiedad utilizando una variable** que contiene el nombre de la propiedad, en lugar del propio nombre de la propiedad)*

::: 
Luego, se inyecta la vista en el elemento main del documento HTML utilizando la propiedad **innerHTML** de document.querySelector('main'). Por último, se ejecuta el **script** de la vista si lo hay.


Así quedaría el método router: 
```js title="router"
// Método que obtiene la ruta del navegador
  router: async () => {
    // Capturamos el hash # que ha cambiado en la url
    const pathCompleto = window.location.hash
    // Separamos la ruta del posible parametro que reciba
    const path = pathCompleto.split('/')[1]
    const parametro = pathCompleto.split('/')[2]

    // capturamos el componente con ese nombre de la vista
    // (Usamos las sintaxix objeto[propiedad]) porque el nombre de la propiedad lo tenemos en una variable.)
    const componenteVista = await enrutador.rutas[path]
    // Si existe la vista la podremos cargar
    if (componenteVista) {
      try {
        // Obtenemos el objeto del componente (que fué exportado como default)
        const vista = await componenteVista.default
        // inyectamos vista y ejecutamos su script
        document.querySelector('main').innerHTML = vista.template
        // A los script les pasamos el parametro que hemos extraido de la ruta. Así podemos pasar, por ejemplo, el id de un proyecto
        vista.script(parametro)
      } catch (error) {
        // Si se produce un error cargamos la vista 404
        console.log(error)
      }
    }
  },
```


El código completo de nuestro objeto enrutador.js quedaría así:

```js title="enrutador.js"
  
export const enrutador = {

  // Objeto (diccionario) con todas las rutas y su vista asociada
  rutas: {
    home: import('../vistas/homeVista.js'),
    // Usuarios
    admin: import('../vistas/adminVista.js'),
    registro: import('../vistas/registroVista.js'),
    login: import('../vistas/loginVista.js'),
    // Proyectos
    proyectos: import('../vistas/proyectosVista.js'),
    proyectoNuevo: import('../vistas/proyectoNuevoVista.js'),
    proyectoEditar: import('../vistas/proyectoEditarVista.js'),
    proyectoDetalle: import('../vistas/proyectoDetalleVista.js'),
    404: import('../vistas/404.js')
  },

  // Método que obtiene la ruta del navegador
  router: async () => {
    // Capturamos el hash # que ha cambiado en la url
    const pathCompleto = window.location.hash
    // Separamos la ruta del posible parametro que reciba
    const path = pathCompleto.split('/')[1]
    const parametro = pathCompleto.split('/')[2]

    // capturamos el componente con ese nombre de la vista
    // (Usamos las sintaxix objeto[propiedad]) porque el nombre de la propiedad lo tenemos en una variable.)
    const componenteVista = await enrutador.rutas[path]
    // Si existe la vista la podremos cargar
    if (componenteVista) {
      try {
        // Obtenemos el objeto del componente (que fué exportado como default)
        const vista = await componenteVista.default
        // inyectamos vista y ejecutamos su script
        document.querySelector('main').innerHTML = vista.template
        // A los script les pasamos el parametro que hemos extraido de la ruta. Así podemos pasar, por ejemplo, el id de un proyecto
        vista.script(parametro)
      } catch (error) {
        // Si se produce un error cargamos la vista 404
        console.log(error)
      }
    }
  },

  // Capturamos los eventos
  observadorRutas: () => {
    document.body.addEventListener('click', event => {
      // Evitamos que se cargue la página

      const link = event.target
      if (link.tagName === 'A') {
        event.preventDefault()
        // Obtenemos la ruta del enlace sin el .html
        const href = link.getAttribute('href')
        // Añadimos la nueva ruta al historial

        // (El método pushState() permite agregar un nuevo estado a la pila del historial del navegador. Esto significa que una nueva entrada de historial se agrega a la pila y la URL del navegador se actualiza sin recargar la página.)
        window.history.pushState({ path: href }, '', href)
        // y ejecutamos el router de nuevo para que detecte los cambios con el evento popstate
        enrutador.router()
      }
    })

    // Detectamos cuando alguien navega por el historial con los botones avanzar y retroceder del navegador.
    window.addEventListener('popstate', (e) => {
      console.log('evento popstate - Te estás moviendo por el historial')
      enrutador.router()
    })
  }
}


```

Ahora solo faltaría añadir a la página principal `main.js` una llamada al método observadorRutas() de nuestro objeto para que escuche los posibles eventos.

Tambien vamos a eliminar la inyección manual que hacíamos sobre la etiqueta main para usar `windows.location = '#/home'` y asociar así la vista home a la raiz de la app.

```js title="main.js" {17,19}
// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Importamos componentes header y footer
import { header } from './componentes/header'
import { footer } from './componentes/footer'

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from './componentes/enrutador'

document.querySelector('#header').innerHTML = header.template
header.script()
document.querySelector('#footer').innerHTML = footer.template

enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'
```

Si modificamos la barra de navegación de nuestra aplicación escribiendo, por ejemplo `http://localhost:5173/#/registro` veremos como se actualiza la vista.

También podemos hacer clic sobre la flecha atras de la barra de navegación. Podremos comprobar que volvemos a la vista #/home.

Finalmente, para verificar que los enlaces funcionan vamos a modificar el **atributo `href`** de los enlaces del componente header y a vamos a añadirles la **clase 'router-link'** para ver si la navegación funciona correctamente.

:::note Nota
Hemos cambido los botones de inicio de sesión y registrate por etiquetas `<a></a>` para facilitar el comportamiento de carga de vistas.
:::

```js title="enlace botón home"
<a class="navbar-brand" href="#/home"
  ><img
    src="/assets/images/logo.svg"
    alt=""
    width="30"
    height="24"
    class="d-inline-block align-text-top router-link"
  />
  Vanilla Games</a
>
```

```js title="menu" {4,15,21}
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active router-link" aria-current="page" href="#/home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link router-link" aria-current="page" href="#">TOP5 Proyectos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link router-link" aria-current="page" href="#">A cerca de</a>
    </li>
  </ul>
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="ms-2 btn btn-success router-link" href="#/login">
        Iniciar sesión
        <i class="bi bi-box-arrow-in-right"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="ms-2 btn btn-outline-light router-link" href="#/registro">
        Regístrate
        <i class="bi bi-box-arrow-in-right"></i>
      </a>
    </li>
  </ul>
```
Es el momento de probar todos nuestros enlaces... ¿Funcionan?


