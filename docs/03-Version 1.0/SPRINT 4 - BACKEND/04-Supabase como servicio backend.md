---
Title: Supabase como servicio Backend
---

**Supabase** es una plataforma de desarrollo de código abierto que se centra en la **creación de aplicaciones web y móviles con una base de datos**. Proporciona una variedad de herramientas y servicios que facilitan el proceso de desarrollo al ofrecer: 
- una base de datos PostgreSQL escalable
- autenticación segura
- almacenamiento de archivos
- API REST y GraphQL
entre otros componentes.

:::info Más información sobre SUPABASE

Supabase se ha creado con el objetivo de simplificar el proceso de desarrollo de aplicaciones, proporcionando a los desarrolladores una infraestructura sólida para la gestión de bases de datos y autenticación, así como otras características esenciales para el desarrollo moderno de aplicaciones web y móviles.

<details>
<summary>Características destacadas de Supabase</summary>
Algunas de las características clave de Supabase incluyen:

- Base de datos PostgreSQL: Supabase ofrece una base de datos PostgreSQL completamente gestionada y escalable en la nube. Esto permite a los desarrolladores almacenar, recuperar y administrar datos de manera eficiente.

- Autenticación: Proporciona capacidades de autenticación y autorización, lo que facilita la implementación de sistemas de registro y acceso seguros para tus aplicaciones.

- API REST y GraphQL: Ofrece una API REST y una API GraphQL para interactuar con los datos almacenados en la base de datos. Esto permite a los desarrolladores diseñar y crear endpoints personalizados para sus aplicaciones.

- Almacenamiento de archivos: Supabase permite a los usuarios almacenar y administrar archivos en la nube, lo que es útil para aplicaciones que requieren cargar, almacenar y acceder a archivos multimedia.

- Eventos en tiempo real: Ofrece notificaciones en tiempo real basadas en cambios en la base de datos. Esto es útil para crear aplicaciones en tiempo real, como chats y paneles de control en vivo.

- Integraciones y extensibilidad: Supabase puede integrarse con otras herramientas y servicios, lo que permite una mayor flexibilidad en el desarrollo de aplicaciones.

- Código abierto: Supabase es un proyecto de código abierto, lo que significa que su código fuente es accesible para la comunidad. Esto fomenta la colaboración y permite a los desarrolladores personalizar y contribuir al proyecto.

- Interfaz de línea de comandos (CLI): Proporciona una CLI que facilita la configuración y administración de proyectos de Supabase.


</details>

**¿Cuánto cuesta Supabase ?**

Supabase cuenta con un plan gratuito para sitios web simples, con un límite de dos proyectos, perfecto para probar la plataforma. No obstante, también ofrece un plan PRO de U$25 por proyecto, ideal para la creación de aplicaciones productivas y escalables. 
[https://supabase.com/](https://supabase.com/)

:::

:::tip
¡Pero ahora Supabase es mucho más! Durante los meses de julio y agosto de 2023 la IA ha dado un salto enorme y ha comenzado a incorporarse en las aplicaciones de desarrollo web. Puedes saber más en este artículo:

👉[UNA NUEVA ERA EN LA GESTIÓN DE BASES DE DATOS: SUPABASE STUDIO 3.0 REDEFINE LA EDICIÓN SQL](https://wwwhatsnew.com/2023/08/11/una-nueva-era-en-la-gestion-de-bases-de-datos-supabase-studio-3-0-redefine-la-edicion-sql/)👈
:::

En nuestro proyecto vamos a utilizar muchas de estas características. Pero, como dijo Jack... 'vayamos por partes' De momento vamos a centrarnos en las **bases de datos PostgreSQL** que nos ofrece y su interfaz para hacer consultas sql.

Pero antes debemos crear una cuenta. Puedes hacerlo desde su página web: [https://supabase.com/](https://supabase.com/)

## Nuevo proyecto 
Una vez tenemos nuestra cuenta necesitaremos **crear un proyecto**. (Recuerda que puedes tener hasta dos proyectos en la cuenta gratuita).

Vamos a crear un **nuevo proyecto** con nombre **'Vanilla Project'**

Aquí puedes ver mi cuenta con dos proyectos creados:

![Supabase](/imagenes/v1/bd/proyectos.png)

:::note Fíjate en que...
El proyecto con nombre 'Vanilla Project' está pausado. Esto es debido a que solo podemos tener un proyecto activo
:::

## Probando consultas SQL

Una vez has seleccionado tu proyecto de trabajo, podrás ver a la izquierda una barra de herramientas con diferentes opciones. La que ahora nos interesa a nosotros es la de `SQL Editor`.

Esta opción nos abre una ventana en la que hacer consultas a nuestra base de datos.

Prueba a escribir la siguiente consulta: `'select "Hola Vanilla"'`. Podrás comprobar como en el panel inferior se muestra la respuesta a la consulta. En este caso simplemente muestra el texto 'Hola Vanilla'.

En la versión actual de Supabase, también podemos encontrar una **IA que nos ayuda con la creación de consultas**. Vamos a darle permisos a OpenAI para que pueda ver nuestros datos y así ayudarnos

:::note Nota
Hay que tener en cuenta que, por el momento, los datos que incorporarán nuestra base de datos no son sensibles, por lo que no supone ningún problema de violación de la privacidad. Por otro lado, esta herramienta puede ser muy útil en el desarrollo de nuestro entorno backend.
:::

Una vez tenemos activa la IA podemos pedirle que nos cree una consulta especifica. Por ejemplo, vamos a decirle que nos escriba el código necesario para crear una tabla de ejemplo:

![Ejemplo IA](/imagenes/v1/bd/ejemploia.png)

**¡Funciona!** Está claro que este va a ser un gran ayudante en la contrucción de nuestro proyecto.

De todas formas, para la construcción de nuestras tablas será mejor que utilicemos la **interfaz que nos ofrece Supabase**...