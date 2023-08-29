---
title: Dando funcionalidad a las vistas
---

Ahora ya tenemos nuestra app funcionando visualmente. El enrutador se encarga de mostrar las vistas como si de páginas independientes se tratase.

Vamos a darle otra vuelta de tuerca a las vistas aportándole funcionalidades extras. 

Por el momento **no vamos a conectarnos con el backend**, sino que nos valdremos de **datos simulados** que cargaremos en un archivo a partir de datos en formato **json** (objetos en javascript) que simularán las consultas a nuestra base de datos.

:::danger Nueva rama 'lógica para vistas'
Para esta parte del trabajo vamos a crear la rama 'logica para vistas'
:::


## Registro de usuarios
¿Qué tal si comenzamos con un objeto que contenga los datos de diferentes usuarios registrados? Podría ser algo así:
```javascript
perfiles = [
  {
    id: 1
    created_at:
    user_id:
    nombre:
    apellidos:
    avatar:
    estado:
    rol:
    email:
    contraseña:
  }
]

```
Con un poquito de inteligencia artificial tenemos un array de datos inventados:

```javascript
export const perfiles = [
  {
    id: 1,
    created_at: '2023-08-28',
    user_id: '8e9b7c4f-10de-4a10-a36e-87f49657d1c1',
    nombre: 'Paco',
    apellidos: 'Martínez Soria',
    avatar: 'paco_avatar.jpg',
    estado: 'Activo',
    rol: 'registrado',
    email: 'paco@example.com',
    contraseña: '123456'
  },
  {
    id: 2,
    created_at: '2023-08-29',
    user_id: '36f66b5e-aa59-4f96-b6a8-3c890d6a452c',
    nombre: 'Carmen',
    apellidos: 'Maura',
    avatar: 'carmen_avatar.jpg',
    estado: 'Inactivo',
    rol: 'desarrollador',
    email: 'carmen@example.com',
    contraseña: '123456'
  },
  {
    id: 3,
    created_at: '2023-08-30',
    user_id: 'a3df05b0-91e7-4f68-a067-841fcf5de9f0',
    nombre: 'Antonio',
    apellidos: 'Resines',
    avatar: 'antonio_avatar.jpg',
    estado: 'Activo',
    rol: 'desarrollador',
    email: 'antonio@example.com',
    contraseña: '123456'
  },
  {
    id: 4,
    created_at: '2023-08-31',
    user_id: 'd67e3b1c-875f-437f-bd2a-9ff50b72083d',
    nombre: 'Maribel',
    apellidos: 'Verdú',
    avatar: 'maribel_avatar.jpg',
    estado: 'Inactivo',
    rol: 'desarrollador',
    email: 'maribel@example.com',
    contraseña: '123456'
  },
  {
    id: 5,
    created_at: '2023-09-01',
    user_id: '2419d5e3-46a6-45d6-98a2-b02c8ac5d3fe',
    nombre: 'Javier',
    apellidos: 'Bardem',
    avatar: 'javier_avatar.jpg',
    estado: 'Activo',
    rol: 'admin',
    email: 'javier@example.com',
    contraseña: '123456'
  }
]


```


## Implementando el Login a través de localstorage
Comencemos por la vista login.

Vamos a crear la lógica para que cuando un usuario inicie sesió la información se guarde en el localstorage. 

Creamos una función enviarDatos(formulario) que recibe el formulario, en caso de que valide, y extraemos los valores de los campos para, de momento, sacarlos por consola

```javascript title="login.js"
import { perfiles } from '../bd/datosPrueba'

export default {
  template: // html
  `...`,

  script: () => {
    console.log('vista login cargada')
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formulario')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        console.log('No valida')
      } else {
        enviarDatos(formulario)
      }
      // Y añadimos la clase 'was-validate' para que se muestren los mensajes
      formulario.classList.add('was-validated')
    })

    function enviarDatos (formulario) {
      const email = formulario.email.value
      const pass = formulario.password.value
      console.log('email y pass: ', email, pass)
    }
  }
}

```
Para que este código funcione debes actualizar los inputs del formulario para que incorporen el atributo name.

```javascript
  <input id="email" name="email" value="ejemplo@email.com" required type="email" class="form-control" />
```

Ahora vamos a comprobar que el email existe y que la contraseña corresponde con la información de la base de datos. Para ello utilizaremos las '*array functions*' que hemos estudiado en clase.

