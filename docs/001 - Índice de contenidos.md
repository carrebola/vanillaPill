---
title: Resumen de contenidos
tags:
  - Introducción

position: 0
---

## Introducción
### ¿De qué va esto...?
- Antecedentes
- Objetivos generales
- ¿Cómo está organizada la documentación?
- ¿Cómo planificamos las diferentes tareas y su temporización a la hora de realizar el proyecto?
- Entonces, ¿para qué sirve todo esto?

### Definiendo el proyecto 'Vanilla Games'
- Escenario del proyecto
- Requisitos del proyecto y casos de uso general
- Fases de desarrollo. Versiones
- Arquitectura y tecnologías
  - ¿Qué arquitectura vamos a utilizar en nuestro proyecto?
  - ¿Cómo diseñaremos nuestro FrontEnd ?
  - ¿Cómo implementaremos las funcionalidades del BackEnd?
- Nuestro entorno de desarrollo: VSCODE
- Y para el despliegue de nuestras aplicaciones


### Stack tecnológico (PENDIENTE)
  - Resumen de tecnologías y herramientas empleadas

### [Un poco de ayuda para organizar el trabajo: Metodologías Agile.(PENDIENTE)]
- ¿Qué son las metodologías Agile?
- Terminología: Historias, tareas, sprints, backlogs, diagramas de Gantt, etc.
- ¿Cómo Planificamos el desarrollo de nuestro proyecto?

## Técnicas para el diseño de la interficie
### Diseño centrado en el Usuario (DCU). Técnicas
- ¿Qué es el Diseño centrado en el Usuario (DCU)?
- Algunos conceptos: Fichas de usuario, bocetos, wireframes, mockups, test de usuarios, guía de estilos, benchmarking...
- Pasos comunes para el diseño de una interfaz
- ¿Cómo lo vamos a hacer nosotros?
- Fases de diseño de nuestra interfaz
### Benchmarking o estudio de buenas prácticas
- ¿Qué es un Benchmarking?
- Estudio de la competencia
### Fichas de usuario
- Modelado de personas
- Fichas de usuario
- Prototipos y test de usuarios


## Versión 1.0 
### Sprint 0: REQUISITOS
#### Requisitos y diagrama de casos de uso
- Casos de uso para la V1.0: Definición básica
- ¿Qué es un diagrama de casos de uso?
- Diagrama de casos de uso para la versión 1.0
#### Planificación del proyecto
- Backlog de producto y de sprint.
- Herramientas para la planificación, diagramas de Gantt, pizarra Kanban, etc.
#### Casos de uso especificos y diagramas de flujo
- Casos de uso específicos
- Gestión de errores
### Sprint 1: INTERFICIE
#### Diseño de la interficie. Bocetos
- Diseño de Bocetos
  - Home y menús usuarios
  - Regitro de un usuario
  - Iniciar sesión
  - Editar mi perfil
  - Listado de todos los proyectos
  - Listado de Mis proyectos
  - Detalle de un proyecto
  - Nuevo proyecto / Editar un proyecto
  - Panel administración de proyectos
  - Panel administración de usuarios

