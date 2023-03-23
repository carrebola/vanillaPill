---
sidebar_position: 85
---

# Historia 6b. Supabase. Storage para la Gestión de archivos. Pruebas IV (APIU DOCS)
Como desarrollador quiero crear un sistema de archivos para poder subir y administrar imágenes de los diferentes proyectos

1. Creamos un bucked en el storage de supabase y una carpeta para las imagenes de avatar
2. Usamos la api de supabase para subir un archivo desde javascript. Por ejemplo:

Creamos un formulario con un campo de tipo file y un botón submit
```html 
<form>
  <input type="file" id="avatar-input">
  <button type="submit" id="upload-btn">Subir imagen</button>
</form>
```
Capturamos el input y el botón y detectamos el evento click sobre el botón.
Capturamos el archivo accediendo a la propiedad files del input
`const file = avatarInput.files[0]`

Ahora utilizamos la api de supabase para subir el archivo a nuestro storage
`const { data, error } = await supabase.storage.from('avatars').upload(file.name, file)`

En data tendremos el dato de retorno si todo ha ido bien. Podemos acceder a la propiedad data.key para tener una referencia al archivo y, mediante la api podemos crear una url para este archivo
`const { publicURL } = supabase.storage.from('avatars').getPublicUrl(data.Key)`

Ahora solo tenemos que guardar esta url en la tabla del usuario. Cuando accedamos a los datos del usuario podremos obtener la url e insertarla en el atributo src de una imagen para mostrar el avatar.

En ejemplo de todo el código podría ser este:

```js title="ejemploStorage.js"
const avatarInput = document.querySelector('#avatar-input');
const uploadBtn = document.querySelector('#upload-btn');

uploadBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const file = avatarInput.files[0];
  
  if (!file) return;
  
  const { data, error } = await supabase.storage.from('avatars').upload(file.name, file);
  
  if (error) {
    console.error(error);
    return;
  }
  
  const { publicURL } = supabase.storage.from('avatars').getPublicUrl(data.Key);
  
  // Aquí puedes guardar la URL de la imagen en la tabla de Supabase correspondiente
  // utilizando la API de Supabase y el método 'insert'
  
  // Luego, puedes mostrar la imagen en tu proyecto Javascript utilizando la URL de la siguiente manera:
  const avatarImg = document.createElement('img');
  avatarImg.src = publicURL;
  document.body.appendChild(avatarImg);
})
```
