const express = require("express");

const app = express();
require("./db/conn");
app.use(express.json());

const Books = require("./models/Books");
const { application, response } = require("express");

const Port = process.env.PORT || 4000;

app.post("/adddata", (req, res) => {
  console.log(req.body);
  const usere = new Books(req.body);
  usere
    .save()
    .then(() => {
      res.status(200).send(usere);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/booksdata", async (req, res) => {
  Books.find()
    .then((result) => {
      res.status(200).json({
        booksdata: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

app.delete("/:id", (req, res) => {
  console.log(req.params.id);
  Books.remove({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        message: "deleted successfully",
        deletedData: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

app.put("/:id", (req, res) => {
  console.log(req.params.id);
  Books.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        img: req.body.img,
        summary: req.body.summary,
      },
    }
  )
    .then((result) => {
      res.status(200).json({
        updated: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

app.listen(Port);
