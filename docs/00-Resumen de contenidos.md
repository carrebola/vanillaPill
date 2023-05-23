---
id: intro
title: Index
tags:
  - Introducción

position: 0
---

# Index
## Introducción
### De qué va esto...
- Antecedentes
- Objetivos generales
- Cómo está organizada la documentación
- Cómo planificamos las diferentes tareas y su temporización a la hora de realizar el proyecto
- Entonces, ¿para que sirve todo esto?

### El proyecto 'Vanilla Games'
- Escenario del proyecto
- Requisitos del proyecto y casos de uso general
- Fases de desarrollo. Versiones
- Arquitectura y tecnologías
  - ¿Qué arquitectura vamos a utilizar en nuestro proyecto?
  - ¿Como diseñaremos nuestro FrontEnd ?
  - ¿Como implementaremos las funcionalidades del BackEnd?
- Nuestro entorno de desarrollo: VSCODE
- Y para el despliegue de nuestras aplicaciones


### Stack tecnológico (PENDIENTE)
  - Resumen de tecnologías y herramientas empleadas

### Metodologías Agile. Conceptos (PENDIENTE)
- ¿Qué son las metodología Agile?
- Terminología: Historias, tareas, sprints, backlogs, diagramas de Gantt, etc.
- Como Planificamos el desarrollo del proyecto

## Técnicas pra el diseño de la interficie
### Benchmarking o estudio de buenas prácticas
- Estdudio de la competencia
### Diseño centrado en el usuario (DCU). Fichas de usuario
- Modelado de personas
- Fichas de usuario

### 


## Versión 1.0 

### Requesitos y diagrama de casos de uso
- Casos de uso. Definición básica
- Diagrama de casos de uso
### Planificación del proyecto
- Backlog de producto y de sprint.
- Planificación, diagramas de Gantt, pizarra Kanban, etc.
- Microsoft Project
## Casos de uso especificos y diagramas de flujo
## FRONTEND: Diseño de la interfaz de usuario
  - Diseño de Prototipos
    - Bocetos y Wireframes
    - Mockup y Guía de estilos
  - Analisis de la Usabilidad
    - Test de usuarios
  - Consideraciones respecto a la Accesibilidad
## Entorno de desarrollo para FrontEnd
  - Herramientas de desarrollo.
  - Instalación y configuración de VSCode. Plugins
  - Repositorios
    - Instalación y configuración de GIT
    - Repositorios en GitHub
  - Servidores para despliegue del proyecto
    - Servidor de pruebas. GitHub Pages
    - Servidores para despliegue en producción. Railway
  - Integración continua y despliegue continuo (CI/CD)
### Maquetación de prototipos HTML
  - Diseño de páginas HTML
    - Home
    - Registro
    - Login
    - Proyectos
    - Usuarios
    - etc.
  - Validación de formularios mediante html5
### Implementación del proyecto basado en SPA
  - Concepto de SPA basado en Vanilla Javascript
  - Configuración del entorno de desarrollo
    - Creación del proyecto basado en VITE
    - Configuración del entorno de desarrollo
      - Instalación de librerias
      - ESLINT
      - Conexión con Repositorios y servidores
      - Integración continua y despliegue continuo
    - Diseño básico para las vistas
      - Organización en carpetas
      - Creación de archivos con vistas básicas
    - Primeros componentes: Header, router y menús
    - Diseño de las priveras vistas (solo HTML)
      - loginVista.js
      - registroVista.js
      - formEditarPerfil.js
      - Proyectos
        - nuevoProyectoVista.js
        - detalleProyectoVista.js
        - editarProyectoVista.js
        - proyectosVista.js
        - misProyectosVista.js
      - Usuarios
        - adminUsuariosVista.js
    - Lógica para las vistas
      - Generación de datos de usuario a partir de archivos JSON:
        - adminUsuariosVista.js
        - proyectosVista.js
        - misProyectosVista.js
      - Lógica para la administración de usuarios y proyectos (ver, editar, borrar, etc.)
      - Implementación de la lógica para la validación de los formularios:
        - loginVista.js
        - registroVista.js
        - formEditarPerfil.js
        - nuevoProyectoVista.js
      - Lógica para la autenticación de usuarios
        - Uso de localStorage
      - Actualización de componentes header y menús en función del rol de usuario logueado.

## BACKEND. 
### Diseño de la base de datos
  - Diagrama de Entidad - Relación
  - Diagrama de clases para el mapeo de tablas *(ORM -  Object-Relational Mapping)*
### Backend como servicio. SUPABASE
  - Creación de una cuenta de servicio
  - Entorno de la aplicación. Inteficie gráfica para la gestión de la base datos:
    - Creación de tablas
    - Inserción de datos ejemplo
    - Permisos
  - Pruebas de consultas sql
  - Diseño de consultas para los métodos del diagrama de clases
  - Creación de Funciones para las consultas multitabla
  - Configuración de triggers
    - Actualización de perfiles registrados
    - Borrado de registros derivados de otras tablas
  - Pruebas de la API de javascript
    - API para CRUD de las diferentes tablas
    - API para funciones de consulta multitabla diseñadas
    - Registro de usuarios
      - Métodos y proveedores de autenticación
      - API para registro de usuarios
    - API para Login y logout
  - Gestión de permisos
    - Ejemplos de políticas de permisos. Pruebas
    - Definición de políticas para cada tabla
  - Storage para la gestión de archivos
    - Buckets, carpetas y permisos
    - API para la gestión de archivos
    - Página de pruebas
  - Funciones en tiempo real de Supabase
    - API para las funciones en tiempo real. Pruebas
### Implementación del ORM (mapping) en javascript
  - Definición de las clases a partir del diagrama de clase
    - Clases y propiedades para cada tabla
    - Métodos generales. Implementación de la lógica de los métodos empleando la API de Supabase
    - Clases extendidas para los métodos basados en funciones multitabla. Implementación de la lógica asociada.
  - Testing de las clases
    - Testing basado en librerias (Mocha y Chai)
    - Diseño de los test para todos los métodos de las clases implementadas
    - Pruebas

## Integración de Frontend Y Backend
  - Versión actualizada del registro de usuarios
  - Versión actualizada de la vista login y logout
  - Versión actualizada del componente Header.js
  - Versión actualizada del componente formEditarPerfil.js
  - Versión actualizada de las vistas para proyectos
  - Versión actualizada de las vistas para perfiles


 