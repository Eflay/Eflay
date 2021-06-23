const express = require("express");

const router = express.Router();
const controller = require("../controllers/Controller");
const verif = require("../middleware/verif");
const multer = require("../middleware/multer-config");

router.use((req, res, next) => {
  console.log("Début");
  next();
});

router.use((req, res, next) => {
  res.status(200);
  next();
});

/* Répartition des routes */

router.use(express.json());
router.post("", verif, multer, controller.createThings);
router.use("", verif, controller.findAll);
router.get("/:id", verif, controller.findOne);
router.put("/:id", verif, multer, controller.updateOne);
router.delete("/:id", verif, controller.deleteOne);

module.exports = router;
