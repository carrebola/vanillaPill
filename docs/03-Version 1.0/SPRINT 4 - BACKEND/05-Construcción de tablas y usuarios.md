---
Title: "Construyendo tablas y usuarios"
---

En la barra de herramientas tenemos la opción `Tabla Editor`. Este editor nos va a facilitar mucho la creación de las tablas de nuestro proyecto. 

Hagamos memoria. Según nuestro diagrama ER, necesitamos tres tablas: **users**, *perfiles* y **proyectos**. Tanto las tablas perfiles como la tabla proyectos son tablas `public` (públicas) y debemos crear nosotros. La tabla 'users' es una tabla que se crea de manera automática en Supabase cuando registras usuarios y pertenece al dominio `auth`.

## Creamos Tabla Perfiles

Vamos a crear la tabla perfiles mediante la interfaz de Supabase.

![Create tabla](/imagenes/v1/bd/creartabla.png)

Asegúrate de **eliminar las politicas de acceso a la tabla**. Más adelante las definiremos para determinar quién puede hacer qué dependiendo del rol asociado al usuario que accede.

:::info ¿Qué son las politicas de acceso de supabase?
 Las políticas de acceso en Supabase son conjuntos de reglas que estableces para controlar quiénes pueden acceder a qué datos y realizar qué acciones dentro de tu aplicación o base de datos. 
 
 Esto te permite gestionar quién puede **ver**, *modificar* o *eliminar* información específica, y también definir **permisos especiales** para ciertos usuarios si es necesario.
:::

Al crearse la tabla se crean automáticamente los campos **id** (que será un numero entero autoincremental y se convertirá en la **clave única**) y **create_at** que guardará la fecha y hora de creación del registro (con tipo timestamptz).

A continuación crearemos el resto de campos indicando el **type** para cada campo.

![campos de tabla perfiles](/imagenes/v1/bd/perfiles.png)

Y finalmente vamos a vincular el campo **user_id** con el campo **id** de la tabla `auth.users` creando una clave foranea. Asegurate de marcar la opción **Cascade** de 'Action if referenced row is removed'. De esta manera, si borrarmos un registro de la tabla `auth.users` se borrará también el registro de la tabla '`perfiles`' asociado a ese usuario.

## Creamos Tabla proyectos
Para la tabla proyectos emplearemos el mismo procedimiento

![campos de tabla perfiles](/imagenes/v1/bd/tablaproyectos.png)

No olvides crear la clave foranea de los campos **user_id** e **id** de las tablas **public.proyectos** y **auth.users** 

Ahora que tenemos las tres tablas creadas podemos visualizarlas con el nuevo **Schema Visualizer** que incorpora Supabase

![campos de tabla perfiles](/imagenes/v1/bd/schemavisualizer.png)

En esta imagen puedes ver las tablas públicas. Si quieres ver los campos que incorpora la tabla auth.users puedes modificar el filtro superior por 'auth'

![Visualizador de esquema de tablas](/imagenes/v1/bd/schemavisualizer_users.png)

## Registramos Usuarios

Vamos a añadir algunos usuarios a nuestra tabla users. Comenzamos por los usuarios. 

Hay muchas maneras de registrar usuarios, pero ahora la más fácil para nosotros es usando la opción `Add user`del menú `Authentication`

![Nuevo usuario](/imagenes/v1/bd/newuser.png).

Podemos crear algunos usuarios más para poder hacer pruebas. Estos son los que he creado yo. Tu puedes hacer lo mismo:

![Nuevos usuarios](/imagenes/v1/bd/users.png).

## Añadimos datos a la tabla perfiles

Como ya tenemos los usuarios registrados (como se muestra en la tabla auth.users) podemos crear los registros de la tabla `perfiles` asociados a cada uno de estos usuarios.

Podemos hacerlo con **consultas sql** o directamente accediendo a las tablas desde la opción `Table editor` y añadiendo registros. Vamos a hacerlo con este último método.

Desde el editor de tablas, haz clic sobre el nombre de la tabla `perfiles` y utiliza el botón `Insert` para añadir registros (filas), tal y como se muestra en la figura:

![Nuevos usuarios](/imagenes/v1/bd/nuevoPerfil.png).

