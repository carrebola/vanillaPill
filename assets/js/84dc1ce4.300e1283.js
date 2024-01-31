"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7129],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,o=function(e,a){if(null==e)return{};var r,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},c=function(e){var a=u(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var r=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),p=o,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||t;return r?n.createElement(g,s(s({ref:a},c),{},{components:r})):n.createElement(g,s({ref:a},c))}));function g(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=r.length,s=new Array(t);s[0]=p;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<t;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7223:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const t={},s=void 0,i={unversionedId:"Version 1.0/SPRINT 5 - INTEGRACION FRONTEND Y BACKEND/Integraci\xf3n de Frontend Y Backend/Login y registro",id:"Version 1.0/SPRINT 5 - INTEGRACION FRONTEND Y BACKEND/Integraci\xf3n de Frontend Y Backend/Login y registro",title:"Login y registro",description:"Comenzamos la historia actualizando las vistas y componentes para el login y el registro",source:"@site/docs/03-Version 1.0/SPRINT 5 - INTEGRACION FRONTEND Y BACKEND/12-Integraci\xf3n de Frontend Y Backend/02-Login y registro.md",sourceDirName:"03-Version 1.0/SPRINT 5 - INTEGRACION FRONTEND Y BACKEND/12-Integraci\xf3n de Frontend Y Backend",slug:"/Version 1.0/SPRINT 5 - INTEGRACION FRONTEND Y BACKEND/Integraci\xf3n de Frontend Y Backend/Login y registro",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 5 - INTEGRACION FRONTEND Y BACKEND/Integraci\xf3n de Frontend Y Backend/Login y registro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Version 1.0/SPRINT 5 - INTEGRACION FRONTEND Y BACKEND/12-Integraci\xf3n de Frontend Y Backend/02-Login y registro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uniendo ambos mundos",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 5 - INTEGRACION FRONTEND Y BACKEND/Integraci\xf3n de Frontend Y Backend/Uniendo ambos mundos"},next:{title:"Historia 13. Registro de usuarios",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 5 - INTEGRACION FRONTEND Y BACKEND/Integraci\xf3n de Frontend Y Backend/h13"}},l={},u=[{value:"LoginVista",id:"loginvista",level:2},{value:"Logout",id:"logout",level:2},{value:"Registro",id:"registro",level:2}],c={toc:u},d="wrapper";function m(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Comenzamos la historia actualizando las vistas y componentes para el login y el registro"),(0,o.kt)("h2",{id:"loginvista"},"LoginVista"),(0,o.kt)("p",null,"Esta vista nos permite iniciar sesi\xf3n. Si revisamos el c\xf3digo script podemos encontrar la funci\xf3n encargada de enviar los datos a la base de datos: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='loginVista.js",title:"'loginVista.js"},"\n// Funci\xf3n para enviar datos a la bd\n    function enviarDatos (formulario) {\n      const email = formulario.email.value\n      const pass = formulario.password.value\n\n      // buscamos el indice del email en el array perfiles\n      const indexUser = perfiles.findIndex((user) => user.email === email) // 1\n      // Si encuentra un usuario\n      if (indexUser > 0) {\n        // Si la contrase\xf1a es correcta\n        if (perfiles[indexUser].contrase\xf1a === pass) {\n          console.log('\xa1login correcto!')\n          const usuario = {\n            nombre: perfiles[indexUser].nombre,\n            apellidos: perfiles[indexUser].apellidos,\n            email: perfiles[indexUser].email,\n            rol: perfiles[indexUser].rol,\n            avatar: perfiles[indexUser].avatar,\n            user_id: perfiles[indexUser].user_id\n          }\n          // Guardamos datos de usaurio en localstorage\n          ls.setUsuario(usuario)\n          // Cargamos p\xe1gina home\n          window.location = '#/proyectos'\n          // Actualizamos el header para que se muestren los men\xfas que corresponden al rol\n          header.script()\n        } else {\n          console.log('La contrase\xf1a no corresponde')\n          alert('El usuario no existe o la contrase\xf1a no es correcta')\n        }\n      } else {\n        console.log('El usuario no existe')\n        alert('El usuario no existe o la contrase\xf1a no es correcta')\n      }\n    }\n\n")),(0,o.kt)("p",null,"F\xedjate que en este c\xf3digo, en la funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"enviarDatos()")," lo que hacemos es buscar en el array ",(0,o.kt)("inlineCode",{parentName:"p"},"'Perfiles'")," un usuario y mirar si la contrase\xf1a coincide.\nVamos a sustituir este c\xf3digo por el m\xe9todo login() de nuestra clase 'user'"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"No olvides importar user.js")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"import { User } from '../bd/user'")),(0,o.kt)("p",null,"La nueva funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"enviarDatos")," quedar\xeda as\xed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="loginVista"',title:'"loginVista"'},"...\n\n// Funci\xf3n para enviar datos a la bd\n// Funci\xf3n para enviar datos a la bd\n    async function enviarDatos(formulario) {\n      try {\n        // login\n        const user = {\n          email: formulario.email.value,\n          password: formulario.password.value\n        }\n        User.logout()\n        const usuarioLogueado = await User.login(user)\n        console.log('\xa1login correcto!', usuarioLogueado)\n        // Ahora vamos a capturar los datos del perfil del usuario logueado\n        console.log('usuarioLogueado', usuarioLogueado);\n        const userId = usuarioLogueado.id\n        console.log('userId', userId);\n        const perfilLogueado = await Perfil.getByUserId(userId)\n        console.log('Perfil logueado', perfilLogueado);\n        const usuario = {\n          email: usuarioLogueado.email,\n          rol: perfilLogueado.rol,\n          avatar: perfilLogueado.avatar\n        }\n        console.log('perfil localstorage', usuario);\n        // Guardamos datos de usaurio en localstorage\n        ls.setUsuario(usuario)\n        // Cargamos p\xe1gina home\n        window.location = '#/proyectos'\n        // Actualizamos el header para que se muestren los men\xfas que corresponden al rol\n        header.script()\n      } catch (error) {\n        console.log('Error al iniciar sesi\xf3n', error)\n        alert('El usuario no existe o la contrase\xf1a no es correcta', error)\n      }\n    }\n\n")),(0,o.kt)("p",null,"Vamos a ver si todo va seg\xfan lo previsto. Prueba a introducir un usuario no registrado, una contrase\xf1a incorrecta y finalmente uno correcto. Deber\xedamos ver algo as\xed:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:r(2510).Z,width:"1586",height:"591"})),(0,o.kt)("admonition",{title:"\u270d TAREA: Repara errores",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Ummmm, parece que hay algunos errores, como que alguna imagen no se ve (la del avatar)... Eso lo dejo en tus manos")),(0,o.kt)("h2",{id:"logout"},"Logout"),(0,o.kt)("p",null,"Para cerrar la sesi\xf3n debemos modificar la funci\xf3n que encontramos en el componente header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title =" header.js"',title:!0,"":'"','header.js"':!0},"// Cerrar sesi\xf3n\n    // Capturamos clic sobre el item de cerrar sesi\xf3n\n    document.querySelector('header').addEventListener('click', (e) => {\n      if (e.target.classList.contains('cerrarSesion')) {\n        e.preventDefault()\n        // Borramos el localstorage\n        ls.setUsuario('')\n        // Cargamos la pagina home\n        window.location = '#/home'\n        header.script()\n      }\n    })\n\n")),(0,o.kt)("p",null,"Incorporando nuestras clases quedar\xeda as\xed:"),(0,o.kt)("p",null,"Primero importamos la clase User:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"import { User } from '../bd/user'")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="header.js"',title:'"header.js"'},"...\n// Cerrar sesi\xf3n\n    // Capturamos clic sobre el item de cerrar sesi\xf3n\n    document.querySelector('header').addEventListener('click', (e) => {\n      if (e.target.classList.contains('cerrarSesion')) {\n        e.preventDefault()\n\n        // Cerramos sesi\xf3n en la bd\n        User.logout()\n        // Borramos el localstorage\n        ls.setUsuario('')\n        // Cargamos la pagina home\n        window.location = '#/home'\n        header.script()\n      }\n    })\n")),(0,o.kt)("p",null,"Prueba para ver si todo va como esperamos..."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:r(1998).Z,width:"1044",height:"425"})),(0,o.kt)("h2",{id:"registro"},"Registro"),(0,o.kt)("p",null,"Para el registro usaremos el m\xe9todo create de User.\nVeamos el c\xf3digo de la vista ",(0,o.kt)("inlineCode",{parentName:"p"},"registroVista.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="registroVista.js"',title:'"registroVista.js"'},"\n script: () => {\n    console.log('vista registro cargada')\n    // Validaci\xf3n bootstrap\n\n    // Capturamos el formulario en una variable\n    const formulario = document.querySelector('form')\n    // Detectamos su evento submit (enviar)\n    formulario.addEventListener('submit', (event) => {\n    // Comprobamos si el formulario no valida\n      if (!formulario.checkValidity()) {\n      // Detenemos el evento enviar (submit)\n        event.preventDefault()\n        event.stopPropagation()\n      }\n      // Y a\xf1adimos la clase 'was-validate' para que se muestren los mensajes\n      formulario.classList.add('was-validated')\n    })\n  }\n\n")),(0,o.kt)("p",null,"Aqu\xed lo que haremos es registrar un usuario usando la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," y despu\xe9s crear un perfil nuevo a trav\xe9s de la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"Perfil"),", empleando los datos del formulario y el ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," que nos devuelve el metodo ",(0,o.kt)("inlineCode",{parentName:"p"},"User.create()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="registroVista.js"',title:'"registroVista.js"'},"  script: () => {\n    console.log('vista registro cargada')\n    // Validaci\xf3n bootstrap\n\n    // Capturamos el formulario en una variable\n    const formulario = document.querySelector('#formularioRegistro')\n    // Detectamos su evento submit (enviar)\n    formulario.addEventListener('submit', async (event) => {\n      // Detenemos el evento enviar (submit)\n      event.preventDefault()\n      event.stopPropagation()\n      // Comprobamos si el formulario no valida\n      if (!formulario.checkValidity()) {\n        // Y a\xf1adimos la clase 'was-validate' para que se muestren los mensajes\n        formulario.classList.add('was-validated')\n      } else {\n        try {\n          // Capturamos datos del formulario para el registro\n          const usuario = {\n            email: formulario.email.value,\n            password: formulario.password.value\n          }\n          console.log('Formulario valido. Datos formulario: ', usuario)\n          const user = await User.create(usuario)\n          console.log('user creado', user)\n\n          // Capturamos datos del formulario para el perfil\n          const perfil = {\n            ...usuario,\n            user_id: user.id,\n            nombre: formulario.nombre.value,\n            apellidos: formulario.apellidos.value\n          }\n          // Insertamos perfil en la base de datos\n          Perfil.create(perfil)\n\n          alert('Usuario creado correctamente. Revisa tu email...')\n          window.location = '#/login'\n        } catch (error) {\n          alert('Error al crear usuario', error)\n        }\n      }\n    })\n  }\n")),(0,o.kt)("p",null,"Si todo ha ido bien podr\xe1s ver como en la base de datos se han creado los registros correspondientes y en nuestra web se muestra el header con los datos correspondientes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:r(3334).Z,width:"1092",height:"640"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:r(9814).Z,width:"1078",height:"643"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:r(1919).Z,width:"1117",height:"322"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:r(2984).Z,width:"1407",height:"415"})),(0,o.kt)("admonition",{title:"Commit!",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Es un buen momento para subir nuestro trabajo al repositorio")))}m.isMDXComponent=!0},2510:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/image-2-e73433efa4a34d17b5da66a64ab02584.png"},1998:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/image-3-4d31f11e0f63a3f801b2fe2d60cf2cd8.png"},3334:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/image-5-0f3436281e6775cb52ee20c25d8a2c1b.png"},9814:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/image-6-97cd6db3ff99bc6f7f0517ee48591617.png"},1919:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/image-7-94e5659ebb0a7198ef3703bab308ea0c.png"},2984:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/image-8-e3aa7282c70876699854ab0ffef8afc5.png"}}]);