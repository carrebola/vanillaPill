---

title: Casos de uso especificos y diagramas de flujo
tags:
  - Casos de uso
position: 20

---


### Actor: Usuario 'Anónimo'
1. Puede **Ver la página principal** y a la información general *Recursos*, *A cerca de *, etc.
2. Puede registrarse
3. Puede acceder a la ventana de inicio de sesión

### Actor: Usuario 'Registrado'
Puede hacer lo que el usuario anónimo y además:
1. Puede cerrar sesión
2. Puede ver/actualizar su perfil
3. Puede darse de baja*
4. Puede una lista de proyectos creados por otros usuarios.
5. Puede ver el detalle de un proyecto

### Actor: Usuario 'Alumno'
Puede hacer todo lo que hace el usuario Registrado y además:
1. Puede subir un proyecto nuevo
2. Puede editar sus proyectos
3. Puede borrar sus proyectos
4. Puede bloquear sus proyectos

### Actor: Usuario 'Profesor'
Puede hacer todo lo que hace el usuario Registrado y además:
1. Puede ver listado de usuarios registrados
2. Puede modificar el rol de un usuario 'registrado' a 'alumno'

### Actor: Usuario 'Administrador'
Puede hacer todo lo que hace el usuario Profesor y además:
1. Puede editar datos de usuarios
2. Puede borrar usuarios
3. Puede bloquear usuarios
4. Puede editar datos de proyectos
5. Puede borrar proyectos
6. Puede bloquear proyectos
   







### Ejemplo
- Código: CS-0100.
- Nombre: Llamada de voz.
- Actores: Usuario.
- Descripción: El usuario del teléfono levanta el auricular y marca el número de destino. Al completar la secuencia de dígitos la conexión se realiza. Por medio de tonos particulares el sistema indica el estado de error y de progreso en la conexión.
- Precondición: El teléfono está colgado.
- Postcondición: Ninguna.