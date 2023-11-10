---
title: La API de Javascript de Supabase
---

Una de las grandes ventajas que nos ofrece Supabase es que, no solo nos ofrece un servidor de base de datos basado en postgreeSQL, sino que además nos facilita enormemente el acceso a la bd, ya sea a través de una API Rest, o directamente con una API de javascript.

:::info API REST vs API de Javascript

La diferencia fundamental entre la API REST de Supabase y su API de JavaScript radica en cómo interactúan los desarrolladores con la plataforma:

**API REST de Supabase:**
La API REST es una interfaz que sigue los principios de la arquitectura REST (Representational State Transfer). Permite a los desarrolladores realizar operaciones CRUD (Create, Read, Update, Delete) en la base de datos de Supabase utilizando los métodos HTTP estándar (GET, POST, PUT, DELETE, etc.). Para interactuar con la API REST, puedes hacer solicitudes HTTP directas utilizando bibliotecas como Axios, Fetch, o incluso a través de herramientas como cURL.

**API de JavaScript de Supabase:**
La API de JavaScript de Supabase es una biblioteca que proporciona una capa de abstracción sobre la API REST subyacente. Esta biblioteca simplifica la interacción con la API REST al proporcionar métodos y funciones específicos en JavaScript para realizar operaciones comunes en la base de datos de Supabase. En lugar de realizar directamente solicitudes HTTP, los desarrolladores pueden utilizar estas funciones para realizar tareas como la autenticación de usuarios, la consulta de datos, la manipulación de datos, etc.

En resumen, **la API REST de Supabase** es la interfaz subyacente que permite la comunicación con la plataforma utilizando **solicitudes HTTP estándar**, mientras que **la API de JavaScript de Supabase** es una biblioteca que facilita la interacción con la API REST utilizando **métodos y funciones específicos en JavaScript**. 

:::

Para nuestro proyecto nosotros vamos a utilizar la **API de Javascript** ya que nos permite la comunicación de manera muy sencilla ya además, ¡nos lo dan todo hecho! 😉

## Acceso a la documentación de la API de Javascript
Para acceder a la documentación de javascript tenemos que hacer click en el item del menú de la barra de la izquierda llamado **API Docs**. (Antes debes estar en tu proyecto)

![API Docs](/imagenes/v1/bd/api.png)

- En el apartado **Getting Started** encontramos varias opciones:
  - En la opción **Introductio** nos muestra el código para realizar la conexión con la base de datos (luego lo probaremos).

  - En la opción de **Authentication** nos muestra información relacionada con la autenticación de la base de datos.

  - En la opción **User Management** ya encontramos el código javascript que debemos utilizar en nuestra app para hacer tareas como el **registro**, **login** (con diferentes sistemas), *logout*, y **acceder a la información del usuario** con la sesión activa, entre otros.

- Tenemos otra sección llamada **Tables and Views**: Aquí aparecerán todas las tablas de nuestro proyecto. Si hacemos click en uno de los nombres de las tablas, por ejemplo, en la tabla *pefiles*, veremos en la columna de la derecha el código javascript asociado a las diferentes consultas.
  - Podemos acceder a un perfil a partir de su id, fecha, nombre, etc. 
  - Leer todas los perfiles (incluyendo filtros), 
  - insertar perfiles, 
  - actualizar perfiles y 
  - borrarlos. 
Es decir, el CRUD que hemos contemplado en nuestro ORM.

Parece fácil, ¿verdad? ... Pues lo es. En breve lo probaremos.

Pero hay algo que hemos pasado por alto. Si revisamos el diagrama de clases podemos ver que hay métodos (como getDetalleById de la clase Perfil_detalle) que realizan consultas multitabla. Si analizamos el código js que acabamos de ver en la documentación, solo contempla consultas a la mísma tabla... ¿Cómo podemos solucionar este problema?

![Diagrama da de clases](/imagenes/v1/bd/dc.svg)

La respuesta a esta pregunta es: utilizando funciones postgreSQL conocidas como **Stored Procedures**.

Efectivamente, en supabase podemos crear funciones que más tarde podremos llamar desde javascript.

### Ejemplos de código javascript que nos ofrece Supabase:
Vamos a mostrar aquí, a modo de ejemplo, el código para:
- Iniciar sesión 
- acceder a todas las filas de la tabla pefiles
- acceder a una función predefinida llamada perfiles_detalle (esta en concreto permitiría ver el detalle de todas las filas de la tabla perfiles cruzada con la tabla usuarios)

*Estos fragmentos de código los puedes encontrar en API Docs de supabase*

```js title="Iniciar sesión"
// USER LOGIN
let { data, error } = await supabase.auth.signInWithPassword({
 email: 'someone@email.com',
 password: 'TGeycKCsmEIyrHPhWiYF'
})
```

```JS title="Leer todas las filas de la tabla perfiles"
// READ ALL ROWS
let { data: perfiles, error } = await supabase
 .from('perfiles')
 .select('*')
 ```

 ```js title="Stored Procedures: perfil_detalle"
// INVOKE FUNCTION
let { data, error } = await supabase
 .rpc('perfil_detalle', {
   userid
 })

if (error) console.error(error)
else console.log(data)
```

Tanto el código para leer las filas de la tabla perfiles, como el de inicio de sesión, podríamos utilizarlos ya en nuestra aplicación, pero en el caso de la función **perfil_detalle**, primero necesitamos programarla desde Supabase. ¡Hagámoslo!


