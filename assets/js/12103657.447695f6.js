"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2812],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>f});var n=a(7294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=n.createContext({}),p=function(e){var r=n.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=t,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,l(l({ref:r},c),{},{components:a})):n.createElement(f,l({ref:r},c))}));function f(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:t,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3444:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),t=(a(7294),a(3905));const o={sidebar_position:120},l="Historia 10. Testing de las clases",i={unversionedId:"Version 1.0/SPRINT 4 - BACKEND/ORM para el mapping en javascript/h10",id:"Version 1.0/SPRINT 4 - BACKEND/ORM para el mapping en javascript/h10",title:"Historia 10. Testing de las clases",description:"Una buena idea es testear todas las clases para poder asegurarnos que la conexi\xf3n con la base de datos se realiza de forma correcta.",source:"@site/docs/03-Version 1.0/SPRINT 4 - BACKEND/07-ORM para el mapping en javascript/h10.md",sourceDirName:"03-Version 1.0/SPRINT 4 - BACKEND/07-ORM para el mapping en javascript",slug:"/Version 1.0/SPRINT 4 - BACKEND/ORM para el mapping en javascript/h10",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 4 - BACKEND/ORM para el mapping en javascript/h10",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Version 1.0/SPRINT 4 - BACKEND/07-ORM para el mapping en javascript/h10.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{sidebar_position:120},sidebar:"tutorialSidebar",previous:{title:"Definici\xf3n del mapping de acceso a la bd. Clases",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 4 - BACKEND/ORM para el mapping en javascript/Mapping y clases"},next:{title:"Historia 13. Registro de usuarios",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 5 - INTEGRACION FRONTEND Y BACKEND/Integraci\xf3n de Frontend Y Backend/h13"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:r,...a}=e;return(0,t.kt)(u,(0,n.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"historia-10-testing-de-las-clases"},"Historia 10. Testing de las clases"),(0,t.kt)("p",null,"Una buena idea es testear todas las clases para poder asegurarnos que la conexi\xf3n con la base de datos se realiza de forma correcta."),(0,t.kt)("p",null,"En este caso hemos utilizado mocha y chai para los tests."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Primero instalamos las librerias mediante el gestor de paquetes: ",(0,t.kt)("inlineCode",{parentName:"li"},"npm install mocha chai -D")),(0,t.kt)("li",{parentName:"ul"},"En el archivo ",(0,t.kt)("inlineCode",{parentName:"li"},"package.json")," a\xf1adimos el script para pasar los tests: ")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="package.json" {6}',title:'"package.json"',"{6}":!0},'"scripts": {\n    "dev": "vite",\n    "build": "vite build --emptyOutDir",\n    "preview": "vite preview",\n    "deploy": "gh-pages -d dist",\n    "test": "mocha"\n  },\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Ahora ya podemos crear una carpeta en la raiz del proyecto con nombre ",(0,t.kt)("inlineCode",{parentName:"li"},"test")," y dentro colocar nuestros archivos con el c\xf3digo que queremos testear. En este caso comenzamos con ",(0,t.kt)("inlineCode",{parentName:"li"},"perfil.test.js"))),(0,t.kt)("p",null,"A continuaci\xf3n vemos el archivo con los todos los test. La explicaci\xf3n de lo que hace cada l\xednea la puedes encontrar en los comentarios que hay insertados."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="perfil.test.js"',title:'"perfil.test.js"'},"//Cargamos libreria de testing\nimport  { expect } from 'chai'\n\n//cargamos libreria de supabase\nimport { supabase } from '../src/bd/supabase.js';\n//Cargamos la clase Perfil\nimport { Perfil } from '../src/bd/perfil.js';\n\n// Datos para el nuevo perfil\nconst ArrayPerfiles = [\n  {\n    nombre: 'carrebola',\n    apellidos: 'Yo mismo',\n    rol: 'admin'\n  },\n  {\n    nombre: 'Pepe',\n    apellidos: 'Gotera',\n    rol: 'registrado'      \n  },\n  {\n    nombre: 'Juan',\n    apellidos: 'Eustaquio',\n    rol: 'alumno'      \n  },\n  {\n    nombre: 'Iban',\n    apellidos: 'A borrarme',\n    rol: 'alumno'\n  }\n]\n\n//Testeando la clase perfil\n//Inicialmente no tenemos usuarios registrados as\xed que Borramos toda la tabla perfil\n\ntry {\n  const { data, error } = await supabase\n  .from('perfiles')\n  .delete()\n  .is('user_id', null)\n} catch (error) {\n  console.error(error)\n}\n\ndescribe('************** Perfil: Crearemos 4 usuarios con diferentes rols. El \xfaltimo lo leerermos, modificaremos y borraremos', async function() {\n\n  describe('getAll()', async function() {    \n    it('deber\xeda devolver un array de perfiles vac\xedo', async function() {\n      //Probamos el m\xe9todo getAll\n      const perfiles = await Perfil.getAll()\n      //Esperamos que devuelva un array\n      expect(perfiles).to.be.an('array')\n      //Esperamos que el array est\xe9 vac\xedo\n      expect(perfiles.length).to.equal(0)\n    })\n  })\n\n\n  describe('create()', async function() {\n    it('deber\xeda crear un nuevo perfil en la tabla \"perfiles\"', async function() {\n      \n      //Objeto que deber\xeda devolver tras crear el usuario \n      const perfilDevuelto = {\n        nombre: 'Iban',\n        apellidos: 'A borrarme',\n        user_id: null,\n        estado: 'pendiente',\n        rol: 'alumno',\n        avatar: null\n      }\n\n      // Crear el nuevo perfil\n      await Perfil.create(ArrayPerfiles[0])\n      await Perfil.create(ArrayPerfiles[1])\n      await Perfil.create(ArrayPerfiles[2])\n      await Perfil.create(ArrayPerfiles[3])\n\n\n      // Verificar que se ha creado el perfil correctamente. (Solo el \xfaltimo perfil)\n      //Leemos todos los perfiles \n      const perfiles = await Perfil.getAll()\n      //Comprobamos que devuelve un array\n      expect(perfiles).to.be.an('array')\n      //Comprobamos que el array tiene 4 registros\n      expect(perfiles.length).to.equal(4)\n      //Comprobamos que el \xfaltimo registro tiene los datos del modelo esperado\n      expect(perfiles[3]).to.include(perfilDevuelto)\n    })\n  })\n\n  describe('getById()', function() {\n    it('deber\xeda devolver el perfil con el ID correspondiente', async function() {\n      // Capturamos todos los perfiles\n      const perfiles = await Perfil.getAll()\n      //Buscamos la posici\xf3n del \xfaltimo registro\n      const ultimoPerfil = perfiles.length - 1\n      //capturamos su id\n      const perfilId = perfiles[ultimoPerfil].id\n\n      // Obtener el perfil por ID\n      const perfil = await Perfil.getById(perfilId)\n      //Esperamos que devuelva un instanicia de objeto\n      expect(perfil).to.be.an.instanceof(Perfil)\n      //Esperamos que el email coincida \n      expect(perfil.email).equal(ArrayPerfiles[3].email)\n    })\n  })\n\n  \n\n  describe('actualizarPerfil', () => {\n    it('deber\xeda actualizar el nombre y apellido del perfil', async () => {\n      // Capturamos todos los perfiles\n      const perfiles = await Perfil.getAll()\n      //Buscamos la posici\xf3n del \xfaltimo registro\n      const ultimoPerfil = perfiles.length - 1\n      //capturamos su id\n      const perfilId = perfiles[ultimoPerfil].id\n\n      // Obtener el perfil por ID\n      const perfil = await Perfil.getById(perfilId)\n      \n      //Actualizamos los datos\n      perfil.nombre = 'Jose'\n      perfil.apellidos = 'GoteraNueva'\n    \n      //Llamamos al m\xe9todo actualizar\n      await perfil.update()\n      //Volvemos a leer el perfil modificado\n      const perfilActualizado = await Perfil.getById(perfilId)\n      \n      //Esperamos que el nombre haya cambiado\n      expect(perfilActualizado.nombre).to.equal('Jose')\n      //Esperamos que el apellido haya cambiado\n      expect(perfilActualizado.apellidos).to.equal('GoteraNueva')\n    });\n\n  });\n\n  //Borrar perfil\n  describe('borraPerfil', () => {\n      it('deber\xeda borrar el \xfaltimo perfil creado', async () => {\n        // Capturamos todos los perfiles\n        let perfiles = await Perfil.getAll()\n        //Buscamos la posici\xf3n del \xfaltimo registro\n        let ultimoPerfil = perfiles.length - 1\n        //capturamos su id\n        let perfilId = perfiles[ultimoPerfil].id\n\n        // Obtener el perfil por ID\n        let perfil = await Perfil.getById(perfilId)\n        \n        //Borramos el perfil\n        const borrado = await Perfil.delete(perfilId) \n        //Esperamos que el m\xe9todo devuelva true\n        expect(borrado).to.equal(true)\n        //verificamos que efectivamente hay un registro menos\n        perfiles = await Perfil.getAll()\n        expect(perfiles.length).to.equal(3)\n      \n      })\n\n   })\n})\n\n//exportamos los datos de perfiles\n\n\n")))}d.isMDXComponent=!0}}]);