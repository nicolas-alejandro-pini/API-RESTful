# Ejercicio Fullstack Almundo

## Instalacion

- Clonar repo
- `npm install` - Instala las dependencias configuradas en package.json
- `gulp build` - Esta tarea es usada para generar el codigo productivo minificado JS/CSS
- `mongod` - Levantar una instancia de MongoDB con puerto 27017 ('mongodb://localhost/almundo:27017')
- `npm run start` - Ejecuta el backend con nodemon en http://localhost:3000  (en caso de no estas bloqueado ese puerto)
- Cargar algunos datos por terminal :)
  `curl --data 'name=Hotel Emperador&stars=3&price=1596' http://localhost:3000/hoteles`
  `curl --data 'name=Petit Palace San Bernardo&stars=4&price=2145' http://localhost:3000/hoteles`
  `curl --data 'name=Hotel Nuevo Boston&stars=2&price=861' http://localhost:3000/hoteles`

## Estructura de la aplicacion

- `app.js` - Punto de entrada de la aplicacion. Este archivo define nuestro servidor Express y conecta con MongoDB usando mongoose.
- `api/` - Este directorio contiene la API RESTful. Routeo y modelo de base de datos.
- `public/` - Frontend generado por gulp (main.js y index.html)
- `src/` - Frontend en ES6
