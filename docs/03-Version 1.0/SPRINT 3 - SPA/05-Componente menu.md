---
title: Subcomponentes de header (Menús y editar perfil)
---

## Versión 2.0 de header

Para mejorar nuestro header vamos a dividir el componente header.js  en tres componentes, el componente padre: **header.js** que contendrá el html que no cambia nunca, y tres subcomponentes más: **menuSuperior.js**, **menuEspecifico** y **menuUsuario.js** que inyectaremos dentro del componente padre header.

Estos componentes contendrán el código correspondiente a los menús, que será diferente, dependiendo del **rol del usuario** que esté logueado.

También vamos a añadir la lógica necesaria para detectar si hay una sesión abierta (almacenada en el localStorage) y capturar los datos del usuario (su perfil). Dependiendo del rol del usuario, cargaremos el menú correspondiente.

Pero antes de ponernos con los menús vamos a crear el código necesario para trabajar con el localStorage.

## Local Storage
El localStorage es una herramienta útil para almacenar pequeñas cantidades de datos en el navegador del usuario para su posterior recuperación.

Nosotros lo usaremos para gestionar la información 'no crítica' que se muestra en el navegador, como por ejemplo, las **opciones de los menús** (aunque estas no funcionarán si la sesión no está abierta en el lado del servidor) o el nombre del usuario.

:::info LocalStorage

**LocalStorage** es una API proporcionada por los navegadores web modernos que permite a las aplicaciones web **almacenar datos en forma de pares clave-valor** en el **navegador** del usuario. 

Es una forma de **almacenamiento persistente en el lado del cliente**, lo que significa que los datos almacenados en localStorage persisten incluso después de que el usuario cierre la ventana o pestaña del navegador.

<details>
<summary>Algunas características clave del localStorage son:
</summary>

**- Persistencia**: Los datos almacenados en localStorage permanecen disponibles incluso después de cerrar y volver a abrir el navegador. Esto los hace adecuados para almacenar preferencias de usuario, datos de sesión, configuraciones y otros tipos de información que deben conservarse entre sesiones.

**- Capacidad y límites**: localStorage tiene una capacidad de almacenamiento más grande en comparación con las cookies, que son otro método de almacenamiento en el lado del cliente. Sin embargo, hay un límite de almacenamiento que varía según el navegador, generalmente alrededor de varios megabytes.

**- Acceso desde JavaScript**: Los datos almacenados en localStorage son accesibles y modificables a través de JavaScript en el contexto de la página web en la que se establecieron. Esto permite que las aplicaciones web almacenen y recuperen información de manera programática.

**- No se envía al servidor**: A diferencia de las cookies, que se envían al servidor con cada solicitud HTTP, los datos en localStorage no se envían automáticamente al servidor. Esto puede ser útil para almacenar información sensible o privada en el lado del cliente.

Sin embargo, hay algunas consideraciones importantes al utilizar localStorage:

**- Seguridad**: Debido a que los datos almacenados en localStorage son accesibles desde el lado del cliente (JavaScript), existe el riesgo de que los datos sensibles sean expuestos o manipulados si no se implementan medidas de seguridad adecuadas.

**- Capacidad limitada**: Aunque la capacidad de almacenamiento en localStorage es más grande que la de las cookies, aún está limitada. Por lo tanto, no es adecuado para almacenar grandes cantidades de datos.

No apto para datos críticos: localStorage no es una solución adecuada para almacenar datos críticos o confidenciales, ya que es relativamente fácil de acceder y manipular para usuarios malintencionados.

</details>

:::

La información que vamos a almacenar podría estar contenida en un objeto (json) com el siguiente:
``` javascript
usuario = {
  email: 'gatopaco@email.com',
  rol: 'alumno'
}
```

**Para guardar esta información en el localstorage ** necesitamos que este objeto sea una cadena de texto. Para convertilo podemos usar:

```javascript
// Convertir el objeto a una cadena JSON
var usuarioJSON = JSON.stringify(usuario);
```

Y una vez convertido lo guardamos en localStorage

```javascript
// Guardar en localStorage
localStorage.setItem('usuarioVanilla', usuarioJSON);
```
En el caso de querer recuperar la información del localstorage tenemos el método `getItem()`. Para ello debemos hacer el proceso inverso, primero recuperar y luego convertir a objeto.

```javascript
// Leer en localStorage
const usuarioJSON = localStorage.getItem('usuarioVanilla');

// Convertir a objeto
const usuario = JSON.parse(usuarioJSON);
```

