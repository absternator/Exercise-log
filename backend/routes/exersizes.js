const router = require("express").Router();
const Exersize = require("../models/exersize.model");

router.get("/", (req, res) => {
  Exersize.find({}, (err, foundExersizes) => {
    if (!err) {
      res.json(foundExersizes);
    } else {
      res.status(400).json(err);
    }
  });
});

router.route("/add").post((req, res) => {
  const newExersize = new Exersize({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date),
  });
  newExersize.save((err) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json("New Exersize added");
    }
  });
});

router
  .route("/:id")
  .get((req, res) => {
    Exersize.findById(req.params.id, (err, foundExersize) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.json(foundExersize);
      }
    });
  })
  .delete((req, res) => {
    Exersize.findByIdAndDelete(req.params.id, (err) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.json("Exersize deleted");
      }
    });
  });

router.patch("/update/:id", (req, res) => {
  Exersize.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err) => {
      if (!err) {
        res.json("Exersize updated");
      } else {
        res.status(400).json(err);
      }
    }
  );
});
module.exports = router;
