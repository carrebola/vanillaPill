---
title: Vista admin
---

Para la vista admin nos vamos a basar en la vista de proyectos ya que tiene una estructura muy parecida... Casi te diría que copiases proyectos.js y lo pegases en admin.js, eliminando lo que no no necesistas y modificando el resto.

De todas formas vamos a escribir el código paso a paso:

En primer lugar vamos a importar nuestra base de datos emulada y nuestra libreria ls para el acceso al localstorage:

```javascript title="adminVista.js"
import { proyectos, perfiles } from '../bd/datosPrueba'
import { ls } from '../componentes/funciones'
```

## Vamos con la inicialización y gestión de los datos.

- Primero vamos a capturar los datos de la base de datos que hemos emulado y crearemos una variable `selectUsuarios` que inicializamos a true para definir que, por defecto, vamos a mostrar la pestaña de usuarios.
- Luego vamos a detectar cuando pulsamos en las diferentes pestañas para mostrar el tab de proyectos o el de usuarios. También modificaremos el aspecto de las pestañas:

```javascript title="adminVista.js"
// Capturamos los datos del usuario logueado
const usuario = ls.getUsuario()

// **** AQUI DEBEMOS CAPTURAR LOS PROYECTOS DE LA BASE DE DATOS ****

// Capturamos proyectos y guardamos en variable para poder ser filtrada
const datosProyectos = proyectos
const datosUsuarios = perfiles

// Definimos que por defecto se muestran 'proyectos'
let selectUsuarios = true
// *** Detectamos si se cambia de proyectos a usuarios al hacer click en las pestañas ***
document.querySelector('.nav-tabs').addEventListener('click', (event) => {
  if (event.target.classList.contains('fichaUsuarios')) {
    // Si click en Usuarios cambiamos pestaña activa
    document.querySelector('.fichaUsuarios').classList.add('active')
    document.querySelector('.fichaProyectos').classList.remove('active')
    selectUsuarios = true
    console.log('tabusuarios')
    document.querySelector('#tabUsuarios').classList.add('d-block')
    document.querySelector('#tabUsuarios').classList.remove('d-none')
    document.querySelector('#tabProyectos').classList.add('d-none')
  } else {
    // Si click en Proyectos cambiamos pestaña activa
    document.querySelector('.fichaProyectos').classList.add('active')
    document.querySelector('.fichaUsuarios').classList.remove('active')
    selectUsuarios = false
    console.log('tabProyectos')
    document.querySelector('#tabProyectos').classList.add('d-block')
    document.querySelector('#tabProyectos').classList.remove('d-none')
    document.querySelector('#tabUsuarios').classList.add('d-none')
  }
  // Actualizamos los datos en el panel central
  pintaProyectos(datosProyectos)
  pintaUsuarios(datosUsuarios)
})
```

## Funciones para Pintar Datos en Tablas
Esta función (pintaProyectos) se encarga de generar y mostrar la tabla de proyectos en la interfaz de usuario, igual que hacíamos en proyectos.js

- La función recibe un array de proyectos filtrados como argumento (proyectosFiltrados).
- Se construye el HTML de la tabla de proyectos mediante concatenación de cadenas.
- Para cada proyecto en proyectosFiltrados, se genera una fila de datos en la tabla.
- Finalmente, el HTML resultante se inyecta en el elemento con el id tabProyectos.

```javascript title="adminVista.js"
// *** FUNCIÓN PARA PINTAR TABLA PROYECTOS A PARTIR DE ARRAY datos ***
const pintaProyectos = (proyectosFiltrados) => {
  let tablaProyectos = // html
  `
  <!-- Tabla de proyectos -->
  <table
    class="table table-hover align-middle mt-3"
    style="min-width: 1000px"
  >
    <thead>
      <tr>
        <!-- Encabezados de la tabla -->
      </tr>
    </thead>
    <tbody>
  `
  // Para cada proyecto en el array 'proyectosFiltrados'
  proyectosFiltrados.forEach(proyecto => {
    // Genera filas de datos de proyecto en la tabla
  })
  tablaProyectos += // html
  `
    </tbody>
  </table>
  `
  // Inyecta el resultado en el contenedor con el id 'tabProyectos'
  document.querySelector('#tabProyectos').innerHTML = tablaProyectos
}
```

## Filtro de Búsqueda

Este bloque de código es identico al de proyectos.js:

