# Projecto Docker Rubiko-Basic-Docker

## Ejecución del proyecto con Docker

1 - Subimos el proyecto al Docker local

- docker build -t rubiko-basic-docker .

2 - Ejecutamos el contenedor subido

- docker run -p 5050:5000 rubiko-basic-docker

3 - Ponemos en la barra de direcciones del navegador que estemos usando este comando

- http://localhost:5050/health

4 - Vemos la respuesta del backend a esa peticion, debería ser {"status": "200", "mensage":"ok"}
