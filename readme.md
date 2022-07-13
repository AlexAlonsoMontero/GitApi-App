# App que iteractua con la Api de Git.
## Aplicación en desarrollo
## Resumen
Api propia que interactua con la api de Git Hub y nos devuelve información. Se obtienen, los repositorios de un usuario incluidos los privados usando un token. Y los issuees de un proyecto determinado facilitado por el usuario.

## Tecnologías
* NodeJS
* JavaScript
* Swagger ( documentación )
* Postman (pruebas de backend)


## Instalación:

Descargar el proyecto y ejectutar.
```
npm install
```
Url de documentación se puede cambiar, en server.js

```
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile)
  );
```