```javascript title="adminVista.js"
// *** FILTRO PARA BUSCADOR ***
// Capturamos el input de búsqueda
const inputBusqueda = document.getElementById('inputBusqueda')
// Agregamos un evento de escucha para el evento de entrada en el input de búsqueda
inputBusqueda.addEventListener('input', () => {
  // Capturamos el texto de búsqueda del input, conviértelo a minúsculas y elimina espacios en blanco al principio y al final
  const textoBusqueda = inputBusqueda.value.toLowerCase().trim()
  // Filtramos los proyectos que coinciden con el texto de búsqueda en cualquier campo
  let informacion = []
  if (selectUsuarios) {
    informacion = datosUsuarios
  } else {
    informacion = datosProyectos
  }
  const informacionFiltrada = informacion.filter(proyecto => {
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
  // Volvemos a pintar los datos con los proyectos o usuarios filtrados por el buscador
  if (selectUsuarios) {
    pintaUsuarios(informacionFiltrada)
  } else {
    pintaProyectos(informacionFiltrada)
  }
})
// Borrar datos del input del buscador
document.querySelector('#borrarBuscador').addEventListener('click', () => {
  // Borramos contenido del buscador
  document.getElementById('inputBusqueda').value = ''
  // Actualizamos array con todos los proyectos
  // const proyectosFiltrados = datos
  // Actualizamos los datos en el panel central
  pintaProyectos(datosProyectos)
  pintaUsuarios(datosUsuarios)
})
```



## Funciones para Borrar usuario y Enviar datos modificados

VAmos a programar la lógica para el envío de datos si se ha hecho alguna modificación y la eliminación de usuarios.
- Primero vamos a detectar cuando alguien escribe en uno de los campos de la tabla para mostrar información de validación. Para ello vamos a agregamos un evento de escucha al formulario ('**change**') para comprobar si se ha validado correctamente. Si no, se muestra un mensaje de error.
- La función enviaDatos se utiliza para recopilar datos de un formulario correspondiente a la edición de usuarios y simular el envío a una base de datos (a través de alertas y registros en la consola).
- La función borrarUsuario se utiliza para simular la eliminación de un usuario con un mensaje de alerta.

```javascript title="adminVista.js"
// *** VALIDACION DE FORMULARIOS CON BOOTSTRAP ***
formulario.addEventListener('change', (e) => {
  // Comprobamos si el formulario no valida
  if (!formulario.checkValidity()) {
    console.log('No valida')
    // Y añadimos la clase 'was-validate' para que se muestren los mensajes
    formulario.classList.add('was-validated')
  }
})

// Función para enviar datos a la base de datos
function enviaDatos (id) {
  // capturamos los datos del tr correspondiente al botón pulsado
  const proyectoEditado = {
    imagen: document.querySelector('#urlImagen_' + id).value,
    nombre: document.querySelector('#nombreUsuario_' + id).value,
    apellidos: document.querySelector('#apellidosUsuario_' + id).value,
    estado: document.querySelector('#estado_' + id).value,
    email: document.querySelector('#email_' + id).value
  }
  alert(`Enviando a la base de datos el objeto con id = ${usuario.user_id}`)
  console.log(`Enviando a la base de datos el objeto con id = ${usuario.user_id}`, proyectoEditado)
}
// Función para borrar registro de la base de datos
function borrarUsuario (id) {
  alert('Borrando usuario ' + id)
}
```

## Gestión de Eventos para la tabla proyectos

Vamos con los eventos de esta vista de proyectos. 

Utilizamos de nuevo la técnica de **delegación de eventos** (ya que estos datos se regeneran constantemente) para detectar clics en el elemento principal ('main') en lugar de asignar eventos a cada botón individualmente.

Cuando se hace clic en un botón con la clase '**botonAdmin**', se captura el botón y se **obtiene su ID desde el dataset.**

- Si el botón también tiene la clase '**botonEditar**', se asume que se está editando un proyecto y se realiza una acción (como redirigir a la edición del proyecto).
- Si el botón tiene la clase '**botonBorrar**', se asume que se está borrando un proyecto, aunque la acción real no está implementada en este código.

