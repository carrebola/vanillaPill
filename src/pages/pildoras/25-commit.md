---
slug: commit
title: Buenas prácticas creando mensajes 'commit'
authors: carrebola
tags: [git, github, commit]
---

# Buenas prácticas creando mensajes 'commit'

Es importante escribir mensajes de commit claros y descriptivos al trabajar con Git y GitHub. Los mensajes de commit ayudan a ti y a otros colaboradores a entender los cambios realizados en el proyecto a lo largo del tiempo. 

Aquí tienes algunos consejos para escribir mensajes de commit efectivos:


1. Mantén los mensajes cortos y concisos: Los mensajes de commit deben ser breves pero informativos. Intenta resumir los cambios en una oración o dos.

2. Usa el imperativo: Escribe los mensajes en tiempo presente y en imperativo. Por ejemplo, en lugar de "Agregado soporte para función X", escribe "Agregar soporte para función X". Esto hace que el mensaje sea más claro y directo.

3. Explica el qué y el porqué: Describe qué cambios introduces en el commit y, si es relevante, por qué realizaste esos cambios. Esto ayuda a los demás a comprender el contexto de tus modificaciones.

4. Separa el resumen del cuerpo: Si un commit requiere una explicación más detallada, coloca un resumen breve (máximo 50-72 caracteres) en la primera línea y luego agrega un espacio en blanco seguido de un párrafo o más de explicación adicional.

5. Utiliza las palabras clave: Puedes usar palabras clave al comienzo de tus mensajes para indicar el tipo de cambio que realizaste. Algunas palabras clave comunes son "**Agrega**", "**Corrige**", "**Modifica**" y "**Elimina**".

6. Sé específico: Evita mensajes genéricos como "Arreglos varios" o "Cambios menores". Es mejor ser específico sobre los cambios exactos que realizaste.

7. Referencia los problemas: Si tu proyecto utiliza sistemas de seguimiento de problemas (como GitHub Issues), puedes hacer referencia a los números de problema en tus mensajes de commit. Por ejemplo, "Arregla #123" vinculará el commit con el problema número 123.

8. Revísalo antes de confirmar: Antes de confirmar tus cambios, tómate un momento para revisar el mensaje de commit y asegurarte de que sea claro y preciso.

9. Mantén un estilo consistente: Si trabajas en un equipo, es útil mantener un estilo de mensajes de commit consistente en todo el proyecto. Esto facilita la lectura y comprensión de los cambios a lo largo del tiempo.

10. No tengas miedo de editar: Si te das cuenta de que un mensaje de commit no es claro o no sigue las pautas, no dudes en editar el mensaje antes de hacer push.

Estos podrían ser algunos ejemplos:

```
Agrega una nueva función al formulario de registro:
  Agrega validación de longitud al campo de contraseña
```

```
Corrige el error de diseño en la página de inicio de sesión:
    Corrige el desplazamiento horizontal en el formulario de inicio de sesión
```

```
Modifica el estilo de los botones en la barra de navegación:
  Modifica el estilo de los botones de la barra de navegación para que sean más visibles
```

```
Elimina la función de actualización de perfil obsoleta:
  Elimina la función de actualización de perfil sin uso y sus dependencias
```

```
Añade imágenes de avatar para los perfiles de usuario:
  Arregla el enlace incorrecto en la página de contacto que redirigía a una URL no existente
```

```
Refactoriza la lógica del manejo de errores en la API:
  Refactoriza el manejo de errores en la API para mejorar la legibilidad y la reutilización del código
```

```
Optimiza la carga de imágenes en la página de galería:
  Optimiza la carga de imágenes en la página de galería para reducir el tiempo de carga y mejorar la experiencia del usuario
```

```
Crea la estructura básica de la página de productos:
  Agrega el esqueleto HTML y los estilos iniciales para la página de visualización de productos
```

