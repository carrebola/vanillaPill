"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2030],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>b});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),u=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},p=function(e){var a=u(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?t.createElement(b,s(s({ref:a},p),{},{components:r})):t.createElement(b,s({ref:a},p))}));function b(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5490:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=r(7462),n=(r(7294),r(3905));const o={sidebar_position:85},s="Historia 6b. Supabase. Storage para la Gesti\xf3n de archivos. Pruebas IV (APIU DOCS)",i={unversionedId:"PAPELERA ANTERIOR/otros supabase/h6b",id:"PAPELERA ANTERIOR/otros supabase/h6b",title:"Historia 6b. Supabase. Storage para la Gesti\xf3n de archivos. Pruebas IV (APIU DOCS)",description:"Como desarrollador quiero crear un sistema de archivos para poder subir y administrar im\xe1genes de los diferentes proyectos",source:"@site/docs/PAPELERA ANTERIOR/otros supabase/h6b.md",sourceDirName:"PAPELERA ANTERIOR/otros supabase",slug:"/PAPELERA ANTERIOR/otros supabase/h6b",permalink:"/vanillaPill/docs/PAPELERA ANTERIOR/otros supabase/h6b",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PAPELERA ANTERIOR/otros supabase/h6b.md",tags:[],version:"current",sidebarPosition:85,frontMatter:{sidebar_position:85},sidebar:"tutorialSidebar",previous:{title:"Historia 6: Supabase. Gesti\xf3n de permisos. Pruebas III (API DOCS)",permalink:"/vanillaPill/docs/PAPELERA ANTERIOR/otros supabase/h6"},next:{title:"Historia 7. Supabase. Funciones en tiempo real (Edge Functions) Pruebas V (API DOCS)",permalink:"/vanillaPill/docs/PAPELERA ANTERIOR/otros supabase/h7"}},l={},u=[],p={toc:u},c="wrapper";function d(e){let{components:a,...r}=e;return(0,n.kt)(c,(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"historia-6b-supabase-storage-para-la-gesti\xf3n-de-archivos-pruebas-iv-apiu-docs"},"Historia 6b. Supabase. Storage para la Gesti\xf3n de archivos. Pruebas IV (APIU DOCS)"),(0,n.kt)("p",null,"Como desarrollador quiero crear un sistema de archivos para poder subir y administrar im\xe1genes de los diferentes proyectos"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Creamos un bucked en el storage de supabase y una carpeta para las imagenes de avatar"),(0,n.kt)("li",{parentName:"ol"},"Usamos la api de supabase para subir un archivo desde javascript. Por ejemplo:")),(0,n.kt)("p",null,"Creamos un formulario con un campo de tipo file y un bot\xf3n submit"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <input type="file" id="avatar-input">\n  <button type="submit" id="upload-btn">Subir imagen</button>\n</form>\n')),(0,n.kt)("p",null,"Capturamos el input y el bot\xf3n y detectamos el evento click sobre el bot\xf3n.\nCapturamos el archivo accediendo a la propiedad files del input\n",(0,n.kt)("inlineCode",{parentName:"p"},"const file = avatarInput.files[0]")),(0,n.kt)("p",null,"Ahora utilizamos la api de supabase para subir el archivo a nuestro storage\n",(0,n.kt)("inlineCode",{parentName:"p"},"const { data, error } = await supabase.storage.from('avatars').upload(file.name, file)")),(0,n.kt)("p",null,"En data tendremos el dato de retorno si todo ha ido bien. Podemos acceder a la propiedad data.key para tener una referencia al archivo y, mediante la api podemos crear una url para este archivo\n",(0,n.kt)("inlineCode",{parentName:"p"},"const { publicURL } = supabase.storage.from('avatars').getPublicUrl(data.Key)")),(0,n.kt)("p",null,"Ahora solo tenemos que guardar esta url en la tabla del usuario. Cuando accedamos a los datos del usuario podremos obtener la url e insertarla en el atributo src de una imagen para mostrar el avatar."),(0,n.kt)("p",null,"En ejemplo de todo el c\xf3digo podr\xeda ser este:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ejemploStorage.js"',title:'"ejemploStorage.js"'},"const avatarInput = document.querySelector('#avatar-input');\nconst uploadBtn = document.querySelector('#upload-btn');\n\nuploadBtn.addEventListener('click', async (e) => {\n  e.preventDefault();\n  const file = avatarInput.files[0];\n  \n  if (!file) return;\n  \n  const { data, error } = await supabase.storage.from('avatars').upload(file.name, file);\n  \n  if (error) {\n    console.error(error);\n    return;\n  }\n  \n  const { publicURL } = supabase.storage.from('avatars').getPublicUrl(data.Key);\n  \n  // Aqu\xed puedes guardar la URL de la imagen en la tabla de Supabase correspondiente\n  // utilizando la API de Supabase y el m\xe9todo 'insert'\n  \n  // Luego, puedes mostrar la imagen en tu proyecto Javascript utilizando la URL de la siguiente manera:\n  const avatarImg = document.createElement('img');\n  avatarImg.src = publicURL;\n  document.body.appendChild(avatarImg);\n})\n")))}d.isMDXComponent=!0}}]);