# Ejercicio 1 Fullstack AlMundo

## Instalacion

- Clonar repo
- `npm install` - Instala las dependencias configuradas en package.json
- `mongod` - Levantar una instancia de MongoDB con puerto 27017 ('mongodb://localhost/almundo:27017')
- `npm run dev` - Ejecuta el backend con nodemon en http://localhost:3000  (en caso de no estas bloqueado ese puerto)
- Cargar algunos datos por terminal :)
  `curl --data 'name=Hotel Emperador&stars=3&price=1596' http://localhost:3000/hoteles`
  `curl --data 'name=Petit Palace San Bernardo&stars=4&price=2145' http://localhost:3000/hoteles`
  `curl --data 'name=Hotel Nuevo Boston&stars=2&price=861' http://localhost:3000/hoteles`
