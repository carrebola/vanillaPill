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

- **getAll**: Devolverá un objeto con todos los registros de la tabla.
- **getById**: Devolverá un objeto con los datos del registro que coincida con el campo *id*.
- **getByUserId**: Devolverá un objeto con los datos del registro que coincida con el campo *user_id*.
- **create**: Creará una nueva fila con los campos que le pasemos.
- **update**: Actualizará la fila correspondiente al registro cuyo campo id coincida con el que le pasemos, con los campos que le pasemos.

:::info Como crear un diagrama de clases
Si no recuerdas como crear un diagrama de clases aquí te dejo un enlace que lo explica:

👉[Cómo crear un Diagrama de clases](https://diagramasuml.com/diagrama-de-clases/?utm_content=cmp-true)👈
:::
El diagrama de clases para la clase perfiles quedaría de la siguiente manera:


![Perfiles](/imagenes/v1/bd/dcperfiles.png)

En este diagrama:

La **clase** "Perfil" representa los perfiles de tu sistema, con atributos correspondientes a las columnas en la base de datos.

Los **métodos estáticos** (como getAll, getById, create, update) se pueden llamar directamente en la clase sin crear una instancia previa.

Los **atributos** (id, created_at, nombre, etc.) son publicos (indicados por el "+") y se inicializan en el constructor.

El método **constructor** se utiliza para crear una instancia de la clase Perfil a partir de un objeto con datos.

## Diseño de todas las clases y sus relaciones

De momento está claro que, cómo mínimmo, necesitamos tantas clases como tablas queramos consultar. Pero eso no es todo, también necesitamos otras clases que nos permitan interactuar con la base de datos a otro nivel (por ejemplo a través de consultas multitabla).

Para diseñar las clases debemos tener presente todas las funcionalidades que se esperan de nuestra app (que en principio deberían conincidir con los casos de uso).

Y para definir todas las funcionalidades de nuestra app necesitarmos revisar todo el trabajo realizado en el momento en el que  definimos las especificaciones del proyecto, casos de usos y prototipos.

Hagámoslo, y llegaremos a la conclusión de que necesitamos las siguientes funcionalidades:

Para los usuarios:
- registrar usuario
- iniciar sesión
- cerrar sesión
- borrar usuario
- actualizar usuario
- obtener datos de un usuario (email y contraseña)
- obtener una lista de todos los usuarios registrados

Para los perfiles asociados a estos usuarios:
- obtener datos de un perfil asociado a un usuario  (nombre, apellidos, etc)
- obtener una lista de todos los perfiles
- borrar un perfil
- actualizar un perfil

Para los proyectos:
- obtener datos de un proyecto según su id (nombre, descripción, etc)
- obtener datos de un proyecto según el id del usuario que lo ha creado
- obtener una lista de todos los proyectos
- borrar un proyecto
- actualizar un proyecto

Pero eso no es todo. Si nos fijamos en el prototipo que muestra la tabla con todos los proyectos veremos que los datos mostrados son el resultado de cruzar la tabla *proyectos* con la tabla *perfiles*, es decir, de una consulta multitabla. De esta funcionalidad derivará una nueva clase llamada *proyectoDetalle*. Y ocurre algo parecido con la tabla perfil.

Os lo vuelo a explicar después, con más detalle.

Ahora toca diseñar el diagrama de clases tal y como nos lo explicaron en el módulo de **'Entornos de desarrollo'**. El resultado final sería algo así:
 
## Diagrama de clases


![Diagrama de clases](/imagenes/v1/bd/dc.svg)

[🔍 **AMPLIAR IMAGEN**](/imagenes/v1/bd/dc.svg)

*Diseñado con GitMind (https://gitmind.com/app/docs/fgi5pva1)*

Como puedes observar: La clase ***Users*** representa la tabla ***users***, la clase ***Perfiles*** representa a la tabla ***perfiles*** y la clase ***Proyectos*** representa a la tabla ***proyectos***.

Cada una tiene las mismas propiedades que tienen los campos de las tablas.

Por otro lado, tenemos las clases ***Perfil_detalle*** y ***Proyecto_detalle***. Éstas son **clases heredadas** de *Perfiles* y *Proyectos* respectivamente y tienen la peculiaridad de que incluyen algún atributo extra y tres nuevos métodos.

Os explico el por qué de estas clases:

Si revisamos el boceto donde se muestran todos los proyectos, podemos ver que en la tabla se muestra, en cada fila, la información del proyecto junto con el nombre del autor.

![prototipo proyetos](/imagenes/v1/prototipos/proyectos/proyectos.png)

Los métodos de la clase *Proyectos* solo incluye los campos de la tabla *proyectos*. Pero en la tabla proyectos no aparece el nombre del autor sino su user_id.

Si queremos un método capaz de obtener toda la información (resultado de una consulta que combina dos tablas), necesitamos un método nuevo: el método *getDetalleAll()*.

Y como este método nos retorna información que no está contemplada en las propiedades de la clase ***Proyectos***, nos vemos obligado a crear una clase nueva (que heredada de la clase *Proyectos*), con dos propiedades nuevas ***nombre_autor*** y ***apellidos_autor*** y varios métodos añadidos: *getDetalleAll()*, ***getDetalleById(id: number)*** y ***getDetallaByUserId(iser_id: UUID)***

Y con estas clases ya podemos crear nuestra **capa de abstracción** entre la programación de la app y la lógica para acceder a los datos de base de datos.
