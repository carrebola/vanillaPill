---
Title: A cerca del Diagrama de clases y el Mapping de la bd
---

Ya hemos decidido las **entidades** que necesitamos en la construcción de nuestra base de datos y como se relacionan.

Para representar este diseño hemos empleado un **diagrama UML** llamado '**Diagrama entidad-relacion**'.

Pero tenemos otro diagrama UML mucho más potente, el **Diagrama de clases**. Éste se utiliza en programación cuando trabajamos con **Programación Orientada a Objetos**, como va a ser nuestro caso.

## ¿Qué es un diagrama de clases?

:::info Diagrama de Clases:

El **diagrama de clases** es una representación visual de las clases, objetos y relaciones en un sistema. Se utiliza en la **fase de diseño** para ilustrar cómo se organizan las **clases**, sus **atributos** y **métodos**, así como las relaciones entre ellas. El diagrama de clases es un componente clave en la **programación orientada a objetos**, ya que ayuda a comprender la estructura del software antes de implementarlo.

En un diagrama de clases, las clases representan objetos del mundo real o conceptos en el software, y las relaciones (como asociación, herencia, composición, etc.) describen cómo interactúan estos objetos entre sí.
:::

## ¿Qué es un ORM?
Por otro lado otro concepto que debemos conocer es el **patrón de diseño ORM** (Object-Relational Mapping)

:::info ORM (Object-Relational Mapping):

El **ORM es un patrón de diseño** que permite **mapear objetos y sus relaciones en una base de datos relacional**. En lugar de escribir consultas SQL directamente, el ORM **abstrae la interacción con la base de datos** utilizando clases y objetos. **Cada clase en el ORM se mapea a una tabla** en la base de datos, y **las propiedades de la clase se mapean a columnas en la tabla**.
:::

En resumen, mientras que el **diagrama de clases** es una herramienta de diseño para visualizar la estructura y las relaciones de las clases en un sistema, el **ORM** es una técnica de implementación que permite que esas clases y relaciones se reflejen directamente en la base de datos, lo que facilita el almacenamiento y la recuperación de datos de manera orientada a objetos.

## ¿Y para qué queremos esto?
Si has entendido los conceptos anteriores (y si no, ¡pregunta!, que para eso me pagan... 😋), la idea es diseñar las clases necesarias para **abstraer** (que significa *separar*, no te rayes) la programación de nuestra aplicación de la lógica necesaria para acceder a las bases de datos.

Nosotros vamos a utilizar, para acceder al servicio backend de supabase, una API de javascript que nos facilita la propia plataforma de Supabase (ya lo veremos). Pero la idea es que, si creamos esta **capa de abstración**, en un futuro **podríamos sustituir el servicio de Supabase por nuestra propia API Rest** basada en otro lenguaje de servidor,como por ejemplo: python, php o el mismo javascript con nodejs.

Es decir, aunque cambiásemos el lado del servidor, la programación del lado del cliente ¡seguiría intacta!. Esta podría suponer una gran ventaja si un día necesitamos escalar nuestro proyecto.
:::info ¿Qué demonios es una API Rest?
<details>
<summary>Una API REST es una forma de hacer que diferentes programas en línea puedan hablar entre sí como si fueran amigos. </summary>
Imagina que tienes una máquina expendedora: pones dinero (petición) y recibes una bebida (respuesta). Del mismo modo, cuando envías una petición a una API REST (dinero en la máquina expendedora), obtienes información o realizas una acción (bebida).

En lugar de usar botones en la máquina, usas diferentes palabras como "consigue esto", "agrega eso", "cambia esto" o "borra eso" (verbos HTTP como GET, POST, PUT, DELETE). Y toda la información se organiza como si fuera una dirección (URL) que dice dónde obtener o poner cosas.

Entonces, en resumen, una API REST es como una máquina expendedora para datos en la web: pides cosas, haces cosas y obtienes respuestas, todo a través de un conjunto de reglas y direcciones.
</details>
:::

Tranquilo, cuando comiences a ver el código lo entenderás mucho mejor... 😅 