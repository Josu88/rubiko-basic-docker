//Cargamos los modulos para usar
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// Creamos el servidor
const app = express();

// Middleware para cors
app.use(cors());

// Deserializamos el body en formato raw
app.use(express.json());

// Middleware de Morgan para obtener más información sobre cada una de las peticiones
app.use(morgan("dev"));

// Importamos las variables de entorno que hemos creado para la conexión
const { PORT, HOST, GREETINGS } = process.env;

/*   ### Endpoints ###  */
/*   ### Pagina de Inicio ###  */
app.get("/", (req, res) => {
  res.send(`Server listening at http://${HOST}:${PORT}`);
});

/*   ### health ###  */
app.get("/health", (req, res) => {
  res.send({
    status: "200",
    message: GREETINGS,
  });
});

/*   ### Middlewares ###  */

// Middleware de Error
app.use((error, req, res, _) => {
  console.error(error);

  res.status(error.httpStatus || 500);

  res.send({
    status: "Error",
    message: error.message,
  });
});

// Middleware de Not Found
app.use((req, res) => {
  res.status(404);

  res.send({
    status: "Error",
    message: "Not found",
  });
});

// Ponemos el servidor a la escucha
app.listen(PORT, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});
