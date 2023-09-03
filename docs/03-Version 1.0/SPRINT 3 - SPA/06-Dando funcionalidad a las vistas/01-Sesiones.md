---
title: Gestión de sesiones (login y logout)
---

Ahora ya tenemos nuestra app funcionando visualmente. El enrutador se encarga de mostrar las vistas como si de páginas independientes se tratase.

Vamos a darle otra vuelta de tuerca a las vistas aportándole funcionalidades extras. 

Por el momento **no vamos a conectarnos con el backend**, sino que nos valdremos de **datos simulados** que cargaremos en un archivo a partir de datos en formato **json** (objetos en javascript) que simularán las consultas a nuestra base de datos.

:::danger Nueva rama 'lógica para vistas'
Para esta parte del trabajo vamos a crear la rama 'logica para vistas'
:::


## Datos para simular el acceso a la base de datos
¿Qué tal si comenzamos con un objeto que contenga los datos de diferentes usuarios registrados? Para concretar el nombre de las propiedades deberíamos basarnos en el diagrama de clases que hemos creado cuando llevabamos el traje de backend.

Digamos que, tras consultar con nuestro **'yo-programador' encargado del backend**, hemos decidido que puede ser algo así:
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
Con un poquito de inteligencia artificial, tenemos un array de datos inventados que podemos guardar en un archivo js. 

Crea una carpeta `bd`en la raiz y crea dentro el archivo `datosPrueba.js` con el siguiente código:

```javascript
export const perfiles = [
  {
    id: 1,
    created_at: '2023-08-28',
    user_id: '8e9b7c4f-10de-4a10-a36e-87f49657d1c1',
    nombre: 'Paco',
    apellidos: 'Martínez Soria',
    avatar: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/28/16460502314689.jpg',
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
    avatar: 'https://s.libertaddigital.com/2020/09/15/1920/1080/fit/carmen-maura-roman.jpg',
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
    avatar: 'https://estaticos-cdn.elperiodico.com/clip/056573ce-f784-49d0-9746-0e154380598b_alta-libre-aspect-ratio_default_0.jpg',
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
    avatar: 'https://es.web.img3.acsta.net/pictures/23/06/13/09/44/5805084.jpg',
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
    avatar: '',
    estado: 'Activo',
    rol: 'admin',
    email: 'javier@example.com',
    contraseña: '123456'
  }
]

```


## Implementando el Login a través de localstorage
Comencemos por la vista login.

Vamos a crear la lógica para que cuando un usuario **inicie sesión** la información del usuario se guarde en el **localstorage**. 

Creamos una función `enviarDatos(formulario)` que recibe el formulario, (en caso de que éste valide) y extraemos los valores de los campos para, de momento, sacarlos por consola

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
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
      formulario.classList.add('was-validated')
        console.log('No valida')
      } else {
        enviarDatos(formulario)
      }
      
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
  const indexUser = perfiles.findIndex((user) => user.email === email)
  // Si existe y la contraseña corresponde
  if (perfiles[indexUser].contraseña === pass) {
    console.log('¡login correcto!')
  } else {
    console.log('El usuario no existe o la contraseña no corresponde')
  }
}