Una buena idea puede ser crear un objeto que llamaremos `ls` (ls de localstorage) con un par de métodos para gestionar la lectura y escritura del usuario. Lo guardaremos como un **archivo de funciones** y así podremos usarlo desde cualquier lugar de la aplicación.

Vamos a crear nuestro archivo de funciones en la carpeta componentes y le añadimos el siguiente código:

```javascript title="funciones.js"
// Gestión del localstorage
export const ls = {
  // Captuar datos de localStorage
  getUsuario: () => {
    // Leer en localStorage
    const usuarioJSON = localStorage.getItem('usuarioVanilla')
    // Convertir a objeto
    const usuario = JSON.parse(usuarioJSON)
    // Devolvemos objeto
    return usuario
  },
  setUsuario: (usuario) => {
    // Convertir el objeto a una cadena JSON
    const usuarioJSON = JSON.stringify(usuario)
    // Guardar en localStorage
    localStorage.setItem('usuarioVanilla', usuarioJSON)
  }
}
```
Y esta sería una versión mejorada para gestionar errores en caso de que no haya una sesión abierta, es decir, que no haya ningún dato en el localstorage.

```javascript title="funciones.js"
// Gestión del localstorage
export const ls = {
  // Captuar datos de localStorage
  getUsuario: () => {
    // Definimos usuario anónimo por si no hay datos en localstorage
    let usuario = {
      email: 'anónimo',
      rol: 'no logueado',
      avatar: ''
    }
    // Capturamos datos de localstorage
    const usuarioJSON = localStorage.getItem('usuarioVanilla')
    // Si hay un usuario logueado actualizamos usuario, sino devolvemos usuario anónimo
    if (usuarioJSON) {
      // Parseamos datos de localstorage
      usuario = JSON.parse(usuarioJSON)
    }
    return usuario
  },
  setUsuario: (usuario) => {
    // Convertir el objeto a una cadena JSON
    const usuarioJSON = JSON.stringify(usuario)
    // Guardar en localStorage
    localStorage.setItem('usuarioVanilla', usuarioJSON)
  }
}


```

Para probarlo abrimos el componente `header.js`. En la parte superior importamos nuestra función y creamos el método script():

```javascript title="header.js"
// importamos la función ls del archivo funciones
import { ls } from '../componentes/funciones'

export const header = {
  template: // html
  `...
  `,
  script: ()=>{
    console.log('Header cargado')
  }

```
Y dentro del método **script()** probamos a escribir y leer del localStorage:

```javascript title="header.js"

  script: () => {
    console.log('Header cargado')
    // Simulamos el inicio de sesión de un usuario
    const usuario = {
      email: 'manolito@email.com',
      rol: 'alumno'
    }
    ls.setUsuario(usuario)
    console.log('usuario guardado')

    // Leemos el usuario del localstorage
    const usuarioLogueado = ls.getUsuario()
    console.log('usuario del localstorage: ', usuarioLogueado)
  }
```
Ahora solo falta que, cuando inyectamos el componente `header.js` llamemos a su método script()

```javascript title="main.js"
...
// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template
header.script()
...
```
Si todo ha ido bien podrás ver el resultado en la consola del inspector. Pero también podemos ver el contenido del localstorage desde `Application/LocalStorage` de nuestro inspector de código:

![localstorage](/imagenes/v1/spa/ls.png)

## Componentes para menús. Actualizando el header
Cuando creamos el template del `header.js` pusimos el código html de la etiqueta `<header></header>` que habíamos programado en el prototipo `home.js`. Pero si te fijas, el header de otras páginas, por ejemplo de `proyectos.js`, es diferente en tanto a que incluye dos nuevos menús. Eso es porque se supone que para acceder a esta página el usuario ya había iniciado sesión y tenía un rol especifico ('programador' o 'admin') que le habilita dichos menús.

Así que lo primero que vamos a hacer es desmontar nuestro *template* del componente `header.js` en pedazos, de manera que tendremos, por un lado, el código común para todos los usuarios y, por otro lado, un par de divs donde inyectaremos los menús dependiendo del rol del usuario logueado.

