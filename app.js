const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/Exemple");
const userRouter = require("./routes/User");
const path = require("path");

const app = express();

/* Connexion à MongoDB */

mongoose
  .connect("mongodb+srv://Eflay:Tigrou007@cluster0.xeqsz.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connexion Réussie..."))
  .catch(() => console.log("Connexion échouée..."));

/* Valider CORS */

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

/* Appel des routes */

app.use("/img", express.static(path.join(__dirname, "img")));
app.use("/test/auth", userRouter);
app.use("/test", router);

/* EXPORT */

module.exports = app;
