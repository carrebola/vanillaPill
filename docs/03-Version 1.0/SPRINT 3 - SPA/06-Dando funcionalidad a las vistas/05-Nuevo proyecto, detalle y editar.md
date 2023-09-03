---
title: Vista para Nuevo proyecto, ver detalle y editar
---

## Ver detalle del proyecto

Esta vista es bastante sencilla. 

En primer lugar necesitamos modificar el template para **asignar ids y clases **a los elementos (párrafos, imagen, etc) en los que debemos inyectar los datos procedentes del proyecto corresondiente.

```javascript title="proyectoNuevo.js"
export default {
  template: // html
  `
  <div class="container">
    <h1 class="mt-5">Detalle del proyecto</h1>
    <div class="d-flex justify-content-end">
      <button id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left">
        Volver
      </button>
    </div>
  
    <div class="row mt-2">
      <div class="col-12 col-md-4 mb-3">
        <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid">
      </div>
      <div class="col-12 col-md-8">
        <p>
          <p><strong>Nombre: </strong><span id="nombreJuego">TETRIS</span></p>
          <p><strong>Descripción: </strong><span id="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
          <p><strong>Estado: </strong><span id="estado">Estado</span></p>
          <p><strong>Fecha: </strong><span id="fecha">12/12/2023</span></p>
          <p><strong>Enlace: </strong><span id="enlace">http://www.enlaceapp.com</span></p>
          <p><strong>Repositorio: </strong><span id="repositorio">carrebola.github.com/123456</span></p>
        </p>
      </div>
    </div>
    <div class="container fixed-bottom d-flex justify-content-end" style="padding: 0px 0px 100px 0px">
      <button
        id="botonEditarDetalle"
        data-id=""
        class="btn btn-success rounded-circle fs-3 shadow bi bi-pencil router-link"
        style="width: 50px"
      >
      </button>
    </div>
  </div>

```

En el lado de la lógica vamos a hacer lo siguiente:
- Primero vamos a simular que hacemos una consulta a la bd con el id del proyecto correspondiente. Para ello tomaremos el array con todos los proyectos y lo filtraremos para el id en cuestión
  ```javascript
  // Simulamos la consulta a un proyecto por id filtrando de todos nuestros proyectos de prueba el que tiene el id que hemos recibido como parámetro
    const proyectoArray = proyectos.filter(p => p.id == id)
    const proyecto = proyectoArray[0]
  ```
- Ahora vamos a modificar la fecha para poder introducirla en nuestro input de tipo date. Piensa que nosotros tenemos un formato yy-mm-ddThh::mm::ss y necesitamos yy-mm-dd.
  ```javascript
  // Modificamos el formato de la fecha quedandonos solo con el yy-mm-dd
    const fecha = proyecto.created_at
    const fechaCorta = fecha.split('T')[0]
  ```
- Inyectamos los datos
  ```javascript
  // Inyectamos los datos en la vista
    document.querySelector('#imagenJuego').setAttribute('src', proyecto.imagen)
    document.querySelector('#nombreJuego').innerHTML = proyecto.nombre
    document.querySelector('#descripcion').innerHTML = proyecto.descripcion
    document.querySelector('#estado').innerHTML = proyecto.estado
    document.querySelector('#fecha').innerHTML = fechaCorta
    document.querySelector('#enlace').innerHTML = proyecto.enlace
    document.querySelector('#repositorio').innerHTML = proyecto.repositorio
  ```
  - Añadimos el id del proyecto al botón editar para que al pulsarlo podamos llamar la vista en cuestión y pasarle el id:
  ```javascript
  // Añadimos el id en data-id al botón editar para que al detectar el click podamos llamar a la vista de edición pasandole el id en cuestión
    document.querySelector('#botonEditarDetalle').setAttribute('data-id', proyecto.id)
  ```

  Y gestionamos los eventos de los botones: volver atrás y editar cargando las vista que corresponda con `window.location`

  ```javascript
  // Añadimos el id en data-id al botón editar para que al detectar el click podamos llamar a la vista de edición pasandole el id en cuestión
    document.querySelector('#botonEditarDetalle').setAttribute('data-id', proyecto.id)
    
    // Boton volver atras
    document.querySelector('#botonVolver').addEventListener('click', () => {
      // Carga la url anterior que encuentra en el historial
      window.history.back()
    })

    // Boton editar
    document.querySelector('#botonEditarDetalle').addEventListener('click', (e) => {
      const id = e.target.dataset.id
      window.location = `#/proyectoEditar/${id}`
    })
  ```
### Este sería el código completo


```javascript title="proyectoDetalle.js"
import { proyectos } from '../bd/datosPrueba'

