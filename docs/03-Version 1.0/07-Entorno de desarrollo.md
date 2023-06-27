---

title: Hist5 - Entorno de desarrollo
tags:
  - wireframe
  - mockup
  - guía de estilos
position: 

---

“Dame seis horas para cortar un árbol y pasaré las primeras cuatro afilando el hacha.” – Abraham Lincoln

Si queremos ser eficientes en la creación de aplicaciones web, lo mejor es empezar por configurar bien nuestro entorno de desarrollo.
Para ello vamos a instalar/configurar las siguientes herramientas:
1. Un buen software para escribir nuestro código. En nuestro caso usaremmos el programa **VSCode** de Microsoft.
2. Instalación del software para el control de versiónes. Nosotros instalaremos **GIT**.
3. Una aplicación web para sincronizar nuestro repositorio en la nube. En nuestro caso será **GitHub**.

## 1. VSCode

Sin duda, en le momento de escribir esta documentación, el rey de los IDs es, sin duda, Visual Studio Code (VSCode).


<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"} width={"200"}/>


:::note

**VSCode** es un programa muy útil para escribir código. Es como una navaja suiza para los desarrolladores. Te permite **editar y organizar tus archivos** de código de manera fácil y rápida. Además, tiene un montón de **extensiones** y herramientas fantásticas que te facilitan la vida, como **autocompletado**, **depuración** y **control de versiones**. En resumen, es como el mejor amigo de un programador, siempre dispuesto a ayudarte a escribir código de manera eficiente.

:::

