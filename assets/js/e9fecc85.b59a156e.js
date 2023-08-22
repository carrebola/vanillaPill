"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},i=void 0,o={permalink:"/vanillaPill/blog/ESLint con plantillas literales",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/ESLint con plantillas literales.md",source:"@site/blog/ESLint con plantillas literales.md",title:"ESLint con plantillas literales",description:"Para que ESLint reconozca y comprenda la sintaxis de HTML dentro de tus archivos JavaScript, especialmente en plantillas literales, puedes utilizar el plugin eslint-plugin-html. Este plugin agrega soporte para resaltar y analizar el c\xf3digo HTML dentro de tus plantillas literales. Aqu\xed tienes los pasos para configurarlo:",date:"2023-08-22T10:21:08.965Z",formattedDate:"22 de agosto de 2023",tags:[],readingTime:1.355,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Autenticaci\xf3n con Google",permalink:"/vanillaPill/blog/Auth con Google"}},s={authorsImageUrls:[]},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Para que ESLint reconozca y comprenda la sintaxis de HTML dentro de tus archivos JavaScript, especialmente en plantillas literales, puedes utilizar el plugin eslint-plugin-html. Este plugin agrega soporte para resaltar y analizar el c\xf3digo HTML dentro de tus plantillas literales. Aqu\xed tienes los pasos para configurarlo:"),(0,r.kt)("p",null,"Instalar el plugin:"),(0,r.kt)("p",null,"Abre una terminal en la carpeta ra\xedz de tu proyecto y ejecuta el siguiente comando para instalar el plugin eslint-plugin-html:"),(0,r.kt)("p",null,"css\nCopy code\nnpm install eslint-plugin-html --save-dev\nConfigurar ESLint:"),(0,r.kt)("p",null,"En tu archivo de configuraci\xf3n de ESLint (por lo general, .eslintrc.js o similar), agrega 'plugin:html/recommended' a la propiedad extends y agrega 'html' a la propiedad plugins. Tambi\xe9n puedes personalizar las reglas seg\xfan tus necesidades. Aqu\xed hay un ejemplo de configuraci\xf3n:"),(0,r.kt)("p",null,"javascript\nCopy code\nmodule.exports = {\n// Otras configuraciones..."),(0,r.kt)("p",null,"  extends: ","['plugin:html/recommended']",","),(0,r.kt)("p",null,"  plugins: ","['html']",","),(0,r.kt)("p",null,"  // Otras reglas..."),(0,r.kt)("p",null,"  rules: {\n// Otras reglas...\n}\n};\nUtilizar plantillas literales con html como etiqueta:"),(0,r.kt)("p",null,"Una vez configurado el plugin, puedes utilizar la etiqueta html en tus plantillas literales sin que ESLint muestre errores. Aqu\xed tienes un ejemplo:"),(0,r.kt)("p",null,"javascript\nCopy code\nconst template = html`"),(0,r.kt)("h1",null,"Home"),(0,r.kt)("p",null,"Welcome to my website!"),"`;",(0,r.kt)("p",null,"Ejecutar ESLint:"),(0,r.kt)("p",null,"Ahora puedes ejecutar ESLint normalmente en tu proyecto para que analice y verifique la sintaxis de HTML en tus plantillas literales. Ejecuta el siguiente comando en la terminal:"),(0,r.kt)("p",null,"Copy code\nnpx eslint .\nAseg\xfarate de que est\xe1s en la carpeta ra\xedz de tu proyecto cuando ejecutes este comando."),(0,r.kt)("p",null,"Con la configuraci\xf3n y el plugin adecuados, ESLint deber\xeda ser capaz de reconocer y analizar el c\xf3digo HTML dentro de tus plantillas literales sin mostrar errores. Recuerda ajustar las reglas de ESLint seg\xfan tus preferencias y necesidades."))}d.isMDXComponent=!0}}]);