export default {
  template: // html
  `
  <div class="container">
  <h1 class="mt-5">Detalle del proyecto</h1>
  <div class="d-flex justify-content-end">
    <bottom id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left">
      Volver</bottom>
  </div>
  
  <div class="row mt-2">
    <div class="col-12 col-md-4 mb-3">
      <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid">
    </div>
    <div class="col-12 col-md-8">
      <p>
        <p><strong>Nombre: </strong><span id="nombreJuego">TETRIS</span></p>
        <p><strong>Descripción: </strong><span id="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
        <p><strong>Estado: </strong><span id="estado">Estado</span></p>
        <p><strong>Fecha: </strong><span id="fecha">12/12/2023</span></p>
        <p><strong>Enlace: </strong><span id="enlace">http://www.enlaceapp.com</span></p>
        <p><strong>Repositorio: </strong><span id="repositorio">carrebola.github.com/123456</span></p>
      </p>
    </div>
  </div>
  <div
    class="container fixed-bottom d-flex justify-content-end"
    style="padding: 0px 0px 100px 0px"
  >
    <button
      id="botonEditarDetalle"
      data-id=""
      class="btn btn-success rounded-circle fs-3 shadow bi bi-pencil router-link"
      style="width: 50px"
    >
     
    </button>
  </div>
  
</div>
  `,
  script: (id) => {
    console.log('Vista proyectoDetalle cargada')
    console.log(proyectos, id)

    // Simulamos la consulta a un proyecto por id filtrando de todos nuestros proyectos de prueba el que tiene el id que hemos recibido como parámetro
    const proyectoArray = proyectos.filter(p => p.id == id)
    const proyecto = proyectoArray[0]

    // Modificamos el formato de la fecha quedandonos solo con el yy-mm-dd
    const fecha = proyecto.created_at
    const fechaCorta = fecha.split('T')[0]

    // Inyectamos los datos en la vista
    document.querySelector('#imagenJuego').setAttribute('src', proyecto.imagen)
    document.querySelector('#nombreJuego').innerHTML = proyecto.nombre
    document.querySelector('#descripcion').innerHTML = proyecto.descripcion
    document.querySelector('#estado').innerHTML = proyecto.estado
    document.querySelector('#fecha').innerHTML = fechaCorta
    document.querySelector('#enlace').innerHTML = proyecto.enlace
    document.querySelector('#repositorio').innerHTML = proyecto.repositorio

    // Añadimos el id en data-id al botón editar para que al detectar el click podamos llamar a la vista de edición pasandole el id en cuestión
    document.querySelector('#botonEditarDetalle').setAttribute('data-id', proyecto.id)
    
    // Boton volver atras
    document.querySelector('#botonVolver').addEventListener('click', () => {
      window.history.back()
    })

    // Boton editar
    document.querySelector('#botonEditarDetalle').addEventListener('click', (e) => {
      const id = e.target.dataset.id
      window.location = `#/proyectoEditar/${id}`
    })
  }
}

```

## Vista para nuevo proyecto

Esta es aún más simple. No hay nada de programación que no hayamos explicado ya con anterioridad.

Quizá como detalle diferente, podemos ver como en el template incluimos la ejecución de javascript de forma directa, utilizando ${}, para cargar la fecha con el formato apropiado:

```javascript {5}
<input 
  id="fecha" 
  type="date" 
  class="form-control" 
  value="${(new Date()).toISOString().split('T')[0]}" 
/>

