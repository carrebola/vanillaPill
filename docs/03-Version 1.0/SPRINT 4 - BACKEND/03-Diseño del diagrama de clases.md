---
Title: "Diseño del diagrama de clases"
---

## Clases para el ORM
En primer lugar vamos a **construir las clases** necesarias para crear nuestro **ORM**.

Cada clase va a tener:
- unas **propiedades** que se corresponderán con los campos de la tabla a la que está asociada
- unos **métodos** que permitiran el acceso y manipulación de los datos de dicha tabla

Por lo tanto, en esta versión, necesitamos tres clases. La clase **users**, la clase **perfiles** y la clase **proyectos**.

Los métodos básico que suelen utilizarse en un ORM comprenden las funcionalidades propias de un **CRUD (Create, Read, Update y Delete)**. Nosotros usaremos los siguientes:

- **getAll**: Devolvera un objeto con todos los registros de la tabla.
- **getById**: Devolverá un objeto con los datos del registro que coincida con el campo *id*.
- **getByUserId**: Devolverá un objeto con los datos del registro que coincida con el campo *user_id*.
- **create**: Creará una nueva fila con los campos que le pasemos.
- **update**: Actualizará la fila correspondiente al registro cuyo campo id coincida con el que le pasemos, con los campos que le pasemos.

El diagrama de clases para la clase perfiles quedaría de la siguiente manera:


```text
+-------------------------------------------------------+
|              Perfiles                                  |
+-------------------------------------------------------+
| - id: number                                          |
| - created_at: string                                  |
| - nombre: string                                      |
| - apellidos: string                                   |
| - user_id: number                                     |
| - estado: string                                      |
| - rol: string                                         |
| - avatar: string                                      |
+-------------------------------------------------------+
| + constructor(data: object)                           |
| + static getAll(): Perfil[]                           |
| + static getById(id: number): Perfil                  |
| + static getByUserId(id: number): Perfil              |
| + static create(perfilData: object): boolean          |
| + static update(id: number, newData: object): boolean |
+-------------------------------------------------------+

```

En este diagrama:

La **clase** "Perfil" representa los perfiles de tu sistema, con atributos correspondientes a las columnas en la base de datos.

Los **métodos estáticos** (como getAll, getById, create, update) se pueden llamar directamente en la clase sin crear una instancia previa.

Los **atributos** (id, created_at, nombre, etc.) son privados (indicados por el "-") y se inicializan en el constructor.

El método **constructor** se utiliza para crear una instancia de la clase Perfil a partir de un objeto con datos.


Vamos a representar todas las clases juntas indicando como ser relacionan entre sí: 
https://gitmind.com/app/docs/fgi5pva1