```javascript
function enviarDatos (formulario) {
  const email = formulario.email.value
  const pass = formulario.password.value

  // buscamos el indice del email en el array perfiles
  const indexUser = perfiles.findIndex((user) => user.email === email) // 1
  // Si existe y la contraseña corresponde
  if (perfiles[indexUser].contraseña === pass) {
    console.log('¡login correcto!')
  } else {
    console.log('El usuario no existe o la contraseña no corresponde')
  }
}

```
:::tip
Podríamos indicar de manera independiente que el usuario no existe, o que sí existe pero la contraseña no corresponde, pero eso daría pístas a un usuario que intente hackear el inicio de sesión
:::

Ahora solo falta registrar los datos del usuario en el localstorage. Usaremos nuestro objeto `ls` por lo que no olvides cargar la libreria `funciones.js` 

```javascript	title="función enviarDatos de loginVista.js"
function enviarDatos (formulario) {
  const email = formulario.email.value
  const pass = formulario.password.value

  // buscamos el indice del email en el array perfiles
  const indexUser = perfiles.findIndex((user) => user.email === email) // 1

  if (perfiles[indexUser].contraseña === pass) {
    console.log('¡login correcto!')
    // Construimos la información para guardar en el localstorage
    const usuario = {
      email: perfiles[indexUser].email,
      rol: perfiles[indexUser].rol
    }
    // Usamos nuestra función ls para registrar usuario en localstorage
    ls.setUsuario(usuario)
    // Y enviamos a la página proyectos, esta vez con el header correspondiente al rol
    window.location = '#/proyectos'
    header.script()
  } else {
    console.log('El usuario no existe o la contraseña no corresponde')
  }
}
```

Para asegurarnos que se inyectan correctamente tanto el email como el rol en el menú de usuario vamos a añadir unas líneas en el header.js

```javascript
// Y actualizamos los datos de menu de usuario si es que se está mostrando
  try {
    document.querySelector('#emailUserMenu').innerHTML = ls.getUsuario().email
    document.querySelector('#rolUserMenu').innerHTML = ls.getUsuario().rol
  } catch (error) {
    console.log('El usuario no está registrado y no tiene menú de usuario');
  }
```

## Cerrando sesión

Para cerrar la sesión, por el momento, simplemente **vamos a borrar los datos del localstorage**.

Desde el script de `header.js` detectamos cuando el usuario hace clic en el item de cerrar sesión (con la clase asociada '*cerrarSesion*').

```javascript title="header.js"

...

//Detectamos si alguien hace click sobre el header
document.querySelector('header').addEventListener('click', (e) => {
  // Y comprobamos si el elemento sobre el que se ha hecho clic es el item 'cerrar sesión' mirando su clase
  if (e.target.classList.contains('cerrarSesion')) {
    e.preventDefault()
    // Borramos el localstorage
    ls.setUsuario('')
    // Cargamos la pagina proyectos
    window.locate = '#/home'
    // Y actualizamos el header para actualizar los menús 
    header.script()
  }
})
```
:::note No olvides actualizar...
Falta añadir la clase **cerrarSesion** a todos los items del menú. También debes recordar importar el objeto **ls**.
:::

Con todas las actualizaciones el `header.js`quedaría así:

```javascript	title="header.js"
// importamos la función ls del archivo funciones
import { ls } from '../componentes/funciones'
import { menuRol, menuUsuario } from './menus'
import { editarPerfil } from './editarPerfil'

export const header = {
  template: // html
  `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand router-link" href="#/home"
      ><img
        src="/assets/images/logo.svg"
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
<div id="modal"></div>

  `,
  script: () => {
    console.log('Header cargado')
    // Cargamos la ventana modal para editar perfil
    document.querySelector('#modal').innerHTML = editarPerfil.template
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
        // menú usuario - No debe aparecer nada
        document.querySelector('#menuUsuario').innerHTML = ''
        break
    }

    // Y actualizamos los datos de menu de usuario si es que se está mostrando
    try {
      document.querySelector('#emailUserMenu').innerHTML = ls.getUsuario().email
      document.querySelector('#rolUserMenu').innerHTML = ls.getUsuario().rol
    } catch (error) {
      console.log('El usuario no está registrado y no tiene menú de usuario');
    }

    // Cerrar sesión
    // Capturamos clic sobre el item de cerrar sesión
    document.querySelector('header').addEventListener('click', (e) => {
      if (e.target.classList.contains('cerrarSesion')) {
        e.preventDefault()
        // Borramos el localstorage
        ls.setUsuario('')
        // Cargamos la pagina home
        window.locate = '#/home'
        header.script()
      }
    })
  }
}


```