```


### Aquí tenemos el código completo de la vista

```javascript	title="proyectoNuevoVista.js"
export default {
  template: // html
  `
  <div class="container">
  <h1 class="mt-5">Nuevo proyecto</h1>
  <div class="d-flex justify-content-end">
    <bottom id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left">
      Volver</bottom>
  </div>

  <div class="row mt-2">
    <div class="col-12 col-md-4 pt-2 mb-3">
      <img src="images/imagenVacia.png" alt="" class="img-fluid" />
      <label class="form-label mt-2" for="urlImagen"
          ><strong>URL imagen: </strong></label
        >
        <input
          id="urlImagen"
          type="text"
          class="form-control"
          value="http://enlaceImagen.com"
        />
    </div>
    <div class="col-12 col-md-8">
      <!-- Formulario nuevo proyecto -->
      <form id="formularioNuevoProyecto" action="" class="form" novalidate>
        <!-- Nombre proyecto -->
        <label class="form-label" for="nombreJuego"><strong>Nombre: </strong></label>
        <input
          required
          id="nombreJuego"
          type="text"
          value=""
          class="form-control"
          placeholder="Escribe aquí el nombre del juego"
        />

        <!-- Descripción -->
        <label class="form-label mt-2" for="descripcion"
          ><strong>Descripción: </strong></label
        >
        <textarea 
          id="descripcion" 
          class="form-control" 
          rows="4"
          placeholder="Descripción del juego"
        ></textarea
        >

        <!-- Estado -->
        <label class="form-label mt-2" for="estado"
          ><strong>Estado: </strong></label
        >
        <select required id="estado" class="form-control">
          <option value="estado">En desarrollo</option>
          <option value="otro estado">Finalizado</option>
        </select>

        <!-- Fecha -->
        <label class="form-label mt-2" for="fecha"
          ><strong>Fecha: </strong></label
        >
        <input 
          id="fecha" 
          type="date" 
          class="form-control" 
          value="${(new Date()).toISOString().split('T')[0]}" 
        />

        <!-- Enlace al proyecto -->
        <label class="form-label mt-2" for="enlace"
          ><strong>Enlace: </strong></label
        >
        <input
          id="enlace"
          type="url"
          class="form-control"
          value="http://enlace.com"
        />

        <!-- Repositorio -->
        <label class="form-label mt-2" for="repositorio"
          ><strong>Repositorio: </strong></label
        >
        <input
          id="repositorio"
          type="text"
          class="form-control"
          value="user.github.com/123456"
        />

        <!-- Submit -->
        <input
          type="submit"
          class="btn btn-success mt-3"
          value="Subir proyecto"
        />
      </form>
    </div>
  </div>
</div>
  `,
  script: () => {
    // Boton volver atras
    document.querySelector('#botonVolver').addEventListener('click', () => {
      window.history.back()
    })

    // Validación bootstrap
    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formularioNuevoPRoyecto')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
      // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      } else {
        enviaDatos()
      }
    })

    // Función para enviar datos a la base de datos
    function enviaDatos () {
      const proyectoEditado = {
        imagen: document.querySelector('#urlImagen').value,
        nombre: document.querySelector('#nombreJuego').value,
        descripcion: document.querySelector('#descripcion').value,
        fecha: document.querySelector('#fecha').value,
        estado: document.querySelector('#estado').value,
        enlace: document.querySelector('#enlace').value,
        repositorio: document.querySelector('#repositorio').value
      }
      alert('Enviando proyecto a la base de datos')
      console.log('Enviando a la base de datos ', proyectoEditado)
    }
  }
}
```

## Vista para editar proyecto

Esta vista es **una mezcla entre la vista detalle y la vista para nuevo proyecto**. 

Lo que hacemos cuando llamamos a esta vista, es pasarle el **id**, de manera que cargaremos todos los datos, como en la vista detalle, pero esta vez utilizando un formulario (como en la vista nuevo proyecto).

### Este sería el código completo

```javascript title="proyectoEditarVista"
import { proyectos } from '../bd/datosPrueba'

