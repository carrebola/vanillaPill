---
sidebar_position: 110
title: 'Definición del mapping de acceso a la bd. Clases'
---

# Historia: Definición del mapping de acceso a la bd. Clases

El término "**mapping**" se refiere a la asignación de las propiedades de un objeto a las columnas de una tabla de una base de datos relacional. En este caso, la idea es que las propiedades de una clase JavaScript se correspondan con las columnas de una tabla en la base de datos Supabase.

Para definir un mapping en una aplicación de JavaScript con Supabase, primero debes crear una **clase** JavaScript que represente un registro de la tabla en cuestión. Cada **propiedad** de la clase se corresponderá con una **columna** en la tabla. Luego, puedes definir **métodos** estáticos en la clase para interactuar con la tabla (por ejemplo, leer, crear, actualizar o eliminar registros).

## Conexión con la base de datos

Es el momento de comenzar a construir nuestro la lógica para la comunicación con la base de datos en nuestro proyecto.

Como siempre, antes de comenzar a trabajar crearemos una rama nueva. Llamémosla... 'ORM'

Ahora instalamos en nuestro proyecto la librería de supabase para poder comenzar a trabajar con ella:

` npm install --save @supabase/supabase-js` 

Para conectarnos con la base de datos crearemos un objeto con la lógica de conexión que nos ofrece supabase. Para ello:
- Creamos el archivo `supabase.js` en la carpeta bd `src/bd/supabase.js`
- El archivo definimos la conexión usando los modelos de API Docs que ya testeamos en el apartado 'Probando Supabase', y la exportamos. El archivo quedaría así:
  
```js title="supabase.js"
import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'xxxxxx'
const supabaseKey = 'xxxxxx'

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)

``` 
## Clase Perfil

Vamos a definir la clase **Perfil** que utilizaremos para interactuar con una tabla de base de datos llamada **perfiles**. 

Utilizaremos **métodos static** los cuales pueden ser llamados desde la misma clase, sin necesidad de instanciar un objeto.

La clase Perfil tienen las siguientes propiedades: id, nombre, apellidos, user_id, estado, rol y avatar y los siguientes métodos:

- **constructor**: El constructor de la clase acepta los parámetros id, nombre, apellidos, user_id, estado, rol y avatar y los asigna a las propiedades correspondientes del objeto.
- **getAll**: Este método es **static** y devuelve una lista de todos los registros en la tabla perfiles. 
  Utiliza el método **select** de la librería supabase para seleccionar todos los registros de la tabla perfiles. Luego, utiliza el método **map** para **convertir cada registro en un objeto de la clase Perfil.**
- **getById**: Este método es **static** y acepta un parámetro id. Devuelve un objeto de la clase Perfil que tiene el id especificado.
  Utiliza el método **select** de la librería supabase para seleccionar el registro con el id especificado y el método **single** para devolver un solo registro. Luego, **devuelve un objeto de la clase Perfil** con los datos del registro seleccionado.
- **create**: Este método es **static** y acepta un objeto perfilData que contiene los datos para un nuevo registro de la tabla perfiles. 
  Utiliza el método **insert** de la librería supabase para insertar el nuevo registro en la tabla perfiles.
- **update**: Este método actualiza el registro de la tabla perfiles que tiene el mismo id que el objeto Perfil actual. 
  Utiliza el método **update** de la librería supabase para actualizar los campos nombre, apellidos y avatar del registro con los valores del objeto Perfil actual.
- **delete**: Este método es **static** y acepta un parámetro id. 
  Elimina el registro de la tabla perfiles que tiene el id especificado utilizando el método delete de la librería supabase. Devuelve **true** si la eliminación es exitosa.


En primer lugar creamos el archivo perfil.js dentro de la carpeta `bd`. 

Ahora importamos la conexión de supabase `import { supabase } from "./supabase.js";
` 
Y definimos la clase que vamos a exportar. El código quedaría así:

