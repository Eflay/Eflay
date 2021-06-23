const Things = require("../models/Things");
const fs = require("fs");

/* Requete POST */

exports.createThings = (req, res) => {
  const thingObject = JSON.parse(req.body.thing);
  delete thingObject.id;
  const thing = new Things({
    ...thingObject,
    imageURL: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
  });
  thing
    .save()
    .then(() => res.status(201).json({ message: "objet crée" }))
    .catch((error) => res.status(400).json({ error }));
};

/* Lire les éléments en DB */

exports.findAll = (req, res) => {
  Things.find()
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
};

/* Lire un élément spécifique en DB + modifier images*/

exports.findOne = (req, res) => {
  const thingObject = req.file
    ? {
        ...JSON.parse(req.body.thing),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Thing.updateOne(
    { _id: req.params.id },
    { ...thingObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
  Things.findOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
};

/* Modifier un élément de la DB */

exports.updateOne = (req, res) => {
  Things.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "objet modifié" }))
    .catch((error) => res.status(400).json({ error }));
};

/* Supprimer un élément de la DB + supprimer images*/

exports.deleteOne = (req, res, next) => {
  Things.findOne({ _id: req.params.id })
    .then((thing) => {
      const filename = thing.imageURL.split("/img/")[1];
      fs.unlink(`img/${filename}`, () => {
        Things.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};
