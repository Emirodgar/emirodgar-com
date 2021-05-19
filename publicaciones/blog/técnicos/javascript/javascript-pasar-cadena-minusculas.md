---
title: Función JavaScript para pasar cadena a minúsculas con la primera letra en mayúsculas
description: Sencilla función para convertir cualquier cadena en minúsculas salvo la primera letra
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
layout: emirodgar_post
date: 15/05/2021
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: funcion-javascript-cadena-minusculas

---

La siguiente función Javascript nos ayudará a convertir toda una cadena en minúsculas a excepción de la primera letra que quedará en mayúsculas. 

```javascript
function primeraLetra(s) {
  return s.replace(/^.{1}/g, s[0].toUpperCase());
}

function convertirCadena(c){
  return primeraLetra(c.toLowerCase());
}

```

He dividido el script en dos funciones, la primera **convertirCadena** es la que tendremos que utilizar y bastará con pasarle el texto que queremos convertir a minúsculas. La segunda función, **primeraLetra** se llama de forma interna para convertir la primera letra en mayúsculas.

Para poder usarla bastará con ejecutar el siguiente comando:

```javascript
alert(convertirCadena("esto Es un Ejemplo de Cadena"));
```


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI2NzM4MjM0MSwtNDk0NzcxMjEyXX0=
-->