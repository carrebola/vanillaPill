"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,b=d["".concat(i,".").concat(u)]||d[u]||p[u]||l;return n?a.createElement(b,o(o({ref:t},m),{},{components:n})):a.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:140},o="Historia 12. Primeras vistas: Login, Registro, Administraci\xf3n de usuarios",s={unversionedId:"historias/h12",id:"historias/h12",title:"Historia 12. Primeras vistas: Login, Registro, Administraci\xf3n de usuarios",description:"loginVista",source:"@site/docs/historias/h12.md",sourceDirName:"historias",slug:"/historias/h12",permalink:"/vanillaPill/docs/historias/h12",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/historias/h12.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{sidebar_position:140},sidebar:"tutorialSidebar",previous:{title:"Historia 11. Primeros componentes vanillaJS: header y router",permalink:"/vanillaPill/docs/historias/h11"},next:{title:"Historia 13. Registro de usuarios",permalink:"/vanillaPill/docs/historias/h13"}},i={},c=[{value:"loginVista",id:"loginvista",level:2},{value:"registroVista",id:"registrovista",level:2},{value:"adminVista",id:"adminvista",level:2}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"historia-12-primeras-vistas-login-registro-administraci\xf3n-de-usuarios"},"Historia 12. Primeras vistas: Login, Registro, Administraci\xf3n de usuarios"),(0,r.kt)("h2",{id:"loginvista"},"loginVista"),(0,r.kt)("p",null,"Creamos el archivo ",(0,r.kt)("strong",{parentName:"p"},"loginVista.js")," con un objeto que incluya la propiedad ",(0,r.kt)("strong",{parentName:"p"},"template")," (con el html de la p\xe1gina) y el m\xe9todo ",(0,r.kt)("strong",{parentName:"p"},"script()")," que nos permitir\xe1 ejecutar la l\xf3gica. A continuaci\xf3n exportamos este objeto ",(0,r.kt)("strong",{parentName:"p"},"por defecto"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="loginVista.js"',title:'"loginVista.js"'},"export default {\n  template: `loginVista`,\n  script: ()=>{\n    console.log('login')\n  }\n}\n")),(0,r.kt)("p",null,"A continuaci\xf3n a\xf1adimos el html de nuestro prototipo a la propiedad template. Este html est\xe1 formado por un formulario que nos permitir\xe1 hacer el l\xf3gin del usuario."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="loginVista.js"',title:'"loginVista.js"'},'export default {\n  template: `\n  <div\n  class="vh-100 d-flex align-items-center justify-content-center"\n  style="padding-top: 100px"\n>\n  <div class="col-12 col-md-4">\n      <h1 class="text-center p-2">Login</h1>\n      <form id="login" class="p-3" novalidate>\n          <label class="mt-3 form-label" for="email">Email</label>\n          <input type="email" class="form-control" value="" required />\n          <div class="invalid-feedback">Debes introducir un email valido</div>\n\n          <label class="mt-3 form-label" for="nick">Contrase\xf1a: </label>\n          <input type="password" class="form-control" value="" required />\n          <div class="invalid-feedback">Esta no es una contrase\xf1a correcta</div>\n\n          <button\n              id="btn_submit"\n              type="submit"\n              class="mt-4 btn btn-success w-100"\n          >\n              Enviar\n          </button>\n          <p class="mt-3">\n              <a href="">No recuerdo mi contrase\xf1a</a>\n              <br />\n              <a href="registro.html">Quiero Registrarme</a>\n          </p>\n          <p></p>\n          <hr class="mt-5" />\n\n          <button type="button" class="mt-1 btn btn-primary w-100">\n              Login con Google\n          </button>\n      </form>\n  </div>\n</div>\n\n  `,\n  \n}\n\n')),(0,r.kt)("p",null,"De momento dejaremos la vista con el html. M\xe1s adelante a\xf1adiremos la l\xf3gica para validar el formulario y realizar la conexi\xf3n con la base de datos"),(0,r.kt)("p",null,"Para el resto de las vistas haremos lo mismo"),(0,r.kt)("h2",{id:"registrovista"},"registroVista"),(0,r.kt)("p",null,"El html lo extraemos del prototipo. Consiste en un formulario con los datos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nombre"),(0,r.kt)("li",{parentName:"ul"},"Apellidos"),(0,r.kt)("li",{parentName:"ul"},"Email"),(0,r.kt)("li",{parentName:"ul"},"Contrase\xf1a"),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="registroVista.js"',title:'"registroVista.js"'},'export default {\n  template: `\n  <div\n  class="vh-100 d-flex align-items-center justify-content-center"\n  style="padding-top: 100px"\n>\n  <div class="col-12 col-md-4">\n      <h1 class="text-center p-2">Registro</h1>\n      <form id="form_registro" class="p-3" novalidate>\n          <label class="mt-3 form-label" for="nombre">Nombre: </label>\n          <input type="text" class="form-control" value="" placeholder ="Manolito" required />\n          <div class="invalid-feedback">El nombre no es correcto</div>\n\n          <label class="mt-3 form-label" for="apellidos">Apellidos: </label>\n          <input type="text" class="form-control" value="" placeholder = "Gafotas Rotas" required />\n          <div class="invalid-feedback">Este campo no es correcto</div>\n\n          <label class="mt-3 form-label" for="email">Email</label>\n          <input\n              type="email"\n              class="form-control"\n              value=""\n              placeholder = "ychag@example.com"\n              required\n          />\n          <div class="invalid-feedback">El email no es correcto</div>\n\n          <label class="mt-3 form-label" for="nick">Contrase\xf1a: </label>\n          <input\n              type="password"\n              class="form-control"\n              value=""\n              pattern="[A-Za-z]{8,}"\n              placeholder = "Contrase\xf1a"\n              required\n          />\n\n          <div class="invalid-feedback">\n              La contrase\xf1a debe contener 8 letras o m\xe1s que deben ser mayusculas y minusculas, no se aceptan signos ni n\xfameros\n          </div>\n\n          <button type="submit" class="mt-5 btn btn-success w-100">\n              Enviar\n          </button>\n          <hr class="mt-5" />\n          <button type="submit" class="mt-1 btn btn-primary w-100">\n              Registrate con Google\n          </button>\n      </form>\n  </div>\n</div>\n    `\n}\n\n')),(0,r.kt)("h2",{id:"adminvista"},"adminVista"),(0,r.kt)("p",null,"Para esta vista adem\xe1s necesitaremos algunos iconos que podemos descargar de icons8 y guardar el la carpeta ",(0,r.kt)("inlineCode",{parentName:"p"},"src/assets/iconos")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="adminVista.js"',title:'"adminVista.js"'},'export default {\n  template: `\n  <div\n  class="vh-100 d-flex align-items-center justify-content-center"\n  style="padding-top: 100px"\n>\n  <div class="col-12 col-md-4">\n      <h1 class="text-center p-2">Registro</h1>\n      <form id="form_registro" class="p-3" novalidate>\n          <label class="mt-3 form-label" for="nombre">Nombre: </label>\n          <input type="text" class="form-control" value="" placeholder ="Manolito" required />\n          <div class="invalid-feedback">El nombre no es correcto</div>\n\n          <label class="mt-3 form-label" for="apellidos">Apellidos: </label>\n          <input type="text" class="form-control" value="" placeholder = "Gafotas Rotas" required />\n          <div class="invalid-feedback">Este campo no es correcto</div>\n\n          <label class="mt-3 form-label" for="email">Email</label>\n          <input\n              type="email"\n              class="form-control"\n              value=""\n              placeholder = "ychag@example.com"\n              required\n          />\n          <div class="invalid-feedback">El email no es correcto</div>\n\n          <label class="mt-3 form-label" for="nick">Contrase\xf1a: </label>\n          <input\n              type="password"\n              class="form-control"\n              value=""\n              pattern="[A-Za-z]{8,}"\n              placeholder = "Contrase\xf1a"\n              required\n          />\n\n          <div class="invalid-feedback">\n              La contrase\xf1a debe contener 8 letras o m\xe1s que deben ser mayusculas y minusculas, no se aceptan signos ni n\xfameros\n          </div>\n\n          <button type="submit" class="mt-5 btn btn-success w-100">\n              Enviar\n          </button>\n          <hr class="mt-5" />\n          <button type="submit" class="mt-1 btn btn-primary w-100">\n              Registrate con Google\n          </button>\n      </form>\n  </div>\n</div>\n    `\n}\n\n')))}p.isMDXComponent=!0}}]);