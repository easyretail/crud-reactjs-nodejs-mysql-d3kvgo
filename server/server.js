const express = require("express");

const app = express();
const cors = require('cors');

const db = require('../config/db'); // import modele db => models 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/api/get", (req, res)=> {
  const sqlSelect = 
     "SELECT * FROM movie_reviews";
  db.query(sqlSelect, (err, result)=> {
     res.send(result);
  });
})

app.post("/api/insert", (req, res) => {

  const movieName = req.body.movieName
  const movieReview = req.body.movieReview

  const sqlInsert =
    "INSERT INTO movie_reviews(movieName, movieReview) VALUES (?, ?)";
  db.query(sqlInsert,[movieName, movieReview], (err, result)=> {
    console.log(result)
  });
});

/**app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Star Wars', 'great');";
  db.query(sqlInsert, (err, result) => {
    res.send("coucou du back");
  });
});**/

app.listen(3001, () => {
  console.log("sur port 3001");
});
