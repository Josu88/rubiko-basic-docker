# Projecto Docker Rubiko-Basic-Docker

## Descarga del projecto en github

1 - ir a la sigueinte url:https://github.com/Josu88/rubiko-basic-docker
2 - Hacer click en el boton code y copiar la url que nos da.
3 - usar el comando git clone url(poner aqui la url copiada) en una ruta que queramos usando el powershell o la consola de comandos del visal studio code.

### Ejecución del proyecto con Docker

1 - Subimos el proyecto al Docker local

- docker build -t rubiko-basic-docker .

2 - Ejecutamos el contenedor subido

- docker run -p 5050:5000 rubiko-basic-docker

3 - Ponemos en la barra de direcciones del navegador que estemos usando este comando

- http://localhost:5050/health

4 - Vemos la respuesta del backend a esa peticion, debería ser {"status": "200", "mensage":"ok"}

### Ejecucion del proyecto con docker-compose

1 - Ejecutamos el comando siguiente en el powershell o en la terminal del visual studio code
docker-compose up

2 - En la terminal o poweshell vemos como el servicio curl no saca la respuesta del endpoint http://localhost:5000/health y a la vez nos habre el navegador que si ponemos la ruta anterior nos dará el mismo resultado que el curl
