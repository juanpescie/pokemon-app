# Pokemon app
una app de pokemones developed with react, redux, node.js, express, postgresql y sequelize


__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## CARPETAS PRINCIPALES

El proyecto cuenta con dos carpetas principales: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).


__SCRIPTS__
será necesario que creen desde psql una base de datos llamada `pokemon`

en la carpeta "api", abrir una terminal y correr los scripts `npm install` y `npm start` para correr las rutas del backend y base de datos

tambien en la carpeta "client", abrir una terminal y correr el script `npm install` y despues `npm start` para correr el front-end
