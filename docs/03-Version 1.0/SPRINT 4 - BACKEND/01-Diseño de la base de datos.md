--- 
Title: 'Diseño de la base de datos'
---



## Diagrama entidad - relación

Vamos a comenzar a trabajar en el **backend**. Tal y como comentamos en el apartado de *Arquitectura y tecnologías*, el backend lo implementaremos utilizando **Supabase como servicio**.
Supabase trabaja con **bases de datos relacionales** por lo tanto crearemos modelos basados en **tablas**.

En primer lugar, para diseñar nuestra estructura de bases de datos, haremos uso, una vez más, de los **diagramas UML** y crearemos un **diagrama de entidad - relación.**

:::info ¿Qué es un diagrama entidad/relación?

Un diagrama de entidad-relación (ER) es una herramienta de modelado de datos utilizada para describir la estructura de una base de datos en términos de entidades y las relaciones entre ellas. Estas entidades pueden ser personas, lugares, objetos, eventos o conceptos, y las relaciones entre ellas representan las conexiones lógicas entre los datos.

<details>
<summary>Más información sobre diagramas E-R</summary>


En un diagrama ER, las entidades se representan como rectángulos y las relaciones se representan como líneas que conectan los rectángulos. Cada entidad se describe mediante sus atributos, que son las características o propiedades que definen la entidad. Por ejemplo, una entidad "cliente" puede tener atributos como nombre, dirección, número de teléfono, correo electrónico, etc.

Las relaciones entre las entidades se describen mediante la cardinalidad, que indica cuántas entidades están relacionadas y cómo están relacionadas. Las relaciones pueden ser uno-a-uno, uno-a-muchos o muchos-a-muchos, y se indican mediante símbolos especiales que se colocan junto a las líneas que conectan las entidades.

Un diagrama ER es una herramienta útil en el diseño de bases de datos, ya que ayuda a identificar las entidades y las relaciones entre ellas, y a establecer la estructura de la base de datos en términos de tablas, campos y relaciones. Además, también puede ayudar a detectar problemas en el diseño de la base de datos, como redundancias o inconsistencias, y a optimizar la estructura de la base de datos para mejorar el rendimiento y la eficiencia.
</details>
:::
Este podría ser nuestro diagrama E-R para la versión 1.0 de nuestro proyecto:

![Diagrama E-R](/imagenes/v1/bd/diagramaer1.png)

Como podemos observar, este diagrama muestra 3 entidades que se relacionan entre sí. 
- La entidad (tabla) **USER**, que será la tabla que se crea de manera automática en supabase cada vez que se registra un usuario (que incluirá los campos id, created_At, email y otros campos genéricos)
- La entidad **PERFIL**, que será una tabla asociado a USER con la clave foránea user_id, y que contendrá toda la información del perfil del usuario registrado.
- La entidad **PROYECTO** que contendrá la información de los proyectos creados por los usuarios.

La entidad PERFIL se relaciona con USER con user_id con una cardinalidad 1 - 1, es decir el perfil pertenece a un usuario y un usuario solo puede tener un perfil.

La entidad USER puede CREAR   PROYECTO. La cardinalidad es 1 - n, es decir, un usuario puede crear varios proyectos pero un proyecto solo puede ser creado por un usuario.

Lógicamente, estas relaciones no generan tablas añadidas.

Aquí podemos ver otra versión del mismo diagrama, con una nomenclatura diferente:


![Diagrama de tablas](/imagenes/v1/bd/diagramaer2.png)

Para la versión 1 del proyecto no necesitamos más tablas. Es una estructura sencilla que se irá complicando conforme añadamos funcionalidades.