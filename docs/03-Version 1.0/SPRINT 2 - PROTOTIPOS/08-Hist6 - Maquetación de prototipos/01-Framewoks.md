---
title: Comenzamos a maquetar con Bootstrap
tags:
  - Bootstrap 5
  - html
  - css
sidebar_position: 1
---


## Frameworks como marco de trabajo en Javascript
No nos engañemos. En la mayoría de empresas de desarrollo web hacen trampas. Son pocas las que crean aplicaciones con html, css y javascript puro. La mayoría utilizar librerías que nos facilitan el trabajo. Es más, la casi todos os desarrolladores trabajan con lo que conocemos como frameworks.

<details>
<summary>¿Qué es un framework para el desarrollo de apps en javascript?</summary>
Un framework para el desarrollo frontend es una estructura o conjunto de herramientas predefinidas diseñadas para facilitar y agilizar la creación de interfaces de usuario interactivas y atractivas en aplicaciones web. 

Estos frameworks proporcionan una base sólida de código, patrones de diseño y **componentes reutilizables** que permiten a los desarrolladores construir interfaces de usuario de manera más eficiente y coherente.

Las características comunes de los frameworks de desarrollo frontend incluyen:

- Componentización: Los frameworks frontend generalmente promueven la creación de componentes reutilizables. Los componentes son piezas de interfaz de usuario autónomas y autocontenidas que pueden ser combinadas y reutilizadas en toda la aplicación.

- Gestión de estados: Muchos frameworks ofrecen soluciones para gestionar el estado de la aplicación, lo que permite manejar la lógica y la interacción de manera organizada y escalable.

- Enrutamiento: Los frameworks suelen proporcionar herramientas para administrar el enrutamiento en aplicaciones de una sola página (SPA) y asegurar que las diferentes partes de la interfaz de usuario se muestren correctamente en función de la URL actual.

- Interacción y dinamismo: Estos frameworks a menudo incluyen funcionalidades para manejar interacciones en tiempo real, animaciones y actualizaciones dinámicas en la interfaz de usuario.

- Compatibilidad con dispositivos: Muchos frameworks se centran en la creación de aplicaciones web receptivas que funcionen en una variedad de dispositivos y tamaños de pantalla.

- Optimización de rendimiento: Los frameworks suelen incorporar optimizaciones de rendimiento, como el uso de un Virtual DOM (en el caso de React) para reducir la cantidad de actualizaciones de la interfaz de usuario y mejorar la velocidad de respuesta.

- Herramientas de desarrollo: Muchos frameworks vienen con herramientas y utilidades que facilitan la depuración, la prueba y la optimización del código.

</details>

Algunos ejemplos de frameworks frontend populares incluyen:
- **React**, 
- **Angular**, 
- **Vue.js** y 
- **Svelte**. 

Estos frameworks pueden ahorrar tiempo a los desarrolladores al proporcionar una base sólida sobre la cual construir, evitando la necesidad de comenzar desde cero y permitiendo enfocarse en la lógica y la experiencia del usuario en lugar de en detalles técnicos repetitivos.

<details>
<summary>Características de los frameworks más populares</summary>

- Angular:
Desarrollado por Google, Angular es un framework frontend basado en TypeScript. Ofrece una estructura sólida para construir aplicaciones web complejas y dinámicas. Utiliza el enfoque de Componentes para desarrollar la interfaz de usuario y proporciona características como enrutamiento, gestión de estados y comunicación con servidores.

- React:
Creado por Facebook, React es un framework frontend basado en JavaScript. Se centra en la construcción de interfaces de usuario reactivas y componentes reutilizables. Utiliza un modelo de Virtual DOM para mejorar el rendimiento al actualizar solo las partes necesarias de la interfaz de usuario.

- Vue.js:
Vue.js es un framework frontend basado en JavaScript que se destaca por su enfoque progresivo y su facilidad de aprendizaje. Permite construir interfaces de usuario interactivas mediante el uso de componentes. Vue.js también ofrece opciones para enrutamiento, gestión de estados y complementos.

- Svelte:
Svelte es un framework frontend basado en JavaScript que se diferencia por su enfoque en la compilación. En lugar de interpretar el código en tiempo de ejecución, Svelte compila el código en JavaScript optimizado durante la construcción. Esto puede llevar a un rendimiento más rápido en comparación con otros frameworks.

</details>