#### Test de usuarios inicial
- Primer Test de Usabilidad
- Conclusiones y modificaciones
- Vista de proyectos
- Vista del Panel de administraición de usuarios.
#### Wireframe, mockup y guía de estilos
- El papel del arquitecto de la información y el diseñador gráfico
- Y nosotros, ¿necesitamos wireframe? ¿y mockup? ¿y guía de estilos?
### Sprint 2: PROTOTIPOS
#### Entorno de desarrollo para FrontEnd
- VSCode
- Control de versiones - Git
- Repositorio en linea - Github
- Configurando entorno y subiendo página de pruebas
- Construyendo nuestro proyecto... ¡¡¡ Comienza el juego !!!
#### Maquetación de prototipos HTML
##### Comenzamos a maquetar con Bootstrap
- Frameworks como marco de trabajo en Javascript
- Frameworks para la maquetación html/css: Bootstrap vs Tailwind CSS
- ¡Maquetando nuestros prototipos!
- Página Home
- Página registro
- Página Login
- Página Editar perfil
- Página Proyectos
- Página Detalle proyecto
- Página Nuevo proyecto y editar proyecto
- Admin usuarios y admin proyectos
##### Validaciones 
- Validaciones basadas en html
- Usando Bootstrap para la validación
### Sprint 3: SPA
#### Entorno de desarrollo para contruir una SPA
- ¿Qué es una Single Page Aplication (SPA)?
- ¿Y como funciona?
- Hablemos de NodeJS
- Hablemos de 'npm'
- Hablemos de Vite
- Hablemos de GitHub Pages
- Y finalmente, hablemos de ESLint
- ESlint como linter predeterminado
#### Construyendo nuestra SPA
1. Instalando Node.js
2. Construyendo una app con vite
3. Analizando el proyecto de ejemplo
4. Modificando nuestro Scaffolding
5. Configurando vite con el archivo Vite.config.js
4. Instalando Bootstrap, Bootswatch y SASS
6. Creando versión de distribución
7. Instalando ESLint
8. Desplegando la aplicación en un servidor de pruebas (GitHub Pages)
#### Componentes y vistas
- Template para header.js
- Template para footer.js
- Template para vista homeVista.js
- Actualizando index.html
- Modificando imágenes e iconos
- Programando la lógica de los componentes y vistas (script)
  - Lógica para registro.js
- Volcando el trabajo en la rama principal. Primer PullRequest
- Visualizando repositorio con 'Git Graph'
#### Componente enrutador.js
- Cómo funciona nuestro enrutador
- Componente enrutador.js
#### Subcomponentes de header (Menús y editar perfil)
- Versión 2.0 de header
- Local Storage
- Componentes para menús. Actualizando el header
- Editar perfil en ventana modal
#### Dando funcionalidad a las vistas
- Gestión de sesiones (login y logout)
- Vista proyectos
- Vista admin
- Componente EditarPerfil
- Vista para nuevo proyecto y editar detalle
### Sprint 4: BACKEND
#### Diseño de la base de datos
  - Diagrama de Entidad - Relación
#### A cerca del Diagrama de clases y el Mapping
  - ¿Qué es un diagrama de clases?
  - ¿Qué es un ORM?
  - ¿Y para qué queremos esto?
#### Diseño del diagrama de clases
- Clases para el ORM
- Diseño de todas las clases y sus relaciones
- Diagrama de clases
#### SUPABASE como servicio backend
- A cerca de Supabase
- Nuevo proyecto
#### Construcción de tablas y usuarios
- reamos Tabla Perfiles
- Creamos Tabla proyectos
- Registramos Usuarios
- Añadimos datos a la tabla perfiles
- Primera consulta a la tabla perfiles
- Insertando datos en la tabla proyectos
#### Probando supabase con javascript
- La API de Javascript de Supabase
- Funciones en Supabase. Las Stored Procedures
  - Función 'proyecto_detalle_todos'
  - Función proyecto_detalle_todos
  - Función proyecto_detalle
  - Función perfil_detalle
  - Función perfil_detalle_todos
- Resumen del código JS necesario para la comunicación con la BD
  - APIS para gestion de usuarios
  - APIS para tablas
  - Funciones
  - Pruebas de conexión a la bd desde proyecto javascript
  -   Conexión con la base de datos
  -   Consultando las tablas
  -   Manejando sesiones y usuarios
  -   Probando funciones de posgreSQL
  -   ...
#### Implementación del ORM (mapping) en javascript
  - Definición de las clases a partir del diagrama de clase
    - Clases y propiedades para cada tabla
    - Métodos generales. Implementación de la lógica de los métodos empleando la API de Supabase
    - Clases extendidas para los métodos basados en funciones multitabla. Implementación de la lógica asociada.
  - Testing de las clases
    - Testing basado en librerias (Mocha y Chai)
    - Diseño de los test para todos los métodos de las clases implementadas
    - Pruebas
### Sprint 5: INTEGRACIÓN FRONTEND Y BACKEND
  #### Conectando la app con el backend
  - Versión actualizada del registro de usuarios
  - Versión actualizada de la vista login y logout
  - Versión actualizada del componente Header.js
  - Versión actualizada del componente formEditarPerfil.js
  - Versión actualizada de las vistas para proyectos
  - Versión actualizada de las vistas para perfiles
  #### Test y despliegue en producción
  


 
