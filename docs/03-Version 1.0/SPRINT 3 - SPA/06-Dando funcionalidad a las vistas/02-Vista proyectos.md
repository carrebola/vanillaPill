---
title: Vista proyectos
---
Esta vista nos **muestra una tabla con los datos de los proyecto**s que han creado los diferentes desarrolladores. 

Por el momento, **solo se muestra la tabla html**, tal y como la hemos creado en el prototipo html. 

## ¿Qué vamos a hacer?
Para poner un poco de orden necesitamos preguntarnos: ¿qué funcionalidades debo implementar en esta vista?. Vamos a hacer una lista:

1. Generar la tabla a partir de datos obtenidos de la base de datos (o, en nuestro caso, simulando la consulta con un array de datos en formato json)
2. Generar las tarjetas de la misma manera
3. Dar funcionalidad al boton de 'subir proyecto' y de paso, mostrarlo o ocultarlo dependiendo del rol de usuario logueado.
4. Dar funcionalidad a los botones que permutan entre las vistas de tabla y de tarjetas cambiandoles el aspecto
5. Dar funcionalidad al buscador (que genere nuevo array de datos filtrados dependiendo de la busqueda) y al botón de borrar datos del mismo.
6. Dar funcionalidad a los botones que permutan entre la vista 'Todos los proyetos' y 'Mis proyectos'
7. Dar funcionalidad a los botones de editar, borrar y mostrar detalle de cada proyecto

Seguro que luego caemos en alguna funcionalidad que se nos ha pasado. ¡Comenzamos!

## Emulando datos de la consulta a la base de datos

Vamos a crear un array de datos que emulen una consulta a los proyectos almacenados en la base de datos.

Para eso necesitamos conocer el nombre de los campos de las tablas, por lo que vamos a consultar de nuevo el **diagrama de clases** que diseñó nuestro '**yo-backend**''. El resultado podría ser algo así:

```javascript
const proyectos = [
  {
    id,
    created_at,
    user_id,
    nombre,
    descripcion,
    imagen,
    enlace,
    repositorio,
    estado,
    nombre_usuario,
    apellidos_usuario

  }

]
```
Y el array completo con datos inventados (gracias chatGPT 😀) usando los user_id de nuestra base de datos quedaría así:

```javascript title="datosPrueba.js"
// Datos de prueba con perfiles inventados
export const perfiles = [
  {
    ...
  }

// Datos de prueba con proyectos inventados a partir de los usuarios (perfiles) anteriores 
export const proyectos = [
  {
    id: 1,
    created_at: '2023-08-29T10:00:00Z',
    user_id: '36f66b5e-aa59-4f96-b6a8-3c890d6a452c',
    nombre: 'Salto Espacial',
    descripcion: 'Juego de plataforma espacial con saltos emocionantes',
    imagen: 'imagen1.jpg',
    enlace: 'https://salto-espacial.com',
    repositorio: 'https://github.com/usuario/salto-espacial',
    estado: 'En desarrollo',
    nombre_usuario: 'Carmen',
    apellidos_usuario: 'Maura'
  },
  {
    id: 2,
    created_at: '2023-08-28T15:30:00Z',
    user_id: 'a3df05b0-91e7-4f68-a067-841fcf5de9f0',
    nombre: 'Carrera Loca',
    descripcion: 'Juego de carreras con obstáculos y power-ups',
    imagen: 'imagen2.jpg',
    enlace: 'https://carrera-loca.com',
    repositorio: 'https://github.com/usuario/carrera-loca',
    estado: 'En desarrollo',
    nombre_usuario: 'Antonio',
    apellidos_usuario: 'Resines'
  },
  {
    id: 3,
    created_at: '2023-08-27T09:45:00Z',
    user_id: 'd67e3b1c-875f-437f-bd2a-9ff50b72083d',
    nombre: 'Aventuras en la Selva',
    descripcion: 'Explora la selva en busca de tesoros y desafíos',
    imagen: 'imagen3.jpg',
    enlace: 'https://aventuras-en-la-selva.com',
    repositorio: 'https://github.com/usuario/aventuras-en-la-selva',
    estado: 'En desarrollo',
    nombre_usuario: 'Maribel',
    apellidos_usuario: 'Verdú'
  },
  {
    id: 4,
    created_at: '2023-08-26T11:20:00Z',
    user_id: '36f66b5e-aa59-4f96-b6a8-3c890d6a452c',
    nombre: 'Rompecabezas Divertido',
    descripcion: 'Resuelve rompecabezas desafiantes con imágenes divertidas',
    imagen: 'imagen4.jpg',
    enlace: 'https://rompecabezas-divertido.com',
    repositorio: 'https://github.com/usuario/rompecabezas-divertido',
    estado: 'En desarrollo',
    nombre_usuario: 'CArmen',
    apellidos_usuario: 'Maura'
  },
  {
    id: 5,
    created_at: '2023-08-25T14:15:00Z',
    user_id: 'a3df05b0-91e7-4f68-a067-841fcf5de9f0',
    nombre: 'Defensor Espacial',
    descripcion: 'Protege la galaxia de invasores alienígenas en este juego arcade',
    imagen: 'imagen5.jpg',
    enlace: 'https://defensor-espacial.com',
    repositorio: 'https://github.com/usuario/defensor-espacial',
    estado: 'En desarrollo',
    nombre_usuario: 'Antonio',
    apellidos_usuario: 'Resines'
  }
]

```
## Generando los datos desde script de la vista

