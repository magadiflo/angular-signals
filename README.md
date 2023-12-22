# Angular Signals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

### Referencias

- [Learn Angular Signals](https://angular-signals.dev/post/welcome)

## Angular Signals

Angular Signals es un sistema que rastrea granularmente cómo y dónde se utiliza tu estado a lo largo de una aplicación, permitiendo al framework optimizar las actualizaciones de renderizado.

## ¿Qué son los signals?

Una señal es una envoltura alrededor de un valor que puede notificar a los consumidores interesados cuando ese valor cambia. Las señales pueden contener cualquier valor, desde simples primitivas a complejas estructuras de datos.

El valor de una señal siempre se lee a través de una función getter, que permite a Angular rastrear dónde se utiliza la señal.

`Las señales pueden ser de escritura (writable) o de sólo lectura (read-only).`
