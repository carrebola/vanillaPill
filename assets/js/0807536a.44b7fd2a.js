"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7334],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,b=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return t?a.createElement(b,l(l({ref:n},d),{},{components:t})):a.createElement(b,l({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:140},l="Historia 12. Primeras vistas: Login, Registro, Administraci\xf3n de usuarios",i={unversionedId:"Version 1.0/Integraci\xf3n de Frontend Y Backend/h12",id:"Version 1.0/Integraci\xf3n de Frontend Y Backend/h12",title:"Historia 12. Primeras vistas: Login, Registro, Administraci\xf3n de usuarios",description:"loginVista",source:"@site/docs/03-Version 1.0/12-Integraci\xf3n de Frontend Y Backend/h12.md",sourceDirName:"03-Version 1.0/12-Integraci\xf3n de Frontend Y Backend",slug:"/Version 1.0/Integraci\xf3n de Frontend Y Backend/h12",permalink:"/vanillaPill/docs/Version 1.0/Integraci\xf3n de Frontend Y Backend/h12",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Version 1.0/12-Integraci\xf3n de Frontend Y Backend/h12.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{sidebar_position:140},sidebar:"tutorialSidebar",previous:{title:"Historia 11. Primeros componentes vanillaJS: header y router",permalink:"/vanillaPill/docs/Version 1.0/Integraci\xf3n de Frontend Y Backend/h11"},next:{title:"Historia 13. Registro de usuarios",permalink:"/vanillaPill/docs/Version 1.0/Integraci\xf3n de Frontend Y Backend/h13"}},s={},c=[{value:"loginVista",id:"loginvista",level:2},{value:"registroVista",id:"registrovista",level:2},{value:"adminVista",id:"adminvista",level:2}],d={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"historia-12-primeras-vistas-login-registro-administraci\xf3n-de-usuarios"},"Historia 12. Primeras vistas: Login, Registro, Administraci\xf3n de usuarios"),(0,r.kt)("h2",{id:"loginvista"},"loginVista"),(0,r.kt)("p",null,"Creamos el archivo ",(0,r.kt)("strong",{parentName:"p"},"loginVista.js")," con un objeto que incluya la propiedad ",(0,r.kt)("strong",{parentName:"p"},"template")," (con el html de la p\xe1gina) y el m\xe9todo ",(0,r.kt)("strong",{parentName:"p"},"script()")," que nos permitir\xe1 ejecutar la l\xf3gica. A continuaci\xf3n exportamos este objeto ",(0,r.kt)("strong",{parentName:"p"},"por defecto"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="loginVista.js"',title:'"loginVista.js"'},"export default {\n  template: `loginVista`,\n  script: ()=>{\n    console.log('login')\n  }\n}\n")),(0,r.kt)("p",null,"A continuaci\xf3n a\xf1adimos el html de nuestro prototipo a la propiedad template. Este html est\xe1 formado por un formulario que nos permitir\xe1 hacer el l\xf3gin del usuario."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="loginVista.js"',title:'"loginVista.js"'},'export default {\n  template: `\n  <div\n  class="vh-100 d-flex align-items-center justify-content-center"\n  style="padding-top: 100px"\n>\n  <div class="col-12 col-md-4">\n      <h1 class="text-center p-2">Login</h1>\n      <form id="login" class="p-3" novalidate>\n          <label class="mt-3 form-label" for="email">Email</label>\n          <input type="email" class="form-control" value="" required />\n          <div class="invalid-feedback">Debes introducir un email valido</div>\n\n          <label class="mt-3 form-label" for="nick">Contrase\xf1a: </label>\n          <input type="password" class="form-control" value="" required />\n          <div class="invalid-feedback">Esta no es una contrase\xf1a correcta</div>\n\n          <button\n              id="btn_submit"\n              type="submit"\n              class="mt-4 btn btn-success w-100"\n          >\n              Enviar\n          </button>\n          <p class="mt-3">\n              <a href="">No recuerdo mi contrase\xf1a</a>\n              <br />\n              <a href="registro.html">Quiero Registrarme</a>\n          </p>\n          <p></p>\n          <hr class="mt-5" />\n\n          <button type="button" class="mt-1 btn btn-primary w-100">\n              Login con Google\n          </button>\n      </form>\n  </div>\n</div>\n\n  `,\n  \n}\n\n')),(0,r.kt)("p",null,"De momento dejaremos la vista con el html. M\xe1s adelante a\xf1adiremos la l\xf3gica para validar el formulario y realizar la conexi\xf3n con la base de datos"),(0,r.kt)("p",null,"Para el resto de las vistas haremos lo mismo"),(0,r.kt)("h2",{id:"registrovista"},"registroVista"),(0,r.kt)("p",null,"El html lo extraemos del prototipo. Consiste en un formulario con los datos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nombre"),(0,r.kt)("li",{parentName:"ul"},"Apellidos"),(0,r.kt)("li",{parentName:"ul"},"Email"),(0,r.kt)("li",{parentName:"ul"},"Contrase\xf1a"),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="registroVista.js"',title:'"registroVista.js"'},'export default {\n  template: `\n  <div\n  class="vh-100 d-flex align-items-center justify-content-center"\n  style="padding-top: 100px"\n>\n  <div class="col-12 col-md-4">\n      <h1 class="text-center p-2">Registro</h1>\n      <form id="form_registro" class="p-3" novalidate>\n          <label class="mt-3 form-label" for="nombre">Nombre: </label>\n          <input type="text" class="form-control" value="" placeholder ="Manolito" required />\n          <div class="invalid-feedback">El nombre no es correcto</div>\n\n          <label class="mt-3 form-label" for="apellidos">Apellidos: </label>\n          <input type="text" class="form-control" value="" placeholder = "Gafotas Rotas" required />\n          <div class="invalid-feedback">Este campo no es correcto</div>\n\n          <label class="mt-3 form-label" for="email">Email</label>\n          <input\n              type="email"\n              class="form-control"\n              value=""\n              placeholder = "ychag@example.com"\n              required\n          />\n          <div class="invalid-feedback">El email no es correcto</div>\n\n          <label class="mt-3 form-label" for="nick">Contrase\xf1a: </label>\n          <input\n              type="password"\n              class="form-control"\n              value=""\n              pattern="[A-Za-z]{8,}"\n              placeholder = "Contrase\xf1a"\n              required\n          />\n\n          <div class="invalid-feedback">\n              La contrase\xf1a debe contener 8 letras o m\xe1s que deben ser mayusculas y minusculas, no se aceptan signos ni n\xfameros\n          </div>\n\n          <button type="submit" class="mt-5 btn btn-success w-100">\n              Enviar\n          </button>\n          <hr class="mt-5" />\n          <button type="submit" class="mt-1 btn btn-primary w-100">\n              Registrate con Google\n          </button>\n      </form>\n  </div>\n</div>\n    `\n}\n\n')),(0,r.kt)("h2",{id:"adminvista"},"adminVista"),(0,r.kt)("p",null,"Para esta vista adem\xe1s necesitaremos algunos iconos que podemos descargar de icons8 y guardar el la carpeta ",(0,r.kt)("inlineCode",{parentName:"p"},"src/assets/iconos")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="adminVista.js"',title:'"adminVista.js"'},'export default {\n  template: `\n  <div\n  class="vh-100 d-flex align-items-center justify-content-center"\n  style="padding-top: 100px"\n>\n  <div class="col-12 col-md-4">\n      <h1 class="text-center p-2">Registro</h1>\n      <form id="form_registro" class="p-3" novalidate>\n          <label class="mt-3 form-label" for="nombre">Nombre: </label>\n          <input type="text" class="form-control" value="" placeholder ="Manolito" required />\n          <div class="invalid-feedback">El nombre no es correcto</div>\n\n          <label class="mt-3 form-label" for="apellidos">Apellidos: </label>\n          <input type="text" class="form-control" value="" placeholder = "Gafotas Rotas" required />\n          <div class="invalid-feedback">Este campo no es correcto</div>\n\n          <label class="mt-3 form-label" for="email">Email</label>\n          <input\n              type="email"\n              class="form-control"\n              value=""\n              placeholder = "ychag@example.com"\n              required\n          />\n          <div class="invalid-feedback">El email no es correcto</div>\n\n          <label class="mt-3 form-label" for="nick">Contrase\xf1a: </label>\n          <input\n              type="password"\n              class="form-control"\n              value=""\n              pattern="[A-Za-z]{8,}"\n              placeholder = "Contrase\xf1a"\n              required\n          />\n\n          <div class="invalid-feedback">\n              La contrase\xf1a debe contener 8 letras o m\xe1s que deben ser mayusculas y minusculas, no se aceptan signos ni n\xfameros\n          </div>\n\n          <button type="submit" class="mt-5 btn btn-success w-100">\n              Enviar\n          </button>\n          <hr class="mt-5" />\n          <button type="submit" class="mt-1 btn btn-primary w-100">\n              Registrate con Google\n          </button>\n      </form>\n  </div>\n</div>\n    `\n}\n\n')))}p.isMDXComponent=!0}}]);