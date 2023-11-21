"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[310],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return o.createElement(l.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=n,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return t?o.createElement(g,i(i({ref:a},d),{},{components:t})):o.createElement(g,i({ref:a},d))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5307:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const r={},i=void 0,s={permalink:"/vanillaPill/blog/Entorno de desarrollo I",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Entorno de desarrollo I.md",source:"@site/blog/Entorno de desarrollo I.md",title:"Entorno de desarrollo I",description:"Vamos a instalar VSCode y a configurar algunos temas y extensiones como prettier o live server.",date:"2023-05-26T14:20:05.000Z",formattedDate:"26 de mayo de 2023",tags:[],readingTime:9.985,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"Descargar im\xe1genes vectoriales para tu avatar",permalink:"/vanillaPill/blog/imagenesAvatar"},nextItem:{title:"MDX Blog Post",permalink:"/vanillaPill/blog/mdx-blog-post"}},l={authorsImageUrls:[]},p=[{value:"1. VSCode",id:"1-vscode",level:2},{value:"1.1. Descarga e instala VSCode",id:"11-descarga-e-instala-vscode",level:3},{value:"1.2. Elige el tema que m\xe1s te guste.",id:"12-elige-el-tema-que-m\xe1s-te-guste",level:3},{value:"1.3. Instala un tema de iconos, por ejemplo VSCode Icons o Material Icon",id:"13-instala-un-tema-de-iconos-por-ejemplo-vscode-icons-o-material-icon",level:3},{value:"1.4. Extensiones",id:"14-extensiones",level:3},{value:"Prettier",id:"prettier",level:4},{value:"Live Server",id:"live-server",level:4},{value:"2. Control de versiones - Git",id:"2-control-de-versiones---git",level:2},{value:"3. Repositorio en linea - Github",id:"3-repositorio-en-linea---github",level:2},{value:"Configurando entorno y subiendo p\xe1gina de pruebas",id:"configurando-entorno-y-subiendo-p\xe1gina-de-pruebas",level:2}],d={toc:p},m="wrapper";function u(e){let{components:a,...r}=e;return(0,n.kt)(m,(0,o.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Vamos a instalar VSCode y a configurar algunos temas y extensiones como prettier o live server. "),(0,n.kt)("p",null,"Tambi\xe9n vamos a aprender a manejar git y github desde nuestro ID f\xe1cilmente. "),(0,n.kt)("p",null,"Finalmente aprenderemos a desplegar nuestro proyecto en un entorno de prueba como github pages."),(0,n.kt)("h2",{id:"1-vscode"},"1. VSCode"),(0,n.kt)("p",null,"Sin duda, en le momento de escribir esta documentaci\xf3n, el rey de los IDs es, sin duda, Visual Studio Code (VSCode)."),(0,n.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",width:"200"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"VSCode")," es un programa muy \xfatil para escribir c\xf3digo. Es como una navaja suiza para los desarrolladores. Te permite ",(0,n.kt)("strong",{parentName:"p"},"editar y organizar tus archivos")," de c\xf3digo de manera f\xe1cil y r\xe1pida. Adem\xe1s, tiene un mont\xf3n de ",(0,n.kt)("strong",{parentName:"p"},"extensiones")," y herramientas fant\xe1sticas que te facilitan la vida, como ",(0,n.kt)("strong",{parentName:"p"},"autocompletado"),", ",(0,n.kt)("strong",{parentName:"p"},"depuraci\xf3n")," y ",(0,n.kt)("strong",{parentName:"p"},"control de versiones"),". En resumen, es como el mejor amigo de un programador, siempre dispuesto a ayudarte a escribir c\xf3digo de manera eficiente.")),(0,n.kt)("p",null,"Os hago un resumen de algunas aspectos que debes tener en cuenta a la hora de instalar y configurar VSCode, y te pondr\xe9 informaci\xf3n ampliada ya que es un tema muy trillado en internet:"),(0,n.kt)("h3",{id:"11-descarga-e-instala-vscode"},"1.1. Descarga e instala VSCode"),(0,n.kt)("p",null,"[Puedes encontrar la versi\xf3n oficial de vscode aqu\xed: ",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCODE")),(0,n.kt)("h3",{id:"12-elige-el-tema-que-m\xe1s-te-guste"},"1.2. Elige el tema que m\xe1s te guste."),(0,n.kt)("p",null,"Puedes tunear tu VSCode instalando diferentes temas. Para ello:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desde el buscador de extensiones (ctrl + mayus + X) escribe el nombre del tema que quieres instalar."),(0,n.kt)("li",{parentName:"ul"},"Haz clic en instalar extensi\xf3n."),(0,n.kt)("li",{parentName:"ul"},"Desde el icono de configuraci\xf3n de vscode (la tuerquecita de abajo a la izquierda) selecciona '",(0,n.kt)("strong",{parentName:"li"},"Temas > Tema de color"),"'"),(0,n.kt)("li",{parentName:"ul"},"Selecciona el tema que has instalado y... \xa1ya lo tienes!")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"En este enlace puedes encontrar algunos temas para instalar en tu VSCode: ",(0,n.kt)("a",{parentName:"p",href:"https://vscodethemes.com/?type=dark"},"Themes VSCode")),(0,n.kt)("p",{parentName:"admonition"},"Y aqu\xed te dejo una tabla de algunos temas que nos recomienda el amigo 'Manz'"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Tabla de temas recomendados"),"Estos son algunos de los temas que nos recomienda ",(0,n.kt)("a",{href:"https://terminaldelinux.com/terminal/preparacion-entorno/instalar-vscode/"},"Manz"),'"',(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"\ud83c\udf08 Flatland Monokai\n\ud83d\udc40 Enfocado Theme\n\ud83d\udfe1 Bluloco Dark Theme\n\ud83e\uddd4 Bearded Theme\n\ud83d\udc3c Panda Theme\n\ud83d\udfe3 2077 Theme\n\ud83e\udddb\u200d\u2640\ufe0f Dracula Dark Theme\n\ud83d\udca0 SynthWave 84\n\ud83e\udd0d GitHub Light Theme\n\ud83d\ude38 Gatito Theme\n\ud83d\udc9a Vue Theme\n\u26ab One Monokai Theme\n\ud83c\udf03 Palenight Theme\n\ud83d\udc67 Doki Theme\n\ud83d\uddfb Monokai Theme\n\ud83d\udd35 Cobalt2 Theme\n\ud83d\udc3a Winter is Coming\n")))),(0,n.kt)("h3",{id:"13-instala-un-tema-de-iconos-por-ejemplo-vscode-icons-o-material-icon"},"1.3. Instala un tema de iconos, por ejemplo ",(0,n.kt)("a",{parentName:"h3",href:"https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"},"VSCode Icons")," o ",(0,n.kt)("a",{parentName:"h3",href:"https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"},"Material Icon")),(0,n.kt)("p",null,"Para instalar los iconos el proceso es el mismo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desde el buscador de extensiones escribe el nombre del tema de iconos"),(0,n.kt)("li",{parentName:"ul"},"En configuraci\xf3n, selecciona '",(0,n.kt)("strong",{parentName:"li"},"Tema > Tema de icono de archivo"),"' y busca el tema instalado."),(0,n.kt)("li",{parentName:"ul"},"Ahora ver\xe1s que en la columna de la izquierda, cada archivo tiene un icono diferente en funci\xf3n de su extensi\xf3n: html, css, etc.")),(0,n.kt)("h3",{id:"14-extensiones"},"1.4. Extensiones"),(0,n.kt)("p",null,"Con las extensiones puedes aumentar la potencia y mejorar tu flujo de trabajo. "),(0,n.kt)("h4",{id:"prettier"},"Prettier"),(0,n.kt)("p",null,"Una de las extensiones que te recomiendo s\xed o s\xed es '",(0,n.kt)("strong",{parentName:"p"},"Prettier"),"'. Esta extensi\xf3n se va a encargar de formatear tu c\xf3digo HTML y CSS port t\xed, respetando las identaciones.\nEl proceso para instalar esta extensi\xf3n es muy simple, solo tienes que buscar la extensi\xf3n en el buscador y darle a instalar."),(0,n.kt)("admonition",{title:"C\xf3mo formatear autom\xe1ticamente en VS Code para ahorrar tiempo y esfuerzo",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Aqu\xed tienes un art\xedculo donde se explica como instalar y configurar Prettier para que el c\xf3digo se formatee cada vez que guardamos nuestro archivo:"),(0,n.kt)("a",{href:"https://geekflare.com/es/auto-format-in-vs-code/"},"C\xf3mo formatear autom\xe1ticamente en VS Code para ahorrar tiempo y esfuerzo")),(0,n.kt)("h4",{id:"live-server"},"Live Server"),(0,n.kt)("p",null,"Otra extensi\xf3n imprescindible para nosotros es ",(0,n.kt)("strong",{parentName:"p"},"Live Server"),". Mediante esta extensi\xf3n podremos tener un servidor virtual que mostrar\xe1 el resultado de nuestro trabajo en un navegador, con la ventaja de que la vista se ir\xe1 actualizando conforme vamos modificando el c\xf3digo."),(0,n.kt)("p",null,"Existen infinidad de extensiones para VSCode\nAqu\xed puedes ver un ejemplo de mi entorno. Utilizo el tema ",(0,n.kt)("strong",{parentName:"p"},"Night Owl")," y los iconos de ",(0,n.kt)("strong",{parentName:"p"},"VSCode Icons"),".\nFijate que el c\xf3digo html est\xe1 formateado con ",(0,n.kt)("strong",{parentName:"p"},"Prettier")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Tema VSCode e Iconos",src:t(6182).Z,width:"957",height:"527"})),(0,n.kt)("p",null,"De momento, con esto es suficiente para comenzar a trabajar en el desarrollo de los prototipos html y css. M\xe1s adelante acabaremos de configurar nuestro entorno para trabajar con NodeJS y otras herramientas que nos ayudar\xe1n a programar de forma m\xe1s eficiente."),(0,n.kt)("h2",{id:"2-control-de-versiones---git"},"2. Control de versiones - Git"),(0,n.kt)("p",null,"Para el control de versiones vamos a instalar y configurar Git. Aunque seguro que a estas alturas ya sabes qu\xe9 es Git, pero deja que te refresque algunas ideas importantes:"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u2714 Git es como un superpoderoso ",(0,n.kt)("strong",{parentName:"p"},"control de versiones para tu c\xf3digo"),'. Imagina que est\xe1s escribiendo un ensayo importante y cada vez que haces cambios guardas una nueva versi\xf3n en diferentes archivos, como "ensayo_v1", "ensayo_v2" y as\xed sucesivamente. Git hace algo similar pero para tu c\xf3digo.'),(0,n.kt)("p",{parentName:"admonition"},"\u2714 Con Git, puedes ",(0,n.kt)("strong",{parentName:"p"},"guardar diferentes versiones de tu proyecto a medida que avanzas"),". Esto significa que si cometes un error o quieres volver a una versi\xf3n anterior, \xa1es pan comido! Git te permite viajar en el tiempo y regresar a cualquier punto en la historia de tu proyecto."),(0,n.kt)("p",{parentName:"admonition"},"\u2714 Pero eso no es todo. Git tambi\xe9n es ",(0,n.kt)("strong",{parentName:"p"},"excelente para trabajar en equipo"),". Puedes colaborar con otros programadores sin pisar los pies de nadie. Cada persona puede trabajar en su propia versi\xf3n del proyecto y luego combinar los cambios de todos de manera ordenada."),(0,n.kt)("p",{parentName:"admonition"},"\u2714 Adem\xe1s, Git hace que ",(0,n.kt)("strong",{parentName:"p"},"compartir tu c\xf3digo")," sea s\xfaper f\xe1cil. Puedes subir tu proyecto a un repositorio en l\xednea (como ",(0,n.kt)("strong",{parentName:"p"},"GitHub")," o GitLab) y otras personas pueden descargarlo y contribuir. Incluso puedes colaborar con desarrolladores de todo el mundo en proyectos de c\xf3digo abierto."),(0,n.kt)("p",{parentName:"admonition"},"Aprender git es muy importante para un desarrollador web. Por suerte lo vas a estudiar (si no lo has hecho ya) en el ciclo de DAW. De todas formas te dejo un enlace con m\xe1s informaci\xf3n que te ser\xe1 muy util para entender conceptos como que es una rama, como subir ramas al repositorio, clonarlas, sincronizarlas etc: "),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/mouredev/hello-git"},"\ud83d\udc49Hello Git & GitHub\ud83d\udc48"))),(0,n.kt)("p",null,"Vamos a instalar (si aun no est\xe1 instalado) Git. Para ello:  "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Descarga su \xfaltima versi\xf3n de la web oficial: ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Download Git"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Instala en tu ordenador el software.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configura git para tu usuario:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Lo primero que deber\xe1s hacer cuando instales Git es establecer tu nombre de usuario y direcci\xf3n de correo electr\xf3nico. Esto es importante porque los "commits" de Git usan esta informaci\xf3n, y es introducida de manera inmutable en los commits que env\xedas:'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'  $ git config --global user.name "John Doe"\n  $ git config --global user.email johndoe@example.com  \n')),(0,n.kt)("p",{parentName:"li"},"S\xf3lo necesitas hacer esto una vez si especificas la opci\xf3n --global, ya que Git siempre usar\xe1 esta informaci\xf3n para todo lo que hagas en ese sistema"))))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u2714\ufe0f Tienes m\xe1s informaci\xf3n de c\xf3mo configurar Git aqu\xed: "),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez"},"\ud83d\udc49Configurando Git por primera vez\ud83d\udc48")),(0,n.kt)("p",{parentName:"admonition"},"\u2714\ufe0f Si quieres aprender m\xe1s sobre git tambi\xe9n puedes consultar este recurso de Obdulia Montiel:"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/"},"\ud83d\udc49La gu\xeda para principiantes de Git y Github\ud83d\udc48"))),(0,n.kt)("h2",{id:"3-repositorio-en-linea---github"},"3. Repositorio en linea - Github"),(0,n.kt)("p",null,"Ahora que tenemos Git instalado en nuestro ordenador, vamos crearnos una cuenta en Github para poder sincronizar todo nuestro trabajo en la nube."),(0,n.kt)("admonition",{title:"\xbfQu\xe9 es y para que sirve Github?",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u2714\ufe0f GitHub es una especie de red social para programadores. Es un lugar en l\xednea donde los desarrolladores pueden ",(0,n.kt)("strong",{parentName:"p"},"compartir y trabajar en proyectos de software"),"."),(0,n.kt)("p",{parentName:"admonition"},"\u2714\ufe0f Funciona como un ",(0,n.kt)("strong",{parentName:"p"},"repositorio")," donde se guarda el c\xf3digo de ",(0,n.kt)("strong",{parentName:"p"},"diferentes versiones")," de un proyecto. Permite la ",(0,n.kt)("strong",{parentName:"p"},"colaboraci\xf3n entre programadores"),", quienes pueden ver y sugerir cambios en el c\xf3digo."),(0,n.kt)("p",{parentName:"admonition"},"\u2714\ufe0f Es una herramienta muy popular y \xfatil en la comunidad de ",(0,n.kt)("strong",{parentName:"p"},"desarrollo de software"),".")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"En primer lugar vamos a acceder ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/"},"github.com")),(0,n.kt)("li",{parentName:"ol"},"Crea una cuenta e inicia sesi\xf3n."),(0,n.kt)("li",{parentName:"ol"},"Ahora vamos a crear un proyecto de prueba con vscode, craremos un repositorio y lo sincronizaremos con github.")),(0,n.kt)("h2",{id:"configurando-entorno-y-subiendo-p\xe1gina-de-pruebas"},"Configurando entorno y subiendo p\xe1gina de pruebas"),(0,n.kt)("p",null,"Vamos a ver un ejemplo de todo el proceso. La idea es instalar y configurar nuestro entorno de desarrollo para despu\xe9s crear una p\xe1gina web, guardar una versi\xf3n en git, subirla a github y publicarla en github pages. Vamos a por ello:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Instala VSCode si no la has hecho a\xfan.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Config\xfaralo con el tema que m\xe1s te guste, los iconos que decidas e instala las extensiones ",(0,n.kt)("strong",{parentName:"p"},"live server")," y ",(0,n.kt)("strong",{parentName:"p"},"prettier"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Crea una carpeta en tu ordenador con nombre ",(0,n.kt)("inlineCode",{parentName:"p"},"pruebas"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre VSCode y arrastra la carpeta dentro de la ventana central.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Crea un archivo con nombre index.html (algo b\xe1sico, con un h1 y poco m\xe1s).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Muestra el resultado en el navegador utilizando ",(0,n.kt)("strong",{parentName:"p"},"live server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configura prettier para que al guardar con ",(0,n.kt)("inlineCode",{parentName:"p"},"ctrl + S")," se aplique formateado de tu c\xf3digo. Pruebalo.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Instala Git si no lo has hecho a\xfan.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configura tu usuario o confirma que ya est\xe1 configurado.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en el icono de '",(0,n.kt)("strong",{parentName:"p"},"Control de fuente"),"' de tu vscode o pulsa ",(0,n.kt)("inlineCode",{parentName:"p"},"ctrl + Mayus + G"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Aparecer\xe1 un mensaje que te indica que no tienes repositorio creado, y te dar\xe1 la opci\xf3n de crearlo desde aqu\xed. Hazlo"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Creando repositorio git",src:t(3796).Z,width:"1209",height:"516"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Confirmar",src:t(4986).Z,width:"1017",height:"410"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Escribe un mensaje de inicio de repositorio (por ejemplo '",(0,n.kt)("em",{parentName:"p"},"primer commit de git"),"') y dale a confirmar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ahora te pedir\xe1 si quieres ",(0,n.kt)("strong",{parentName:"p"},"publicar la rama")," ('",(0,n.kt)("em",{parentName:"p"},"Branch"),"'). Dile que s\xed. Al hacer clic te preguntar\xe1 qu\xe9 nombre quieres para el repositorio y si quieres que sea privado o p\xfablico. Por defecto, el nombre del repositorio coincide con el nombre de la carpeta de tu proyecto, pero puedes cambiarlo si lo deseas. Para esta prueba haremos que nuestro repositorio sea p\xfablico.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si es la primera vez que conectas tu VSCode con github te pedir\xe1 que lo sincronices. Utiliza la opci\xf3n de confirmar a trav\xe9s de VSCode.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Una vez publicado tu archivo en github podr\xe1s ver, en tu p\xe1gina de github (por ejemplo ",(0,n.kt)("inlineCode",{parentName:"p"},"carrebola.github.com"),"), algo as\xed:"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Github con proyecto nuevo",src:t(7896).Z,width:"1573",height:"689"})),(0,n.kt)("admonition",{title:"\xbfC\xf3mo utilizar Git desde Visual Studio Code?",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Aqu\xed te dejo un enlace a un art\xedculo de donde nos explica como trabajar con git y github desde VSCode:"),(0,n.kt)("p",{parentName:"admonition"}," ",(0,n.kt)("a",{parentName:"p",href:"https://programacionfacil.org/blog/como-utilizar-git-desde-visual-studio-code/"},"\ud83d\udc49\xbfC\xf3mo utilizar Git desde Visual Studio Code?\ud83d\udc48"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Vamos a ",(0,n.kt)("strong",{parentName:"li"},"documentar")," de forma b\xe1sica nuestro proyecto ",(0,n.kt)("em",{parentName:"li"},"prueba"),". Para ello vamos ahora a crear un archivo ",(0,n.kt)("strong",{parentName:"li"},"readme.md")," para que github muestre informaci\xf3n del proyecto publicado en su pantalla inicial:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Crea un archivo con nombre ",(0,n.kt)("strong",{parentName:"li"},"readme.md")," en la raiz de la carpeta del proyecto."),(0,n.kt)("li",{parentName:"ul"},"Escribe dentro un texto descriptivo del proyecto, como por ejemplo:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# Configurando nuestro entorno de desarrollo\n\n1. Instalaci\xf3n de VSCode\n2. Configurarci\xf3n de git y github\n3. Pruebas con proyecto\n\n")),(0,n.kt)("p",null,"Si abrimos ahora github podemos ver como se muestra esta informaci\xf3n en la portada del repositorio de github."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Prueba readme.md",src:t(3005).Z,width:"1589",height:"787"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"F\xedjate que el ",(0,n.kt)("inlineCode",{parentName:"p"},"#")," equivale a un ",(0,n.kt)("inlineCode",{parentName:"p"},"<h1></h1>")," y que la numeraci\xf3n se comporta como una lista ordenada ",(0,n.kt)("inlineCode",{parentName:"p"},"<ol></ol>"),". Este tipo de lenguaje se llama ",(0,n.kt)("strong",{parentName:"p"},"Markdown"),".")),(0,n.kt)("admonition",{title:"Aprende Markdown",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Si quieres saber m\xe1s de este sencillo y potente lenguaje aqu\xed tienes m\xe1s informaci\xf3n:"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://desarrolloweb.com/home/markdown"},"\ud83d\udc49 ",(0,n.kt)("strong",{parentName:"a"},"MARKDOWN"),"\ud83d\udc48"))),(0,n.kt)("ol",{start:14},(0,n.kt)("li",{parentName:"ol"},"Para terminar vamos a subir nuestro proyecto a github pages. Para ello:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Haz clic en ",(0,n.kt)("inlineCode",{parentName:"li"},"Settings")," (el icono con forma de engranaje de la parte superior)"),(0,n.kt)("li",{parentName:"ul"},"Entra en Pages (opci\xf3n que encontrar\xe1s en el men\xfa lateral izquierdo)"),(0,n.kt)("li",{parentName:"ul"},"Donde pone ",(0,n.kt)("inlineCode",{parentName:"li"},"Branch")," selecciona la rama ",(0,n.kt)("inlineCode",{parentName:"li"},"main")," y haz clic en ",(0,n.kt)("inlineCode",{parentName:"li"},"Save"),"."),(0,n.kt)("li",{parentName:"ul"},"Si todo ha ido bien, la p\xe1gina se est\xe1 publicando... Espera un minuto y refresca la p\xe1gina con F5"),(0,n.kt)("li",{parentName:"ul"},"Ahora puedes ver la url donde se ha publicado tu p\xe1gina. Haz clic en el enlace o en el bot\xf3n ",(0,n.kt)("inlineCode",{parentName:"li"},"Visit site")," y podr\xe1s ver la web publicada.")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Publicaci\xf3n en github pages",src:t(1080).Z,width:"1133",height:"702"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"GitHub Pages")," es como un servidor web est\xe1tico gratuito para que los desarrolladores ",(0,n.kt)("strong",{parentName:"p"},"muestren su trabajo al mundo"),". B\xe1sicamente, puedes tomar tus proyectos de GitHub y convertirlos en p\xe1ginas web p\xfablicas para que cualquiera las vea.")),(0,n.kt)("p",null,"Y hasta aqu\xed la configuraci\xf3n de nuestro entorno de desarrollo, al menos la versi\xf3n b\xe1sica. M\xe1s adelante aprenderemos a trabajar con otras herramientas como nodejs, eslint, etc, pero de momento, con este entorno, ya ",(0,n.kt)("strong",{parentName:"p"},"estamos preparados para crear los prototipos en html y css")," de la primera versi\xf3n de nuestro proyecto."))}u.isMDXComponent=!0},4986:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/confirmgit-05eb2b43bcbe481fd8cec6be0976d4a5.png"},6182:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/entornovscode-80ba59cf4e146584bd91bdc2ddc30ba1.png"},7896:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/github-331ad9adada0e68ee217ed2a11147d31.png"},1080:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/githubpages-29b29a98b367965695b01b043cb7c0d2.png"},3005:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/pruebamarkdown-e0afca8f47d07e677b84a971c713f4c3.png"},3796:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/pruebas-699477c2eaed5615c35abc13ab591adb.png"}}]);