---
title: "Funciones en Supabase. Las Stored Procedures"
---

Vamos a crear funciones de PostgreSQL en supabase. 
## Función '*proyecto_detalle_todos*'
La función proyecto_detalle es una función que debe devolvernos todos los campos de la tabla *proyectos* y además el **nombre** y los **apellidos** del usuario que ha creado el proyecto.

Primero vamos a crear la consulta SQL y vamos a probarla.

Nos vamos al panel de consultas SQL de Supabase y escribimos:

```sql
SELECT proyectos.*, perfiles.nombre as nombre_usuario, perfiles.apellidos as apellidos_usuario 
FROM proyectos 
INNER JOIN perfiles 
ON proyectos.user_id = perfiles.user_id 
```
Fíjate que lo que hacemos es cruzar las tablas *perfiles* y *usuarios* donde los **user_id** coinciden.

Como ya tenemos datos de prueba en las tablas deberíamos obtener el siguiente resultado:

![consulta proyecto_detalle](/imagenes/v1/bd/consulta1.png)

Ahora que ya sabemos que la consulta es correcta, vamos a crear la función que nos devuelva estos datos. 

El código sql para crear esta función es el siguiente:

### Función *proyecto_detalle_todos*
```sql
CREATE FUNCTION proyecto_detalle_todos()
RETURNS TABLE (
  id integer,
  user_id UUID,
  nombre TEXT,
  descripcion TEXT,
  imagen TEXT,
  enlace TEXT,
  repositorio TEXT,
  estado TEXT,
  nombre_usuario TEXT,
  apellidos_usuario TEXT
) AS $$
  SELECT proyectos.id, proyectos.user_id, proyectos.nombre, proyectos.descripcion, proyectos.imagen, proyectos.enlace, proyectos.repositorio, proyectos.estado, perfiles.nombre AS nombre_usuario, perfiles.apellidos AS apellidos_usuario
  FROM proyectos 
  INNER JOIN perfiles 
  ON proyectos.user_id = perfiles.user_id 
$$ LANGUAGE sql;
```
Si la ejecutamos la respuesta sería del tipo: 

```
Success. No rows returned
```
Esto significa que la función se ha creado correctamente y que no ha devuelto filas. Es normal, ya que esta consulta lo que hace es crear la función.

Si queremos comprobar si se ha creado correctamente podemos ir la opción **database** del menú vertical izquierdo y hacer click en la opción **Functions**.

Aquí verás las funciones que tienes creadas

![funciones](/imagenes/v1/bd/functions.png)

:::note
En esta captura puedes ver todas mis funciones. En tu proyecto solo deberías ver la que acabas de crear, es decir, ***proyecto_detalle_todo***s
:::

Ahora solo nos falta probar desde el panel de consultas nuestra función. Puedes hacerlo con la consulta:

```select proyecto_detalle_todos()```

El resultado debería ser este:

```
"proyecto_detalle_todos"
"(7,1dd53fb9-fa27-4aa3-8c91-2b5de5edba76,""Proyecto de Análisis de Datos de Marketing"",""Este proyecto permite analizar los datos de marketing de una empresa"",https://imagen.com/analisis-marketing.jpg,https://enlace.com/analisis-marketing,https://github.com/proyecto-analisis-marketing,Inactivo,Gary,Alumno2)"
"(6,1dd53fb9-fa27-4aa3-8c91-2b5de5edba76,""Proyecto de Visualización de Datos"",""Este proyecto permite visualizar datos de una empresa"",https://imagen.com/visualizacion-datos.jpg,https://enlace.com/visualizacion-datos,https://github.com/proyecto-visualizacion-datos,Activo,Gary,Alumno2)"
"(5,1dd53fb9-fa27-4aa3-8c91-2b5de5edba76,""Proyecto de Gestión de Proyectos"",""Este proyecto permite gestionar proyectos de una empresa"",https://imagen.com/gestion-proyectos.jpg,https://enlace.com/gestion-proyectos,https://github.com/proyecto-gestion-proyectos,Inactivo,Gary,Alumno2)"
"(4,1dd53fb9-fa27-4aa3-8c91-2b5de5edba76,""Proyecto de Análisis de Redes Sociales"",""Este proyecto permite analizar las redes sociales de una empresa"",https://imagen.com/analisis-redes-sociales.jpg,https://enlace.com/analisis-redes-sociales,https://github.com/proyecto-analisis-redes-sociales,Activo,Gary,Alumno2)"
```


:::note
Como podemos observar, los datos se muestran en un formato diferente a una tabla. Cuando usemos la función desde javascript el formato será json, como para el resto de las funciones de la API
:::

Vamos a hacer lo mismo para el resto de funciones. Aquí tienes el código:

## Función *proyecto_detalle*
```sql title="función proyecto_detalle"
CREATE FUNCTION proyecto_detalle(proyecto_id integer)
RETURNS TABLE (
  id integer,
  user_id UUID,
  nombre TEXT,
  descripcion TEXT,
  imagen TEXT,
  enlace TEXT,
  repositorio TEXT,
  estado TEXT,
  nombre_usuario TEXT,
  apellidos_usuario TEXT
) AS $$
  SELECT proyectos.id, proyectos.user_id, proyectos.nombre, proyectos.descripcion, proyectos.imagen, proyectos.enlace, proyectos.repositorio, proyectos.estado, perfiles.nombre AS nombre_usuario, perfiles.apellidos AS apellidos_usuario
  FROM proyectos 
  INNER JOIN perfiles 
  ON proyectos.user_id = perfiles.user_id 
  WHERE proyectos.id = proyecto_id;
$$ LANGUAGE sql;

```

## Función *perfil_detalle*

```sql title="Función perfil_detalle"
CREATE FUNCTION perfil_detalle(userid UUID)
RETURNS TABLE (
  id integer,
  created_at timestamp,
  user_id UUID,
  nombre TEXT,
  apellidos TEXT,
  avatar TEXT,
  estado TEXT,
  rol TEXT,
  email TEXT
) AS $$
SELECT perfiles.id, perfiles.created_at, perfiles.user_id, perfiles.nombre, perfiles.apellidos, perfiles.avatar, perfiles.estado, perfiles.rol, auth.users.email
FROM perfiles 
INNER JOIN auth.users 
ON perfiles.user_id = auth.users.id 
WHERE auth.users.id = userid
$$ LANGUAGE sql;
```


## Función *perfil_detalle_todos*
```sql title="función perfil_detalle_todos"

CREATE FUNCTION proyecto_detalle(proyecto_id integer)
RETURNS TABLE (
  id integer,
  user_id UUID,
  nombre TEXT,
  descripcion TEXT,
  imagen TEXT,
  enlace TEXT,
  repositorio TEXT,
  estado TEXT,
  nombre_usuario TEXT,
  apellidos_usuario TEXT
) AS $$
  SELECT proyectos.id, proyectos.user_id, proyectos.nombre, proyectos.descripcion, proyectos.imagen, proyectos.enlace, proyectos.repositorio, proyectos.estado, perfiles.nombre AS nombre_usuario, perfiles.apellidos AS apellidos_usuario
  FROM proyectos 
  INNER JOIN perfiles 
  ON proyectos.user_id = perfiles.user_id 
  WHERE proyectos.id = proyecto_id;
$$ LANGUAGE sql;

```
:::note ✍ TAREA ✍
Revisa las funciones necesarias para poder implementar todos los métodos de las clases de nuestro diagrama de clases y créalas si es necesario.
:::