```js title="perfil.js"

import { supabase } from './supabase.js'

export class Perfil {
  constructor({
    id = null,
    created_at = null,
    user_id = null,
    nombre = null,
    apellidos = null,
    avatar = 'default_avatar.png',
    estado = 'activo',
    rol = 'registrado'
  }) {
    this.id = id
    this.created_at = created_at
    this.user_id = user_id
    this.nombre = nombre
    this.apellidos = apellidos
    this.avatar = avatar
    this.estado = estado
    this.rol = rol
  }

  static async getAll() {
    const { data: perfiles, error } = await supabase
      .from('perfiles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return perfiles.map((perfil) => new Perfil(perfil))
  }

  static async getById(id) {
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return new Perfil(perfil)
  }

  static async getByUserId(id) {
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
      .eq('user_id', id)
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return new Perfil(perfil)
  }

  static async create(perfilData) {
    const { data, error } = await supabase
      .from('perfiles')
      .insert(perfilData)
      .select()

    if (error) {
      throw new Error(`Error creando perfil: ${error.message}`)
    }

    return data ? new Perfil(data[0]) : null
  }

  static async update(id, newData) {
    const { error } = await supabase
      .from('perfiles')
      .update(newData)
      .eq('id', id)

    if (error) {
      throw new Error(`Error actualizando perfil: ${error.message}`)
    }

    return true
  }
}



```
## Clase User
Esta clase será diferente a la clase Perfil.

La clase User contiene tres métodos estáticos: **create**, **login** y **logout**, cada uno con una funcionalidad específica relacionada con la autenticación y el manejo de users.

Primero importamos la conexión a la base de datos a través de la biblioteca supabase.js.

Luego, en el constructor de la clase User definimos las propiedades de un usuario: **id**, **email** y **password**.

- **Método create**: Lo utilizaremos para crear un nuevo usuario en la base de datos. 
  Toma un objeto **userData** como argumento, que contiene las credenciales de usuario necesarias para crear un nuevo usuario en la base de datos. 
  El método utiliza la función **supabase.auth.signUp** para crear un nuevo usuario en la base de datos y **devuelve un objeto User** que contiene las propiedades id y email del nuevo usuario.

- **Método login**:  Lo utilizamos para iniciar sesión en la aplicación. 
  Toma un objeto userData que contiene las credenciales de inicio de sesión y utiliza la función **supabase.auth.signInWithPassword** para iniciar sesión en la base de datos. 
  **Devuelve un objeto User** que contiene las propiedades id y email del usuario que ha iniciado sesión.

- **Método logout**:  Lo utilizamos para cerrar sesión en la aplicación. 
  Utiliza la función **supabase.auth.signOut** para cerrar sesión y **devuelve true** si se ha cerrado con éxito.

- Método **getUser**:  Lo utilizamos para capturar los datos del usuario logueado.
  Utiliza la función **supabase.auth.getUser** para acceder a la sesión y **devuelve un objeto con el id y el email del usuario**.


```js title="user.js"
// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'

export class User {
  // Mapping de propiedades de la tabla perfiles
  constructor (id = null, email = null, password = null) {
    this.id = id
    this.email = email
    this.password = password
  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (userData) {
    const { data, error } = await supabase.auth.signUp(userData)

    if (error) {
      throw new Error(error.message)
    }
    console.log('usuario creado correctamente ', data)
    return new User(data.user.id, data.user.email)
  }

  // login
  static async login (userData) {
  // USER LOGIN
    const { data, error } = await supabase.auth.signInWithPassword(userData)
    if (error) {
      throw new Error(error.message)
    }
    return new User(data.user.id, data.user.email)
  }

  // logout
  static async logout () {
    // USER LOGOUT
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // leer user logeado
  static async getUser () {
    // GET USER
    const { data: { user } } = await supabase.auth.getUser()
    if (user) return new User(user.id, user.email)
  }

  // actualizar usuario (NO SE COMO USARLO DE MOMENTO)
  async update (nuevosDatos) {
    const { data, error } = await supabase.auth.updateUser({
      email: this.email,
      password: this.password
    })

    if (error) {
      throw new Error(error.message)
    }
  }
}


```

## Clases Proyecto, Comentario, Nota, Trabajo y Trabajo_usuario

Para el resto de las clases seguiremos el mismo modelo que la clase Perfil