```javascript title="Componente header.js actual" {26-37,39-40,42-43}
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#/home"
      ><img
        src="images/logo.svg"
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
      
      <!-- Menu común para todos los usuarios -->
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">A cerca de</a>
        </li>
      </ul>

      <!-- Aquí va el Menu rol -->
      <div id="menuRol"></div>
    
      <!-- Aquí va el Menu usuario -->
      <div id="menuUsuario"></div>
    
    </div>
  </div>
</nav>
```
Ahora toca definir qué ménus (y qué items) van a incluir cada menú. en función del rol del usuario logueado. Para ello debemos recuperar el diagrama de casos de uso para la versión 1:

![diagrama casos de uso](/imagenes/v1/casosUso/diagramaCasosUso_1.png)

Según nuestro diagrama, tenemos que los **menús que debemos definir** serían algo así:

**Menú común** (para todos los usuarios):
- home
- TOP 5 Proyectos (Esta vista aún no la hemos creado)
- A cerca de (Esta vista aún no la hemos creado)
  
**Menús rol y usuario** en función del rol
- Rol: anónimo (no registrado o logueado )
  - menú rol: 
    - Registro
    - Iniciar sesión
  - menú usuario: No se muestra

- Rol: registrado 
  - menú rol:
    - Proyectos
  - menú usuario:
    - Avatar: muestra la imagen del usuario logueado
    - Email: muestra el email del usuario logueado
    - Rol: Muestra el rol del usuario logueado
    - Perfil: Muestra datos del perfil con opción de editar
    - Cerrar sesión

- Rol: desarrollador 
  - menú rol:
    - Proyectos
  - menú usuario:
    - Avatar: muestra la imagen del usuario logueado
    - Email: muestra el email del usuario logueado
    - Rol: Muestra el rol del usuario logueado
    - Perfil: Muestra datos del perfil con opción de editar
    - Cerrar sesión

- Rol: admin
  - menú rol:
    - Proyectos
    - PANEL ADMIN
  - menú usuario:
    - Avatar: muestra la imagen del usuario logueado
    - Email: muestra el email del usuario logueado
    - Rol: Muestra el rol del usuario logueado
    - Perfil: Muestra datos del perfil con opción de editar
    - Cerrar sesión

Para construir el código de cada menú usaremos un objeto para el menú rol y un objeto para el menú usuario. Estos objetos tendrán tantas propiedades como roles tengamos. 

Vamos a ello. Creamos el archivo `menus.js` dentro de la carpeta `componentes` con los dos menús y como propiedad los roles correspondientes, y los exportamos:

```javascript title="menus.js"

const menuRol = {
  templateAnonimo: // html
  ``,
  templateRegistrado: // html
  ``,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

const menuUsuario = {
  templateRegistrado: // html
  ``,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

export { menuRol, menuUsuario }
```
Ahora vamos a contruir el html para cada menú. 

:::note Nota 
Fíjate que muchos son prácticamente idénticos, aunque, para las versiones posteriores de la app, seguramente estas opciones se verán modificadas e irán ampliándose.
:::

El primer menú que vamos a crear es el que corresponde a un usuario anónimo. Sería algo así:

```javascript title="menus.js"

const menuRol = {
  templateAnonimo: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="ms-2 btn btn-success router-link" href="#/login" >
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
  `,
  templateRegistrado: // html
  ``,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

