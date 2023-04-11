"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2717],{3905:(e,r,o)=>{o.d(r,{Zo:()=>p,kt:()=>y});var t=o(7294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=t.createContext({}),i=function(e){var r=t.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):c(c({},r),e)),o},p=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(o),m=n,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return o?t.createElement(y,c(c({ref:r},p),{},{components:o})):t.createElement(y,c({ref:r},p))}));function y(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<a;i++)c[i]=o[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4468:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var t=o(7462),n=(o(7294),o(3905));const a={sidebar_position:180},c="Historia 16. CRUD Proyectos",l={unversionedId:"h16",id:"h16",title:"Historia 16. CRUD Proyectos",description:"Como usuario registrado quiero poder crear un proyecto nuevo, ver una lista de todos los proyectos, ver una lista de todos mis proyectos, borrar un proyecto y actualizar los datos de un proyecto.",source:"@site/docs/h16.md",sourceDirName:".",slug:"/h16",permalink:"/vanillaPill/docs/h16",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/h16.md",tags:[],version:"current",sidebarPosition:180,frontMatter:{sidebar_position:180},sidebar:"tutorialSidebar",previous:{title:"Historia 15. Editar mi perfil",permalink:"/vanillaPill/docs/h15"},next:{title:"Historia 190. Crear documentaci\xf3n. Docusaurus.",permalink:"/vanillaPill/docs/h17"}},s={},i=[{value:"Crear nuevo proyecto",id:"crear-nuevo-proyecto",level:2}],p={toc:i},u="wrapper";function d(e){let{components:r,...o}=e;return(0,n.kt)(u,(0,t.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"historia-16-crud-proyectos"},"Historia 16. CRUD Proyectos"),(0,n.kt)("p",null,"Como usuario registrado quiero poder crear un proyecto nuevo, ver una lista de todos los proyectos, ver una lista de todos ",(0,n.kt)("strong",{parentName:"p"},"mis proyectos"),", borrar un proyecto y actualizar los datos de un proyecto."),(0,n.kt)("h2",{id:"crear-nuevo-proyecto"},"Crear nuevo proyecto"),(0,n.kt)("p",null,"En primer lugar necesitamos crear el archivo ",(0,n.kt)("em",{parentName:"p"},"nuevoProyectoVista.js")," en la carpeta vistas. Puede ser una buena idea clasificar las diferentes vistas en subcarpetas, por ejemplo ",(0,n.kt)("em",{parentName:"p"},"proyectos"),", ",(0,n.kt)("em",{parentName:"p"},"comentarios"),", ",(0,n.kt)("em",{parentName:"p"},"user"),", etc."),(0,n.kt)("p",null,"Este podr\xeda ser el template con el html: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="nuevoProyectoVista.js"',title:'"nuevoProyectoVista.js"'},'export default {\n  template: `\n  <div\n  class="container d-flex mt-5 justify-content-center">\n  <div class="col-12">\n      <h1 class="text-center p-2">Nuevo Proyecto</h1>\n      <form id="form_proyecto" class="p-3" novalidate>\n          <label class="mt-3 form-label" for="nombre">Nombre: </label>\n          <input\n            id="nombre" \n            type="text" \n            class="form-control" \n            value="" \n            placeholder ="Nombre del proyecto" \n            required \n          />\n          <div class="invalid-feedback">El nombre no es correcto</div>\n\n          <label class="mt-3 form-label" for="descripcion">Descripci\xf3n: </label>\n          <textarea \n            id="descripcion"\n            class="form-control" \n            value="" \n            required \n            />\n          </textarea>\n          <div class="invalid-feedback">Este campo no es correcto</div>\n\n          <label class="mt-3 form-label" for="enlace">Enlace a producci\xf3n</label>\n          <input\n              id="enlace"\n              type="enlace"\n              class="form-control"\n              value=""\n              placeholder = "http://miproyecto.com"\n              required\n          />\n          <div class="invalid-feedback">El link no es correcto</div>\n          <button type="submit" class="mt-5 btn btn-success">\n              Crear nuevo proyecto\n          </button>\n      </form>\n  </div>\n</div>\n    `,\n  script: ()=>{}\n}\n\n\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Si en el archivo ",(0,n.kt)("strong",{parentName:"p"},"main.js")," le decimos que nos cargue esta vista por defecto (",(0,n.kt)("inlineCode",{parentName:"p"},"window.location = '#/nuevoProyecto'"),") podremos trabajar de manera m\xe1s fluida.")),(0,n.kt)("p",null,"Vamos ahora con la l\xf3gica.\nNecesitamos cargar las clases que usaremos para crear proyectos. Estas ser\xe1n ",(0,n.kt)("em",{parentName:"p"},"proyecto")," y ",(0,n.kt)("em",{parentName:"p"},"user"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { User } from '../../bd/user'\nimport { Proyecto } from '../../bd/proyecto'\n")),(0,n.kt)("p",null,"Ahora, como hicimos con el registro del perfil, necesitamos capturar el evento ",(0,n.kt)("em",{parentName:"p"},"submit")," del formulario para capturar los datos del formulario."),(0,n.kt)("p",null,"A continuaci\xf3n, (utilizando try/catch) capturaremos los datos del usuario que est\xe1 logueado (en concreto nos interesa el id). Recuerda que en la tabla ",(0,n.kt)("em",{parentName:"p"},"proyectos")," tenemos un campo llamado user_id que permite saber de quien es el proyecto."),(0,n.kt)("p",null,"Una vez tenemos el id del usuario tenemos que obtener los datos del formulario para poder registrar el nuevo proyecto. Por lo tanto creamos un objeto cuyas propiedades ser\xe1n los datos de la tabla , es decir ",(0,n.kt)("strong",{parentName:"p"},"nombre")," y ",(0,n.kt)("strong",{parentName:"p"},"descripcion")," y ",(0,n.kt)("strong",{parentName:"p"},"enlace"),". El ",(0,n.kt)("strong",{parentName:"p"},"user_id")," lo sacaremos del objeto user que hemos obtenido con ",(0,n.kt)("inlineCode",{parentName:"p"},"User.getUser()")),(0,n.kt)("p",null,"Ahora solo falta llamar al m\xe9todo ",(0,n.kt)("em",{parentName:"p"},"create")," de la clase ",(0,n.kt)("em",{parentName:"p"},"Proyecto")," para insertar un nuevo proyecto en la base de datos. ",(0,n.kt)("inlineCode",{parentName:"p"},"await Proyecto.create(proyecto)")),(0,n.kt)("p",null,"Finalmente, dejamos comentada la l\xednea ",(0,n.kt)("inlineCode",{parentName:"p"},"window.location.href = '/#/proyectos'")," . Recuerda que este es el m\xe9todo que usamos ahora para actulizar las vistas. Una vez tengamos la vista ",(0,n.kt)("em",{parentName:"p"},"proyectos")," creada descomentaremos esta l\xednea."),(0,n.kt)("p",null,"El c\xf3digo quedar\xeda as\xed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="nuevoProyectoVista.js"',title:'"nuevoProyectoVista.js"'},'import { User } from \'../../bd/user\'\nimport { Proyecto } from \'../../bd/proyecto\'\nexport default {\n  template: `\n  <div\n  class="container d-flex mt-5 justify-content-center">\n  <div class="col-12">\n      <h1 class="text-center p-2">Nuevo Proyecto</h1>\n      <form id="form_proyecto" class="p-3" novalidate>\n          <label class="mt-3 form-label" for="nombre">Nombre: </label>\n          <input\n            id="nombre" \n            type="text" \n            class="form-control" \n            value="" \n            placeholder ="Nombre del proyecto" \n            required \n          />\n          <div class="invalid-feedback">El nombre no es correcto</div>\n\n          <label class="mt-3 form-label" for="descripcion">Descripci\xf3n: </label>\n          <textarea \n            id="descripcion"\n            class="form-control" \n            value="" \n            required \n            />\n          </textarea>\n          <div class="invalid-feedback">Este campo no es correcto</div>\n\n          <label class="mt-3 form-label" for="enlace">Enlace a producci\xf3n</label>\n          <input\n              id="enlace"\n              type="enlace"\n              class="form-control"\n              value=""\n              placeholder = "http://miproyecto.com"\n              required\n          />\n          <div class="invalid-feedback">El link no es correcto</div>\n          <button type="submit" class="mt-5 btn btn-success">\n              Crear nuevo proyecto\n          </button>\n      </form>\n  </div>\n</div>\n    `,\n  script: () => {\n    document.querySelector(\'#form_proyecto\').addEventListener(\'submit\', async function (e) {\n      e.preventDefault()\n      try {\n        const user = await User.getUser()\n        // Objeto con datos para proyecto\n        const proyecto = {\n          nombre: document.querySelector(\'#nombre\').value,\n          descripcion: document.querySelector(\'#descripcion\').value,\n          enlace: document.querySelector(\'#enlace\').value,\n          user_id: user.id // Tomamos el id del usuario logueado\n        }\n        await Proyecto.create(proyecto)\n        alert(\'Proyecto creado con \xe9xito\')\n        // Cargamos la p\xe1gina login\n        //window.location.href = \'/#/proyectos\'\n      } catch (error) {\n        console.log(error)\n        alert(\'Error al crear proyecto \' + error)\n      }\n    })\n  }\n}\n\n')),(0,n.kt)("p",null,"Si todo ha ido bien podemos ir creando proyectos y verificar que en supabase que el registro se ha realizado con \xe9xito."))}d.isMDXComponent=!0}}]);