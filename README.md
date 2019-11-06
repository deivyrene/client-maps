# ClientMaps

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

Esta vinculado con el repositorio https://github.com/deivyrene/server.git; Ya que este posee los endpoint para que la aplicacion funcione correctamente.

Se desplego la aplicacion en S3 de AWS con la siguiente url:

http://client-maps.s3-website-us-east-1.amazonaws.com/

## Servidor de desarrollo

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.

## Descripcion

-La aplicación posee un formulario de registro de eventos, donde cada evento registrado actualiza via websocket el mapa donde se detallan cada uno de los registros. En la parte superior de la pantalla, se encuentra un menu para poder desplazarse por las opciones.

![Cargando formulario](https://client-maps.s3.amazonaws.com/image_one.png)

-Una vez registrado los eventos, en otra pestaña se puede apreciar como se actualiza de manera automatica el mapa para reflejar el evento.

-Posee un filtro para buscar eventos registrados con un selector dinamico, ademas de fijar la busqueda en el mapa con los resultados obtenido

![Cargando mapa](![alt text](https://client-maps.s3.amazonaws.com/image_three.png.png)

-Para obtener el listado de eventos, se debe presionar en listado de coordenadas.

![Cargando mapa](![alt text](https://client-maps.s3.amazonaws.com/image_two.png.png)


## Tecnologias

* [Angular 8]
* [Angular Material]
* [Socket.IO]
* [S3] -> Servicio de AWS

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
