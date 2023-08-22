---
title: Entorno de desarrollo para contruir una SPA
---

Ha llegado la hora de darla caña a javascript.

Hasta ahora, en lo que a front-end se refiere:
1. Hemos definido las especificaciones de nuestro proyecto
2. Lo hemos seccionado en versiones funcionales
3. Hemos definido los casos de uso y su diagrama de casos de uso
4. Hemos diseñado la interficie a partir de bocetos que hemos testeado y revisado
5. Hemos maquetado los prototipos en html y Bootstrap
6. Hemos definido validaciones y las hemos implementado a traves de html5, javascript y Bootstrap.

No esta nada mal, ¿verdad? Pero a va siendo hora de construir nuestra app basada en una SPA.

Pero antes dejame que te explique unos cuantos conceptos importantes. Luego actualizaremos nuestro entorno de trabajo para, finalmente, construir nuesta app.

## ¿Qué es una Single Page Aplication (SPA)?


**"SPA"** es la abreviatura de "**Single Page Application**", que se traduce al español como "**Aplicación de Página Única**". Una SPA es un tipo de aplicación web que funciona en una sola página, donde la mayoría de la interacción y navegación ocurre sin necesidad de recargar la página completa.

:::info Más información...

En una SPA, el contenido se carga inicialmente junto con la aplicación, y a medida que el usuario interactúa con la aplicación, se **actualizan dinámicamente solo las partes necesarias** de la página, **en lugar de recargar todo el contenido**. Esto permite una **experiencia de usuario más fluida y rápida**, ya que se reducen los tiempos de carga y se minimiza la necesidad de comunicación constante con el servidor.

Las SPAs suelen utilizar tecnologías como **JavaScript**, **AJAX (Asynchronous JavaScript and XML)** y frameworks como React, Angular o Vue.js para gestionar la actualización de contenido en tiempo real sin recargar la página.
:::
Pero nosotros (que somos más chulos que nadie) lo vamos a hacer con VanillaJS, es decir, con Javascript a pelo 😎.

## ¿Y como funciona?
El concepto es el siguiente: 

En nuestro servidor tendremos una página html `index.html` con algunos divs, pero prácticamente vacía, que cargará un archivo javascript `main.js`. Cuando visitamos esta página el navegador la cargará y ejecutará su javascript, como siempre.

En el **main.js** tendremos unas funciones (en realidad objetos) que conforme se van ejecutando irán '**inyectando**' fragmentos de html (con su javascript correspondiente) en la página index.html. A estos fragmentos los llamaremos '**COMPONENTES**'.

Estos componentes, a su vez, ejecutan sus scripts cargando, si corresponde, nuevos componentes. De esta manera se irá construyendo la página: Primero se carga el index.html, que llama al main.js, el cual inyecta el menu.js, la vista home.js, el footer.js, etc.  

Por eso la llamamos SPA, porque solo tenemos la página index.html, que irá construyendose en el navegador conforme se ejecute el javascript que lleva dentro.

Tal y como ya explicamos en su día, nuestra **SPA** es también una **CSR**, es decir, una **Client Side Rendering**: **Una página que se renderiza (construye) en el cliente (navegador).**

:::info
Recuerda que podemos crear nuestra app como una CSR (Client Side rendering) o una SSR (Server Side Rendering). Las clásicas páginas php serían de tipo SSR.