Os hago un resumen de algunas aspectos que debes tener en cuenta a la hora de instalar y configurar VSCode, y te pondré información ampliada ya que es un tema muy trillado en internet:
### 1.1. Descarga e instala VSCode 
[Puedes encontrar la versión oficial de vscode aquí
### 1.2. Elige el tema que más te guste. 
Puedes tunear tu VSCode instalando diferentes temas. Para ello:

- Desde el buscador de extensiones (ctrl + mayus + X) escribe el nombre del tema que quieres instalar.
- Haz clic en instalar extensión.
- Desde el icono de configuración de vscode (la tuerquecita de abajo a la izquierda) selecciona '**Temas > Tema de color**'
- Selecciona el tema que has instalado y... ¡ya lo tienes!

:::tip 

En este enlace puedes encontrar algunos temas para instalar en tu VSCode: [Themes VSCode](https://vscodethemes.com/?type=dark)

Y aquí te dejo una tabla de algunos temas que nos recomienda el amigo 'Manz'
<details>
  <summary>Tabla de temas recomendados</summary>
  
  Estos son algunos de los temas que nos recomienda <a href="https://terminaldelinux.com/terminal/preparacion-entorno/instalar-vscode/">Manz</a>"


    🌈 Flatland Monokai
    👀 Enfocado Theme
    🟡 Bluloco Dark Theme
    🧔 Bearded Theme
    🐼 Panda Theme
    🟣 2077 Theme
    🧛‍♀️ Dracula Dark Theme
    💠 SynthWave 84
    🤍 GitHub Light Theme
    😸 Gatito Theme
    💚 Vue Theme
    ⚫ One Monokai Theme
    🌃 Palenight Theme
    👧 Doki Theme
    🗻 Monokai Theme
    🔵 Cobalt2 Theme
    🐺 Winter is Coming
</details>

:::

### 1.3. Instala un tema de iconos, por ejemplo [VSCode Icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) o [Material Icon](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

Para instalar los iconos el proceso es el mismo:

  - Desde el buscador de extensiones escribe el nombre del tema de iconos
  - En configuración, selecciona '**Tema > Tema de icono de archivo**' y busca el tema instalado.
  - Ahora verás que en la columna de la izquierda, cada archivo tiene un icono diferente en función de su extensión: html, css, etc.

### 1.4. Extensiones

Con las extensiones puedes aumentar la potencia y mejorar tu flujo de trabajo. 

Una de las extensiones que te recomiendo sí o sí es '**Prettier**'. Esta extensión se va a encargar de formatear tu código HTML y CSS port tí, respetando las identaciones.
El proceso para instalar esta extensión es muy simple, solo tienes que buscar la extensión en el buscador y darle a instalar.

:::tip Cómo formatear automáticamente en VS Code para ahorrar tiempo y esfuerzo

Aquí tienes un artículo donde se explica como instalar y configurar Prettier para que el código se formatee cada vez que guardamos nuestro archivo:

<a href={"https://geekflare.com/es/auto-format-in-vs-code/"}>Cómo formatear automáticamente en VS Code para ahorrar tiempo y esfuerzo</a>

:::

Otra extensión imprescindible para nosotros es **Live Server**. Mediante esta extensión podremos tener un servidor virtual que mostrará el resultado de nuestro trabajo en un navegador, con la ventaja de que la vista se irá actualizando conforme vamos modificando el código.

Existen infinidad de extensiones para VSCode
Aquí puedes ver un ejemplo de mi entorno. Utilizo el tema **Night Owl** y los iconos de **VSCode Icons**.
Fijate que el código html está formateado con **Prettier**

![Tema VSCode e Iconos](imagenes/../../../static/imagenes/entorno/entornovscode.png)

De momento, con esto es suficiente para comenzar a trabajar en el desarrollo de los prototipos html y css. Más adelante acabaremos de configurar nuestro entorno para trabajar con NodeJS y otras herramientas que nos ayudarán a programar de forma más eficiente.

## 2. Control de versiones - Git

Para el control de versiones vamos a instalar y configurar Git. Aunque seguro que a estas alturas ya sabes qué es Git, pero deja que te refresque algunas ideas importantes:

:::info 

👉 Git es como un superpoderoso **control de versiones para tu código**. Imagina que estás escribiendo un ensayo importante y cada vez que haces cambios guardas una nueva versión en diferentes archivos, como "ensayo_v1", "ensayo_v2" y así sucesivamente. Git hace algo similar pero para tu código.

👉 Con Git, puedes **guardar diferentes versiones de tu proyecto a medida que avanzas**. Esto significa que si cometes un error o quieres volver a una versión anterior, ¡es pan comido! Git te permite viajar en el tiempo y regresar a cualquier punto en la historia de tu proyecto.

👉 Pero eso no es todo. Git también es **excelente para trabajar en equipo**. Puedes colaborar con otros programadores sin pisar los pies de nadie. Cada persona puede trabajar en su propia versión del proyecto y luego combinar los cambios de todos de manera ordenada.

👉 Además, Git hace que **compartir tu código** sea súper fácil. Puedes subir tu proyecto a un repositorio en línea (como **GitHub** o GitLab) y otras personas pueden descargarlo y contribuir. Incluso puedes colaborar con desarrolladores de todo el mundo en proyectos de código abierto.

Aprender git es muy importante para un desarrollador web. Por suerte lo vas a estudiar (si no lo has hecho ya) en el ciclo de DAW. De todas formas te dejo un enlace con más información que te será muy util para entender conceptos como que es una rama, como subir ramas al repositorio, clonarlas, sincronizarlas etc: [Hello Git & GitHub](https://github.com/mouredev/hello-git)
:::

Vamos a instalar (si aun no está instalado) Git. Para ello:  
1. Descarga su última versión de la web oficial: [Download Git](https://git-scm.com/).
2. Instala en tu ordenador el software.
3. Configura git para tu usuario:
  
   - Lo primero que deberás hacer cuando instales Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque los "commits" de Git usan esta información, y es introducida de manera inmutable en los commits que envías:

  ```
    $ git config --global user.name "John Doe"
    $ git config --global user.email johndoe@example.com  
  ```
Sólo necesitas hacer esto una vez si especificas la opción --global, ya que Git siempre usará esta información para todo lo que hagas en ese sistema

:::info 
✔️ Tienes más información de cómo configurar Git aquí: 

[👉Configurando Git por primera vez👈](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez)

✔️ Si quieres aprender más sobre git también puedes consultar este recurso de Obdulia Montiel:

[👉La guía para principiantes de Git y Github👈](https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/)

::: 


## 3. Repositorio en linea - Github

Ahora que tenemos Git instalado en nuestro ordenador, vamos crearnos una cuenta en Github para poder sincronizar todo nuestro trabajo en la nube.

:::info ¿Qué es y para que sirve Github?

✔️ GitHub es una especie de red social para programadores. Es un lugar en línea donde los desarrolladores pueden **compartir y trabajar en proyectos de software**.

✔️ Funciona como un **repositorio** donde se guarda el código de **diferentes versiones** de un proyecto. Permite la **colaboración entre programadores**, quienes pueden ver y sugerir cambios en el código.

✔️ Es una herramienta muy popular y útil en la comunidad de **desarrollo de software**.
:::

1. En primer lugar vamos a acceder [github.com](https://github.com/)
2. Crea una cuenta e inicia sesión.
3. Ahora vamos a crear un proyecto de prueba con vscode, craremos un repositorio y lo sincronizaremos con github.
   
## Configurando entorno y desplegando página de pruebas

Vamos a ver un ejemplo de todo el proceso. La idea es instalar y configurar nuestro entorno de desarrollo para después crear una página web, guardar una versión en git, subirla a github y publicarla en github pages. Vamos a por ello:

1. Instala VSCode si no la has hecho aún.
2. Configúralo con el tema que más te guste, los iconos que decidas e instala las extensiones **live server** y **prettier**.
3. Crea una carpeta en tu ordenador con nombre `pruebas`
7. Abre VSCode y arrastra la carpeta dentro de la ventana central.
8. Crea un archivo con nombre index.html (algo básico, con un h1 y poco más).
9. Muestra el resultado en el navegador utilizando **live server**.
4. Configura prettier para que al guardar con `ctrl + S` se aplique formateado de tu código. Pruebalo.
5. Instala Git si no lo has hecho aún.
6. Configura tu usuario o confirma que ya está configurado.
7. Haz clic en el icono de '**Control de fuente**' de tu vscode o pulsa `ctrl + Mayus + G`
8. Aparecerá un mensaje que te indica que no tienes repositorio creado, y te dará la opción de crearlo desde aquí. Hazlo
   
   ![Creando repositorio git](/imagenes/entorno/pruebas.png)

   ![Confirmar](/imagenes/entorno/confirmgit.png)

9. Escribe un mensaje de inicio de repositorio (por ejemplo '*primer commit de git*') y dale a confirmar.
10. Ahora te pedirá si quieres **publicar la rama** ('*Branch*'). Dile que sí. Al hacer clic te preguntará qué nombre quieres para el repositorio y si quieres que sea privado o público. Por defecto, el nombre del repositorio coincide con el nombre de la carpeta de tu proyecto, pero puedes cambiarlo si lo deseas. Para esta prueba haremos que nuestro repositorio sea público.
11. Si es la primera vez que conectas tu VSCode con github te pedirá que lo sincronices. Utiliza la opción de confirmar a través de VSCode.
12. Una vez publicado tu archivo en github podrás ver, en tu página de github (por ejemplo `carrebola.github.com`), algo así:

![Github con proyecto nuevo](/imagenes/entorno/github.png)

:::info ¿Cómo utilizar Git desde Visual Studio Code?

Aquí te dejo un enlace a un artículo de donde nos explica como trabajar con git y github desde VSCode:

 [👉¿Cómo utilizar Git desde Visual Studio Code?👈](https://programacionfacil.org/blog/como-utilizar-git-desde-visual-studio-code/)

:::

1.  Vamos a **documentar** de forma básica nuestro proyecto *prueba*. Para ello vamos ahora a crear un archivo **readme.md** para que github muestre información del proyecto publicado en su pantalla inicial:
  - Crea un archivo con nombre **readme.md** en la raiz de la carpeta del proyecto.
  - Escribe dentro un texto descriptivo del proyecto, como por ejemplo:
    
```
# Configurando nuestro entorno de desarrollo

1. Instalación de VSCode
2. Configurarción de git y github
3. Pruebas con proyecto

``` 
Si abrimos ahora github podemos ver como se muestra esta información en la portada del repositorio de github.

![Prueba readme.md](/imagenes/entorno/pruebamarkdown.png)

:::tip 

Fíjate que el `#` equivale a un `<h1></h1>` y que la numeración se comporta como una lista ordenada `<ol></ol>`. Este tipo de lenguaje se llama **Markdown**.

:::

:::info Aprende Markdown
Si quieres saber más de este sencillo y potente lenguaje aquí tienes más información:

[👉 **MARKDOWN**👈](https://desarrolloweb.com/home/markdown)
:::

14. Para terminar vamos a subir nuestro proyecto a github pages. Para ello:
    - Haz clic en `Settings` (el icono con forma de engranaje de la parte superior)
    - Entra en Pages (opción que encontrarás en el menú lateral izquierdo)
    - Donde pone `Branch` selecciona la rama `main` y haz clic en `Save`.
    - Si todo ha ido bien, la página se está publicando... Espera un minuto y refresca la página con F5
    - Ahora puedes ver la url donde se ha publicado tu página. Haz clic en el enlace o en el botón `Visit site` y podrás ver la web publicada.

![Publicación en github pages](/imagenes/entorno/githubpages.png)

:::info
**GitHub Pages** es como un servidor web estático gratuito para que los desarrolladores **muestren su trabajo al mundo**. Básicamente, puedes tomar tus proyectos de GitHub y convertirlos en páginas web públicas para que cualquiera las vea.
:::

Y hasta aquí la configuración de nuestro entorno de desarrollo, al menos la versión básica. Más adelante aprenderemos a trabajar con otras herramientas como nodejs, eslint, etc, pero de momento, con este entorno, ya **estamos preparados para crear los prototipos en html y css** de la primera versión de nuestro proyecto.

## ¡¡¡ Comienza el juego !!! 

Ahora que tenemos el hacha afilado, es el momento de **comenzar a escribir el primer código de nuestro proyecto.**
Pero antes vamos a crear un proyecto nuevo en VSCode, a continuación crearemos un repositorio y lo vincularemos con github. Después crearemos una **rama** exclusiva para el diseño de los prototipos en html/css. Y ya estaremos listos para comenzar a picar código. Vamos a ello:

## Creando la rama principal
1. Crea en tu carpeta de proyectos una carpeta con nombre `vanillagames10`
2. Abre VSCode y arrástrala a la parte central de tu IDE

  :::danger
  Asegúrate de que has arrastrado la carpeta a la **ventana central** de VSCode. Si la arrastras a la columna de la izquierda tendrás varios proyectos abiertos a la vez, y podrías tener problemas cuando trabajes con tu repositorio. Yo te recomiendo que cada ventana de VSCode contenga tan solo un proyecto único.
  :::
3. Crea un **repositorio** para el proyecto.
4. Crea el primer **commit** con el mensaje '*Commit principal*'
5. Publica la rama con el mensaje '*Rama principal*'
6. Publica el repositorio como **privado**
7. Ahora tienes un **proyecto** con una única **rama**, cuyo nombre por defecto es **main**. Vamos a crear un archivo readme.md para esta rama. Escribe en él el título '*Vanilla Games*' junto a un párrafo con la descripción del proyecto: '*Vanilla Games es el nombre que recibe el proyecto que vamos a desarrollar en esta documentación. Es un proyecto sencillo, en las versiones iniciales, que se irá complicando a medida que vayamos trabajando en él.*'.
8. Crea un segundo commit con el texto '*Creamos archivo readme.md para rama principal*'. A continuación sincroniza los cambios con github.
9. Abre ahora la página de github y comprueba que:
   1.  El proyecto se ha creado y subido con éxito en la rama **main**.
   2.  Se muestra la información del archivo **readme.md** en la página principal.
   3.  Se muestra el mensaje del **commit** que has hecho.

![Inicio proyecto](/imagenes/entorno/inicioproyecto.png)

## Creando la rama prototipos
Vamos a crear una rama exclusiva para el diseño de los prototipos y a subirla a github. Sigue los siguientes pasos:
1. Crea una rama nueva con nombre *prototipos*. Para ello haz clic en el nombre de la rama actual 'main' que verás en la parta inferior izquierda de VSCode.
2. Selecciona `Crear rama...`
3. Vamos a ponerle el nombre '*prototipos*'
4. Fijate que ahora en la parte inferior izquierda aparece el nombre de la rama actual en la que estás trabajando.
5. Crea una carpeta en la raiz con nombre `prototipos`.
6. Ahora vamos a crear el archivo `home.html` (de momento pon un h1 con el título y poco más)

   ![Prueba prototipo home](/imagenes/entorno/protos1.png)

7. Y hacemos un **commit** con el texto '*Prueba prototipo home*'. Te pedirá si quieres publicar la rama, dile que sí y haz **push** (sincronziar con github).
8. Fíjate que ahora en github tienes las dos ramas, la rama `main`y la rama `prototipos`. En la rama main solo tienes el archivo `readme.md` pero en la rama `prototipos` ahora ya tienes la carpeta `prototipos`con el archivo `home.html`. 
   Es decir, ahora tienes un repositorio de tu proyecto pero con diferentes ramas que, por el momento, serán completamente independientes.

 ![Rama prototipos](/imagenes/entorno/ramaprototipos.png)

 8. Ya para acabar, puede ser interesante crear un archivo `readme.md` dentro de la carpeta `prototipos`. Hazlo y sube los cambios a github

   ![Readme prototipos](/imagenes/entorno/readmeprototipos.png)
