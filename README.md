#  Backend - CRUD de Paleta de Colores
Un servicio backend robusto para gestionar una Paleta de Colores, construido con tecnologías modernas y escalables.
#  Tecnologías Utilizadas

- Node.js - Entorno de ejecución de JavaScript

- Express - Framework web minimalista

- MongoDB - Base de datos NoSQL

- Mongoose - ODM para MongoDB

#  Middlewares Implementados

- Morgan - Logging de peticiones HTTP

- CORS - Permite peticiones desde otros dominios

- Express.json() - Parseo de JSON en el body

- Express.Validator - Para validacion de errores

- Manejo de errores - Middleware para errores personalizados

# 🗒️ Prerrequisitos

- Node.js (v14 o superior)

- MongoDB (local o Atlas)

- npm o yarn

## ⚙️ Instalación

1. Clonar el Repositorio

```
git clone https://github.com/valeiramain/BackPaletaColores
cd BackPaletaColores
```

2. Intalar dependencias

```
npm install
```

3. Variables de entorno necesarias


usa la estructura del archivo .env.example y reemplazalo con tus valores

```nodejs
PORT=3000
MONGODB=mongodb://localhost:21017/paletaDeColores
```

# 🚀 Ejecutar el proyecto

- Comando para probar el proyecto en producción

```
npm start
```

- Comando para probar el proyecto en desarrollo

```
npm run dev
```


# 📡 Endpoints de la API

## Servicios:
Estos son los colores que brinda el proyecto

URL: /api/colores

### Listar Colores
Listar todos los colores del proyecto

- URL:  http://localhost:3000/api/colores
- method: GET

Respuestas:

    - 200: ok
    - 500: Error interno del servidor


### Crear Color
Podemos crear un color enviando una solicitud del siguiente tipo:

- URL:  http://localhost:3000/api/colores
- method: POST
- heathers: Content-Type: application/json
- body: 
 ```json
{
        "nombre": "blue"
}
 ```


Respuestas:

    - 200: OK
    - 400: Bad Request
    - 500: Error interno del servidor
  


### Editar Color
Podemos editar todos los datos de un color enviando una solicitud del siguiente tipo:


- URL:  ```http://localhost:3000/api/colores/{color_id}```
- method: PUT
- heathers: Content-Type: application/json
- body: 
 ```json
{
        "nombre": "pink"
}
 ```


Respuestas:

    - 200: oK
    - 400: Bad Request
    - 404: Servicio no encontrado
    - 500: Error interno del servidor


### Borrar Color
Podemos borrar un Color enviando ID del color

- URL:  ```http://localhost:3000/api/colores/{color_id}```
- method: DELETE

Respuestas:

    - 200: OK
    - 400: Bad Request
    - 404: Servicio no encontrado
    - 500: Error interno del servidor


## 🙍‍♀️Autor

  - Valentina Iramain
  - LinkedIn: https://www.linkedin.com/in/valentina-iramain-94a208359
  - GitHub: https://github.com/valeiramain