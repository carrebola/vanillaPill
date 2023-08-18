"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5324],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>g});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),u=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?t.createElement(g,o(o({ref:a},c),{},{components:r})):t.createElement(g,o({ref:a},c))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6531:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=r(7462),n=(r(7294),r(3905));const i={sidebar_position:70},o="Historia 5: Supabase. Configuraci\xf3n de Triggers",l={unversionedId:"Version 1.0/SPRINT 4 - BACKEND/Supabase/h5",id:"Version 1.0/SPRINT 4 - BACKEND/Supabase/h5",title:"Historia 5: Supabase. Configuraci\xf3n de Triggers",description:"Como desarrollador backEnd quiero crear un trigger que permita modificar el campo estado a 'registrado' de la tabla perfiles cuando un usuario confirme su registro a trav\xe9s del email que recibe.",source:"@site/docs/03-Version 1.0/SPRINT 4 - BACKEND/10-Supabase/h5.md",sourceDirName:"03-Version 1.0/SPRINT 4 - BACKEND/10-Supabase",slug:"/Version 1.0/SPRINT 4 - BACKEND/Supabase/h5",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 4 - BACKEND/Supabase/h5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Version 1.0/SPRINT 4 - BACKEND/10-Supabase/h5.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Historia 4: Usuarios en Supabase. Registro, Login/logout y detalle user. Pruebas II (API DOCS)",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 4 - BACKEND/Supabase/h4"},next:{title:"Historia 6: Supabase. Gesti\xf3n de permisos. Pruebas III (API DOCS)",permalink:"/vanillaPill/docs/Version 1.0/SPRINT 4 - BACKEND/Supabase/h6"}},s={},u=[{value:"Tarea 1: Actualizaci\xf3n tabla perfiles",id:"tarea-1-actualizaci\xf3n-tabla-perfiles",level:2},{value:"Tarea 2: Funci\xf3n actualizaEstadoPerfil()",id:"tarea-2-funci\xf3n-actualizaestadoperfil",level:2},{value:"Tarea 3 - Creaci\xf3n del trigger",id:"tarea-3---creaci\xf3n-del-trigger",level:2}],c={toc:u},p="wrapper";function d(e){let{components:a,...i}=e;return(0,n.kt)(p,(0,t.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"historia-5-supabase-configuraci\xf3n-de-triggers"},"Historia 5: Supabase. Configuraci\xf3n de Triggers"),(0,n.kt)("p",null,"Como desarrollador backEnd quiero crear un trigger que permita modificar el campo estado a 'registrado' de la tabla perfiles cuando un usuario confirme su registro a trav\xe9s del email que recibe."),(0,n.kt)("h2",{id:"tarea-1-actualizaci\xf3n-tabla-perfiles"},"Tarea 1: Actualizaci\xf3n tabla perfiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"En primer lugar vamos a modificar la tabla perfiles agregandole las columnas estado (con valor por defecto = 'pendiente' y rol (con valor por defecto = 'registrado')")),(0,n.kt)("h2",{id:"tarea-2-funci\xf3n-actualizaestadoperfil"},"Tarea 2: Funci\xf3n actualizaEstadoPerfil()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ahora creamos una funci\xf3n de supabase utilizando lenguaje propio de PostgreeSQL ",(0,n.kt)("strong",{parentName:"p"},"(PL/PgSQL)")," para actualizar el campo estado de la tabla perfiles."),(0,n.kt)("p",{parentName:"li"},"  Podemos hacerlo desde el panel de consultas o bien desde el panel de creaci\xf3n de funciones (",(0,n.kt)("strong",{parentName:"p"},"database -> functions"),"). Vamos a usar este \xfaltimo:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Abrimos el panel de funciones y creamos una nueva funci\xf3n con las siguientes propiedades:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  - nombre de la funci\xf3n: actualizaEstadoPerfil\n  - schema: public (porque atacar\xe1 a una de nuestras tablas)\n  - return type: trigger\n  - definition: \n      begin\n          update public.perfiles\n          set estado = 'registrado'\n          where perfiles.user_id = new.id;\n          return new;\n      end;\n")),(0,n.kt)("p",{parentName:"li"},"  Esta funci\xf3n actualiza, de la tabla perfiles, el campo estado con el valor 'registrado', para el user cuyo usuario_id coincida con el id del registro de la tabla user que haya lanzado el trigger. \xc9ste lo tenemos en el objeto 'new'."),(0,n.kt)("p",{parentName:"li"},"  Finalmente debemos activar la opci\xf3n 'Show advanced setting' para indicar que usamos lenguaje 'plpgsql' y debemos seleccionar 'Security definer'. Guarda la funci\xf3n."))),(0,n.kt)("h2",{id:"tarea-3---creaci\xf3n-del-trigger"},"Tarea 3 - Creaci\xf3n del trigger"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Para crea el trigger nos vamos a ",(0,n.kt)("strong",{parentName:"li"},"Database -> Trigger")," y creamos un nuevo trigger con las siguientes propiedades:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"      - Name of trigger: CambioEstadoUser\n      - Table: users\n      - Events: Update\n      - Trigger type: After the event\n      - Orientation: Row\n      - Function to trigger: actualizaEstadoPerfil\n")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"trigger",src:r(7453).Z,width:"657",height:"894"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"En resumen: Creamos un trigger con nombre CambioEstadoUser el cual detectar\xe1 si se produce una actualizaci\xf3n el alguna fila de la tabla users y, tras detectar la modificaci\xf3n, llamar\xe1 a la funci\xf3n actualizaEstadoUser() pasandole el objeto **new** el cual contendr\xe1 como propiedades todos los campos del registro que ha sido actualizado.\n\nAhora que ya tenemos creado el trigger. Para comprobar su funcionamiento: \n- Registraremos un usuario nuevo con una invitaci\xf3n\n- Agregaremos desde el panel de la tabla perfiles un nuevo perfil con el id del user registrado (los campos estado y rol se llenar\xe1n solos con el valor por defecto)\n- Entraremos en el email para confirmar el regisro del user.\n")),(0,n.kt)("p",null,"Si todo ha ido bien podremos ver como el campo del perfil que hemos creado se modifica de forma autom\xe1tica."))}d.isMDXComponent=!0},7453:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/trigger-b84ca437a38fd0d4bb9cdf6253e0b272.png"}}]);