export default {
  template: // html
  `
  <div class="container">
  <h1 class="mt-5">Edición de proyecto</h1>
  <div class="d-flex justify-content-end">
    <bottom id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left router-link">
      Volver</bottom
    >
  </div>
  <form novalidate id="formularioEditarProyecto" action="" class="form">
    <div class="row mt-2">
      <div class="col-12 col-md-4 pt-2 mb-3">
        <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid" />
        <label class="form-label mt-2" for="urlImagen"
          ><strong>URL imagen: </strong></label
        >
        <input
          id="urlImagen"
          type="text"
          class="form-control"
          value="http://enlaceImagen.com"
        />
        <div class="invalid-feedback">
          No es una url correcta
        </div>
      </div>
      <div class="col-12 col-md-8">
        <!-- Formulario nuevo proyecto -->

        <!-- Nombre proyecto -->
        <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
        <input
          required
          id="nombreJuego"
          type="text"
          value="Nombre Autor"
          class="form-control"
        />
        <div class="invalid-feedback">
          Debe tener un nombre de proyecto
        </div>

        <!-- Descripción -->
        <label class="form-label mt-2" for="descripcion"
          ><strong>Descripción: </strong></label
        >
        <textarea id="descripcion" class="form-control" rows="4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
        >

        <!-- Estado -->
        <label class="form-label mt-2" for="estado"
          ><strong>Estado: </strong></label
        >
        <select required id="estado" class="form-control">
          <option value="Cerrado">Cerrado</option>  
          <option value="En desarrollo">En desarrollo</option>
        </select>
        <div class="invalid-feedback">
          Debes definir un estado
        </div>

        <!-- Fecha -->
        <label class="form-label mt-2" for="fecha"
          ><strong>Fecha: </strong></label
        >
        <input id="fecha" type="date" class="form-control"  />
        <div class="invalid-feedback">
          El formato no es correcto
        </div>

        <!-- Enlace al proyecto -->
        <label class="form-label mt-2" for="enlace"
          ><strong>Enlace: </strong></label
        >
        <input
          id="enlace"
          type="url"
          class="form-control"
          value="http://enlace.com"
        />
        <div class="invalid-feedback">
          No es una url correcta
        </div>

        <!-- Repositorio -->
        <label class="form-label mt-2" for="repositorio"
          ><strong>Repositorio: </strong></label
        >
        <input
          id="repositorio"
          type="text"
          class="form-control"
          value="user.github.com/123456"
        />

        <!-- Submit -->
        <input
          id="subirProyecto"
          type="submit"
          class="btn btn-success mt-3"
          value="Actualizar proyecto"
        />
      </div>
    </div>
  </form>
</div>
  `,
  script: (id) => {
    // Simulamos la consulta a un proyecto por id
    const proyectoArray = proyectos.filter(p => p.id == id)
    const proyecto = proyectoArray[0]

    // Transformamos la fecha en un formato yy-mm-dd
    const fecha = proyecto.created_at
    const fechaCorta = fecha.split('T')[0]

    // Insertamos los datos en el formulario
    document.querySelector('#imagenJuego').setAttribute('src', proyecto.imagen)
    document.querySelector('#urlImagen').value = proyecto.imagen
    document.querySelector('#nombreJuego').value = proyecto.nombre
    document.querySelector('#descripcion').value = proyecto.descripcion
    document.querySelector('#estado').value = proyecto.estado
    document.querySelector('#fecha').value = fechaCorta
    console.log(fechaCorta)
    document.querySelector('#enlace').value = proyecto.enlace
    document.querySelector('#repositorio').value = proyecto.repositorio

    // Boton volver atras
    document.querySelector('#botonVolver').addEventListener('click', () => {
      window.history.back()
    })

    // Actualización de la imagen a partir de la urlImagen
    // Capturamos input
    const inputUrl = document.querySelector('#urlImagen')
    // Detectamos cambios en su value
    inputUrl.addEventListener('input', () => {
      const imagen = document.querySelector('#imagenJuego')
      // Actualizamos el atributo src y por lo tanto la imagen
      imagen.setAttribute('src', inputUrl.value)
    })

    // Validación BOOTSTRAP
    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formularioEditarProyecto')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      } else {
        //* ** ENVIAMOS DATOS A LA BASE DE DATOS */
        enviaDatos()
      }
    })

    // Función para enviar datos a la base de datos
    function enviaDatos () {
      const proyectoEditado = {
        imagen: document.querySelector('#urlImagen').value,
        nombre: document.querySelector('#nombreJuego').value,
        descripcion: document.querySelector('#descripcion').value,
        estado: document.querySelector('#estado').value,
        enlace: document.querySelector('#enlace').value,
        repositorio: document.querySelector('#repositorio').value
      }
      alert(`Enviando a la base de datos el objeto con id = ${proyecto.id}`)
      console.log(`Enviando a la base de datos el objeto con id = ${proyecto.id}`, proyectoEditado)
    }
  }
}

```

## ¿Hemos terminado?
La única vista que nos queda por actualizar sería la de registro, pero no tiene mucho sentido ya que aún no hemos conectado nuestro frond-end con el back-end.

:::danger Commit y pullrequest ¡pero ya!
Para cerrar este sprint, vamos a subir todos los cambios a nuestro repositorio y luego ya podemos hacer merge de la rama 'logica-para-vistas' a la rama 'main' mediante un PullRequest.

Después, nos situamos en la rama 'main' y la actualizamos el repositorio local.

Y finalmente, hacemos `npm run build` para actualizar nuestra carpeta `dist`con el resultado del proyecto, y `npm run deploy` para subir a nuestro servidor de producción de prueba.
:::

Si todo está ok, en el navegador deberíamos ver nuestra app funcionando correctamente...


Y aquí acabamos este pedazo de sprint en el que nos hemos tenido que emplear a fondo con javascript.

En el próximo sprint nos va a tocar **reunirnos con nuestro yo-backend** y ver en que punto estamos para, juntos, programar la lógica correspondiente a la **capa de abstracción** en la que tendremos las **clases que nos permitirán conectarnos con la base de datos de supabase**.

¡Oh yeah...! 😎