---
sidebar_position: 1
---

# Proyecto basado en Supabase como servicio BackEnd
En este tutorial guiado aprenderemos a desarrollar un proyecto fullstack desde cero. 
En el lado del frontend utilizaremos vanilla JS para crear una SPA, y Boostrap con SASS para el diseño de las páginas.

En el lado del backend utilizaremos Supabase como servicio para la persistencia en bases de datos relacionales (postgreSQL), un sistema de autenticación basado en proveedores como google, github, etc, controlaremos el accesos según roles a través de las políticas de permisos, y almacenaremos archivos (imagenes) en el storage que nos proporciona.

En el entorno de desarrollo tendremos a VisualStudio Code trabajando sobre nodejs y su gestor de paquetes npm. Configuraremos el IDE con los plugins necesarios para facilitar un buen flujo de trabajo.

Formatearemos el código siguiendo el estandard 'standard' mediante herramientas de verificación de código como 'Eslint'

Trabajaremos con un repositorio git que sincronizaremos con github. Emplearemos el flujo de trabajo `Flujo de rama de funcionalidad` y desplegaremos el proyecto en github pages.


## BackEnd basado en SUPABASE
- Crearemos un nuevo proyecto basado en supabase
- Crearemos las tablas: perfiles, proyectos, notas y comentarios
- Llenaremos la tabla perfiles con datos inventados a través del panel de supabase
- Probaremos consultas sql
## FrontEnd basado en vite. Integración continua y Despliegue continuo
- Crearemos un proyecto html/javascript con bootstrap utilizando vite y crearemos una spa básica con formularios y tablas
- Crearemos un repositorio y una rama de desarrollo y lo sincronizaremos con GitHub.
- Crearemos un sistema de despliegue continuo basado en GitHub mediante gh-pages.

## Probando la api de Supabase
- Programaremos la lógica para realizar la conexión con la base de datos y  mostrar los datos de la tabla perfiles
- Gestión de Supabase a través de la api de javascript
- Aprenderemos a gestionar el registro de usuarios (users):
- Invitaremos a un usuario que será administrador
- Crearemos la lógica para poder registrar usuarios en la tabla users
- Crearemos la lógica para insertar datos de usuario en la tabla perfiles
## Funciones Supabase
- Llenaremos la tabla comentarios con algunos datos de ejemplo
- Crearemos una función de supabase para hacer una consulta de múltiples tablas utilizando sql. En este caso mostraremos la tabla de comentarios donde se mostrará el comentario y el nombre del usuario que ha hecho el comentario
- Crearemos la lógica para mostrar los datos de la tabla comentarios 
## Triggers
- Crearemos una función de supabase utilizando lenguaje propio de PostgreeSQL (PL/PgSQL) para actualizar el campo estado de la tabla perfiles
- Crearemos un sistema basado en triggers que detecte cuando un usuario ha pasado de pendiente a registrado (haciendo uso del mail de confirmación) y que modifique el campo estado de la tabla perfiles. Para ello crearemos un trigger que se dispare cuando haya cambiado una fila de la tabla users y llame a la función que actualiza el estado de la tabla perfiles
## Permisos
- Aprenderemos a gestionar los permisos de lectura y escritura de las tablas dependiendo del rol de cada usuario.
- La lectura de la  tabla proyectos será de acceso público
- La lectura de la tabla comentarios será de acceso limitado a los usuarios registrados 
- Sistema de inicio de sesión y cierre de sesión (login / logout)
- Crearemos un formulario para inicio de sesión
- Crearemos la lógica para iniciar sesión y mostrar los datos del usuario ‘logueado’ en la pantalla.
- Verificaremos que se muestra la tabla comentarios
- Crearemos un botón para cerrar sesión y la lógica correspondiente.
## CRUD
- Crearemos el crud para perfiles
- Crearemos el crud para proyectos
- Crearemos el crud para comentarios
## Archivos
- Crearemos un sistema de archivos para poder subir y administrar imágenes de los diferentes proyectos
## Eventos
- Aprenderemos a trabajar con el sistema de eventos de Supabase que nos permitirá ver cómo se actualizan los comentarios en tiempo real, sin necesidad de actualizar la página




