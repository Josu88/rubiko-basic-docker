# Rubiko-Basic-Docker

Projecto para subir a docker que es un backend de Nodejs con un solo endpoint que muestra un mensaje al llamarlo.

# Instalación

Para poder ver como funciona el proyecto hacemos lo siguiente:

Ejecutamos los siguientes comandos en la terminal del visual studio code o otro id que tengamos, tambien podemos hacerlo en la terminal del sistema operativo que tengamos:

1. Descargaremos el proyecto en rar o haremos un git clone de la url que pone.
2. npm install (Para instalar las dependencias necesarias para la ejecución del projecto)
3. node index.js (Ejecutamos el proyecto para poder verlo)

# Docker

Para subir a docker ejecutaremos los siguientes comandos:

1. docker build -t rubiko-basic-docker(para crear la imagen en el docker) .
2. docker run -p 5000:5000 rubiko-basic-docker(nombre dado al usar el docker build)(este comando ejecuta el contenedor de docker anteriormente creado para poder verlo)
