---
title: Vista proyectos
---
Esta vista nos muestra una tabla con los datos de los proyectos que han creado los diferentes desarrolladores. 

Por el momento, solo se muestra la tabla tal y como la hemos creado en el prototipo html. Vamos ahora a generarla a partir de un array de datos que emulen una consulta a la base de datos.

Para eso necesitamos conocer el nombre de los campos de las tablas, por lo que vamos a consultar de nuevo el diagrama de clases que creo nuestro yo del backend. El resultado podría ser algo así:

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
### Simulando la consulta de los proyectos a la base de datos 
Y el array completo con datos inventados (gracias chatGPT 😀) usando los user_id de nuestra base de datos quedaría así:

```javascript
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
### Generando los datos desde script de la vista

Vamos ahora a la vista `proyectos.js`. Necesitamos crear un par de funciones, pintaTabla() y pintaTarjetas(). Estas funciones se encargarán de inyectar en la vista el resultado de recorrer el array anterior generando una fila `<tr></tr>` o `card` por cada proyecto. 

De momento vamos a hacer que, en ambas vistas, se muestren los botones de editar y borrar proyecto. Estos enlaces tendrán una clase (botonEditar y botonBorrar) para poder detectar su pulsación, y además, utilizando dataset, le añadiremos el id del proyecto. De esta manera, cuando hagamos clic en el botón podremos extraer el id y llamar a la función de edición o borrardo de ese proyecto.

Más adelante, haremos que se estos botones se muestren u oculten, dependiendo de si el rol del usuario logueado es desarrollador o registrado, y de si el proyecto es de su creación:

Esta sería la función pintaTabla()
#### Función pintaTabla()
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
              src=${proyecto.imagen || '/assets/images/imagenVacia.png'} 
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

#### Función pintaTarjetas()
Para las tarjetas haremos lo mismo:

```javascript 
// Función para pintar tarjetas
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
            background-image: url(${proyecto.imagen || '/assets/images/imagenVacia.png'});
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
  // inyectamos el resultado en tbody
  document.querySelector('#tabTarjetas').innerHTML = tarjetasProyectos
}

pintaTarjetas(proyectos)  
```

Y quedará así... ¡¡¡Esto va cogiendo forma!!! 😄

![tabla proyectos](/imagenes/v1/spa/tarjetas.png)

#### Botón para nuevo proyecto

Para el botón de nuevo proyecto es muy fácil. Sustituye el botón por una etiqueta 'a' que apunte a la vista `proyectoNuevo.js`

```html
<a href="#/proyectoNuevo" class="btn btn-primary w-100">Subir proyecto</a>
```
#### Botones para permutar entre vista tabla y vista tarjetas
Para los botones de las vistas tabla/tarjetas añadimos una clase para identificarlos

:::note Nota
He eliminado la etiqueta `<i></i>` insertando las clases del icono en el propio botón para facilitar la detección y manipulación del mismo
:::

```html
<button class="btn btn-secondary me-2 bi bi-grid-3x3-gap vistaTabla">
</button>
<button class="btn btn-secondary me-2 bi bi-list vistaTarjetas">
</button>
```
Ahora creamos la lógica para detectar su pulsación

```javascript
// Cambio entre vista de tablas y vista de tarjetas
    document.querySelector('.vistaTabla').addEventListener('click', (boton) => {
      console.log('vistaTabla');
    })

    document.querySelector('.vistaTarjetas').addEventListener('click', (boton) => {
      console.log('vistaTarjetas');
    })