:::note 
*En este proyecto nosotros no vamos a utilizar ninguno de estros frameworks, ya que uno de los objetivos de esta documentación es poner en práctica los conocimientos adquiridos durante el ciclo, principalmente Javascript, que en definitiva es la base de todos estos marcos de trabajo.*
:::

## Frameworks para la maquetación html/css
Ahora bien, para la maquetación sí que vamos a utilizar un poco de ayuda 😅.

Los frameworks de diseño o bibliotecas proporcionan estilos predefinidos y componentes reutilizables para ayudarte a construir interfaces de usuario más rápidamente. 

Los más populares en son: 
- Bootstrap
- Tailwind CSS

### Bootstrap:
Bootstrap es uno de los frameworks de diseño más populares. Proporciona una amplia gama de componentes y estilos predefinidos basados en HTML, CSS y JavaScript. Es altamente personalizable y es ideal para crear sitios web responsivos y modernos.

### Tailwind CSS:
Tailwind CSS es un framework que se diferencia por su enfoque de "clases utilitarias". En lugar de proporcionar componentes predefinidos, Tailwind CSS ofrece una amplia gama de clases CSS que permiten construir diseños personalizados de manera eficiente.

Pero no son los únicos. 

<details>
<summary>Ejemplos de los frameworks más populares para la maquetación con html/css</summary>

- Bootstrap:
Bootstrap es uno de los frameworks de diseño más populares. Proporciona una amplia gama de componentes y estilos predefinidos basados en HTML, CSS y JavaScript. Es altamente personalizable y es ideal para crear sitios web responsivos y modernos.

- Tailwind CSS:
Tailwind CSS es un framework que se diferencia por su enfoque de "clases utilitarias". En lugar de proporcionar componentes predefinidos, Tailwind CSS ofrece una amplia gama de clases CSS que permiten construir diseños personalizados de manera eficiente.

- Foundation:
Foundation es otro framework de diseño que ofrece componentes y estilos reutilizables para crear interfaces de usuario receptivas y atractivas. Viene con una variedad de plantillas y opciones de diseño que facilitan la creación de sitios web adaptables.

- Bulma:
Bulma es un framework CSS que se enfoca en ser simple y modular. Utiliza una estructura basada en clases CSS para crear diseños flexibles y receptivos. Bulma también es conocido por su estilo limpio y moderno.

- Semantic UI:
Semantic UI es un framework que se centra en la semántica y la claridad en el código. Proporciona una serie de componentes predefinidos que siguen convenciones semánticas, lo que facilita la creación de interfaces coherentes y fáciles de entender.

- Materialize CSS:
Materialize CSS está basado en los principios de diseño de Material Design de Google. Proporciona componentes y estilos que siguen estas directrices, lo que resulta en una apariencia moderna y coherente en las aplicaciones web.

- UIKit:
UIKit es un framework CSS que se enfoca en la creación de interfaces de usuario limpias y modernas. Proporciona una amplia gama de componentes y estilos, junto con una estructura modular que facilita la personalización.

</details>



Estos frameworks de diseño y bibliotecas pueden ser muy útiles para agilizar el proceso de desarrollo frontend al proporcionar estilos coherentes y componentes reutilizables. La elección del framework dependerá de tus preferencias de diseño, las necesidades de tu proyecto y cómo se adapte a tu flujo de trabajo. 

:::note Bootstrap
*Para nuestro proyecto nosotros utilizaremos **[Bootstrap](https://getbootstrap.com/)**, ya que, de momento, es el más utilizado en las empresas de desarrollo (al menos en el momento de escribir esta guía).*

👉 Aquí tienes la **web oficial de la última versión de Bootstrap:** [https://getbootstrap.com/](https://getbootstrap.com)

👉 Y aquí tienes un enlace a la **documentación de Booststrap 5 en español:** [https://getbootstrap.esdocu.com/](https://getbootstrap.esdocu.com/), de la mano de ['*esdocu*'](https://esdocu.com/) 
:::

## ¡Maquetando prototipos!

Es el momento de ponernos manos a la obra.
Ya tenemos preparado nuestro entorno de trabajo con VSCode instalado y algunos plugins como Prettier para formatear nuestro código.
También hemos instalado Git y hemos creado una cuenta de github.
Y hemos creado un proyecto el cual tenemos vinculado con nuestra cuenta de github.

Es el momento de volver al VSCode, situarnos en la rama **prototipos**... y ¡¡¡comenzar a picar código!!! 😎