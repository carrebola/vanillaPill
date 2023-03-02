---
sidebar_position: 1
---

# Definición del proyecto
## Introducción
En este tutorial guiado aprenderemos a desarrollar un proyecto fullstack desde cero. 
En el lado del frontend utilizaremos vanilla JS para crear una SPA, y Boostrap con SASS para el diseño de las páginas.

En el lado del backend utilizaremos Supabase como servicio para la persistencia en bases de datos relacionales (postgreSQL), un sistema de autenticación basado en proveedores como google, github, etc, controlaremos el accesos según roles a través de las políticas de permisos, y almacenaremos archivos (imagenes) en el storage que nos proporciona.

En el entorno de desarrollo tendremos a VisualStudio Code trabajando sobre nodejs y su gestor de paquetes npm. Configuraremos el IDE con los plugins necesarios para facilitar un buen flujo de trabajo.

Formatearemos el código siguiendo el estandard 'standard' mediante herramientas de verificación de código como 'Eslint'

Trabajaremos con un repositorio git que sincronizaremos con github. Emplearemos el flujo de trabajo `Flujo de rama de funcionalidad` y desplegaremos el proyecto en github pages.

## Objetivos del proyecto
## Sprints, historias y tareas
### Historia 0: Definición del proyecto. Casos de uso, prototipos y diagrama de clases.

### Historia 1: Supabase. Introducción al BackEnd como servicio.- Crearemos un nuevo proyecto basado en supabase
- Crearemos las tablas: perfiles, proyectos, notas y comentarios
- Llenaremos la tabla perfiles con datos inventados a través del panel de supabase
- Probaremos consultas sql
### Historia 2: FrontEnd basado en vite. Integración continua y Despliegue continuo en servidor de prueba
- Crearemos un proyecto html/javascript con bootstrap utilizando vite y crearemos una spa básica con formularios y tablas
- Crearemos un repositorio y una rama de desarrollo y lo sincronizaremos con GitHub.
- Crearemos un sistema de despliegue continuo basado en GitHub mediante gh-pages.

### Historia 3: Conexión asincrona con el servicio backend de supabase. Pruebas I (API DOCS)
- Programaremos la lógica para realizar la conexión con la base de datos y  mostrar los datos de la tabla perfiles
- Probaremos la api de javascript para gestión de tablas
- Aprenderemos a gestionar el registro de usuarios (users):
- Invitaremos a un usuario que será administrador
- Crearemos la lógica para insertar/ leer datos de usuario de la tabla perfiles
- Crearemos una función de supabase para hacer una consulta de múltiples tablas utilizando sql. En este caso mostraremos la tabla de comentarios donde se mostrará el comentario y el nombre del usuario que ha hecho el comentario
- Crearemos la lógica para mostrar los datos de la tabla comentarios 
### Historia 4: Usuarios en Supabase. Registro, Login/logout y detalle user. Pruebas II (API DOCS)
- Probaremos la api para registro, login y logout
### Historia 5: Supabase. Configuración de Triggers
- Crearemos una función de supabase utilizando lenguaje propio de PostgreeSQL (PL/PgSQL) para actualizar el campo estado de la tabla perfiles
- Crearemos un sistema basado en triggers que detecte cuando un usuario ha pasado de pendiente a registrado (haciendo uso del mail de confirmación) y que modifique el campo estado de la tabla perfiles. Para ello crearemos un trigger que se dispare cuando haya cambiado una fila de la tabla users y llame a la función que actualiza el estado de la tabla perfiles
### Historia 6: Supabase. Gestión de permisos. Pruebas III (API DOCS)
- Aprenderemos a gestionar los permisos de lectura y escritura de las tablas dependiendo del rol de cada usuario.
- Craremos y testearemos las politicas de permisos definidas.
### Historia 6. Supabase. Storage para la Gestión de archivos. Pruebas IV (APIU DOCS)
- Crearemos un sistema de archivos para poder subir y administrar imágenes de los diferentes proyectos
### Historia 7. Supabase. Funciones en tiempo real (Edge Functions) Pruebas V (API DOCS)
- Aprenderemos a trabajar con el sistema de eventos de Supabase que nos permitirá ver cómo se actualizan los comentarios en tiempo real, sin necesidad de actualizar la página
### Historia 8. Configuración del entorno de desarrollo para nuestro proyecto
- Instalaremos y configuraremos ESLint para trabajar con el modelo 'standard' de programación.
### Historia 9. Definición del mapping de acceso a la bd.
- Crearemos las clases necesarias (definición de propiedades y métodos) para mapear las tablas de nuestra base de datos
### Historia 10. Testing de las clases
- Crearemos los test unitarios para analizar el buen funcionamiento de todas las clases.
### Historia 11. Diseño de las vistas
- Crearemos las vistas html: Registro, login, administración, Proyectos, Edición perfil, etc. 
### Historia 12. Diseño de componentes vanillaJS
- Craremos los componentes para cada vista y la lógica asociada.
### Historia 13. Servidores para Despliegue a producción definitivo.
- Desplegaremos el proyecto en Railways






