const http = require("http");
const app = require("./app");

/*  Création d'un port valide */

const normalizedPort = (valPort) => {
  const port = parseInt(valPort, 10);

  if (isNaN(port)) return valPort;
  if (port >= 0) return port;

  return false;
};

const port = normalizedPort(process.env.PORT || 3000);

/* Assignation du port à l'application */

app.set("port", port);

/* Gestion des erreurs de ports */

const errorHandler = (error) => {
  if (error.syscall !== "listen") throw error;

  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe" + address : `port : ${port}`;

  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges.`);
      process.exit(1);
    case "EACCES":
      console.error(`${bind} is already in use.`);
      process.exit(1);
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe" + address : `port : ${port}`;
  console.log(`Listening on ${bind}`);
});

server.listen(port);