const menuUsuario = {
  templateRegistrado: // html
  ``,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

export { menuRol, menuUsuario }
```
Para los menús correspondientes al usuario registrado debemos tener en cuenta que vamos a necesitar la información del usuario logueado: La podemos sacar del **localstorage** usando nuestro componente `ls.js`.

Nuestro archivo quedaría así:

```javascript	title="menus.js" {2,53,56}

import { ls } from './funciones'

const menuRol = {
  templateAnonimo: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="ms-2 btn btn-success router-link" href="#/login" >
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
  `,
  templateRegistrado: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active router-link" aria-current="page" href="#/proyectos">PROYECTOS</a>
    </li>
    
  </ul>
  `,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

const menuUsuario = {
  templateRegistrado: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="images/avatar.svg" alt="" width="25" />
      </a>
      <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
        <li class="text-light text-end p-2 small">
          ${ls.getUsuario().email}
        </li>
        <li class="text-light text-end pe-2 small fst-italic">
          ${ls.getUsuario().rol}
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Mi perfil</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
      </ul>
    </li>
  </ul>
  `,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

export { menuRol, menuUsuario }
```

De momento ya tenemos los menús para dos roles. Vamos a programar la lógica para que dependiendo del rol, se cargue uno u otro menú.

Esto lo haremos desde el componente `header.js`. La manera más visual es, seguramente, utilizando una estructura **switch/case**.

```javascript title="header.js"
// ...
 script: () => {
    console.log('Header cargado')
    
    const rolUsuario = ls.getUsuario().rol

    switch (rolUsuario) {
      case 'registrado':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateRegistrado
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateRegistrado
        break
      case 'desarrollador':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateDesarrollador
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateDesarrollador
        break
      case 'admin':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateAdmin
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateAdmin
        break
      default : // Para usuarios anónimos
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateAnonimo
        // menú usuario: No tiene
        break
    }
  }
}
```
Fíjate que estamos utilizando los objetos **menuRol** y **menuUsuario** para los menús que hemos definido en el archivo `menus.js`, y `ls.j`s para leer los datos del usuario loguedado, así que no nos olvidemos de importar nuestras librerias al inicio de nuestro componente:

```javascript title="header.js"
// importamos la función ls del archivo funciones
import { ls } from '../componentes/funciones'
import { menuRol, menuUsuario } from './menus'

// ...
```

Si todo esto es correcto, como no tenemos ningún usuario en el localstorage con rol 'registrado', debería mostrarse el menú de un usuario anónimo. Es decir, las opciones de registro y login.

#### Simulando el inicio de sesión
Para simular que hay una **sesión abierta** vamos a inscribir en el localstorage a la señora chafardera@gmail.com que tiene el rol de registrada. Podemeos hacerlo con esta linea al principio de nuestro script:
```javascript
// Simulamos el inicio de sesión de un usuario
    ls.setUsuario({ email: 'chafardera@gmial.com', rol: 'registrado' })
```

Si miramos nuestra aplicacion ahora, deberían aparecer los menús rol (con la opcion PROYECTOS) y usuario, y dentro del menú usuario, deberíamos tener el nombre del usuario, rol y opciones de editar perfil y cerrar sesión.

![menus](/imagenes/v1/spa/menus.png)

:::danger 👉Tarea👈
Completa el resto de menús para todos los roles definidos. *Para verificar que funcionan bien puedes ir cambiando la propiedad rol de nuestro usuario 'chafardera@gmail.com'.*
:::

<details>
<summary>Resultado: 👁‍🗨</summary>

<div style={{display: "none"}}>

Ahora ya solo nos falta completar el resto de menús. Los archivos menus.js y header.js quedarían de la siguiente manera:

```javascript	title="menus.js"
import { ls } from './funciones'
const menuRol = {
  templateAnonimo: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="ms-2 btn btn-success router-link" href="#/login" >
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
  `,
  templateRegistrado: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active router-link" aria-current="page" href="#/proyectos">PROYECTOS</a>
    </li>
    
  </ul>
  `,
  templateDesarrollador: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active router-link" aria-current="page" href="#/proyectos">PROYECTOS</a>
    </li>
  </ul>
  `,
  templateAdmin: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active router-link" aria-current="page" href="#/proyectos">PROYECTOS</a>
      <a class="nav-link active router-link" aria-current="page" href="#/admin">Panel ADMIN</a>
    </li>
  </ul>
  `
}

const menuUsuario = {
  templateRegistrado: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle router-link"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="images/avatar.svg" alt="" width="25" />
      </a>
      <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
        <li class="text-light text-end p-2 small">
          ${ls.getUsuario().email}
        </li>
        <li class="text-light text-end pe-2 small fst-italic">
          ${ls.getUsuario().rol}
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Mi perfil</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
      </ul>
    </li>
  </ul>
  `,
  templateDesarrollador: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle router-link"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="images/avatar.svg" alt="" width="25" />
      </a>
      <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
        <li class="text-light text-center p-2">
          <p>${ls.getUsuario().email}</p>
        </li>
        <li class="text-light text-center p-2">
          <p>${ls.getUsuario().rol}</p>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Mi perfil</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
      </ul>
    </li>
  </ul>
  
  `,
  templateAdmin: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle router-link"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="images/avatar.svg" alt="" width="25" />
      </a>
      <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
        <li class="text-light text-center p-2">
          <p>${ls.getUsuario().email}</p>
        </li>
        <li class="text-light text-center p-2">
          <p>${ls.getUsuario().rol}</p>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Mi perfil</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
      </ul>
    </li>
  </ul>
  `
}

export { menuRol, menuUsuario }

```

```javascript	title="header.js"
// importamos la función ls del archivo funciones
import { ls } from '../componentes/funciones'
import { menuRol, menuUsuario } from './menus'

export const header = {
  template: // html
  `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand router-link" href="#/home"
      ><img
        src="images/logo.svg"
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
          <a class="nav-link active router-link" aria-current="page" href="#/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#">TOP5 Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#" class="router-link">A cerca de</a>
        </li>
      </ul>

      <div id="menuRol"></div>
      <div id="menuUsuario"></div>
    </div>
  </div>
</nav>

  `,
  script: () => {
    console.log('Header cargado')
    // Simulamos el inicio de sesión de un usuario
    ls.setUsuario({ email: 'chafardera@gmial.com', rol: 'registrado' })
    const rolUsuario = ls.getUsuario().rol

    switch (rolUsuario) {
      case 'registrado':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateRegistrado
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateRegistrado
        break
      case 'desarrollador':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateDesarrollador
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateDesarrollador
        break
      case 'admin':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateAdmin
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateAdmin
        break
      default : // Para usuarios anónimos
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateAnonimo
        // menú usuario: No tiene
        break
    }
  }
}

```
</div>
</details>

## Editar perfil en ventana modal

Y para acabar con esta actualización del header, vamos a incluir la ventana modal que nos permitirá editar los datos del perfil.

Creamos el **componente `editarPerfil.js`** en la carpeta de `componentes` y le añadimos el html correspondiente a la propiedad *template*, que podemos obtener de nuestro prototipo `editarPerfil.html`. (Fíjate que hemos modificado su *id*)


```javascript title="editarPerfil.js" {7}
export const editarPerfil = {
  template: // html
  `
  <!-- Ventana modaledición perfil -->
  <div
    class="modal fade"
    id="modalEditarPerfil"
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
                    id="imagen"
                    type="url"
                    class="form-control"
                    value="http://imagenavatar.png"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>

                <div class="">
                  <!-- Nombre -->
                  <label for="nombre" class="form-label">Nombre:</label>
                  <input required id="nombre" type="text" class="form-control" />
                  <div class="invalid-feedback">El nombre es requerido</div>
                  <!-- Apellidos -->
                  <label for="apellidos" class="form-label">Apellidos:</label>
                  <input id="apellidos" type="text" class="form-control" />

                  <!-- Email -->
                  <label for="email" class="form-label">Email:</label>
                  <input required id="email" type="email" class="form-control" />
                  <div class="invalid-feedback">El formato no es correcto</div>

                  <!-- Contraseña -->
                  <label for="pass" class="form-label mt-3">Contraseña:</label>
                  <input
                    required
                    minlength="6"
                    id="pass"
                    type="password"
                    class="form-control"
                  />
                  <div class="invalid-feedback">
                    La contraseña debe ser de 6 caracteres como mínimo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button type="button" class="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,
  script: () => {
    console.log('script de modal editar perfil cargado')
  }
}

```

Ahora nos vamos a `header.js` e inyectamos nuestro componente `editarPerfil.js` en un div. (Recuerda que antes debes importar el componente editarPerfil.js)

```javascript	title="header.js" {3,10,17}
import { ls } from '../componentes/funciones'
import { menuRol, menuUsuario } from './menus'
import { editarPerfil } from './editarPerfil'

export const header = {
  template: // html
  `
  ...

  <div id="modal">
    <!-- Aquí inyectamos el componente editarPerfil -->
  </div>

  `,
  script: () => {
    console.log('Header cargado')
    document.querySelector('#modal').innerHTML = editarPerfil.template
    ...
  }
}
```

Ahora solo nos falta el **botón para abrir el modal**: Copiamos las propiedades del botón del prototipo y se las ponemos al **item 'Editar Perfil'** de nuestros menús:
(No olvides modificar el valor del **atributo data-bs-target** con el nombre del id de nuestra ventana modal)

```html title="menus.js" {6}
    <li>
      <a 
        class="dropdown-item" 
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#modalEditarPerfil"
        >
        Mi perfil
      </a>
    </li>

```
:::danger TAREA
Haz lo mismo con todos los items editar de cada menú... ¡Y ya lo tendremos!!!
:::

Cuando lo hayas probado y te hayas flipado un rato, recuerda grabar y actualizar el repositorio.

:::danger ¿Cerramos la rama?
Es un buen momento para incluir todos los cambios de esta rama en la rama principal `main`.
¡Hagamos un pullRequest!
:::