```javascript title="adminVista.js"
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

      // Cargamos la vista para editar proyecto pasando como parámetro el id
      window.location = `#/proyectoEditar/${id}`
    }
    if (boton.classList.contains('botonBorrar')) {
      // Si se trata de borrar
      console.log('Borrar proyecto ' + id)

      // *** AQUÍ VA LA FUNCIÓN QUE BORRA DE LA BASE DE DATOS EL PROYECTO CORRESPONDIENTE AL ID ***
    }
  }
})
```
## Gestión de Eventos para la tabla usuarios

Para gestionar los eventos en esta tabla usaremos una vez más la delegación de eventos, esta vez sobre el formulario que envuelve la tabla.

- Si hacemos **click en 'Actualizar'**: En primer lugar vamos adaptar la lógica para la **validación de los datos** del formulario con bootstrap para mostrar mensajes si tratamos de enviar las modificaciones haciendo click sobre el botón 'Actualizar'
- Si hacemos **click en eliminar** (botón de la basura), capturaremos el botón en cuestión y, mediante ` const tr = e.target.parentNode.parentNode` capturaremos el `<tr></tr>` que corresponde al usuario en cuestión. De su dataset obtendremos el id de usuario para poder llamar a la función que borra el usuario. (Nosotros no actuaremos todavía sobre la base de datos pero si que vamos a hacer **desaparecer la fila** con la clase '**d-none**')
- Si hacemos **click en 'Editar la imagen'**, cargaremos un **componente nuevo** (que tenemos que programar aún), muy similar al de editar usuario, pero que permitirá cambiar a la vez que visualizamos, la imagen del perfil de ese usuario. A este componente le pasaremos, en su método script() los parámetros necesarios para que el componente pueda cargar la información y sepa a que usuario corresponde `editarImagenPerfil.script(urlAvatar, urlInputAvatar, id)`

```javascript title="adminVista.js"
// *************** PARA EL TAB DE USUARIOS ********

    // Capturamos el formulario para edición de usuarios
    const formulario = document.querySelector('#formAdminUsuarios')
    // Gestión de click sobre botones dentro del formulario
    formulario.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()

      // Si hacemos click sobre el botonActualizar
      if (e.target.classList.contains('botonActualizar') && formulario.checkValidity()) {
        const id = e.target.dataset.id
        enviaDatos(id)
      } else {
        formulario.classList.add('was-validated')
      }

      // Si hacemos click sobre Borrar registro
      if (e.target.classList.contains('botonEliminar')) {
        const tr = e.target.parentNode.parentNode
        // ocultar tr
        tr.classList.add('d-none')
        const id = e.target.dataset.id
        borrarUsuario(id)
      }

      // Si hacemos click sobre Editar imagen avatar
      if (e.target.classList.contains('botonEditarImagen')) {
        // Capturamos datos para enviar al modal
        const urlAvatar = e.target.dataset.urlavatar
        const urlInputAvatar = e.target.dataset.urlinputavatar
        const id = e.target.dataset.id
        // Abrimos ventana de edición de perfil (del componente editarImagenPerfil)
        editarImagenPerfil.script(urlAvatar, urlInputAvatar, id)
      }
    })
```
## Componente editarImagenPerfil

Y este sería el componente para editar la imagen del perfil:

```javascript title="editarImagenPerfil.js"
import adminVista from '../vistas/adminVista'
export const editarImagenPerfil = {
  template: // html
  `
  <!-- Ventana modaledición perfil -->
  <div
    class="modal fade"
    id="modalEditarImagenPerfil"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <!-- Formulario de edición de perfil -->
    <form novalidate action="">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Edición de perfil
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form border shadow-sm p-3">
              <div class="m-1" style="max-width: 400px">
                <div class="imgPerfil border shadow-sm p-3 mb-3">
                  <div
                    id="imagenUsuario"
                    class="imagen mx-auto mb-1 rounded-circle"
                    style="
                      background-image: url(.images/avatar.svg);
                      width: 200px;
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>

                  <!-- Imagen de perfil -->
                  <label for="imagen" class="form-label mt-3">URL imagen:</label>
                  <input
                    id="urlImagenUsuario"
                    type="url"
                    class="form-control"
                    value="http://imagenavatar.png"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button 
              id="botonActualizarImagen"
              type="button" 
              class="btn btn-primary"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,
  script: (urlAvatar, urlInputAvatar, user_id) => {
    console.log('modal editar imagen perfil cargado:', urlAvatar)
    document.querySelector('#urlImagenUsuario').value = urlAvatar
    // Capturamos la url del input y actualizamos la imagen
    const imagenUsuario = document.querySelector('#imagenUsuario')
    imagenUsuario.style.backgroundImage = `url(${urlAvatar})`

    // modificación de imagen al cambiar input
    document.querySelector('#urlImagenUsuario').addEventListener('input', () => {
      urlAvatar = document.querySelector('#urlImagenUsuario').value
      imagenUsuario.style.backgroundImage = `url(${urlAvatar})`
    })

    // Boton enviar
    document.querySelector('#botonActualizarImagen').addEventListener('click', () => {
      document.querySelector(`#${urlInputAvatar}`).value = urlAvatar
      
      // ***** AQUÍ HAY QUE ACTUALIZAR LA BASE DE DATOS CON LA IMAGEN
      console.log('Actualizando base de datos: '+user_id);
      adminVista.script()
    })
  }
}
```

Nuestro componente para edición de imagenes tendría esta pinta:

![Modal imagen perfil](/imagenes/v1/spa/modalimagenperfil.png)

:::danger Commit
Y ya lo tenemos! Si te gustó no te olvides darle al like! Digo... hacer el commit correspondiente
:::