Vamos ahora a la vista `proyectos.js`. Necesitamos crear un par de funciones, **pintaTabla()** y **pintaTarjetas()**. Estas funciones se encargarán de inyectar en la vista el resultado de recorrer el array anterior generando una fila `<tr></tr>`(en el caso de la tabla) o `card` (en el caso de las tarjetas) por cada proyecto. 

De momento vamos a hacer que, en ambas vistas, se muestren los botones de editar y borrar proyecto. Estos enlaces tendrán una clase (**botonEditar** y **botonBorrar**) para poder detectar su pulsación, y además, utilizando **dataset**, le añadiremos el **id del proyecto**. De esta manera, cuando hagamos clic en el botón podremos extraer el id y llamar a la **función de edición** o **borrardo** de ese proyecto.

Más adelante, haremos que estos botones se muestren u oculten, dependiendo de si el rol del usuario logueado es *desarrollador* o *registrado*, y de si el proyecto es de su creación

Esta sería la función pintaTabla():
### Función pintaTabla()
```javascript title="script de proyectos.js"
// Función para pintar tabla a partir de array
    const pintaTabla = (proyectos) => {
      let tbodyProyectos = ''
      // Para cada proyecto del array 'proyectos'
      proyectos.forEach(proyecto => {
      // sumamos un tr con los datos del proyecto
        tbodyProyectos += `
      <tr>
        <td>
          <div class="containerImagen">
            <img 
              width="200px" 
              src=${proyecto.imagen || 'images/imagenVacia.png'} 
              alt="imagen proyecto" />
          </div>
        </td>
        <td>${proyecto.nombre}</td>
        <td>${proyecto.descripcion}</td>
        <td><a href="${proyecto.enlace}"><i class="bi bi-link fs-4"></i></a></td>
        <td><a href="${proyecto.repositorio}"><i class="bi bi-folder-symlink fs-4"></i></a></td>
        <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
        <td>${proyecto.created_at}</td>
        <td>${proyecto.estado}</td>
        <td>
          <a
          data-user_id = ${proyecto.user_id}
          class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a>
        </td>
        <td>
          <a
            data-user_id = ${proyecto.user_id}
            class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a>
        </td>
      </tr>
            
      `
      })
      // inyectamos el resultado en el tbody
      document.querySelector('#tbodyProyectos').innerHTML = tbodyProyectos
    }
    
    // Ejecutamos la función
    pintaTabla(proyectos)
  ```
¡Mira que chulo!

![tabla proyectos](/imagenes/v1/spa/tabla.png)

### Función pintaTarjetas()
Para las tarjetas haremos lo mismo:

