"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1606],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>g});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),c=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=t,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return n?r.createElement(g,o(o({ref:a},p),{},{components:n})):r.createElement(g,o({ref:a},p))}));function g(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:t,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5509:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),t=(n(7294),n(3905));const s={Title:"Diagrama de clases y mapping mediante mediante ORM"},o=void 0,i={unversionedId:"Version 1.0/SPRINT 4 - BACKEND/Diagrama de clases y mapping",id:"Version 1.0/SPRINT 4 - BACKEND/Diagrama de clases y mapping",title:"Diagrama de clases y mapping",description:"Ya hemos decidido las entidades que necesitamos en la construcci\xf3n de nuestra base de datos y como se relacionan.",source:"@site/docs/03-Version 1.0/SPRINT 4 - BACKEND/02-Diagrama de clases y mapping.md",sourceDirName:"03-Version 1.0/SPRINT 4 - BACKEND",slug:"/Version 1.0/SPRINT 4 - BACKEND/Diagrama de clases y mapping",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 4 - BACKEND/Diagrama de clases y mapping",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Version 1.0/SPRINT 4 - BACKEND/02-Diagrama de clases y mapping.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{Title:"Diagrama de clases y mapping mediante mediante ORM"},sidebar:"tutorialSidebar",previous:{title:"HistX - Dise\xf1o de la base de datos",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 4 - BACKEND/HistX - Dise\xf1o de la base de datos"},next:{title:"Dise\xf1o del diagrama de clases",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 4 - BACKEND/Dise\xf1o del diagrama de clases"}},l={},c=[{value:"\xbfQu\xe9 es un diagrama de clases?",id:"qu\xe9-es-un-diagrama-de-clases",level:2},{value:"\xbfQu\xe9 es un ORM?",id:"qu\xe9-es-un-orm",level:2},{value:"\xbfY para que queremos esto?",id:"y-para-que-queremos-esto",level:2}],p={toc:c},d="wrapper";function m(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Ya hemos decidido las ",(0,t.kt)("strong",{parentName:"p"},"entidades")," que necesitamos en la construcci\xf3n de nuestra base de datos y como se relacionan."),(0,t.kt)("p",null,"Para representar este dise\xf1o hemos empleado un diagrama UML llamado '",(0,t.kt)("strong",{parentName:"p"},"Diagrama entidad-relacion"),"'."),(0,t.kt)("p",null,"Pero tenemos otro ",(0,t.kt)("strong",{parentName:"p"},"diagrama UML")," mucho m\xe1s potente, el ",(0,t.kt)("strong",{parentName:"p"},"Diagrama de clases"),". \xc9ste se utiliza en programaci\xf3n cuando trabajamos con ",(0,t.kt)("strong",{parentName:"p"},"Programaci\xf3n Orientada a Objetos"),", como va a ser nuestro caso."),(0,t.kt)("h2",{id:"qu\xe9-es-un-diagrama-de-clases"},"\xbfQu\xe9 es un diagrama de clases?"),(0,t.kt)("admonition",{title:"Diagrama de Clases:",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"El ",(0,t.kt)("strong",{parentName:"p"},"diagrama de clases")," es una representaci\xf3n visual de las clases, objetos y relaciones en un sistema. Se utiliza en la ",(0,t.kt)("strong",{parentName:"p"},"fase de dise\xf1o")," para ilustrar c\xf3mo se organizan las ",(0,t.kt)("strong",{parentName:"p"},"clases"),", sus ",(0,t.kt)("strong",{parentName:"p"},"atributos")," y ",(0,t.kt)("strong",{parentName:"p"},"m\xe9todos"),", as\xed como las relaciones entre ellas. El diagrama de clases es un componente clave en la ",(0,t.kt)("strong",{parentName:"p"},"programaci\xf3n orientada a objetos"),", ya que ayuda a comprender la estructura del software antes de implementarlo."),(0,t.kt)("p",{parentName:"admonition"},"En un diagrama de clases, las clases representan objetos del mundo real o conceptos en el software, y las relaciones (como asociaci\xf3n, herencia, composici\xf3n, etc.) describen c\xf3mo interact\xfaan estos objetos entre s\xed.")),(0,t.kt)("h2",{id:"qu\xe9-es-un-orm"},"\xbfQu\xe9 es un ORM?"),(0,t.kt)("p",null,"Por otro lado otro concepto que debemos conocer es el patr\xf3n de dise\xf1o ORM (Object-Relational Mapping)"),(0,t.kt)("admonition",{title:"ORM (Object-Relational Mapping):",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"El ",(0,t.kt)("strong",{parentName:"p"},"ORM es un patr\xf3n de dise\xf1o")," que permite ",(0,t.kt)("strong",{parentName:"p"},"mapear objetos y sus relaciones en una base de datos relacional"),". En lugar de escribir consultas SQL directamente, el ORM ",(0,t.kt)("strong",{parentName:"p"},"abstrae la interacci\xf3n con la base de datos")," utilizando clases y objetos. ",(0,t.kt)("strong",{parentName:"p"},"Cada clase en el ORM se mapea a una tabla")," en la base de datos, y ",(0,t.kt)("strong",{parentName:"p"},"las propiedades de la clase se mapean a columnas en la tabla"),".")),(0,t.kt)("p",null,"En resumen, mientras que el ",(0,t.kt)("strong",{parentName:"p"},"diagrama de clases")," es una herramienta de dise\xf1o para visualizar la estructura y las relaciones de las clases en un sistema, el ",(0,t.kt)("strong",{parentName:"p"},"ORM")," es una t\xe9cnica de implementaci\xf3n que permite que esas clases y relaciones se reflejen directamente en la base de datos, lo que facilita el almacenamiento y la recuperaci\xf3n de datos de manera orientada a objetos."),(0,t.kt)("h2",{id:"y-para-que-queremos-esto"},"\xbfY para que queremos esto?"),(0,t.kt)("p",null,"Si has entendido los conceptos anteriores (y si no, \xa1pregunta!, que para eso me pagan... \ud83d\ude0b), la idea es dise\xf1ar las clases necesarias para ",(0,t.kt)("strong",{parentName:"p"},"abstraer")," (que significa ",(0,t.kt)("em",{parentName:"p"},"separar"),", no te rayes) la programaci\xf3n javascript de la l\xf3gica propia para acceder a las bases de datos."),(0,t.kt)("p",null,"Nosotros vamos a utilizar, para acceder al servicio backend de supabase, una API de javascript que nos facilita la propia plataforma (ya lo veremos). Pero la idea es que, si creamos esta ",(0,t.kt)("strong",{parentName:"p"},"capa de abstraci\xf3n"),", en un futuro ",(0,t.kt)("strong",{parentName:"p"},"podr\xedamos sustituir el servicio de Supabase por nuestra propia API Rest")," basada en otro lenguaje de servidor,como por ejemplo: python, php o el mismo javascript con nodejs."),(0,t.kt)("p",null,"Es decir, aunque cambi\xe1semos el lado del servidor, la programaci\xf3n del lado del cliente \xa1seguir\xeda intacta!. Esta podr\xeda suponer una gran ventaja si un d\xeda necesitamos escalar nuestro proyecto."),(0,t.kt)("admonition",{title:"\xbfQu\xe9 demonios es una API Rest?",type:"info"},(0,t.kt)("details",null,(0,t.kt)("summary",null,"Una API REST es una forma de hacer que diferentes programas en l\xednea puedan hablar entre s\xed como si fueran amigos. "),"Imagina que tienes una m\xe1quina expendedora: pones dinero (petici\xf3n) y recibes una bebida (respuesta). Del mismo modo, cuando env\xedas una petici\xf3n a una API REST (dinero en la m\xe1quina expendedora), obtienes informaci\xf3n o realizas una acci\xf3n (bebida).",(0,t.kt)("p",{parentName:"admonition"},'En lugar de usar botones en la m\xe1quina, usas diferentes palabras como "consigue esto", "agrega eso", "cambia esto" o "borra eso" (verbos HTTP como GET, POST, PUT, DELETE). Y toda la informaci\xf3n se organiza como si fuera una direcci\xf3n (URL) que dice d\xf3nde obtener o poner cosas.'),(0,t.kt)("p",{parentName:"admonition"},"Entonces, en resumen, una API REST es como una m\xe1quina expendedora para datos en la web: pides cosas, haces cosas y obtienes respuestas, todo a trav\xe9s de un conjunto de reglas y direcciones."))),(0,t.kt)("p",null,"Tranquilo, cuando comiences a ver el c\xf3digo lo entender\xe1s mucho mejor... \ud83d\ude05"))}m.isMDXComponent=!0}}]);