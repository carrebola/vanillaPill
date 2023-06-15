"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6276],{3905:(e,a,s)=>{s.d(a,{Zo:()=>c,kt:()=>g});var r=s(7294);function o(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function i(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,r)}return s}function n(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?i(Object(s),!0).forEach((function(a){o(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function t(e,a){if(null==e)return{};var s,r,o=function(e,a){if(null==e)return{};var s,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],a.indexOf(s)>=0||(o[s]=e[s]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var l=r.createContext({}),d=function(e){var a=r.useContext(l),s=a;return e&&(s="function"==typeof e?e(a):n(n({},a),e)),s},c=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var s=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=t(e,["components","mdxType","originalType","parentName"]),u=d(s),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return s?r.createElement(g,n(n({ref:a},c),{},{components:s})):r.createElement(g,n({ref:a},c))}));function g(e,a){var s=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=s.length,n=new Array(i);n[0]=m;var t={};for(var l in a)hasOwnProperty.call(a,l)&&(t[l]=a[l]);t.originalType=e,t[u]="string"==typeof e?e:o,n[1]=t;for(var d=2;d<i;d++)n[d]=s[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},1174:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var r=s(7462),o=(s(7294),s(3905));const i={title:"Hist0 - Requesitos y diagrama de casos de uso",tags:["Requisitos"],position:10},n=void 0,t={unversionedId:"Version 1.0/Requisitos y diagrama de casos de uso",id:"Version 1.0/Requisitos y diagrama de casos de uso",title:"Hist0 - Requesitos y diagrama de casos de uso",description:"En la introducci\xf3n de esta documentaci\xf3n, en la secci\xf3n El proyecto Vanilla Games, en concreto en el apartado Requisitos del proyecto y casos de uso general, hemos definido qu\xe9 se espera de nuestra aplicaci\xf3n web, a partir de los 'Casos de uso general'.",source:"@site/docs/03-Version 1.0/01-Requisitos y diagrama de casos de uso.md",sourceDirName:"03-Version 1.0",slug:"/Version 1.0/Requisitos y diagrama de casos de uso",permalink:"/vanillaPill/docs/Version 1.0/Requisitos y diagrama de casos de uso",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Version 1.0/01-Requisitos y diagrama de casos de uso.md",tags:[{label:"Requisitos",permalink:"/vanillaPill/docs/tags/requisitos"}],version:"current",sidebarPosition:1,frontMatter:{title:"Hist0 - Requesitos y diagrama de casos de uso",tags:["Requisitos"],position:10},sidebar:"tutorialSidebar",previous:{title:"Fichas de usuario",permalink:"/vanillaPill/docs/T\xe9cnicas para el dise\xf1o de la interficie/Fichas de usuario"},next:{title:"Hist1 - PLANIFICACI\xd3N DEL PROYECTO",permalink:"/vanillaPill/docs/Version 1.0/Planificaci\xf3n del proyecto"}},l={},d=[{value:"Casos de uso. Definici\xf3n b\xe1sica",id:"casos-de-uso-definici\xf3n-b\xe1sica",level:2},{value:"Diagrama de casos de uso",id:"diagrama-de-casos-de-uso",level:2},{value:"Diagrma de casos de uso para la versi\xf3n 1.0",id:"diagrma-de-casos-de-uso-para-la-versi\xf3n-10",level:3}],c={toc:d},u="wrapper";function p(e){let{components:a,...i}=e;return(0,o.kt)(u,(0,r.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En la introducci\xf3n de esta documentaci\xf3n, en la secci\xf3n ",(0,o.kt)("em",{parentName:"p"},"El proyecto Vanilla Games"),", en concreto en el apartado ",(0,o.kt)("em",{parentName:"p"},"Requisitos del proyecto y casos de uso general"),", hemos definido qu\xe9 se espera de nuestra aplicaci\xf3n web, a partir de los 'Casos de uso general'."),(0,o.kt)("p",null,"Tambi\xe9n hemos dividido todo el trabajo de desarrollo en diferentes versiones, con la intenci\xf3n de que nuestro proyecto est\xe9 operativo desde el inicio de su implementaci\xf3n, de manera que conforme evolucione a posteriores versiones, aumentaremos su nivel de funcionalidad."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Por lo tanto, vamos a comenzar por la versi\xf3n 1.0.")),(0,o.kt)("p",null,"Lo primero es definir los ",(0,o.kt)("strong",{parentName:"p"},"casos de uso para esta versi\xf3n"),". Una primera aproximaci\xf3n podr\xeda ser la siguiente:"),(0,o.kt)("admonition",{title:"Recuerda que...",type:"info"},(0,o.kt)("p",{parentName:"admonition"}," Los ",(0,o.kt)("strong",{parentName:"p"},"casos de uso")," son una herramienta esencial para comprender y especificar los requisitos de un sistema, y para garantizar que el software desarrollado satisfaga las necesidades de los usuarios finales.\n")),(0,o.kt)("h2",{id:"casos-de-uso-definici\xf3n-b\xe1sica"},"Casos de uso. Definici\xf3n b\xe1sica"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registrar usuario"),": Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contrase\xf1a."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recuperar contrase\xf1a"),": Un usuario registrado puede solicitar la recuperaci\xf3n de su contrase\xf1a en caso de que la haya olvidado. Para ello, se le enviar\xe1 un correo electr\xf3nico con las instrucciones para restablecer su contrase\xf1a."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Iniciar sesi\xf3n"),": Un usuario registrado puede iniciar sesi\xf3n en la plataforma proporcionando su email y contrase\xf1a."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cerrar sesi\xf3n"),": Un usuario puede cerrar su sesi\xf3n en la plataforma en cualquier momento."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Editar perfil"),": Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contrase\xf1a."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ver proyectos"),": Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Publicar proyecto"),": Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando informaci\xf3n como nombre, descripci\xf3n, imagen representativa, enlaces a servidor de pruebas y repositorio de c\xf3digo, estado del proyecto, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Editar proyecto"),": Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la informaci\xf3n del proyecto."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Eliminar proyecto"),": Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ver/Editar usuarios"),": Un adminsrador puede ver una tabla con todos los usuarios que hay registrados y editar la informaci\xf3n, incluido el ROL de usuario."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Eliminar usuario"),": Un administrador puede eliminar cualquier usuario registrado en la plataforma.")),(0,o.kt)("h2",{id:"diagrama-de-casos-de-uso"},"Diagrama de casos de uso"),(0,o.kt)("p",null,"Para tener la informaci\xf3n de manera gr\xe1fica vamos a utilizar uno de los ",(0,o.kt)("strong",{parentName:"p"},"diagramas UML")," que aprendimos a hacer el curso pasado: "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"\xbfQu\xe9 es un diagrama UML?"),(0,o.kt)("p",{parentName:"admonition"},"  ",(0,o.kt)("strong",{parentName:"p"},"UML"),", que significa Lenguaje de Modelado Unificado (Unified Modeling Language, en ingl\xe9s), es un lenguaje est\xe1ndar utilizado en el desarrollo de software para visualizar, especificar, construir y documentar los artefactos de un sistema. Los diagramas UML son representaciones gr\xe1ficas utilizadas en UML para modelar diferentes aspectos del sistema."),(0,o.kt)("p",{parentName:"admonition"},"  ",(0,o.kt)("strong",{parentName:"p"},"Existen varios tipos de diagramas UML"),", cada uno de los cuales se enfoca en un aspecto espec\xedfico del sistema y proporciona diferentes niveles de detalle. Algunos de los diagramas UML m\xe1s comunes son:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Diagrama de casos de uso: describe las interacciones entre los actores y el sistema, mostrando qu\xe9 funcionalidades proporciona el sistema a los usuarios.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Diagrama de clases: representa la estructura est\xe1tica del sistema, mostrando las clases, sus atributos, m\xe9todos y las relaciones entre ellas.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Diagrama de secuencia: muestra la interacci\xf3n entre los objetos en una secuencia temporal, describiendo c\xf3mo los objetos se comunican y colaboran entre s\xed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Diagrama de actividades: describe el flujo de trabajo o los procesos empresariales en un sistema, mostrando las actividades y las decisiones que se toman en cada etapa.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Diagrama de componentes: muestra la estructura de componentes de un sistema, identificando los componentes y las dependencias entre ellos.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Diagrama de despliegue: representa la arquitectura f\xedsica del sistema, mostrando c\xf3mo los componentes se distribuyen en el hardware y la red."),(0,o.kt)("p",{parentName:"li"},"Estos son solo algunos ejemplos de los diagramas UML m\xe1s utilizados, pero hay otros diagramas, como el diagrama de estados, el diagrama de objetos y el diagrama de comunicaci\xf3n, que tambi\xe9n se utilizan para modelar diferentes aspectos de un sistema. En general, los diagramas UML proporcionan una representaci\xf3n visual clara y sistem\xe1tica del sistema, lo que facilita la comprensi\xf3n, la comunicaci\xf3n y el dise\xf1o del software.")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\xbfQu\xe9 es un diagrama de casos de uso?"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Un diagrama de casos de uso")," es una herramienta utilizada en el an\xe1lisis y dise\xf1o de sistemas de software para representar las interacciones entre los actores (usuarios o sistemas externos) y el sistema en s\xed. Es una representaci\xf3n visual que describe c\xf3mo se utilizar\xe1 el sistema desde la perspectiva del usuario."),(0,o.kt)("p",{parentName:"admonition"},"  En un diagrama de casos de uso, ",(0,o.kt)("strong",{parentName:"p"},"los actores")," se representan mediante figuras externas al sistema, como personas, otros sistemas o incluso dispositivos. ",(0,o.kt)("strong",{parentName:"p"},"Los casos de uso, por otro lado, se representan como elipses")," y describen las diferentes acciones o funciones que el sistema proporciona a los actores."),(0,o.kt)("p",{parentName:"admonition"},"  El diagrama muestra las ",(0,o.kt)("strong",{parentName:"p"},"relaciones entre los actores y los casos de uso")," a trav\xe9s de l\xedneas que conectan las figuras correspondientes. Estas l\xedneas representan las interacciones entre los actores y el sistema, indicando qu\xe9 casos de uso son accesibles para cada actor."),(0,o.kt)("p",{parentName:"admonition"},"  Los casos de uso se utilizan para capturar los requisitos funcionales del sistema y proporcionar una visi\xf3n general de c\xf3mo interact\xfaan los diferentes actores con el sistema. Tambi\xe9n ayudan a identificar los distintos escenarios de uso y las relaciones entre ellos. "),(0,o.kt)("p",{parentName:"admonition"},"  El diagrama de casos de uso es una herramienta valiosa para comunicar y comprender las funcionalidades clave del sistema entre los desarrolladores, los usuarios y otros interesados en el proyecto de software."))),(0,o.kt)("p",null,"Vamos a crear nuestro diagrama de casos de uso."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Para dibujar el diagrama de casos de uso una herramienta interesante puede ser ",(0,o.kt)("a",{parentName:"p",href:"http://www.figma.com"},"FIGMA."),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Figma es una herramienta de dise\xf1o de interfaces de usuario (UI) y experiencia de usuario (UX)")," basada en la nube. Permite a los dise\xf1adores crear, prototipar y colaborar en dise\xf1os interactivos de alta calidad de forma colaborativa.")),(0,o.kt)("p",null,"El diagrama de casos de uso para la versi\xf3n 1.0 ser\xeda el siguiente:"),(0,o.kt)("h3",{id:"diagrma-de-casos-de-uso-para-la-versi\xf3n-10"},"Diagrma de casos de uso para la versi\xf3n 1.0"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"diagrama de casos de uso V1.0",src:s(1690).Z,width:"2384",height:"2594"})),(0,o.kt)("p",null,"Este diagrama refleja de forma resumida qu\xe9 acciones se pueden llevar a cabo en nuestro aplicaci\xf3n dependiendo del rol del usuario. "),(0,o.kt)("p",null,"Ahora que tenemos claro todo ",(0,o.kt)("strong",{parentName:"p"},"lo que debe hacer la versi\xf3n 1.0"),", ",(0,o.kt)("em",{parentName:"p"},"nuestra misi\xf3n ahora es ",(0,o.kt)("strong",{parentName:"em"},"planificar el trabajo")," que se nos viene encima...")))}p.isMDXComponent=!0},1690:(e,a,s)=>{s.d(a,{Z:()=>r});const r=s.p+"assets/images/diagramaCasosUso_1-3fc60e64208490df3bd2eb0f595cedbc.png"}}]);