```

Ahora solo falta registrar los datos del usuario en el localstorage (esta vez con algunos datos extra como el user_id). Usaremos nuestro objeto `ls` por lo que no olvides cargar la libreria `funciones.js` 

```javascript	title="función enviarDatos() de loginVista.js"
// Función para enviar datos a la bd
    function enviarDatos (formulario) {
      const email = formulario.email.value
      const pass = formulario.password.value

      // buscamos el indice del email en el array perfiles
      const indexUser = perfiles.findIndex((user) => user.email === email) // 1
      // Si encuentra un usuario
      if (indexUser > 0) {
        // Si la contraseña es correcta
        if (perfiles[indexUser].contraseña === pass) {
          console.log('¡login correcto!')
          const usuario = {
            nombre: perfiles[indexUser].nombre,
            apellidos: perfiles[indexUser].apellidos,
            email: perfiles[indexUser].email,
            rol: perfiles[indexUser].rol,
            avatar: perfiles[indexUser].avatar,
            user_id: perfiles[indexUser].user_id
          }
          // Guardamos datos de usaurio en localstorage
          ls.setUsuario(usuario)
          // Cargamos página home
          window.location = '#/proyectos'
          // Actualizamos el header para que se muestren los menús que corresponden al rol
          header.script()
        } else {
          // console.log('La contraseña no corresponde')
          alert('El usuario no existe o la contraseña no es correcta')
        }
      } else {
        // console.log('El usuario no existe')
        alert('El usuario no existe o la contraseña no es correcta')
      }
    }
```
:::tip
Podríamos indicar de manera independiente que el usuario no existe, o que sí existe pero la contraseña no corresponde, pero eso daría pístas a un usuario que intente hackear el inicio de sesión
:::

Para asegurarnos que, en nuestro **menú de usuario**, se inyectan correctamente tanto el **email** como el *rol*, vamos a añadir unas líneas al final del header.js

```javascript title="header.js"

... 

// Y actualizamos los datos de menu de usuario si es que se está mostrando
  try {
    // email y rol
    document.querySelector('#emailUserMenu').innerHTML = ls.getUsuario().email
    document.querySelector('#rolUserMenu').innerHTML = ls.getUsuario().rol
    // para la imagen de avatar (avatar.png si el campo está vacío)
    const imagen = ls.getUsuario().avatar === '' ? '/images/avatar.svg' : ls.getUsuario().avatar
    document.querySelector('#avatarMenu').setAttribute('src', imagen)
  } catch (error) {
    console.log('El usuario no está registrado y no tiene menú de usuario');
  }
```

## Cerrando sesión

Para cerrar la sesión, por el momento, simplemente **vamos a borrar los datos del localstorage**.

Desde el script de `header.js` detectamos cuando el usuario hace clic en el item de cerrar sesión (con la clase asociada '*cerrarSesion*').

```javascript title="header.js"

...

// Cerrar sesión
    // Capturamos clic sobre el item de cerrar sesión
    document.querySelector('header').addEventListener('click', (e) => {
      if (e.target.classList.contains('cerrarSesion')) {
        e.preventDefault()
        // Borramos el localstorage
        ls.setUsuario('')
        // Cargamos la pagina home
        window.location = '#/home'
        header.script()
      }
    })
```

Falta añadir la clase **cerrarSesion** a todos los items del menú. 

```html title="menus.js"
<li><a class="dropdown-item cerrarSesion" href="#">Cerrar sesión</a></li>
```

También debes recordar importar el objeto **ls**.
```javascript title="menu.js"
import { ls } from './funciones'
```

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
        src="/images/logo.svg"
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
    // Y ejecutamos su lógica
    editarPerfil.script()
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
      // email y rol
      document.querySelector('#emailUserMenu').innerHTML = ls.getUsuario().email
      document.querySelector('#rolUserMenu').innerHTML = ls.getUsuario().rol
      // para la imagen de avatar (avatar.png si el campo está vacío)
      const imagen = ls.getUsuario().avatar === '' ? '/images/avatar.svg' : ls.getUsuario().avatar
      document.querySelector('#avatarMenu').setAttribute('src', imagen)
    } catch (error) {
      console.log('El usuario no está registrado y no tiene menú de usuario')
    }

    // Cerrar sesión
    // Capturamos clic sobre el item de cerrar sesión
    document.querySelector('header').addEventListener('click', (e) => {
      if (e.target.classList.contains('cerrarSesion')) {
        e.preventDefault()
        // Borramos el localstorage
        ls.setUsuario('')
        // Cargamos la pagina home
        window.location = '#/home'
        header.script()
      }
    })
  }
}

```