"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4207],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return t?a.createElement(g,i(i({ref:r},c),{},{components:t})):a.createElement(g,i({ref:r},c))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6464:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=t(7462),o=(t(7294),t(3905));const n={sidebar_position:150},i="Historia 13. Registro de usuarios",s={unversionedId:"historias/h13",id:"historias/h13",title:"Historia 13. Registro de usuarios",description:"Como usuario 'no registrado' quiero registrarme en la aplicaci\xf3n.",source:"@site/docs/historias/h13.md",sourceDirName:"historias",slug:"/historias/h13",permalink:"/vanillaPill/docs/historias/h13",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/historias/h13.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Historia 12. Primeras vistas: Login, Registro, Administraci\xf3n de usuarios",permalink:"/vanillaPill/docs/historias/h12"},next:{title:"Historia 14. Sesiones (login/logout)",permalink:"/vanillaPill/docs/historias/h14"}},l={},u=[{value:"RegistroVista",id:"registrovista",level:2}],c={toc:u},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"historia-13-registro-de-usuarios"},"Historia 13. Registro de usuarios"),(0,o.kt)("p",null,"Como usuario 'no registrado' quiero registrarme en la aplicaci\xf3n."),(0,o.kt)("h2",{id:"registrovista"},"RegistroVista"),(0,o.kt)("p",null,"Vamos a crear la l\xf3gica asociada al registro de usuarios. Para ello crearemos el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"script()")," de ",(0,o.kt)("inlineCode",{parentName:"p"},"registroVista.js")," en el que detectaremos el evento ",(0,o.kt)("inlineCode",{parentName:"p"},"submit")," del formulario."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="registroVista.js"',title:'"registroVista.js"'},"script: () => {\n    document.querySelector('#form_registro').addEventListener('submit', async function (e) {\n      e.preventDefault()\n    }\n}\n")),(0,o.kt)("p",null,"Para poder registrar el usuario en la bd debemos crear, en primer lugar, un usuario tipo ",(0,o.kt)("strong",{parentName:"p"},"Users")," al que supabase asignar\xe1 un user_id. "),(0,o.kt)("p",null,"Para ello usaremos el m\xe9todo ",(0,o.kt)("strong",{parentName:"p"},"create()")," de nuestra clase ",(0,o.kt)("strong",{parentName:"p"},"User")," pas\xe1ndole un objeto con los datos del formulario 'email' y 'password'. Este :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="registroVista.js"',title:'"registroVista.js"'},"script: () => {\n    document.querySelector('#form_registro').addEventListener('submit', async function (e) {\n      e.preventDefault()\n        // Objeto con datos para el registro de user\n        const usuario = {\n          email: document.querySelector('#email').value,\n          password: document.querySelector('#contrasena').value\n        }\n        const nuevoUser = await User.create(usuario)\n    }\n}\n")),(0,o.kt)("p",null,"A continuaci\xf3n insertaremos en la tabla ",(0,o.kt)("inlineCode",{parentName:"p"},"perfiles")," un nuevo registro con los datos del formulario y el ",(0,o.kt)("strong",{parentName:"p"},"user_id")," que ahora tendremos en el objeto ",(0,o.kt)("strong",{parentName:"p"},"nuevoUsuario"),". Esto lo haremos con el m\xe9todo ",(0,o.kt)("strong",{parentName:"p"},"create()")," de la clase ",(0,o.kt)("strong",{parentName:"p"},"Perfil")),(0,o.kt)("p",null,"Utilizaremos ",(0,o.kt)("strong",{parentName:"p"},"try/catch")," para gestionar los posibles errores en la conexi\xf3n con la base de datos."),(0,o.kt)("p",null,"Finalmente, si el registro se ha realizado con \xe9xito cargaremos la vista ",(0,o.kt)("strong",{parentName:"p"},"login")," mediante ",(0,o.kt)("inlineCode",{parentName:"p"},"window.location.href = '/#/login"),"."),(0,o.kt)("p",null,"As\xed quedar\xeda el c\xf3digo ahora:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="registroVista"',title:'"registroVista"'},"  script: () => {\n    document.querySelector('#form_registro').addEventListener('submit', async function (e) {\n      e.preventDefault()\n      try {\n        // Objeto con datos para el registro de user\n        const usuario = {\n          email: document.querySelector('#email').value,\n          password: document.querySelector('#contrasena').value\n        }\n        const nuevoUser = await User.create(usuario)\n        // Objeto con datos para perfil\n        const perfilData = {\n          nombre: document.querySelector('#nombre').value,\n          apellidos: document.querySelector('#apellidos').value,\n          user_id: nuevoUser.id // Tomamos el id que nos devuelve el registro\n        }\n        await Perfil.create(perfilData)\n        alert('Usuario creado con \xe9xito')\n        // Cargamos la p\xe1gina login\n        window.location.href = '/#/login'\n      } catch (error) {\n        console.log(error)\n        alert('Error al crear usuario')\n      }\n    })\n  }\n")),(0,o.kt)("p",null,"Si accedemos al panel de control de nuestro proyecto en supabase podremos comprobar que se ha creado un nuevo usuario en la tabla Users de Authentication que queda pendiente de confirmar por email."),(0,o.kt)("p",null,"Por otro lado se ha creado un nuevo perfil en la tabla ",(0,o.kt)("strong",{parentName:"p"},"perfiles")," con los datos del formulario. El campo ",(0,o.kt)("strong",{parentName:"p"},"estado")," del registro tiene el valor ",(0,o.kt)("strong",{parentName:"p"},"pendiente")," por defecto. El trigger que hemos programado actualizar\xe1 este campo cuando detecte un cambio en la tabla Users, modificando el valor 'pendiente' por el valor 'registrado'."))}d.isMDXComponent=!0}}]);