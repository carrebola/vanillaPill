"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9472],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(g,i(i({ref:a},c),{},{components:t})):n.createElement(g,i({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4209:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:100},i="Historia 8. Configuraci\xf3n del entorno de desarrollo para nuestro proyecto. ESLint",s={unversionedId:"Version 1.0/Supabase/h8",id:"Version 1.0/Supabase/h8",title:"Historia 8. Configuraci\xf3n del entorno de desarrollo para nuestro proyecto. ESLint",description:"A la hora de escribir nuestro c\xf3digo es importante mantener las formas, utilizando estructuras correctas y manteniendo ciertas pautas. Por ejemplo: \xbfDebo poner punto y coma al final de cada linea? \xbfPuedo declarar variables y luego no usarlas? \xbfPuedo dejar espacios entra lineas de c\xf3digo? \xbfCuantos espacios debo poner al tabular?",source:"@site/docs/03-Version 1.0/10-Supabase/h8.md",sourceDirName:"03-Version 1.0/10-Supabase",slug:"/Version 1.0/Supabase/h8",permalink:"/vanillaPill/docs/Version 1.0/Supabase/h8",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Version 1.0/10-Supabase/h8.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Historia 7. Supabase. Funciones en tiempo real (Edge Functions) Pruebas V (API DOCS)",permalink:"/vanillaPill/docs/Version 1.0/Supabase/h7"},next:{title:"Historia 9. Definici\xf3n del mapping de acceso a la bd. Clases",permalink:"/vanillaPill/docs/Version 1.0/ORM (mapping) en javascript/h9"}},l={},p=[{value:"ESlint",id:"eslint",level:2},{value:"Instalaci\xf3n de ESLint",id:"instalaci\xf3n-de-eslint",level:3}],c={toc:p},u="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"historia-8-configuraci\xf3n-del-entorno-de-desarrollo-para-nuestro-proyecto-eslint"},"Historia 8. Configuraci\xf3n del entorno de desarrollo para nuestro proyecto. ESLint"),(0,r.kt)("p",null,"A la hora de escribir nuestro c\xf3digo es importante mantener las formas, utilizando estructuras correctas y manteniendo ciertas pautas. Por ejemplo: \xbfDebo poner punto y coma al final de cada linea? \xbfPuedo declarar variables y luego no usarlas? \xbfPuedo dejar espacios entra lineas de c\xf3digo? \xbfCuantos espacios debo poner al tabular?"),(0,r.kt)("p",null,"Una vez tengo claras todas estas reglas, puedo utilizar un ",(0,r.kt)("strong",{parentName:"p"},"Linter")," para que se encargue de vigilar que las estoy cumpliendo todas estas pautas y que nuestro c\xf3digo es ",(0,r.kt)("strong",{parentName:"p"},"consistente"),". "),(0,r.kt)("p",null,"Con esto vamos a evitar malas pr\xe1cticas escribiendo el c\xf3digo, vamos a detectar errores de sintaxis antes de ejecutar nuestros scripts y a respetar el formato para que nuestro estilo sea consistente."),(0,r.kt)("p",null,"Existen algunos estandars a la hora de escribir c\xf3digo que tienen sus propias reglas. Por ejemplo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airbnb"),(0,r.kt)("li",{parentName:"ul"},"StandardJS"),(0,r.kt)("li",{parentName:"ul"},"Google"),(0,r.kt)("li",{parentName:"ul"},"XO\nNosotros nos basaremos en el estandard ",(0,r.kt)("strong",{parentName:"li"},"StandardJS"),".")),(0,r.kt)("h2",{id:"eslint"},"ESlint"),(0,r.kt)("p",null,"En nuestro caso usaremos una libreria llamada ",(0,r.kt)("strong",{parentName:"p"},"ESLint")," como linter para que vigile el c\xf3digo de nuestros proyectos, que configuraremos para que se ajuste al StandardJS."),(0,r.kt)("h3",{id:"instalaci\xf3n-de-eslint"},"Instalaci\xf3n de ESLint"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Para utilizar en nuestro proyecto ESLint, en primer lugar instalaremos en ",(0,r.kt)("strong",{parentName:"p"},"VSCode")," el pluging ",(0,r.kt)("strong",{parentName:"p"},"ESLint de Microsoft"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ahora instalamos ",(0,r.kt)("strong",{parentName:"p"},"standard")," como dependencia de desarrollo ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i standard -D"),". Esto nos instalar\xe1 ESLint con la configuraci\xf3n StandardJS.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A continuaci\xf3n configuramos el archivo ",(0,r.kt)("strong",{parentName:"p"},"package.json")," a\xf1adiendo la siguientes l\xedneas de c\xf3digo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'  "eslintConfig": {\n  "extends": [\n    "./node_modules/standard/eslintrc.json"\n  ]\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finalmente vamos a configurar VSCode para que al grabar (pulsando ctrl + s) ESLint haga su trabajo, reparando, si puede, algunos errores de sintaxis y avisando (con una l\xednea subrayada roja) cuando puede haber un posible error en el c\xf3digo. Para ello:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Abre la paleta de comandos con ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl + shift + P")," y escribe ",(0,r.kt)("inlineCode",{parentName:"p"},"settings json"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selecciona las preferencias de usuario: ",(0,r.kt)("inlineCode",{parentName:"p"},"Preferences: Open User Settings (JSON)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A\xf1ade (o sustituye) al final del archivo la siguiente l\xednea:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'    "eslint.validate": [\n    "javascript",\n    "javascriptreact",\n    "typescript",\n    "typescriptreact"\n],\n"editor.codeActionsOnSave": {\n    "source.fixAll.eslint": true,\n}\n')))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nAhora, si abres un archivo y pulsas `ctrl + S` ver\xe1s como actua ESLint.\n")))))}d.isMDXComponent=!0}}]);