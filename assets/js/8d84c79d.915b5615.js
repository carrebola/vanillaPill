"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9629],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),l=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(d.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,b=u["".concat(d,".").concat(m)]||u[m]||p[m]||s;return t?n.createElement(b,o(o({ref:a},c),{},{components:t})):n.createElement(b,o({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4917:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const s={Title:"Dise\xf1o de la base de datos"},o=void 0,i={unversionedId:"Version 1.0/SPRINT 4 - BACKEND/HistX - Dise\xf1o de la base de datos",id:"Version 1.0/SPRINT 4 - BACKEND/HistX - Dise\xf1o de la base de datos",title:"HistX - Dise\xf1o de la base de datos",description:"Diagrama entidad - relaci\xf3n",source:"@site/docs/03-Version 1.0/SPRINT 4 - BACKEND/01-HistX - Dise\xf1o de la base de datos.md",sourceDirName:"03-Version 1.0/SPRINT 4 - BACKEND",slug:"/Version 1.0/SPRINT 4 - BACKEND/HistX - Dise\xf1o de la base de datos",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 4 - BACKEND/HistX - Dise\xf1o de la base de datos",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Version 1.0/SPRINT 4 - BACKEND/01-HistX - Dise\xf1o de la base de datos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{Title:"Dise\xf1o de la base de datos"},sidebar:"tutorialSidebar",previous:{title:"Historia 12. Primeras vistas: Login, Registro, Administraci\xf3n de usuarios",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 3 - SPA/Hist8 - Implementaci\xf3n del proyecto basado en SPA/h12"},next:{title:"Diagrama de clases y mapping",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 4 - BACKEND/Diagrama de clases y mapping"}},d={},l=[{value:"Diagrama entidad - relaci\xf3n",id:"diagrama-entidad---relaci\xf3n",level:2}],c={toc:l},u="wrapper";function p(e){let{components:a,...s}=e;return(0,r.kt)(u,(0,n.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"diagrama-entidad---relaci\xf3n"},"Diagrama entidad - relaci\xf3n"),(0,r.kt)("p",null,"Vamos a comenzar a trabajar en el ",(0,r.kt)("strong",{parentName:"p"},"backend"),". Tal y como comentamos en el apartado de ",(0,r.kt)("em",{parentName:"p"},"Arquitectura y tecnolog\xedas"),", el backend lo implementaremos utilizando ",(0,r.kt)("strong",{parentName:"p"},"Supabase como servicio"),".\nSupabase trabaja con ",(0,r.kt)("strong",{parentName:"p"},"bases de datos relacionales")," por lo tanto crearemos modelos basados en ",(0,r.kt)("strong",{parentName:"p"},"tablas"),"."),(0,r.kt)("p",null,"En primer lugar, para dise\xf1ar nuestra estructura de bases de datos, haremos uso, una vez m\xe1s, de los ",(0,r.kt)("strong",{parentName:"p"},"diagramas UML")," y crearemos un ",(0,r.kt)("strong",{parentName:"p"},"diagrama de entidad - relaci\xf3n.")),(0,r.kt)("admonition",{title:"\xbfQu\xe9 es un diagrama entidad/relaci\xf3n?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Un diagrama de entidad-relaci\xf3n (ER) es una herramienta de modelado de datos utilizada para describir la estructura de una base de datos en t\xe9rminos de entidades y las relaciones entre ellas. Estas entidades pueden ser personas, lugares, objetos, eventos o conceptos, y las relaciones entre ellas representan las conexiones l\xf3gicas entre los datos."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"M\xe1s informaci\xf3n sobre diagramas E-R"),(0,r.kt)("p",{parentName:"admonition"},'En un diagrama ER, las entidades se representan como rect\xe1ngulos y las relaciones se representan como l\xedneas que conectan los rect\xe1ngulos. Cada entidad se describe mediante sus atributos, que son las caracter\xedsticas o propiedades que definen la entidad. Por ejemplo, una entidad "cliente" puede tener atributos como nombre, direcci\xf3n, n\xfamero de tel\xe9fono, correo electr\xf3nico, etc.'),(0,r.kt)("p",{parentName:"admonition"},"Las relaciones entre las entidades se describen mediante la cardinalidad, que indica cu\xe1ntas entidades est\xe1n relacionadas y c\xf3mo est\xe1n relacionadas. Las relaciones pueden ser uno-a-uno, uno-a-muchos o muchos-a-muchos, y se indican mediante s\xedmbolos especiales que se colocan junto a las l\xedneas que conectan las entidades."),(0,r.kt)("p",{parentName:"admonition"},"Un diagrama ER es una herramienta \xfatil en el dise\xf1o de bases de datos, ya que ayuda a identificar las entidades y las relaciones entre ellas, y a establecer la estructura de la base de datos en t\xe9rminos de tablas, campos y relaciones. Adem\xe1s, tambi\xe9n puede ayudar a detectar problemas en el dise\xf1o de la base de datos, como redundancias o inconsistencias, y a optimizar la estructura de la base de datos para mejorar el rendimiento y la eficiencia."))),(0,r.kt)("p",null,"Este podr\xeda ser nuestro diagrama E-R para la versi\xf3n 1.0 de nuestro proyecto:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagrama E-R",src:t(5555).Z,width:"840",height:"494"})),(0,r.kt)("p",null,"Como podemos observar, este diagrama muestra 3 entidades que se relacionan entre s\xed. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"La entidad (tabla) ",(0,r.kt)("strong",{parentName:"li"},"USER"),", que ser\xe1 la tabla que se crea de manera autom\xe1tica en supabase cada vez que se registra un usuario (que incluir\xe1 los campos id, created_At, email y otros campos gen\xe9ricos)"),(0,r.kt)("li",{parentName:"ul"},"La entidad ",(0,r.kt)("strong",{parentName:"li"},"PERFIL"),", que ser\xe1 una tabla asociado a USER con la clave for\xe1nea user_id, y que contendr\xe1 toda la informaci\xf3n del perfil del usuario registrado."),(0,r.kt)("li",{parentName:"ul"},"La entidad ",(0,r.kt)("strong",{parentName:"li"},"PROYECTO")," que contendr\xe1 la informaci\xf3n de los proyectos creados por los usuarios.")),(0,r.kt)("p",null,"La entidad PERFIL se relaciona con USER con user_id con una cardinalidad 1 - 1, es decir el perfil pertenece a un usuario y un usuario solo puede tener un perfil."),(0,r.kt)("p",null,"La entidad USER puede CREAR   PROYECTO. La cardinalidad es 1 - n, es decir, un usuario puede crear varios proyectos pero un proyecto solo puede ser creado por un usuario."),(0,r.kt)("p",null,"L\xf3gicamente, estas relaciones no generan tablas a\xf1adidas."),(0,r.kt)("p",null,"Aqu\xed podemos ver otra versi\xf3n del mismo diagrama, con una nomenclatura diferente:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagrama de tablas",src:t(5187).Z,width:"853",height:"356"})),(0,r.kt)("p",null,"Para la versi\xf3n 1 del proyecto no necesitamos m\xe1s tablas. Es una estructura sencilla que se ir\xe1 complicando conforme a\xf1adamos funcionalidades."))}p.isMDXComponent=!0},5555:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/diagramaer1-fff859ccf6762bd69f08d7e3a4420a21.png"},5187:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/diagramaer2-26db48c2bd6e7ae752a9356af78bce19.png"}}]);