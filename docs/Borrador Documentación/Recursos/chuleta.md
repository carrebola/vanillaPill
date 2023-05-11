---
sidebar_position: 190
---

# MI CHULETA:

## Importar TABS

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>



## Iluminar una línea con comentarios

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```

## Bloques de texto
:::note Como mola

Some **content** with _Markdown_ `syntax`.

:::

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

## Imágenes
![Example banner](../../../static/imagenes/stack/bootstrap_logo.svg)

## desde html
<div style={{display: 'flex'}}>

  <div style={{border: '1px solid', width: '200px', padding: '20px', margin: '10px', boxShadow: "10px 10px 10px #cccccc"}}>

  Hola, estoy en un div al que le estamos aplicandos estilos

  ![Example banner](../../../static/imagenes/stack/bootstrap_logo.svg)

  </div>

  <div style={{border: '1px solid', width: '200px', padding: '20px', margin: '10px', boxShadow: "10px 10px 10px #cccccc"}}>

  Hola, estoy en un div al que le estamos aplicandos estilos

  ![Example banner](../../../static/imagenes/stack/bootstrap_logo.svg)

  </div>

</div>

## Información que se despliega

### detalles toggle
<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>


Podemos poner notas al pie de página [^1]

## Tablas

| Cabecera A          | Cabecera B          |
| -:                  | :-:                 |
| Campo A1            | Texto alineado en el centro   |
| Texto alineado a la derecha   | Otro texto   |
 

## iframes
<div style={{textAlign: 'center'}}>

<iframe width="560" height="315" src="https://www.youtube.com/embed/UVauEId-jJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>

[^1]:  Esto es una nota al pie de página