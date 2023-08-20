"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1946],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,o,r=function(e,a){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var a=o.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=s(e.components);return o.createElement(c.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||t;return n?o.createElement(g,l(l({ref:a},u),{},{components:n})):o.createElement(g,l({ref:a},u))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,l=new Array(t);l[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<t;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},160:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const t={title:"Autenticaci\xf3n con Google"},l="C\xf3mo usar el provider de google en supabase con la api de js",i={permalink:"/vanillaPill/blog/Auth con Google",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Auth con Google.md",source:"@site/blog/Auth con Google.md",title:"Autenticaci\xf3n con Google",description:"ChatGPT",date:"2023-08-20T17:18:31.000Z",formattedDate:"20 de agosto de 2023",tags:[],readingTime:3.585,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Autenticaci\xf3n con Google"},nextItem:{title:"Buenas pr\xe1cticas creando mensajes 'commit'",permalink:"/vanillaPill/blog/commit"}},c={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function d(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ChatGPT\nHasta mi \xfaltimo conocimiento en septiembre de 2021, Supabase ofrece autenticaci\xf3n mediante proveedores de terceros, como Google, utilizando el protocolo OAuth2. Para usar el proveedor de Google en Supabase con la API de JavaScript, debes seguir estos pasos generales:"),(0,r.kt)("p",null,"Configurar el proveedor en Google Developer Console:"),(0,r.kt)("p",null,"Ve a la Consola de Desarrolladores de Google.\nCrea un proyecto o selecciona uno existente.\nConfigura las credenciales OAuth 2.0 para tu aplicaci\xf3n web. Deber\xe1s proporcionar las URLs de redireccionamiento autorizadas para tu aplicaci\xf3n, que generalmente ser\xe1n proporcionadas por Supabase cuando configures la autenticaci\xf3n.\nConfigurar la autenticaci\xf3n en Supabase:"),(0,r.kt)("p",null,'Inicia sesi\xf3n en el tablero de Supabase.\nNavega a tu proyecto y selecciona la pesta\xf1a "Authentication" en el men\xfa lateral.\nEn la secci\xf3n "Providers", habilita el proveedor de Google e ingresa las credenciales y la informaci\xf3n que obtuviste del paso anterior.\nIntegrar la autenticaci\xf3n en tu aplicaci\xf3n:'),(0,r.kt)("p",null,"Instala la biblioteca de Supabase JavaScript en tu proyecto:"),(0,r.kt)("p",null,"bash\nCopy code\nnpm install @supabase/supabase-js\nImporta y configura Supabase en tu c\xf3digo:"),(0,r.kt)("p",null,"javascript\nCopy code\nimport { createClient } from '@supabase/supabase-js';"),(0,r.kt)("p",null,"const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');\nUtiliza la funci\xf3n signIn de Supabase para iniciar sesi\xf3n utilizando el proveedor de Google:"),(0,r.kt)("p",null,"javascript\nCopy code\n// Iniciar sesi\xf3n con el proveedor de Google\nconst { user, error } = await supabase.auth.signIn({\nprovider: 'google',\n});"),(0,r.kt)("p",null,"if (error) {\nconsole.error('Error al iniciar sesi\xf3n:', error.message);\n} else {\nconsole.log('Inicio de sesi\xf3n exitoso:', user);\n}\nManejar el resultado de la autenticaci\xf3n:"),(0,r.kt)("p",null,"Despu\xe9s de que el usuario inicie sesi\xf3n con \xe9xito, user contendr\xe1 la informaci\xf3n del usuario autenticado.\nRecuerda que la implementaci\xf3n espec\xedfica puede variar seg\xfan las actualizaciones y cambios en la plataforma Supabase. Te recomiendo consultar la documentaci\xf3n oficial de autenticaci\xf3n de Supabase y la documentaci\xf3n de la API de JavaScript de Supabase para obtener informaci\xf3n actualizada y ejemplos detallados."),(0,r.kt)("p",null,"User\nComo Configura las credenciales OAuth 2.0 para tu aplicaci\xf3n web.\nChatGPT\nConfigurar las credenciales OAuth 2.0 para tu aplicaci\xf3n web en Google Developer Console implica crear un proyecto en la consola y configurar las credenciales para permitir que tu aplicaci\xf3n se autentique a trav\xe9s de Google. Aqu\xed hay un resumen de los pasos que debes seguir:"),(0,r.kt)("p",null,"Accede a Google Developer Console:"),(0,r.kt)("p",null,"Ve a la Consola de Desarrolladores de Google y aseg\xfarate de haber iniciado sesi\xf3n con tu cuenta de Google."),(0,r.kt)("p",null,"Crea un proyecto:"),(0,r.kt)("p",null,"Si es la primera vez que usas la consola, es posible que necesites crear un nuevo proyecto. Si ya tienes proyectos, puedes seleccionar uno existente.\nHabilita la API de Google:"),(0,r.kt)("p",null,'En la p\xe1gina de inicio del proyecto, haz clic en "Explorar y habilitar APIs".\nBusca y selecciona la API que deseas habilitar. Por ejemplo, si est\xe1s configurando la autenticaci\xf3n de Google, necesitas habilitar la API de "Google+ API" (que proporciona informaci\xf3n de perfil del usuario).\nCrea credenciales:'),(0,r.kt)("p",null,'En la p\xe1gina de la API, haz clic en la pesta\xf1a "Credenciales" en el men\xfa lateral.\nHaz clic en el bot\xf3n "Crear credenciales".\nSelecciona "ID de cliente de OAuth" como el tipo de credencial.\nConfigura la informaci\xf3n de la aplicaci\xf3n:'),(0,r.kt)("p",null,'Selecciona "Aplicaci\xf3n web" como el tipo de aplicaci\xf3n.\nProporciona un nombre para la credencial.\nAgrega las URLs de redireccionamiento autorizadas para tu aplicaci\xf3n. Estas son las URLs a las que Google redirigir\xe1 despu\xe9s de que un usuario inicie sesi\xf3n correctamente. Por lo general, estas URLs ser\xe1n proporcionadas por la plataforma en la que est\xe1s implementando la autenticaci\xf3n (en este caso, Supabase).\nObt\xe9n las credenciales:'),(0,r.kt)("p",null,"Despu\xe9s de configurar la credencial, Google te proporcionar\xe1 un ID de cliente y un secreto de cliente. Estos son valores importantes que necesitar\xe1s para configurar la autenticaci\xf3n en tu plataforma, como Supabase.\nUsa las credenciales en tu aplicaci\xf3n:"),(0,r.kt)("p",null,"Utiliza el ID de cliente y el secreto de cliente que obtuviste para configurar la autenticaci\xf3n en tu plataforma. En el caso de Supabase, proporciona estos valores en la configuraci\xf3n del proveedor de Google en el panel de autenticaci\xf3n de Supabase."),(0,r.kt)("p",null,"Es importante seguir los pasos con atenci\xf3n y configurar correctamente las URLs de redireccionamiento, ya que la autenticaci\xf3n OAuth2 se basa en redireccionar a los usuarios a esas URLs para procesar el flujo de autenticaci\xf3n."),(0,r.kt)("p",null,"Recuerda que los detalles exactos y la interfaz de Google Developer Console pueden cambiar con el tiempo, por lo que te recomiendo consultar la documentaci\xf3n oficial de Google y las instrucciones espec\xedficas de tu plataforma para obtener la informaci\xf3n m\xe1s actualizada."))}d.isMDXComponent=!0}}]);