```javascript 
  // ####################################################################
  // *** FUNCIÓN PARA PINTAR TABLA A PARTIR DE ARRAY datos ***
  // ####################################################################
  const pintaTarjetas = (proyectos) => {
  let tarjetasProyectos = ''
  // Para cada proyecto del array 'proyectos'
  proyectos.forEach(proyecto => {
  // sumamos un tr con los datos del proyecto
    tarjetasProyectos += // html
  `
  <!-- tarjeta  -->
  <div class="col-12 col-lg-6">
    <div class="card mb-3">
      <div class="row g-0">
        <div
          class="col-4"
          style="
            background-image: url(${proyecto.imagen || 'images/imagenVacia.png'});
            background-position: center;
            background-size: cover;
          "
        ></div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">${proyecto.nombre}</h5>
            <p class="card-text">
              ${proyecto.descripcion}
            </p>
            <p class="small m-0 text-end text-italic">Autor: ${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</p>
            <p class="small text-end text-italic">Fecha: ${proyecto.created_at}</p>

            <a class="btn btn-sm btn-outline-primary" href="${proyecto.enlace}"><i class="bi bi-link"></i></a>
            <a class="btn btn-sm btn-outline-primary" href="${proyecto.repositorio}"><i class="bi bi-folder-symlink"></i></a>
            <a class="btn btn-sm btn-success" href="#">${proyecto.estado}</a>
            <a
              data-user_id = ${proyecto.user_id}
              class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
            ></a>
            <a
              data-user_id = ${proyecto.user_id}
              class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>  
  `
  })
  
  document.querySelector('#tabTarjetas').innerHTML = tarjetasProyectos
}

// ####################################################################
// Función para pintar tarjetas
// ####################################################################

pintaTarjetas(proyectos)  
```

Y quedará así... ¡¡¡Esto va cogiendo forma!!! 😄

![tabla proyectos](/imagenes/v1/spa/tarjetas.png)

#### Botón para nuevo proyecto

Para el botón 'Subir Proyecto' es muy fácil. Sustituye el botón por una etiqueta 'a' que apunte a la vista `proyectoNuevo.js`

```html title="proyectosVista.js"
<a href="#/proyectoNuevo" class="btn btn-primary w-100 router-link">Subir proyecto</a>
```

Y ahora vamos a mostrarlo o ocultarlo, dependiendo del rol del usuario que tenga la sesión abierta (solo debe mostrarse para el rol desarrollador)

```javascript title="proyectosVista.js"

    // ####################################################################
    // Mostrar/ocultar botón 'subir proyecto'
    // ####################################################################

    // Capturamos los datos del usuario logueado
    const usuario = ls.getUsuario()
    // Ocultamos el botón de subir proyecto si el rol es registrado
    if (usuario.rol === 'registrado') {
      document.querySelector('#botonSubirProyecto').classList.add('disabled')
    }
```
## Botones para permutar entre vista tabla y vista tarjetas
Para programar la funcionanlidad de los botones que nos permiten permutar entre la visualización en formato tabla o tarjetas, añadimos una clase para identificarlos: '*vistaTabla*' y '*vistaTarjetas*'

:::note Nota
He eliminado la etiqueta `<i></i>` insertando las clases del icono en el propio botón para facilitar la detección y manipulación del mismo
:::

```html title="proyectosVista.js"
<button class="btn btn-secondary me-2 bi bi-grid-3x3-gap vistaTabla">
</button>
<button class="btn btn-secondary me-2 bi bi-list vistaTarjetas">
</button>
```
Ahora creamos la lógica para detectar su pulsación

```javascript title="proyectosVista.js"
// Cambio entre vista de tablas y vista de tarjetas
    document.querySelector('.vistaTabla').addEventListener('click', (boton) => {
      console.log('vistaTabla');
    })

    document.querySelector('.vistaTarjetas').addEventListener('click', (boton) => {
      console.log('vistaTarjetas');
    })
```
Y cambiamos la visualización de cada uno de los tabs (mediante las clases *d-block* y *d-none* de bootstrap) en función del botón que hemos pulsado. También vamos a **modificar el aspecto de los botones (su color)** mediante la suma o extracción de la clase *btn-success* o *btn-secondary* de bootstrap.

```javascript title="proyectosVista.js"
    // ####################################################################
    // *** SELECCIÓN DE VISTA EN FORMATO TABLA O TARJETAS ***
    // ####################################################################

    // Selección vista tabla
    document.querySelector('.vistaTabla').addEventListener('click', (boton) => {
      // Lineas originales del html para los tabs:
      // <div class="col-12 d-none d-xl-block" style="overflow-x: auto">
      // <div class="d-xl-none row">

      // Pinta el boton de verde
      boton.target.classList.add('btn-success')

      // Pinta el otro botón de gris y elimina el verde
      const botonTarjeta = document.querySelector('.vistaTarjetas')
      botonTarjeta.classList.remove('btn-success')
      botonTarjeta.classList.add('btn-secondary')

      // Muestra y oculta los tabs
      document.querySelector('#tabTabla').setAttribute('class', 'col-12 d-block')
      document.querySelector('#tabTarjetas').setAttribute('class', 'd-none')
    })

    // Selección vista tarjetas
    document.querySelector('.vistaTarjetas').addEventListener('click', (boton) => {
      console.log('vistaTarjetas')

      // Pinta el boton de verde
      boton.target.classList.add('btn-success')

      // Pinta el otro botón de gris y elimina el verde
      const botonTabla = document.querySelector('.vistaTabla')
      botonTabla.classList.remove('btn-success')
      botonTabla.classList.add('btn-secondary')

      // Muestra y oculta los tabs
      document.querySelector('#tabTabla').setAttribute('class', 'd-none')
      document.querySelector('#tabTarjetas').setAttribute('class', 'row')
    })
  
  ```

## Implementando el buscador

Vamos a programar un código que cree un buscador que se encargará de verificar cada campo de cada proyecto en el array en busca del texto ingresado en el input de búsqueda. Los proyectos que coinciden con el texto de búsqueda en al menos uno de sus campos se filtran y se almacenan en un nuevo array que, de momento, mostraremos por consola.

```javascript title="proyectosVista.js"
    // ####################################################################
    // *** FILTRO PARA BUSCADOR ***
    // ####################################################################

    // Capturamos el input de búsqueda
    const inputBusqueda = document.getElementById('inputBusqueda')

    // Agregamos un evento de escucha para el evento de entrada en el input de búsqueda
    inputBusqueda.addEventListener('input', () => {
      // Capturamos el texto de búsqueda del input, conviértelo a minúsculas y elimina espacios en blanco al principio y al final
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim()

      // Filtramos los proyectos que coinciden con el texto de búsqueda en cualquier campo
      const proyectosFiltrados = datos.filter(proyecto => {
        // Itera sobre las propiedades (campos) de cada proyecto
        for (const key in proyecto) {
          // Obtenemos el valor del campo actual
          const valorCampo = proyecto[key]
          // Verificamos si el valor del campo es una cadena y si contiene el texto de búsqueda
          if (typeof valorCampo === 'string' && valorCampo.toLowerCase().includes(textoBusqueda)) {
            // Si hay coincidencia, devuelve true para incluir el proyecto en la lista filtrada
            return true
          }
        }
        // Si no se encontró coincidencia en ningún campo, devuelve false para excluir el proyecto
        return false
      })
      // Volvemos a pintar los datos con los proyectos filtrados por el buscador
      pintaTabla(proyectosFiltrados)
      pintaTarjetas(proyectosFiltrados)
    })
```

Primero **obtenemos una referencia al elemento de input** de búsqueda utilizando `document.getElementById("inputBusqueda")`.

Añadimos un **evento de escucha al input** de búsqueda usando addEventListener. El evento que estamos escuchando es el evento input, que se activa cuando el contenido del input cambia.

Dentro del controlador del evento input,** obtenemos el valor del input** y realizamos algunas transformaciones para preparar el texto para la búsqueda. Lo **convertimos a minúsculas** con `toLowerCase()` para hacer la búsqueda insensible a mayúsculas y minúsculas, y luego **eliminamos espacios en blanco** al principio y al final con `trim()`.

Ahora, viene la parte clave del código. Utilizamos el método **filter** en el array proyectos. Este método crea un nuevo array con todos los elementos que cumplan con la condición definida.

Para cada proyecto en el array, utilizamos un bucle **for...in** para iterar sobre las propiedades (campos) de cada objeto.

En cada iteración, obtenemos el valor del campo actual usando **proyecto[key]**, donde key es el nombre de la propiedad actual.

Luego, verificamos si el valor del campo **es una cadena de texto** utilizando `typeof valorCampo === "string"`. Si es una cadena, aplicamos `toLowerCase()` al valor y utilizamos `includes(textoBusqueda)` para verificar si el texto de búsqueda está presente en el campo.

Si el texto de búsqueda se encuentra en el campo, devolvemos true en el bloque if, lo que significa que ese proyecto debe ser incluido en el array de proyectos filtrados.

Si no se encuentra coincidencia en el campo actual, continuamos iterando sobre los campos.

Si no se encontró ninguna coincidencia en ningún campo, se devuelve false fuera del bucle for...in, lo que significa que ese proyecto no cumple con el criterio de búsqueda.

Finalmente, el resultado del método filter es un **array proyectosFiltrados** que contiene solo los proyectos que cumplen con el criterio de búsqueda.

Observa como va **mostrando por consola** el array con **tantos elementos como coincidencias** encuentra:

![filtro](/imagenes/v1/spa/filtro.png)

### Borrando los datos del buscador

Para borrar los datos del buscador cuando pulsamos el botón de la cruz podemos hacer lo siguiente:

```javascript title="proyectosVista.js"
    // ####################################################################
    // Borrar datos del input del buscador al hacer click en 'x'
    // ####################################################################

    document.querySelector('#borrarBuscador').addEventListener('click', () => {
      // Borramos contenido del buscador
      inputBusqueda.value = ''
      // Actualizamos array con todos los proyectos
      // const proyectosFiltrados = datos
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })
```

## Gestión de las pestañas 'Todos los proyectos' / 'Mis proyectos'

Para gestionar qué pestaña debe mostrarse (la pestaña 'Todos los proyectos' o la pestaña 'Mis proyectos'), necesitamos una variable global `misProyectos` que por defecto será false, es decir, la vista por defecto será de 'Todos los proyectos'.

El código para gestionar la visualización de las pestañas podría ser algo así: 

```javascript title="proyectosVista.js"
    // ####################################################################
    // Vista 'Todos los proyectos' / 'Mis proyectos'
    // ####################################################################

    // Definimos que por defecto se muestran 'mis proyectos'
    let misProyectos = false

    // *** Detectamos si se cambia de proyectos a mis proyectos al hacer click en las pestañas ***
    document.querySelector('.nav-tabs').addEventListener('click', (event) => {
      // Si click en 'Mis proyectos' cambiamos pestaña activa
      if (event.target.classList.contains('fichaMisProyectos')) {
        document.querySelector('.fichaMisProyectos').classList.add('active')
        document.querySelector('.fichaProyectos').classList.remove('active')
        misProyectos = true
      } else {
        // Si click en 'Todos los proyectos' cambiamos pestaña activa
        document.querySelector('.fichaProyectos').classList.add('active')
        document.querySelector('.fichaMisProyectos').classList.remove('active')
        misProyectos = false
      }
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })
```

Ahora **vamos a actualizar las funciones `pintaTabla(datos)` y `pintaTarjetas(datos)`** (que inyectan la tabla y las tarjetas a partir de los datos del array de datos de prueba), **añadiendo un filtro** que, si tenemos la variable 'misProyectos' como `true`, filtre todos los proyectos por su **user_id**. Es decir, que cree **un nuevo array donde solo se muestren los proyectos donde el user_id del proyecto coincide con el user_id del usuario logueado**.

```javascript title="proyectosVista.js"
    // ####################################################################
    // *** SELECCIÓN DE VISTA EN FORMATO TABLA O TARJETAS ***
    // ####################################################################
    const pintaTabla = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
      }

      let tbodyProyectos = ''
      // Iteramos para cada proyecto del array 'proyectos'
      proyectosFiltrados.forEach(proyecto => {
       ...
```
```javascript title="proyectosVista.js"

    // ####################################################################
    // *** FILTRO PARA BUSCADOR ***
    // ####################################################################

    const pintaTarjetas = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
        console.log(proyectos)
      }
      let tarjetasProyectos = ''
      // Iteramos para cada proyecto del array 'proyectosFiltrados'
      proyectosFiltrados.forEach(proyecto => {
        ...
      })
      
```
¡Esto ya debería estar funcionando de maravilla!
## Botones para editar, borrar y visualizar proyecto un proyecto
¡Ya queda menos! Ahora tenemos que **detectar cuando pulsamos los botones de editar y borrar** para **extraer el id del proyecto** que llevan grabado en el **dataset** y actuar en consecuencia: abriendo la vista de editar (a la que enviaremos el id como parámetro) o borrando el proyecto de la base de datos (esto, de momento, lo simularemos con una console.log).

También detectaremos cuando se pulsa la imagen del proyecto (o alguna celda 'td' si es la vista tabla) para mostrar la vista detalle del proyecto en cuestión.

Vamos a dividir el código en tres bloques:

Bloque 1: Botones de Edición, Borrado y Visualización de Detalle de Proyectos
Este bloque está encabezado por un comentario y se encarga de gestionar los clics en botones de edición y borrado, así como en elementos de visualización de detalle de proyectos. Utiliza la delegación de eventos para manejar los clics en elementos dentro de la etiqueta `<main>` del DOM.

```javascript
document.querySelector('main').addEventListener('click', (event) => {
  // ...
})
```
Bloque 2: Manejo de Botones de Edición y Borrado
Dentro del primer bloque, este sub-bloque se encarga de detectar si se ha hecho clic en botones de edición o borrado. Dependiendo del botón clicado, realiza acciones como mostrar un mensaje de alerta de borrado o redireccionar a una página de edición.

```javascript
if (event.target.classList.contains('botonAdmin')) {
  // ...
  if (boton.classList.contains('botonEditar')) {
    // Si se trata de editar
    // ...
  } else if (boton.classList.contains('botonBorrar')) {
    // Si se trata de borrar
    // ...
  }
}
```

Dentro del primer bloque, este sub-bloque maneja la visualización de detalles de proyectos cuando se hace clic en una celda de una tabla (`<td>`) o en un elemento con la clase verDetalle. Al hacer clic, se captura el ID del proyecto y se redirecciona a la página de detalle correspondiente.

```javascript 
// Visualizar detalle del proyecto si clic sobre tr de vista tabla
if (event.target.tagName === 'TD') {
  // ...
}

// Si hacemos clic sobre la imagen de tabla o de vista tarjetas
if (event.target.classList.contains('verDetalle')) {
  // ...
}
```





Este sería el código:

```javascript title="vistaProyectos.js"
    // ####################################################################
    // BOTONES DE EDICIÓN, BORRADO y VISUALIZACIÓN DE DETALLE DE PROYECTOS
    // ####################################################################

    // Detectamos clic sobre main (Usamos delegación de eventos porque la tabla y tarjetas se actualizan constantemente en el DOM)
    document.querySelector('main').addEventListener('click', (event) => {
      let id = ''
      // Si hemos pulsado sobre uno de los botones DE EDICIÓN O BORRADO
      if (event.target.classList.contains('botonAdmin')) {
        const boton = event.target
        // Capturamos el id de su dataset
        const id = boton.dataset.id
        if (boton.classList.contains('botonEditar')) {
          // Si se trata de editar
          console.log('Editar proyecto ' + id)

          // Cargamos la vista para editar proyecto pasandole como parámetro el id
          window.location = `#/proyectoEditar/${id}`
        } else if (boton.classList.contains('botonBorrar')) {
          // Si se trata de borrar
          alert('Borrar proyecto ' + id)

          // *** AQUÍ VA LA FUNCIÓN QUE BORRA DE LA BASE DE DATOS EL PROYECTO CORRESPONDIENTE AL ID ***
        }
      }
      // Visualizar detalle del proyecto si click sobre tr de vista tabla
      if (event.target.tagName === 'TD') {
        console.log('clic en td')
        id = event.target.parentNode.dataset.id
        window.location = `#/proyectoDetalle/${id}`
      }
      // Si hacemos clic sobre la imagen de tabla o de vista tarjetas
      if (event.target.classList.contains('verDetalle')) {
        id = event.target.dataset.id
        window.location = `#/proyectoDetalle/${id}`
      }
    })
