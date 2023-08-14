"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4875],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>b});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},m=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,b=u["".concat(s,".").concat(p)]||u[p]||d[p]||r;return n?t.createElement(b,l(l({ref:a},m),{},{components:n})):t.createElement(b,l({ref:a},m))}));function b(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4516:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const r={title:"Validaciones basadas en html",tags:["Bootstrap 5","html","css","validaciones"],sidebar_position:1},l=void 0,i={unversionedId:"Version 1.0/Hist7 - Validaciones/ValidacionHTML",id:"Version 1.0/Hist7 - Validaciones/ValidacionHTML",title:"Validaciones basadas en html",description:"En HTML5, podemos realizar validaciones en formularios utilizando atributos y elementos espec\xedficos. Aqu\xed tienes un resumen de c\xf3mo vamos a crear validaciones utilizando HTML5:",source:"@site/docs/03-Version 1.0/09-Hist7 - Validaciones/01-ValidacionHTML.md",sourceDirName:"03-Version 1.0/09-Hist7 - Validaciones",slug:"/Version 1.0/Hist7 - Validaciones/ValidacionHTML",permalink:"/vanillaPill/docs/Version 1.0/Hist7 - Validaciones/ValidacionHTML",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Version 1.0/09-Hist7 - Validaciones/01-ValidacionHTML.md",tags:[{label:"Bootstrap 5",permalink:"/vanillaPill/docs/tags/bootstrap-5"},{label:"html",permalink:"/vanillaPill/docs/tags/html"},{label:"css",permalink:"/vanillaPill/docs/tags/css"},{label:"validaciones",permalink:"/vanillaPill/docs/tags/validaciones"}],version:"current",sidebarPosition:1,frontMatter:{title:"Validaciones basadas en html",tags:["Bootstrap 5","html","css","validaciones"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Admin Usuarios y Admin Proyectos",permalink:"/vanillaPill/docs/Version 1.0/Hist6 - Maquetaci\xf3n de prototipos/admin"},next:{title:"Usando Bootstrap para la validaci\xf3n",permalink:"/vanillaPill/docs/Version 1.0/Hist7 - Validaciones/Usando Bootstrap"}},s={},c=[{value:"Definici\xf3n de restricciones para nuestros formularios",id:"definici\xf3n-de-restricciones-para-nuestros-formularios",level:2},{value:"Formulario de Registro",id:"formulario-de-registro",level:3},{value:"Formulario de inicio de sesi\xf3n (Login)",id:"formulario-de-inicio-de-sesi\xf3n-login",level:3},{value:"Formulario para Editar perfil",id:"formulario-para-editar-perfil",level:3},{value:"Formulario Nuevo proyecto / Editar proyecto",id:"formulario-nuevo-proyecto--editar-proyecto",level:3},{value:"Formulario Editar usuarios desde Admin",id:"formulario-editar-usuarios-desde-admin",level:3}],m={toc:c},u="wrapper";function d(e){let{components:a,...r}=e;return(0,o.kt)(u,(0,t.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En HTML5, podemos realizar validaciones en formularios utilizando atributos y elementos espec\xedficos. Aqu\xed tienes un resumen de c\xf3mo vamos a crear validaciones utilizando HTML5:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Atributo ",(0,o.kt)("strong",{parentName:"li"},"required"),": Puedes usar el atributo required en campos de entrada para asegurarte de que el usuario complete ese campo antes de enviar el formulario.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" name="nombre" required>\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Atributo ",(0,o.kt)("strong",{parentName:"li"},"pattern"),": Puedes usar el atributo pattern junto con una expresi\xf3n regular para validar el formato de entrada en un campo.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" name="telefono" pattern="[0-9]{10}" title="Ingresa un n\xfamero de tel\xe9fono v\xe1lido de 10 d\xedgitos">\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Atributo ",(0,o.kt)("strong",{parentName:"li"},"min y max"),": Para campos num\xe9ricos, puedes utilizar los atributos min y max para establecer rangos v\xe1lidos.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="number" name="edad" min="18" max="99">\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Atributo ",(0,o.kt)("strong",{parentName:"li"},"minlength y maxlength"),": Para campos num\xe9ricos, puedes utilizar los atributos min y max para establecer rangos v\xe1lidos.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="password" name="pass" minlength="6" maxlength="99">\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Atributo ",(0,o.kt)("strong",{parentName:"li"},"email"),': Puedes usar el atributo type="email" en un campo de entrada para asegurarte de que la entrada sea un formato de correo electr\xf3nico v\xe1lido.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="email" name="correo">\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Atributo ",(0,o.kt)("strong",{parentName:"li"},"url"),': Similar al atributo email, el atributo type="url" valida que la entrada sea una URL v\xe1lida.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="url" name="sitio_web">\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Elemento ",(0,o.kt)("inlineCode",{parentName:"li"},"<textarea>")," con required: Al igual que con los campos de entrada, puedes usar el atributo required con el elemento ",(0,o.kt)("inlineCode",{parentName:"li"},"<textarea>")," para asegurarte de que se ingrese texto.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<textarea name="comentarios" required></textarea>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Elemento ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"<select>")," con required"),": Puedes usar el atributo required con el elemento ",(0,o.kt)("em",{parentName:"li"},"select")," para asegurarte de que se seleccione una opci\xf3n antes de enviar el formulario.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<select name="pais" required>\n  <option value="">Selecciona un pa\xeds</option>\n  <option value="mx">M\xe9xico</option>\n  <option value="us">Estados Unidos</option>\n</select>\n')),(0,o.kt)("h2",{id:"definici\xf3n-de-restricciones-para-nuestros-formularios"},"Definici\xf3n de restricciones para nuestros formularios"),(0,o.kt)("p",null,"Vamos a definir las validaciones para cada formulario y a continuaci\xf3n modificaremos el c\xf3digo para aplicarlas."),(0,o.kt)("h3",{id:"formulario-de-registro"},"Formulario de Registro"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El nombre es obligatorio"),(0,o.kt)("li",{parentName:"ul"},"El apellido es opcional"),(0,o.kt)("li",{parentName:"ul"},"Los campos email y contrase\xf1a son requeridos. Nombre y apellidos opcional"),(0,o.kt)("li",{parentName:"ul"},"El email debe ser tipo un email correcto"),(0,o.kt)("li",{parentName:"ul"},"La contrase\xf1a debe ser de 6 d\xedgitos o m\xe1s")),(0,o.kt)("p",null,"El c\xf3digo de este formulario ser\xeda algo as\xed:"),(0,o.kt)("admonition",{title:"\xa1NO TE OLVIDES DEL COMMIT!",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Recuerda que mientras vas trabajando en el proyecto  debes ir guardando los cambios en Git y subirlos a github a\xf1adiendo cada vez un commit apropiado. Podr\xedas empezar con algo as\xed: "),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"Agrega reglas de validaci\xf3n html5 a los formularios de la p\xe1gina registro.html:\n\n    Agrega los atributos required, minlength, etc a los inputs del formulario\n")),(0,o.kt)("p",{parentName:"admonition"},"Algunos consejos para escribir tus commits:"),(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udc49",(0,o.kt)("a",{parentName:"p",href:"/blog/commit"},"Buenas pr\xe1cticas creando mensajes 'commit'"),"\ud83d\udc48")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="formulario registro"',title:'"formulario','registro"':!0},'\x3c!-- Formulario de registro --\x3e\n  <form action="" class="form border shadow-sm p-3">\n    \n    \x3c!-- Nombre --\x3e\n    <label for="nombre" class="form-label">Nombre:</label>\n    <input required id="nombre" type="text" class="form-control" />\n    \n    \x3c!-- Apellidos --\x3e\n    <label for="apellidos" class="form-label">Apellidos:</label>\n    <input id="apellidos" type="text" class="form-control" />\n    \n    \x3c!-- Email --\x3e\n    <label for="email" class="form-label">Email:</label>\n    <input required id="email" type="email" class="form-control" />\n    \n    \x3c!-- Contrase\xf1a --\x3e\n    <label for="pass" class="form-label mt-3">Contrase\xf1a:</label>\n    <input required id="pass" type="password" min="6" class="form-control" />\n    \n    \x3c!-- Bot\xf3n enviar --\x3e\n    <input type="submit" class="btn btn-primary w-100 mt-3" value="Enviar" />\n  </form>\n\n')),(0,o.kt)("h3",{id:"formulario-de-inicio-de-sesi\xf3n-login"},"Formulario de inicio de sesi\xf3n (Login)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Los campos email y contrase\xf1a son requeridos."),(0,o.kt)("li",{parentName:"ul"},"El email debe ser tipo un email correcto"),(0,o.kt)("li",{parentName:"ul"},"La contrase\xf1a debe ser de 6 d\xedgitos o m\xe1s")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Formulario de inicio de sesi\xf3n"',title:'"Formulario',de:!0,inicio:!0,'sesi\xf3n"':!0},'\x3c!-- Formulario de inicio de sesi\xf3n (login) --\x3e\n  <form action="" class="form border shadow-sm p-3">\n    \x3c!-- Email --\x3e\n    <label for="email" class="form-label">Email:</label>\n    <input required type="email" class="form-control" />\n\n    \x3c!-- Contrase\xf1a --\x3e\n    <label for="pass" class="form-label mt-3">Contrase\xf1a:</label>\n    <input required id="pass" type="password" min="6" class="form-control" />\n\n    \x3c!-- Recordar contrase\xf1a --\x3e\n    <div class="form-check mt-3">\n      <input\n        class="form-check-input"\n        type="checkbox"\n        value=""\n        id="flexCheckChecked"\n        checked\n      />\n      <label class="form-check-label" for="flexCheckChecked">\n        Recordar sesi\xf3n\n      </label>\n    </div>\n\n    \x3c!-- Link a recordar contrase\xf1a --\x3e\n    <a class="d-block text-end" href="#">\xbfHas olvidado tu contrase\xf1a?</a>\n\n    \x3c!-- Bot\xf3n Iniciar sesi\xf3n --\x3e\n    <input\n      type="submit"\n      class="btn btn-primary w-100 mt-3"\n      value="Iniciar sesi\xf3n"\n    />\n  </form>\n')),(0,o.kt)("h3",{id:"formulario-para-editar-perfil"},"Formulario para Editar perfil"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El nombre es obligatorio"),(0,o.kt)("li",{parentName:"ul"},"El apellido es opcional"),(0,o.kt)("li",{parentName:"ul"},"Los campos email y contrase\xf1a son requeridos."),(0,o.kt)("li",{parentName:"ul"},"El email debe ser tipo un email correcto"),(0,o.kt)("li",{parentName:"ul"},"La contrase\xf1a debe ser de 6 d\xedgitos o m\xe1s"),(0,o.kt)("li",{parentName:"ul"},"La url de la imagen debe ser de tipo url correcta, y es opcional")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Editar Perfil"',title:'"Editar','Perfil"':!0},'\x3c!-- Formulario de edici\xf3n de perfil --\x3e\n  <form action="">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h1 class="modal-title fs-5" id="exampleModalLabel">\n            Edici\xf3n de perfil\n          </h1>\n          <button\n            type="button"\n            class="btn-close"\n            data-bs-dismiss="modal"\n            aria-label="Close"\n          ></button>\n        </div>\n        <div class="modal-body">\n          <div class="form border shadow-sm p-3">\n            <div class="m-1" style="max-width: 400px">\n              <div class="imgPerfil border shadow-sm p-3 mb-3">\n                <div\n                  class="imagen mx-auto mb-1 rounded-circle"\n                  style="\n                    background-image: url(./images/avatar.svg);\n                    width: 200px;\n                    height: 200px;\n                    background-size: cover;\n                    background-position: center;\n                  "\n                ></div>\n                \n                \x3c!-- Imagen de perfil --\x3e\n                <label for="imagen" class="form-label mt-3">URL imagen:</label>\n                <input\n                  id="imagen"\n                  type="url"\n                  class="form-control"\n                  value="http://imagenavatar.png"\n                />\n              </div>\n\n              <div class="">\n                \n                \x3c!-- Nombre --\x3e\n                <label for="nombre" class="form-label">Nombre:</label>\n                <input required id="nombre" type="text" class="form-control" />\n                \n                \x3c!-- Apellidos --\x3e\n                <label for="apellidos" class="form-label">Apellidos:</label>\n                <input id="apellidos" type="text" class="form-control" />\n                \n                \x3c!-- Email --\x3e\n                <label for="email" class="form-label">Email:</label>\n                <input required id="email" type="email" class="form-control" />\n                \n                \x3c!-- Contrase\xf1a --\x3e\n                <label for="pass" class="form-label mt-3">Contrase\xf1a:</label>\n                <input required id="pass" type="password" min="6" class="form-control" />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">\n            Cancelar\n          </button>\n          <button type="button" class="btn btn-primary">Guardar cambios</button>\n        </div>\n      </div>\n    </div>\n  </form>\n')),(0,o.kt)("h3",{id:"formulario-nuevo-proyecto--editar-proyecto"},"Formulario Nuevo proyecto / Editar proyecto"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El nombre y estado son obligatorios"),(0,o.kt)("li",{parentName:"ul"},"La fecha debe ser de tipo fecha"),(0,o.kt)("li",{parentName:"ul"},"El enlace debe ser url correcta"),(0,o.kt)("li",{parentName:"ul"},"El repositorio debe ser url correcta"),(0,o.kt)("li",{parentName:"ul"},"La imagen debe ser url correcta")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Formulario Nuevo proyecto"',title:'"Formulario',Nuevo:!0,'proyecto"':!0},'\x3c!-- Formulario nuevo proyecto --\x3e\n  <form action="" class="form">\n    \n    \x3c!-- Nombre proyecto --\x3e\n    <label class="form-label" for="nombre"><strong>Nombre: </strong></label>\n    <input required id="nombre" type="text" value="Nombre Autor" class="form-control" />\n    \n    \x3c!-- Descripci\xf3n --\x3e\n    <label class="form-label mt-2" for="descripcion"\n      ><strong>Descripci\xf3n: </strong></label\n    >\n    <textarea id="descripcion" class="form-control" rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea>\n    \n    \x3c!-- Estado --\x3e\n    <label class="form-label mt-2" for="estado"><strong>Estado: </strong></label>\n    <select required id="estado" class="form-control">\n      <option value="estado">estado</option>\n      <option value="otro estado">otro estado</option>\n    </select>\n\n    \x3c!-- Fecha --\x3e\n    <label class="form-label mt-2" for="fecha"><strong>Fecha: </strong></label>\n    <input id="fecha" type="date" class="form-control" value="12/12/2023"/>\n\n    \x3c!-- Enlace al proyecto --\x3e\n    <label class="form-label mt-2" for="enlace"><strong>Enlace: </strong></label>\n    <input id="enlace" type="url" class="form-control" value="http://enlace.com" />\n\n    \x3c!-- Repositorio --\x3e\n    <label class="form-label mt-2" for="repositorio"\n      ><strong>Repositorio: </strong></label\n    >\n    <input id="repositorio" type="text" class="form-control" value="user.github.com/123456" />\n\n    \x3c!-- Submit --\x3e\n    <input type="submit" class="btn btn-success mt-3" value="Subir proyecto">\n  </form>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Formulario editar proyecto"',title:'"Formulario',editar:!0,'proyecto"':!0},'<form action="" class="">\n  <div class="row mt-2">\n    <div class="col-12 col-md-4 pt-2 mb-3">\n      <img src="./images/juego.jpg" alt="" class="img-fluid" />\n      <label class="form-label mt-2" for="urlImagen"\n        ><strong>URL imagen: </strong></label\n      >\n      <input\n        id="urlImagen"\n        type="text"\n        class="form-control"\n        value="http://enlaceImagen.com"\n      />\n    </div>\n    <div class="col-12 col-md-8">\n      \x3c!-- Formulario nuevo proyecto --\x3e\n\n      \x3c!-- Nombre proyecto --\x3e\n      <label class="form-label" for="nombre"><strong>Nombre: </strong></label>\n      <input\n        required\n        id="nombre"\n        type="text"\n        value="Nombre Autor"\n        class="form-control"\n      />\n\n      \x3c!-- Descripci\xf3n --\x3e\n      <label class="form-label mt-2" for="descripcion"\n        ><strong>Descripci\xf3n: </strong></label\n      >\n      <textarea id="descripcion" class="form-control" rows="4">\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea\n      >\n\n      \x3c!-- Estado --\x3e\n      <label class="form-label mt-2" for="estado"\n        ><strong>Estado: </strong></label\n      >\n      <select required id="estado" class="form-control">\n        <option value="estado">estado</option>\n        <option value="otro estado">otro estado</option>\n      </select>\n\n      \x3c!-- Fecha --\x3e\n      <label class="form-label mt-2" for="fecha"\n        ><strong>Fecha: </strong></label\n      >\n      <input id="fecha" type="date" class="form-control" value="12/12/2023" />\n\n      \x3c!-- Enlace al proyecto --\x3e\n      <label class="form-label mt-2" for="enlace"\n        ><strong>Enlace: </strong></label\n      >\n      <input\n        id="enlace"\n        type="url"\n        class="form-control"\n        value="http://enlace.com"\n      />\n\n      \x3c!-- Repositorio --\x3e\n      <label class="form-label mt-2" for="repositorio"\n        ><strong>Repositorio: </strong></label\n      >\n      <input\n        id="repositorio"\n        type="text"\n        class="form-control"\n        value="user.github.com/123456"\n      />\n\n      \x3c!-- Submit --\x3e\n      <input\n        type="submit"\n        class="btn btn-success mt-3"\n        value="Subir proyecto"\n      />\n    </div>\n  </div>\n</form>\n')),(0,o.kt)("h3",{id:"formulario-editar-usuarios-desde-admin"},"Formulario Editar usuarios desde Admin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El nombre es obligatorio"),(0,o.kt)("li",{parentName:"ul"},"El apellido es opcional"),(0,o.kt)("li",{parentName:"ul"},"Los campos email y contrase\xf1a son requeridos."),(0,o.kt)("li",{parentName:"ul"},"El email debe ser tipo un email correcto"),(0,o.kt)("li",{parentName:"ul"},"La contrase\xf1a debe ser de 6 d\xedgitos o m\xe1s"),(0,o.kt)("li",{parentName:"ul"},"La url de la imagen debe ser de tipo url correcta, y es opcional")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Formulario editar usuario desde admin"',title:'"Formulario',editar:!0,usuario:!0,desde:!0,'admin"':!0},'\n<form action="">\n  <td>\n    <div class="containerImagen">\n      <div\n        class="rounded-circle d-flex align-items-end justify-content-end"\n        style="\n          background-image: url(./images/avatar.svg);\n          width: 50px;\n          height: 50px;\n          background-size: cover;\n          background-position: center;\n        "\n      >\n        <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>\n      </div>\n    </div>\n  </td>\n  <td>\n    \x3c!-- URL imagen --\x3e\n    <input\n      type="url"\n      class="form-control form-control-sm"\n      value="http://imagen.com"\n    />\n  </td>\n  <td>\n    \x3c!-- email --\x3e\n    <input\n      required\n      type="email"\n      class="form-control form-control-sm"\n      value="email@email.com"\n    />\n  </td>\n  <td>\n    <input\n      required\n      type="text"\n      class="form-control form-control-sm"\n      value="Nombre usuario"\n    />\n  </td>\n  <td>\n    <input\n      type="text"\n      class="form-control form-control-sm"\n      value="Apellidos usuario"\n    />\n  </td>\n\n  <td>\n    <input\n      type="date"\n      class="form-control form-control-sm"\n      value="12/12/2023 proyecto"\n    />\n  </td>\n  <td>\n    <select class="form-control form-control-sm" name="" id="">\n      <option value="1">opci\xf3n</option>\n      <option value="2">opci\xf3n2</option>\n    </select>\n  </td>\n  <td>\n    <select class="form-control form-control-sm" name="" id="">\n      <option value="1">opci\xf3n</option>\n      <option value="2">opci\xf3n2</option>\n    </select>\n  </td>\n  <td>\n    <button type="submit" class="btn btn-sm btn-success">\n      Actualizar\n    </button>\n  </td>\n  <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>\n</form>\n')),(0,o.kt)("p",null,"Estas ser\xedan todas las validaciones utilizando las caracteristicas de html5. "),(0,o.kt)("p",null,"La respuesta del navegador cuando intentamos enviar un formulario con campos que no cumplen su condici\xf3n establecida ",(0,o.kt)("strong",{parentName:"p"},"difiere dependiendo del navegador"),". "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Ejemplo de visualizaci\xf3n de un formulario que no valida utilizando Google Chrome"),"\n",(0,o.kt)("img",{alt:"Validaci\xf3n seg\xfan Chrome",src:n(4418).Z,width:"875",height:"240"})),(0,o.kt)("p",null,"Para evitar este problema podemos utilizar el ",(0,o.kt)("strong",{parentName:"p"},"sistema de validaci\xf3n que nos ofrece Bootstrap.")," Este sistema de validaci\xf3n implica ",(0,o.kt)("strong",{parentName:"p"},"utilizar algo de javascript"),", tal y como veremos en la siguiente tarea."))}d.isMDXComponent=!0},4418:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/validacionChrome-560f58a277517200d28ee3c5f3017f1c.png"}}]);