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
### Generando la tabla proyectos desde script de la vista

Vamos ahora a la vista `proyectos.js` inyectamos en el `<tbody id="tbodyProyectos"></tbody>` de la tabla el resultado de recorrer el array anterior generando un `<tr></tr>` por cada fila de datos:

```javascript title="script de proyectos.js"
script: () => {
    console.log('Vista proyectos cargada')

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
      </tr>
            
      `
    })

    // inyectamos el resultado en tbody
    document.querySelector('#tbodyProyectos').innerHTML = tbodyProyectos
  }
  ```
¡Mira que chulo!

![tabla proyectos](/imagenes/v1/spa/tabla.png)

### Generando la vista de tarjetas
Para las tarjetas haremos lo mismo:

  ```javascript 
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
```

Y quedará así... ¡¡¡Esto va cogiendo forma!!! 😄

![tabla proyectos](/imagenes/v1/spa/tarjetas.png)

### Botones para nuevo proyecto y modificar vista

Para el botón de nuevo proyecto es muy fácil. Sustituye el botón por una etiqueta 'a' que apunte a la vista `proyectoNuevo.js`

```html
<a href="#/proyectoNuevo" class="btn btn-primary w-100">Subir proyecto</a>
```

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

VAms a programar un código que cree un buscador que se encargará de verificar cada campo de cada proyecto en el array en busca del texto ingresado en el input de búsqueda. Los proyectos que coinciden con el texto de búsqueda en al menos uno de sus campos se filtran y se almacenan en un nuevo array.

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