```

:::note Ten en cuenta que...
Es posible que haya que añadir algunos ids o clases extra en el template para detectar los eventos.
:::

## Código final completo

Este sería el código completo de vistaProyecto.js:

```javascript	title="vistaProyecto.js"
import { proyectos } from '../bd/datosPrueba'
import { ls } from '../componentes/funciones'

export default {
  template: // html
  `
  <div class="container">
  <h1 class="mt-5">Proyectos</h1>
  <div class="row mt-5">
    <div class="col-12">
      <!--nav-tabs-->
      <ul class="nav nav-tabs">
        <!--Etiqueta Todos los proyectos-->
        <li class="nav-item w-50">
          <button 
            class="selectorFicha fichaProyectos nav-link w-100 active"
          >
            Todos los proyectos
          </button>
        </li>
        <!--Etiqueta Mis proyectos-->
        <li id="pestanyaMisProyectos" class="nav-item w-50">
          <button 
            class="selectorFicha fichaMisProyectos nav-link w-100"
          >
            Mis proyectos
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="border border-top-0 p-3">
    <div class="row">
      <div class="col-12 col-sm-4 mb-3">
      <!-- Boton para subir proyectos -->
        <a id="botonSubirProyecto" href="#/proyectoNuevo" class="btn btn-primary w-100 router-link">Subir proyecto</a>
      </div>
      <div class="d-flex col-12 col-sm-8 mb-3">
        <!-- Botones para alternar entre vista de tabla o de tarjetas -->
        <button class="vistaTabla btn btn-secondary me-2 bi bi-list">
        </button>
        <button class="vistaTarjetas btn btn-secondary me-2 bi bi-grid-3x3-gap ">
        </button>
        <!-- Buscador -->
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping"
            ><i class="bi bi-search"></i
          ></span>
          <input
            id="inputBusqueda"
            type="text"
            class="form-control"
            placeholder="Buscador"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <span class="input-group-text" id="addon-wrapping"
            ><i id="borrarBuscador" class="bi bi-x"></i
          ></span>
        </div>
      </div>
    </div>
    
    <!-- Tabla de proyectos -->
    <div id="tabTabla" class="col-12 d-none d-xl-block" style="overflow-x: auto">
      <table
        class="table table-hover align-middle mt-3"
        style="min-width: 1000px"
      >
        <thead>
          <tr>
            <th></th>
            <th>
              Nombre <span><i class="bi bi-caret-down"></i></span>
            </th>
            <th>
              Descripción <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Enlace <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>Repositorio</th>
            <th>
              Autor <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Fecha <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Estado <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody id="tbodyProyectos">
          <!-- Aqui van los datos generados por la lógica -->
          <p>No tienes proyectos</p>
        </tbody>
      </table>
    </div>

    <!-- Panel de tarjetas -->
    <div id="tabTarjetas" class="d-xl-none row">
      <!-- Aqui van los datos generados por la lógica -->
      <p>No tienes proyectos</p>
    </div>
  </div>
</div>
  `,
  script: () => {
    // **** AQUI DEBEMOS CAPTURAR LOS PROYECTOS DE LA BASE DE DATOS ****

    // Capturamos proyectos y guardamos en variable para poder ser filtrada
    const datos = proyectos

    // ####################################################################
    // *** FUNCIÓN PARA PINTAR TABLA A PARTIR DE ARRAY datos ***
    // ####################################################################

    const pintaTabla = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
      }

      let tbodyProyectos = ''
      // Iteramos para cada proyecto del array 'proyectos'
      proyectosFiltrados.forEach(proyecto => {
        // Generamos botones dependiendo de si el proyecto ha sido creado por el usuario logueado
        let botones = ''
        if (usuario.user_id === proyecto.user_id) {
          botones =
          `
          <td><a
            data-id = ${proyecto.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a></td>
          <td><a
            data-id = ${proyecto.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a></td>
          `
        }
        // sumamos un tr con los datos del proyecto de la iteración
        tbodyProyectos += // html
        `
        <tr data-id="${proyecto.id}" class="verDetalle">
          <td>
            <div class="containerImagen">
              <img 
                class="verDetalle"
                data-id="${proyecto.id}"
                width="200px" 
                src=${proyecto.imagen || 'images/imagenVacia.png'} 
                alt="imagen proyecto" />
            </div>
          </td>
          <td>${proyecto.nombre}</td>
          <td>${proyecto.descripcion}</td>
          <td><a href="${proyecto.enlace}" target="_blank"><i class="bi bi-link fs-4"></i></a></td>
          <td><a href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink fs-4"></i></a></td>
          <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
          <td>${proyecto.created_at}</td>
          <td>${proyecto.estado}</td>
          <td>
            <!-- Botones de edición y borrado -->
            ${botones}
          </td>
        </tr>   
        `
      })
      // inyectamos el resultado en el tbody
      document.querySelector('#tbodyProyectos').innerHTML = tbodyProyectos
    }

    // ####################################################################
    // Función para pintar tarjetas
    // ####################################################################

    const pintaTarjetas = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
        console.log(proyectos)
      }
      let tarjetasProyectos = ''
      // Iteramos para cada proyecto del array 'proyectosFiltrados'
      proyectosFiltrados.forEach(proyecto => {
        // Generamos botones dependiendo de si el proyecto ha sido creado por el usuario logueado
        let botones = ''
        if (usuario.user_id === proyecto.user_id) {
          botones =
          `
          <a
            data-id = ${proyecto.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a>
          <a
            data-id = ${proyecto.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a>
          `
        }
        // sumamos un tr con los datos del proyecto
        tarjetasProyectos += // html
        `
        <!-- tarjeta  -->
        <div class="col-12 col-lg-6">
          <div class="card mb-3">
            <div class="row g-0">
              <div
                class="col-4 verDetalle"
                data-id="${proyecto.id}"
                style="
                  background-image: url(${proyecto.imagen || 'images/imagenVacia.png'});
                  background-position: center;
                  background-size: cover;
                "
              ></div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">${proyecto.nombre}</h5>
                  <p class="card-text">
                    ${proyecto.descripcion}
                  </p>
                  <p class="small m-0 text-end text-italic">Autor: ${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</p>
                  <p class="small text-end text-italic">Fecha: ${proyecto.created_at}</p>
                  <a class="btn btn-sm btn-outline-primary" href="${proyecto.enlace}" target="_blank"><i class="bi bi-link"></i></a>
                  <a class="btn btn-sm btn-outline-primary" href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink"></i></a>
                  <button class="btn btn-sm btn-success">${proyecto.estado}</button>
                  <!-- Botones editar y borrar -->
                  ${botones}
                </div>
              </div>
            </div>
          </div>
        </div>  
        `
      })
      // inyectamos el resultado en tbody
      document.querySelector('#tabTarjetas').innerHTML = tarjetasProyectos
    }

    // *** Pintamos los datos en tabla y tarjetas ***
    pintaTabla(datos)
    pintaTarjetas(datos)

    // ####################################################################
    // *** SELECCIÓN DE VISTA EN FORMATO TABLA O TARJETAS ***
    // ####################################################################

    // Selección vista tabla
    document.querySelector('.vistaTabla').addEventListener('click', (boton) => {
      // Lineas originales del html para los tabs:
      // <div class="col-12 d-none d-xl-block" style="overflow-x: auto">
      // <div class="d-xl-none row">

      // Pinta el boton de verde
      boton.target.classList.add('btn-success')

      // Pinta el otro botón de gris y elimina el verde
      const botonTarjeta = document.querySelector('.vistaTarjetas')
      botonTarjeta.classList.remove('btn-success')
      botonTarjeta.classList.add('btn-secondary')

      // Muestra y oculta los tabs
      document.querySelector('#tabTabla').setAttribute('class', 'col-12 d-block')
      document.querySelector('#tabTarjetas').setAttribute('class', 'd-none')
    })

    // Selección vista tarjetas
    document.querySelector('.vistaTarjetas').addEventListener('click', (boton) => {
      console.log('vistaTarjetas')

      // Pinta el boton de verde
      boton.target.classList.add('btn-success')

      // Pinta el otro botón de gris y elimina el verde
      const botonTabla = document.querySelector('.vistaTabla')
      botonTabla.classList.remove('btn-success')
      botonTabla.classList.add('btn-secondary')

      // Muestra y oculta los tabs
      document.querySelector('#tabTabla').setAttribute('class', 'd-none')
      document.querySelector('#tabTarjetas').setAttribute('class', 'row')
    })

    // ####################################################################
    // *** FILTRO PARA BUSCADOR ***
    // ####################################################################

    // Capturamos el input de búsqueda
    const inputBusqueda = document.getElementById('inputBusqueda')

    // Agregamos un evento de escucha para el evento de entrada en el input de búsqueda
    inputBusqueda.addEventListener('input', () => {
      // Capturamos el texto de búsqueda del input, conviértelo a minúsculas y elimina espacios en blanco al principio y al final
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim()

      // Filtramos los proyectos que coinciden con el texto de búsqueda en cualquier campo
      const proyectosFiltrados = datos.filter(proyecto => {
        // Itera sobre las propiedades (campos) de cada proyecto
        for (const key in proyecto) {
          // Obtenemos el valor del campo actual
          const valorCampo = proyecto[key]
          // Verificamos si el valor del campo es una cadena y si contiene el texto de búsqueda
          if (typeof valorCampo === 'string' && valorCampo.toLowerCase().includes(textoBusqueda)) {
            // Si hay coincidencia, devuelve true para incluir el proyecto en la lista filtrada
            return true
          }
        }
        // Si no se encontró coincidencia en ningún campo, devuelve false para excluir el proyecto
        return false
      })
      // Volvemos a pintar los datos con los proyectos filtrados por el buscador
      pintaTabla(proyectosFiltrados)
      pintaTarjetas(proyectosFiltrados)
    })

    // ####################################################################
    // Borrar datos del input del buscador al hacer click en 'x'
    // ####################################################################

    document.querySelector('#borrarBuscador').addEventListener('click', () => {
      // Borramos contenido del buscador
      inputBusqueda.value = ''
      // Actualizamos array con todos los proyectos
      // const proyectosFiltrados = datos
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

    // ####################################################################
    // Vista 'Todos los proyectos' / 'Mis proyectos'
    // ####################################################################

    // Definimos que por defecto se muestran 'mis proyectos'
    let misProyectos = false

    // *** Detectamos si se cambia de proyectos a mis proyectos al hacer click en las pestañas ***
    document.querySelector('.nav-tabs').addEventListener('click', (event) => {
      // Si click en 'Mis proyectos' cambiamos pestaña activa
      if (event.target.classList.contains('fichaMisProyectos')) {
        document.querySelector('.fichaMisProyectos').classList.add('active')
        document.querySelector('.fichaProyectos').classList.remove('active')
        misProyectos = true
      } else {
        // Si click en 'Todos los proyectos' cambiamos pestaña activa
        document.querySelector('.fichaProyectos').classList.add('active')
        document.querySelector('.fichaMisProyectos').classList.remove('active')
        misProyectos = false
      }
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

    // ####################################################################
    // BOTONES DE EDICIÓN, BORRADO y VISUALIZACIÓN DE DETALLE DE PROYECTOS
    // ####################################################################

    // Detectamos clic sobre main (Usamos delegación de eventos porque la tabla y tarjetas se actualizan constantemente en el DOM)
    document.querySelector('main').addEventListener('click', (event) => {
      let id = ''
      // Si hemos pulsado sobre uno de los botones DE EDICIÓN O BORRADO
      if (event.target.classList.contains('botonAdmin')) {
        const boton = event.target
        // Capturamos el id de su dataset
        const id = boton.dataset.id
        if (boton.classList.contains('botonEditar')) {
          // Si se trata de editar
          console.log('Editar proyecto ' + id)

          // Cargamos la vista para editar proyecto pasandole como parámetro el id
          window.location = `#/proyectoEditar/${id}`
        } else if (boton.classList.contains('botonBorrar')) {
          // Si se trata de borrar
          alert('Borrar proyecto ' + id)

          // *** AQUÍ VA LA FUNCIÓN QUE BORRA DE LA BASE DE DATOS EL PROYECTO CORRESPONDIENTE AL ID ***
        }
      }
      // Visualizar detalle del proyecto si click sobre tr de vista tabla
      if (event.target.tagName === 'TD') {
        console.log('clic en td')
        id = event.target.parentNode.dataset.id
        window.location = `#/proyectoDetalle/${id}`
      }
      // Si hacemos clic sobre la imagen de tabla o de vista tarjetas
      if (event.target.classList.contains('verDetalle')) {
        id = event.target.dataset.id
        window.location = `#/proyectoDetalle/${id}`
      }
    })

    // ####################################################################
    // Mostrar/ocultar botón 'subir proyecto'
    // ####################################################################

    // Capturamos los datos del usuario logueado
    const usuario = ls.getUsuario()
    // Ocultamos el botón de subir proyecto si el rol es registrado
    if (usuario.rol === 'registrado') {
      document.querySelector('#botonSubirProyecto').classList.add('disabled')
    }
  }
}


```


