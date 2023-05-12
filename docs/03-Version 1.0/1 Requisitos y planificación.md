---

title: Requerimentos y planificación
tags:
  - Requisitos
position: 10

---


### Requerimentos
  - Requisitos del sistema
  - Requisitos del usuario
    - Requisitos funcionales
    - Requisitos no funcionales
  - Casos de uso. Diagrama de casos de uso

Vamos a definir los casos de uso para la versión 1 de nuestro proyecto. Una primera aproximación podría ser la siguiente:

## Casos de uso. Definición básica

- **Registrar usuario**: Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.
- **Recuperar contraseña**: Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico con las instrucciones para restablecer su contraseña.
- **Iniciar sesión**: Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.
- **Cerrar sesión**: Un usuario puede cerrar su sesión en la plataforma en cualquier momento.
- **Editar perfil**: Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.
- **Ver proyectos**: Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.
- Filtrar proyectos: Un usuario registrado puede filtrar los proyectos a partir de coincidencias en un buscador por nombre o descripción.
- **Ver detalle de proyecto**: Un usuario registrado puede ver el detalle de un proyecto en particular, incluyendo la información detallada del proyecto, la imagen, los enlaces a servidor de pruebas y repositorio de código, etc.
- **Publicar proyecto**: Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a servidor de pruebas y repositorio de código, estado del proyecto, etc.
- **Editar proyecto**: Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.
- **Eliminar proyecto**: Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.
- **Editar usuario**: Un administrador puede editar el perfil de cualquier usuario registrado en la plataforma.
- **Eliminar usuario**: Un administrador puede eliminar cualquier usuario registrado en la plataforma.
- **Cambiar rol de usuario**: Un administrador puede cambiar el perfil de cualquier usuario registrado en la plataforma de usuario a desarrollador o viceversa.
- **Bloquear usuario**: Un administrador puede bloquear cualquier usuario registrado en la plataforma.

## Diagrama de casos de uso
## Planificación del proyecto

Ahora que ya tenemos una idea general de qué funcionalidades debe realizar la versión 1 de nuestro proyecto, podemos desglosarlo en tareas especificas para poder planificar su temporización. ¡Vamos a por ello!
### Backlog de producto. Definición de historias de usuario y Definición de tareas para cada historia.

#### Modelado de usuarios
  Como diseñador quiero crear modelos de usuarios focales y secundarios basandonos en el DCU (Diseño centrado en usuario)
#### Bocetos
  Como diseñador quiero dibujar los bocetos de todas las posibles pantallas del proyecto.
#### Wireframes funcional
  Como diseñador quiero dibujar los wireframes con funcionalidad para poder hacer tests de usuarios.
#### Mockup y guía de estilos
  Como diseñador quiero dibujar los mockups y crear la guía de estilos a partir de los colores, tipografías, etc seleccionadas.
#### Entorno de desarrollo
  Como diseñador/programador quiero instalar y configurar las herramientas necesarias para programar, trabajar con repositorios y desplegar el proyecto.
#### Prototipos html
  Como maquetador web quiero crear las páginas html del proyecto a partir de los wireframes aplicando la guía de estilos y utilizando Bootstrap 5.
#### Validaciones de formularios
  Como programador quiero definir e implementar las validaciones de los formularios del proyecto
 #### Creación de proyecto basado en SPA y organización de archivos para las vistas basadas en módulos js
  Como programador quiero configurar el sistema de carpetas para las vistas y crear los archivos a partir de componentes html basados en los prototipos.
#### Creación de componentes
  Como programador quiero crear los componentes para el encabezado, el enrutado de las páginas y los menús.
#### Diseño del aspecto de las vistas
  Como usuario quiero poder navegar por todas las vistas de la aplicación (al margen del rol).
#### Diseño de las vistas a partir de los datos de un archivo JSON
Como programador quiero simular las tablas de usuarios y proyectos basados en datos ficticios obtenidos de una archivo json de prueba.

#### Lógica para la administración de usuarios y proyectos (ver, editar, borrar, etc.)

#### Implementación de la lógica para la validación de los formularios:
loginVista.js
registroVista.js
formEditarPerfil.js
nuevoProyectoVista.js
#### Lógica para la autenticación de usuarios
Como usuario registrado quiero poder recordar los datos de sesión al loguearme (Uso de localStorage)

#### Actualización de componentes header y menús en función del rol de usuario logueado.
Como usuario logueado quiero ver solo las opciones que corresponden a mi rol.
### Planificación de sprints:
  - Backlog de sprint.
  - Objetivos del sprint y criterios de aceptación para las historias de usuario.
### Temporización y secuencia
  - Estimación temporal de las historias y tareas
  - Secuenciación de las historias
  - Asignación de recursos y personal responsable para cada historia/tarea
  - Diagrama de Gantt