En el campo avatar (que es de tipo texto), por el momento he añadido la url de una imagen externa. (He usado la cara de algunos músicos... que me perdonen por lo que respecta a los derechos de autor 😅)

![Nuevos usuarios](/imagenes/v1/bd/datosPerfiles.png).

:::note Fíjate bien
Al completar los datos de cada perfil, en el campo **user_id** he utilizado el **id** de la tabla `auth.users`
:::

## Primera consulta a la tabla perfiles
Ahora que tenemos la tabla perfiles con datos, vamos a hacer una consulta sql desde el SQL Editor:

```
select * from perfiles
```

![Nuevos usuarios](/imagenes/v1/bd/consultaPerfiles.png).

:::tip
Una opción interesante es que podemos guardar las consultas que hacemos.
:::

## Insertando datos en la tabla proyectos

Para insertar datos en la tabla proyectos vamos a utilizar el editor de consultas. Nos ayudaremos de la IA para facilitarnos el trabajo:

***Pregunta a ChatGPT***

![Nuevos usuarios](/imagenes/v1/bd/chatgpt.png).

***Respuesta de ChatGPT***

```sql title="Consulta SQL"
INSERT INTO proyectos (user_id, nombre, descripcion, imagen, enlace, repositorio, estado)
VALUES 
  ('2ab09b38-6629-414d-bcf5-ebb26e638973', 'Proyecto de Gestión de Inventario', 'Este proyecto permite gestionar el inventario de una empresa', 'https://imagen.com/gestion-inventario.jpg', 'https://enlace.com/gestion-inventario', 'https://github.com/proyecto-gestion-inventario', 'Activo'),
  ('2ab09b38-6629-414d-bcf5-ebb26e638973', 'Proyecto de Gestión de Personal', 'Este proyecto permite gestionar el personal de una empresa', 'https://imagen.com/gestion-personal.jpg', 'https://enlace.com/gestion-personal', 'https://github.com/proyecto-gestion-personal', 'Inactivo'),
  ('2ab09b38-6629-414d-bcf5-ebb26e638973', 'Proyecto de Análisis de Datos de Ventas', 'Este proyecto permite analizar los datos de ventas de una empresa', 'https://imagen.com/analisis-ventas.jpg', 'https://enlace.com/analisis-ventas', 'https://github.com/proyecto-analisis-ventas', 'Activo'),
  ('1dd53fb9-fa27-4aa3-8c91-2b5de5edba76', 'Proyecto de Análisis de Redes Sociales', 'Este proyecto permite analizar las redes sociales de una empresa', 'https://imagen.com/analisis-redes-sociales.jpg', 'https://enlace.com/analisis-redes-sociales', 'https://github.com/proyecto-analisis-redes-sociales', 'Activo'),
  ('1dd53fb9-fa27-4aa3-8c91-2b5de5edba76', 'Proyecto de Gestión de Proyectos', 'Este proyecto permite gestionar proyectos de una empresa', 'https://imagen.com/gestion-proyectos.jpg', 'https://enlace.com/gestion-proyectos', 'https://github.com/proyecto-gestion-proyectos', 'Inactivo'),
  ('1dd53fb9-fa27-4aa3-8c91-2b5de5edba76', 'Proyecto de Visualización de Datos', 'Este proyecto permite visualizar datos de una empresa', 'https://imagen.com/visualizacion-datos.jpg', 'https://enlace.com/visualizacion-datos', 'https://github.com/proyecto-visualizacion-datos', 'Activo'),
  ('1dd53fb9-fa27-4aa3-8c91-2b5de5edba76', 'Proyecto de Análisis de Datos de Marketing', 'Este proyecto permite analizar los datos de marketing de una empresa', 'https://imagen.com/analisis-marketing.jpg', 'https://enlace.com/analisis-marketing', 'https://github.com/proyecto-analisis-marketing', 'Inactivo');
  
  ```
:::warning Ten en cuenta que..
  Si copias el código, no olvides modificar los **user_id** para que correspondan con los datos de tu bd.
:::

Y si ahora hacemos una consulta a la tabla proyectos deberíamos ver los datos introducidos:

```sql
select * from proyectos
```

![Nuevos usuarios](/imagenes/v1/bd/datosProyectos.png).

¡Genial! Todo según los previsto 😎




