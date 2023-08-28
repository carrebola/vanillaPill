---
title: Componentes de menú
---

## Versión 2.0 de header

Para mejorar nuestro header vamos a dividir el componente header.js  en tres componentes, el **header.js** que contendrá el html que no cambia nunca, y tres componentes más: **menuSuperior.js**, **menuEspecifico** y **menuUsuario.js** que inyectaremos en header.

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
Cuando creamos el template del `header.js` pusimos el código html de la etiqueta `<header></header>` que habíamos programado en el prototipo `home.js`. Pero si te fijas, el header de otras páginas, por ejemplo de `proyectos.js`, es diferente. Eso es porque se supone que para acceder a esta página el usuario ya había iniciado sesión y tenía un rol especifico ('programador' o 'admin').

Así que lo primero que vamos a hacer es desmontar nuestro *template* del componente `header.js` en pedazos, de manera que tendremos el código común para todos los usuarios y sustituiremos los menús por un div donde inyectarlos.

```javascript title="Componente header.js actual"
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#/home"
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
      
      <!-- Menu general -->
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






