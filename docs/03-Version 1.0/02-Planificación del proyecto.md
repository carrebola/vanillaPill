---

title: Planificación del proyecto
tags:
  - Requisitos
position: 10

---

## Planificación del proyecto

¡Estamos listos y hemos comenzado a desarrollar la **versión 1.0** de nuestro proyecto!

En el apartado anterior hemos definido qué funcionalidades debe tener.

Además, hemos analizado las diferentes arquitecturas y tecnologías y hemos optado por utilizar una CSR (SPA en javascript conectada a Supabase).

Por lo tanto estamos en condiciones de definir cada una de las tareas que necesitaremos realizar para llevar a cabo esta primera versión del proyecto.

Para poder planificar el trabajo, vamos a crear el **backlog de proyecto**, es decir, vamos a desglosar el trabajo en **historias**, a continuación vamos a crear el **backlog de sprint** (agrupando las historias) para finalmente poder **planificar su temporización**


:::info 
<details>
  <summary>¿Qué es el backlog de producto?</summary>
  

**El Backlog de producto** (Product Backlog en inglés) es una herramienta clave en la metodología Scrum, utilizada para gestionar el trabajo a realizar en un proyecto de software o desarrollo de producto. 

El backlog de producto es **una lista ordenada de todas las funcionalidades, características, requisitos y mejoras** que deben ser desarrollados en el producto para cumplir con los objetivos del proyecto.

El backlog de producto es creado por el **Product Owner** (dueño del producto) en colaboración con el equipo de desarrollo. El Product Owner es responsable de priorizar el backlog de producto y asegurar que las funcionalidades más importantes y valiosas sean entregadas primero. **El equipo de desarrollo utiliza el backlog de producto para planificar y estimar el trabajo a realizar en cada iteración (sprint) del proyecto.**

El backlog de producto es una **herramienta valiosa para el desarrollo ágil de software**, ya que ayuda a mantener el enfoque en el valor que se está entregando al usuario final, **asegura que el equipo de desarrollo esté trabajando en las funcionalidades más importantes y permite una planificación más precisa de las iteraciones del proyecto.**
</details>
:::
### Backlog de producto y de sprint. 
Estas serían las historias a planificar en la entrega de la versión 1 de nuestro proyecto agrupadas por sprints:

#### SPRINT 0: Requerimentos de la versión 1.0
- **Historia x. Casos de uso especificos y diagramas de flujo**
  Como desarrollador quiero definir las especificaciones y casos de uso para la versión 1.0.
#### SPRINT 1: Diseño de la interficie

- **Historia x. Modelado de usuarios:**
  Como diseñador quiero crear modelos de usuarios focales y secundarios basandonos en el DCU (Diseño centrado en usuario)

- **Historia x. Bocetos y wireframes:**
  Como diseñador quiero dibujar los bocetos de todas las posibles pantallas del proyecto y testear su funcionamiento.

- **Historia x. Mockup y guía de estilos:**
  Como diseñador quiero dibujar los mockups y crear la guía de estilos a partir de los colores, tipografías, etc seleccionadas.
#### SPRINT 2: Frontend
- **Historia x. Entorno de desarrollo:**
  Como diseñador/programador quiero instalar y configurar las herramientas necesarias para programar la aplicación, trabajar con repositorios y crear un entorno integración continua y despliegue continuo.

- **Historia x. Prototipos html:**
  Como maquetador web quiero crear las páginas html del proyecto a partir de los wireframes aplicando la guía de estilos y utilizando Bootstrap 5.

- **Historia x. Validaciones de formularios:**
  Como programador quiero definir e implementar las validaciones de los formularios del proyecto
 
#### Sprint 3: Implementación de la SPA
- **Historia x. Creación de proyecto basado en SPA y organización de archivos para las vistas basadas en módulos js:**
  Como programador quiero configurar el sistema de carpetas para las vistas y crear los archivos a partir de componentes html basados en los prototipos.

- **Historia x. Creación de componentes:**
  Como programador quiero crear los componentes para el encabezado, el enrutado de las páginas y los menús.

- **Historia x. Diseño del aspecto de las vistas:**
  Como usuario quiero poder navegar por todas las vistas de la aplicación (al margen del rol).

- **Historia x. Diseño de las vistas a partir de los datos de un archivo JSON:**
Como programador quiero simular las tablas de usuarios y proyectos basados en datos ficticios obtenidos de una archivo json de prueba.

- **Historia x. Lógica para la administración de usuarios y proyectos (ver, editar, borrar, etc.):**

- **Historia x. Implementación de la lógica para la validación de los formularios:**
loginVista.js
registroVista.js
formEditarPerfil.js
nuevoProyectoVista.js

- **Historia x. Lógica para la autenticación de usuarios:**
Como usuario registrado quiero poder recordar los datos de sesión al loguearme (Uso de localStorage)

- **Historia x. Actualización de componentes header y menús en función del rol de usuario logueado:**
Como usuario logueado quiero ver solo las opciones que corresponden a mi rol.

#### Sprint 4: Backend

- **Historia x. Diseño de la base de datos:**
  Como programador quiero diseñar la base de datos en base a diagrama UML (diagrama entidad-relación)

- **Historia x. Implementación de las tablas y funciones en supabase:**
  Como programador quiero implementar las bases de datos en Supabase, diseñar las consultas e implementar las funciones postgree multitabla

- **Historia x. API javascript de Supabase:**
  Como programador quiero probar las apis de javascript para el acceso a la base de datos

- **Historia x. Implementación de un ORM para mapping de la base de datos:**
  Como programador quiero diseñar el diagrama de clases e implementarlo en javascript para tener un mapping de la bd.

#### Sprint 5: Integración del frontend y el backend

- **Historia x. Login y registro:**
  Como usuario quiero poder registrarme e iniciar sesión.

- **Historia x. Gestión de sesiones:**
  Como usuario registrado quiero ver la web en base al rol que tengo asignado.

- **Historia x. Editar perfil**
  Como usuario registrado quiero poder ver y modificar mi perfil.

- **Historia x. Gestión de Proyectos (Vista proyectos, detalle proyecto, etc):**
  Como usuario registrado 'desarrollador' quiero poder ver los proyectos, ver mis proyectos, crear proyectos, ver detalle de los proyectos y editar y borrar mis proyectos.

- **Historia x. Gestión de usuarios:**
  Como usuario registrado 'administrador' quiero poder ver, editar y borrar los usuarios del sistema.
#### Sprint 6: Revisión y despliegue en producción de la versión 1.0

- **Historia x. Test de usuarios**
  Como diseñador quiero realizar tests de usuarios a un grupo de usuarios focales.

- **Historia x. Revisión de la aplicación**
  Como programador quiero revisar y corregir los posibles problemas detectados en el test de usuarios.

- **Historia x. Despliegue en producción (RAILWAY)**
  Como programador quiero despleguar la aplicación en producción.

## Herramientas para la planificación, diagramas de Gantt, pizarra Kanban, etc.