```
Y cambiamos la visualización de cada uno en función de que botón hemos pulsado, modificando el aspecto de los botones mediante la suma o extracción de clases bootstrap

```javascript title=""
// Lineas originales del html para los tabs: 
      // <div id="tabTabla" class="col-12 d-none d-xl-block" style="overflow-x: auto">
      // <div id="tabTarjetas" class="d-xl-none row">
    document.querySelector('.vistaTabla').addEventListener('click', (boton) => {
      console.log('vistaTabla')
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

Vamos a programar un código que cree un buscador que se encargará de verificar cada campo de cada proyecto en el array en busca del texto ingresado en el input de búsqueda. Los proyectos que coinciden con el texto de búsqueda en al menos uno de sus campos se filtran y se almacenan en un nuevo array.

```javascript
// Filtro para buscador

// Obtén una referencia al input de búsqueda
const inputBusqueda = document.getElementById('inputBusqueda')

// Agrega un evento de escucha para el evento de entrada en el input de búsqueda
inputBusqueda.addEventListener('input', () => {
  // Obtén el texto de búsqueda del input, conviértelo a minúsculas y elimina espacios en blanco al principio y al final
  const textoBusqueda = inputBusqueda.value.toLowerCase().trim()

  // Filtra los proyectos que coinciden con el texto de búsqueda en cualquier campo
  const proyectosFiltrados = proyectos.filter(proyecto => {
    // Itera sobre las propiedades (campos) de cada proyecto
    for (const key in proyecto) {
      // Obtén el valor del campo actual
      const valorCampo = proyecto[key]

      // Verifica si el valor del campo es una cadena y si contiene el texto de búsqueda
      if (typeof valorCampo === 'string' && valorCampo.toLowerCase().includes(textoBusqueda)) {
        // Si hay coincidencia, devuelve true para incluir el proyecto en la lista filtrada
        return true
      }
    }
    // Si no se encontró coincidencia en ningún campo, devuelve false para excluir el proyecto
    return false
  })

  console.log(proyectosFiltrados)
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

Observa como va mostrando el array con tantos elementos como coincidencias encuentra:

![filtro](/imagenes/v1/spa/filtro.png)

#### Gestión de las pestañas 'Todos los proyectos' / 'Mis proyectos'

Para gestionar que pestaña debe abrirse necesitamos una variable global `misProyectos` que por defecto será false, es decir, la vista por defecto será de 'Todos los proyectos'.

El código para gestionar la visualización de las pestañas podría ser algo así: 

```javascript

```

Ahora vamos a insertar, dentro de las funciones que pintan la tabla y las tarjetas, un filtro que, si tenemos la variable 'misProyectos' como true, filtre todos los proyectos por su user_id. Es decir, que cree un nuevo array donde solo se muestren los proyectos donde el user_id del proyecto coincide con el user_id del usuario logueado.

```javascript

```

Para acabar solo nos falta detectar cuando pulsamos los botones de editar y borrar para extraer el id del proyecto que llevan grabado en el dataset y actuar en consecuencia, abriendo la vista de editar (a la que enviaremos el id como parámetro) o borrando el proyecto de la base de datos (esto, de momento, lo simularemos con una console.log)

```javascript

```

Este sería el código completo:

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
        <a id="botonSubirProyecto" href="#/proyectoNuevo" class="btn btn-primary w-100">Subir proyecto</a>
      </div>
      <div class="d-flex col-12 col-sm-8 mb-3">
        <!-- Botones para alternar entre vista de tabla o de tarjetas -->
        <button class="btn btn-secondary me-2 bi bi-grid-3x3-gap vistaTabla">
        </button>
        <button class="btn btn-secondary me-2 bi bi-list vistaTarjetas">
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
      <p>No tienes proyectos</p>
    </div>
  </div>
</div>
  `,
  script: () => {
    console.log('Vista proyectos cargada')
    // Capturamos los datos del usuario logueado
    const usuario = ls.getUsuario()
    // Ocultamos el botón de subir proyecto si el rol es registrado
    if (usuario.rol === 'registrado') {
      document.querySelector('#botonSubirProyecto').classList.add('disabled')
    }

    // **** AQUI DEBEMOS CAPTURAR LOS PROYECTOS DE LA BASE DE DATOS ****

    // Capturamos proyectos y guardamos en variable para poder ser filtrada
    const datos = proyectos

    // Definimos que por defecto se muestran 'mis proyectos'
    let misProyectos = false
    // *** Detectamos si se cambia de proyectos a mis proyectos al hacer click en las pestañas ***
    document.querySelector('.nav-tabs').addEventListener('click', (event) => {
      if (event.target.classList.contains('fichaMisProyectos')) {
        // Si click en mis proyectos cambiamos pestaña activa
        document.querySelector('.fichaMisProyectos').classList.add('active')
        document.querySelector('.fichaProyectos').classList.remove('active')
        misProyectos = true
      } else {
        // Si click en todos los proyectos cambiamos pestaña activa
        document.querySelector('.fichaProyectos').classList.add('active')
        document.querySelector('.fichaMisProyectos').classList.remove('active')
        misProyectos = false
      }
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

    // *** FUNCIÓN PARA PINTAR TABLA A PARTIR DE ARRAY datos ***
    const pintaTabla = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
        console.log(proyectos)
      } else {
        // proyectosFiltrados = datos
      }

      let tbodyProyectos = ''
      console.log(misProyectos)
      // Para cada proyecto del array 'proyectos'
      proyectosFiltrados.forEach(proyecto => {
        // Generamos botones dependiendo de si el proyecto ha sido creado por el usuario logueado
        let botones = ''
        if (usuario.user_id === proyecto.user_id) {
          botones = `
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
        <tr>
          <td>
            <div class="containerImagen">
              <img 
                width="200px" 
                src=${proyecto.imagen || '/assets/images/imagenVacia.png'} 
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

    // Función para pintar tarjetas
    const pintaTarjetas = (proyectosFiltrados) => {
      console.log(misProyectos)

      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
        console.log(proyectos)
      } else {
        // proyectosFiltrados = datos
      }
      let tarjetasProyectos = ''
      // Para cada proyecto del array 'proyectosFiltrados'
      proyectosFiltrados.forEach(proyecto => {
        // Generamos botones dependiendo de si el proyecto ha sido creado por el usuario logueado
        let botones = ''
        if (usuario.user_id === proyecto.user_id) {
          botones = `
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
                class="col-4"
                style="
                  background-image: url(${proyecto.imagen || '/assets/images/imagenVacia.png'});
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

    // *** SELECCIÓN DE VISTA EN FORMATO TABLA O TARJETAS ***
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

    // *** FILTRO PARA BUSCADOR ***
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
    // Borrar datos del input del buscador
    document.querySelector('#borrarBuscador').addEventListener('click', () => {
      // Borramos contenido del buscador
      inputBusqueda.value = ''
      // Actualizamos array con todos los proyectos
      // const proyectosFiltrados = datos
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

    // *** BOTONES DE EDICIÓN Y BORRADO DE PROYECTOS ***
    // Detectamos clic sobre main (Usamos delegación de eventos porque la tabla y tarjetas se actualizan constantemente en el DOM)
    document.querySelector('main').addEventListener('click', (event) => {
      // Si hemos pulsado sobre uno de los botones
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
          console.log('Borrar proyecto ' + id)

          // *** AQUÍ VA LA FUNCIÓN QUE BORRA DE LA BASE DE DATOS EL PROYECTO CORRESPONDIENTE AL ID ***
        }
      }
    })
  }
}

```