Si quieres hacer memoria, en esta sección lo estuvimos viendo ya hace unos días: [link](#)
:::

## Hablemos de NodeJS

<div style={{width: 200, margin: '0 auto 0 auto'}}>

  ![npm](/imagenes/v1/spa/nodejs.png)

</div>

Node.js es una plataforma de programación que nos va a permitir crear aplicaciones y sitios web usando el lenguaje de programación JavaScript. 

A diferencia de JavaScript que **normalmente se ejecuta en navegadores** web, Node.js **permite que JavaScript también se ejecute en servidores**, lo que lo hace útil para crear aplicaciones web de alto rendimiento y aplicaciones de red. 

Osea, que si antiguamente usabamos javascript ejecutándolo en el navegador (para realizar tareas como validación, mejorar la interactividad, etc) y php ejecutándolo en el servidor (para hacer consultas a bases de datos, gestionar archivos, etc.) ahora... ¡tachan! ... Podemos utilizar javascript tanto en el lado del cliente como en el lado del servidor, sustituyendo a otros lenguajes como php, python, java, etc. **¡Javascript para todo! 😎**.

Nosotros no lo usaremos en el lado del servidor (aunque molaría mucho) porque ya estamos usando un servicio como back-end. Nuestro amado Supabase.

:::info Node.js
**Node.js** fue creado por Ryan Dahl y su desarrollo comenzó en 2009. Dahl presentó Node.js como un entorno de tiempo de ejecución (runtime) en la conferencia JSConf en 2009. 

La plataforma se basa en el motor de JavaScript V8 de Google, que también se utiliza en el navegador Google Chrome. 

Node.js se ha convertido en una tecnología muy influyente en el mundo del desarrollo web y ha ganado popularidad debido a su capacidad para construir aplicaciones web en tiempo real y escalables utilizando JavaScript tanto en el lado del servidor como en el cliente.

<details>
<summary>Te explico algunas de las ventajas de usar Node.js con más detalle:</summary>

- **Uso compartido de código**: Node.js permite a los desarrolladores utilizar JavaScript tanto en el lado del cliente como en el del servidor. Esto facilita el uso compartido de código y la lógica entre el frontend y el backend, lo que puede simplificar el desarrollo y reducir la duplicación de esfuerzos.

- **Empaquetado y construcción eficiente**: Herramientas como npm (Node Package Manager) permiten gestionar fácilmente dependencias y paquetes para proyectos frontend. Además, Node.js es utilizado comúnmente con herramientas como Webpack y Gulp para empaquetar, minificar y compilar el código frontend, lo que facilita la gestión de assets y optimiza el rendimiento.

- **Desarrollo asincrónico**: Node.js está diseñado para operaciones asincrónicas y no bloqueantes. Esta característica encaja bien con las aplicaciones frontend, donde a menudo se manejan solicitudes de red y operaciones que pueden bloquear el flujo en un entorno síncrono.

- **Herramientas y entornos de desarrollo**: Node.js ofrece una amplia gama de herramientas y módulos que son útiles para el desarrollo frontend, como navegadores basados en Node.js (por ejemplo, Puppeteer para automatizar tareas de navegación), módulos para interactuar con APIs y librerías de manipulación de archivos.

- **Servidores de desarrollo rápidos**: Node.js puede ser utilizado para crear servidores de desarrollo rápidos y ligeros para proyectos frontend, lo que facilita la visualización y prueba de las aplicaciones en local antes de implementarlas en producción.

- **Herramientas para automatización**: Node.js se integra bien con herramientas de automatización de tareas, como la ejecución de pruebas unitarias, pruebas de rendimiento y tareas de construcción, lo que puede mejorar la eficiencia y calidad del desarrollo frontend.

- **Integración con frameworks frontend**: Algunos frameworks frontend, como React y Angular, utilizan herramientas y bibliotecas que son amigables con Node.js. Esto permite una integración más fluida entre el backend y el frontend en proyectos donde se utilizan estos frameworks.

- **Comunidad activa y recursos disponibles**: La comunidad de Node.js es grande y activa, lo que significa que hay una gran cantidad de recursos, tutoriales y bibliotecas disponibles para abordar diferentes aspectos del desarrollo frontend utilizando Node.js.

</details>
:::


En resumen, ¡Node.js mola mucho! Nos va a facilitar mucho el desarrollo frontend al permitir la utilización de JavaScript en ambos lados, cliente y servidor. Además:
- Nos va a facilitar el **manejo de dependencias** (por ejemplo con ***npm***) 
- Nos va a brindar **herramientas de automatización en la creación de proyectos** (por ejemplo con **vite**)
- Y proporcionar una **integración fluida con frameworks y bibliotecas frontend populares** (como podrían ser React, Vue, etc.).

## Hablemos de 'npm'

<div style={{width: 200, margin: '0 auto 0 auto'}}>

  ![npm](/imagenes/v1/spa/npm.png)

</div>

Como te iba diciendo, necesitamos **instalar en nuestro ordenador** **Node.js** para poder empezar a crear aplicaciones web basadas en javascript.

A la vez que instalamos Nodejs, se nos va a instalar **npm**, que es un gestor de paquetes que nos va a ir de perlas, ya lo verás.

:::info ¿Qué es npm?
NPM (Node Package Manager) es una herramienta que se utiliza en el entorno de Node.js para gestionar las bibliotecas y paquetes de código reutilizable que los desarrolladores utilizan en sus proyectos. En términos más simples, podrías pensar en NPM como una especie de "tienda" en línea donde puedes encontrar y descargar piezas de código que hacen tareas específicas.
<details>
<summary>Algunos ejemplos de lo que puedes hacer con NPM:

</summary>
Cuando los desarrolladores crean código útil, a menudo lo empaquetan en lo que se llama un "paquete". Estos paquetes pueden contener funciones, clases y otras partes de código que se pueden utilizar en diferentes proyectos. 

NPM hace que sea fácil para los desarrolladores compartir sus paquetes y para otros desarrolladores instalarlos y usarlos en sus propios proyectos.

Algunos ejemplos de lo que puedes hacer con NPM incluyen:

**Instalar paquetes**: Puedes utilizar NPM para buscar y descargar paquetes específicos que necesitas para tu proyecto. Por ejemplo, si necesitas una librería para trabajar con fechas, puedes usar NPM para instalarla.

**Gestionar dependencias**: Cuando tu proyecto utiliza múltiples paquetes, es probable que algunos dependan de otros. NPM ayuda a gestionar estas dependencias, asegurando que las versiones correctas estén instaladas y funcionen juntas sin conflictos.

**Actualizar paquetes**: A medida que los desarrolladores mejoran y actualizan sus paquetes, puedes usar NPM para actualizarlos en tu proyecto y obtener las últimas mejoras y correcciones de errores.

**Compartir código**: Si creas algo útil, puedes empaquetarlo y publicarlo en el registro de NPM para que otros desarrolladores lo utilicen. Esto promueve la colaboración y la reutilización de código.
</details>

:::

## Hablemos de Vite
<div style={{width: 200, margin: '0 auto 0 auto'}}>
  <img src="https://vitejs.dev/logo-with-shadow.png" />
</div>

**Y finalmente instalaremos Vite**. 

¡Vite es una pasada! Con el podremos montar un proyecto en muy pocos segundos: nos creará el scaffolding (las carpetas de nuestra app), traducirá nuestro scss a css normal y el javascript más moderno a una versión que todos los navegadores entiendan, y muchas cosas más. Es una herramienta fantástica.


:::info ¿Qué es Vite?

**Vite** es un entorno de desarrollo para construir aplicaciones web rápidas. 

Se enfoca en acelerar el proceso de desarrollo al recargar rápidamente los cambios y al aprovechar el sistema de módulos nativos de JavaScript. 

También es amigable con diferentes lenguajes y formatos, lo que facilita la creación de aplicaciones web modernas y eficientes.

<details>
<summary>Algunas características clave de Vite incluyen:</summary>


**Desarrollo rápido en tiempo real**: Vite utiliza un servidor de desarrollo en tiempo real que permite recargar rápidamente el navegador cuando se realizan cambios en el código. Esto acelera el proceso de iteración y facilita la visualización de los cambios inmediatamente.

**Carga de módulos nativos**: Vite aprovecha el sistema nativo de módulos de JavaScript (ECMAScript Modules) para cargar los módulos de manera más eficiente. Esto mejora el rendimiento y reduce la necesidad de empaquetar y transpilar código durante el desarrollo.

**Desarrollo basado en ES modules**: Vite fomenta el uso de ECMAScript Modules, lo que permite importar módulos de manera más directa y clara, y reduce la necesidad de configuraciones complicadas de bundling (empaquetado).

**Soporte para múltiples lenguajes y formatos**: Vite admite no solo JavaScript, sino también TypeScript, CSS, SASS, Less y otros lenguajes y formatos de manera nativa, lo que simplifica el proceso de desarrollo cuando se utilizan múltiples tecnologías.

**Optimización para producción**: Aunque Vite está diseñado principalmente para el desarrollo, también ofrece opciones para crear una versión optimizada y lista para producción de la aplicación, incluida la generación de archivos estáticos y la optimización de recursos.

**Extensibilidad**: Vite es modular y extensible, lo que significa que los desarrolladores pueden personalizar su flujo de trabajo agregando plugins y ajustando la configuración según sea necesario.
</details>

:::

## Hablemos de GitHub Pages

<div style={{width: 200, margin: '0 auto 0 auto'}}>

  ![npm](/imagenes/v1/spa/githubpages.png)

</div>

Si recuerdas ( y si no... vayan a repasar 👉[Entorno de desarrollo](#)), justo antes de empezar a maquetar los prototipos con html, estuvimos preparando nuestro entorno de desarrollo (la versión básica).

Estuvimos instalando VSCode, configurándolo con plugins como Prettier, etc. Pero también instalamos Git y lo conectamos con GitHub, que como recordarás, es un repositorio en la nube.

Pues bien, GitHub tiene tambien una funcionalidad que nos va a ir a las mil maravillas: **GitHub Pages**.

Con GitHub Pages tendremos un **servidor de pruebas** para que podamos ir desplegando nuestra aplicación y ver como funciona tal y como lo haría **una vez desplegada en producción**. 


:::info

**GitHub Pages** es un servicio ofrecido por GitHub que permite a los usuarios **alojar sitios web estáticos** directamente desde sus repositorios de GitHub. En otras palabras, te permite convertir tu repositorio de GitHub en un sitio web público que cualquiera puede visitar en línea.

<details>
<summary>Aquí hay algunas características clave de GitHub Pages:
</summary>

Alojamiento de sitios web estáticos: GitHub Pages es ideal para alojar sitios web estáticos, que consisten en archivos HTML, CSS, JavaScript, imágenes y otros recursos que no requieren procesamiento en el servidor.

Fácil configuración: Configurar un sitio web en GitHub Pages es relativamente sencillo. Puedes crear una rama especial llamada "gh-pages" en tu repositorio y colocar tus archivos HTML y otros recursos en esa rama. Alternativamente, puedes utilizar la rama "main" o "master" como la fuente de tu sitio.

Personalización del dominio: Puedes personalizar el dominio de tu sitio web en GitHub Pages, lo que significa que puedes tener una dirección web personalizada en lugar de la URL predeterminada proporcionada por GitHub.

Soporte para Jekyll: Jekyll es un generador de sitios estáticos que está integrado con GitHub Pages. Te permite crear sitios web atractivos utilizando plantillas y contenido almacenado en tus repositorios de GitHub.

Gratuito para repositorios públicos: GitHub Pages es gratuito para repositorios públicos, lo que significa que puedes crear y alojar sitios web públicos sin costo adicional. Sin embargo, si deseas mantener tu repositorio privado y usar GitHub Pages, es posible que necesites una suscripción de pago.

Documentación y proyectos personales: Muchos desarrolladores utilizan GitHub Pages para alojar documentación de proyectos, blogs personales, portafolios y otros tipos de contenido estático.
</details>

:::

## Y finalmente, hablemos de ESLint

<div style={{width: 200, margin: '0 auto 0 auto'}}>

  ![npm](/imagenes/v1/spa/eslint.png)

</div>

Para el diseño de los prototipos html nos hemos ayudado de **Prettier**, un plugin de VSCode que nos ayuda a dar formato al codigo html y css, pero para javascript tenemos una herramienta mucho más potente llamada **EsLint**.

A la hora de escribir nuestro código es importante mantener las formas, utilizando estructuras correctas y manteniendo ciertas pautas. Por ejemplo: 
- ¿Debo poner punto y coma al final de cada linea? 
- ¿Puedo declarar variables y luego no usarlas? 
- ¿Puedo dejar espacios entra lineas de código? 
- ¿Cuantos espacios debo poner al tabular?

Una vez tengo claras todas estas reglas, puedo utilizar un **Linter** para que se encargue de vigilar que las estoy cumpliendo que nuestro código es **consistente**. 

Con esto vamos a evitar malas prácticas escribiendo el código y podremos detectar errores de sintaxis antes de ejecutar nuestros scripts.

**Existen algunos estandar**s a la hora de escribir código que tienen sus propias reglas. Por ejemplo:
- Airbnb
- StandardJS
- Google
- XO
Nosotros nos basaremos en el estandard **StandardJS**.


:::info ¿Qué es un linter?

Un linter es una herramienta de programación que **analiza el código fuente de un programa en busca de errores**, inconsistencias y patrones de código que no siguen las convenciones y mejores prácticas de programación. 

Los linters modernos son herramientas que ayudan a los desarrolladores a escribir un **código más limpio, legible y coherente**. 

<details>
<summary>
Algunos de los aspectos que un linter puede verificar incluyen:
</summary>

**Errores de sintaxis**: Identificar errores de sintaxis que podrían causar que el programa no funcione correctamente.

**Convenciones de estilo**: Encontrar discrepancias en la forma en que el código está formateado y escrito, como indentación, uso de comillas, espaciado, etc.
**Mejores prácticas**: Advertir sobre patrones de código que podrían ser ineficientes o propensos a errores.

**Compatibilidad con estándares**: Verificar si el código sigue las convenciones y estándares de programación establecidos por la comunidad o el equipo de desarrollo.

**Errores lógicos**: Detectar posibles errores lógicos, como variables no utilizadas o condicionales que siempre se evalúan de la misma manera.

**Seguridad**: Advertir sobre posibles problemas de seguridad, como el uso de funciones potencialmente peligrosas.

**Documentación**: Identificar la falta de comentarios o documentación en el código.

Los linters se pueden configurar para funcionar con diferentes lenguajes de programación y se integran con los flujos de trabajo de desarrollo. Pueden ejecutarse automáticamente en el momento de la compilación, en un entorno de desarrollo integrado (IDE) o a través de la línea de comandos. Algunos linters populares incluyen **ESLint para JavaScript**, Pylint para Python y RuboCop para Ruby.

</details>

:::

## ESlint como linter predeterminado
En nuestro caso usaremos una libreria llamada **ESLint** como linter para que vigile el código de nuestros proyectos, que configuraremos para que se ajuste al StandardJS.

Nosotros usaremos el linter que más exito ha tenido en la programación con javascript: **ESLint**.



Vale, ahora ya nos suena qué es cada cosa y para que sirve, es hora de actualizar nuestro entorno de trabajo. Después crearemos nuestro proyecto basado en **NodeJs** con la herramienta **Vite** e instalaremos las **dependencias** necesarias con **npm**, como puede ser **ESLint**, para mejorar nuestro flujo de trabajo en el desarrollo de nuestra **SPA**.

¿Estas preparado?


