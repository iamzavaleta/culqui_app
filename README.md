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

## Post - Ejemplo generar token
```bash
 /api/cards/v2/token
```
```bash
{
    "card_number": 123456789,
    "cvv": 123,
    "expiration_month": "10",
    "expiration_year": "2025",
    "email": "token@email.com"
}
```

## Get - Ejemplo obtener datos de la tarjeta por token

```bash
 /api/cards/v2/gh365r74rg7fudw3
```

## License

[MIT](https://nestjs.com)