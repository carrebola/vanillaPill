---
title: ¿De qué va esto...?
tags:
  - Agile
  - Lean Startup
sidebar_position: 10
---

## Antecedentes
A lo largo del ciclo formativo de DAW se aprenden diferentes tecnologías, herramientas y procesos para el desarrollo de aplicaciones web. Pero en ocasiones, por diferentes motivos, resulta difícil contextualizar cada uno de estos aprendizajes, por lo que corremos el riesgo de estudiar, aprobar… y olvidar.

La misión de esta propuesta pretende ser la de **dar sentido práctico a cada uno de estos aprendizajes**, creando sinergias entre los diferentes módulos del ciclo de DAW, de manera que, al acabar este ejercicio práctico, seamos capaces de **aplicar todo lo estudiado en el desarrollo de un proyecto real**.

## Objetivos generales
El objetivo de esta documentación pretende ser el de permitirnos recorrer, de forma guiada, cada uno de los procesos implicados en el desarrollo de una aplicación web: desde el planteamiento de los requisitos iniciales, pasando por el diseño de la interfície, la programación de la lógica, la persistencia en bases de datos o el despliegue en producción de la aplicación una vez finalizada y testeada. 

En esta guía pondremos en práctica una gran parte de los conocimientos adquiridos a lo largo del primer curso del ciclo de DAW, de módulos como *Programación*, *Entornos de desarrollo*, *Bases de datos* o *Lenguajes de marcas*, aunque también pondremos en práctica aquellos conocimientos que iremos adquiriendo a lo largo de este curso. Así, mientras vamos desarrollando este proyecto, haremos uso de, por ejemplo, conocimientos adquiridos en los módulos de *Despliegue de aplicaciones*, *Programación del lado de cliente* (javascript) o *Diseño de interficies*. 

## Cómo está organizada la documentación
A nivel organizativo dividiremos el proyecto en diferentes **versiones** (dependiendo del nivel de funcionalidad y dificultad), y **comenzaremos con una versión mínima viable (MVP)**, con el enfoque propio de la **Metodología Lean Startup.**
No obstante, para el desarrollo de cada una de estas versiones trabajaremos con la **metodología Agile**.

## ¿Cómo planificamos las diferentes tareas y su temporización a la hora de realizar el proyecto?
En la metodología Agile el trabajo se divide en **‘historias’**, las cuales desglosaremos en diferentes **tareas**. Estas historias se agrupan a su vez en **‘sprints’** (que darán lugar a funcionalidades testeables que iremos valorando a lo largo de su recorrido). 

Así, a lo largo de esta guía, iremos realizando cada una de las historias según una **planificación previa** (donde habremos definido el tiempo a destinar en cada historia y los plazos de inicio y finalización), y testeando y valorando el resultado obtenido al finalizar cada uno de los sprints según sus plazos de ejecución.

:::info Metodologías
<details>
  <summary>Metodologías Agile y Lean Startup</summary>
  <div>
      <h4>Metodología Agile</h4>
      <p>**Metodología Agile:** Un ejemplo de una empresa que utiliza la metodología Agile es Spotify. En este caso, el equipo de desarrollo trabaja en ciclos de dos semanas llamados "sprints" y se centran en la entrega de características en plazos cortos y regulares. También trabajan en colaboración con los clientes y usuarios para obtener retroalimentación y ajustar los requisitos del proyecto a medida que avanzan.</p>
      <h4>Metodología Lean Startup</h4>
      <p>**Metodología Lean Startup:** Un ejemplo de una empresa que utiliza la metodología Lean Startup es Dropbox. En este caso, el equipo de desarrollo creó una versión mínima viable (MVP) de su aplicación de almacenamiento en la nube para probar rápidamente su aceptación en el mercado. Obtuvieron retroalimentación de los clientes de forma temprana y frecuente, lo que les permitió ajustar y mejorar el producto a lo largo del tiempo.</p>
  </div>
</details>
:::






**El objetivo de esta guía**, tal y como hemos comentado en la introducción, pretende ser el de **conectar los diferentes módulos** del ciclo. Es por eso que, a lo largo de las explicaciones, podremos encontrar **referencias a apuntes y/o tareas realizadas** en otras asignaturas, así como a otros recursos que nos permitirán, no sólo contextualizar lo aprendido, sino ampliar nuestros conocimientos en diferentes áreas.

Así, en cada historia encotrarás las explicaciones de como realizar cada proceso, el código empleado (que podrás ir copiando en tu proyecto), y referencias a los apuntes en los que puedes encontrar una explicación detallada de las diferentes técnicas empleadas. Por ejemplo, este podría ser un pedazo de código:

```js title="archivo.js"
for(let i=0;i<10;i++){
  console.log('esto es un ejemplo de iteración ', i)
}
```
Fíjate que en la parte superior de la ventana puedes ver una referencia al archivo en el que aparece el código.

Y en ventanas como estas podrás enlazar a los apuntes y otras referencias para ampliar la información:
:::info
Puedes encontrar más [información sobre los bucles aquí.](https://lenguajejs.com/javascript/introduccion/bucles/)
:::

## Entonces, ¿para qué sirve todo esto?
Pues todo esto sirve para **aprendas a crear un proyecto desde 0**, paso a paso, siguiendo las sesiones en clase y **con el soporte de esta documentación.**

La idea es que, durante las clases, yo iré explicando y generando el código del proyecto. **Tu misión es seguirme, copiando y ejecutando cada uno de los scripts que iremos programando juntos.** Pero si en algún momento te pierdes... ¡aquí lo tienes todo!

Esta también será una herramienta genial si un día no puedes venir a clase (¡con un motivo justificado, claro! 😉)

En ocasiones, algunas partes del código las tendrás que crear tu solo (para ir practicando) y en otras, simplemente tendrás que seguir esta documentación sin que el profe te de la brasa.


> **¡Pero cuidao, no creas que todo será copiar y pegar! **



Es muy importante que para que aprendas las diferentes estructuras en programación, **escribas tú mismo el código, en lugar de copiarlo.**
De todas formas, te verás obligado a analizarlos y finalmente comprenderlo porque...** ¡esta lleno de trampas!** 😈 

Verás que irán apareciendo mensajes como este:
:::caution ¡Cuidado!
Parece que todo no es perfecto... ¡Este código tiene errores! ¿Podrñas solucionarlo? 

![Ejemplo Error](/imagenes/introduccion/introduccion_1_ejemploError.png)

Fíjate que es un error 404 que proviene del archivo `favicon.ico` en la línea 1... investiga y resuelve el enigma. 
:::

Tambien encontrarás tips o trucos para mejorar tu flujo de trabajo. Por ejemplo:
:::tip Una buena idea sería...
Si pones la palabra `debbuger` en medio de tu código, se comportará como un 'breakpoint' y la ejecución de la aplicación se detendrá en ese punto. Así podrás revisar el estado de las variables desde el inspector de tu navegador
:::

Y esto es todo respecto a la documentación.

**¿Comenzamos?**

