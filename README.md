# culqui_app

## Requisitos

Descargar base de datos postgres 16, pgadmin4, node 16.

## Set Database config

"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "root",
"database": "culqui"

## Installation

Usar el comando:

```bash
npm install
```
Correr migraciones
```bash
npm run migration:run
```
Levantar el backend
```bash
npm run start:dev
```


## License

[MIT](https://nestjs.com)