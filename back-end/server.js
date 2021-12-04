const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://localhost:27017/goldilox", {
  useNewUrlParser: true,
});

// Create a new review: takes a title, review_body, rating, and a timestamp.
app.post("/api/reviews", async (req, res) => {
  const rev = new Review({
    title: req.body.title,
    review_body: req.body.review_body,
    rating: req.body.rating,
    timestamp: req.body.timestamp,
    author: req.body.author,
  });
  if (rev.rating > 5) rev.rating = 5;
  if (rev.rating < 1) rev.rating = 1;
  try {
    await rev.save();
    res.send(rev);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the reviews for the Salon.
app.get("/api/reviews", async (req, res) => {
  try {
    let reviews = await Review.find();
    res.send(reviews);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Create a schema for reviews for the Salon: a title, a body, a rating (1-5), and a timestamp.
const reviewSchema = new mongoose.Schema({
  title: String,
  review_body: String,
  rating: Number,
  timestamp: String,
  author: String,
});

// Create a model for items in the museum.
const Review = mongoose.model("Item", reviewSchema);

//delete a review
app.delete("/api/reviews/:id", async (req, res) => {
  try {
    await Review.deleteOne({
      _id: req.params.id,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//edit a review
app.put("/api/reviews/:id", async (req, res) => {
  try {
    await Review.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          title: req.body.title,
          review_body: req.body.review_body,
          rating: req.body.rating,
          timestamp: req.body.timestamp,
          author: req.body.author,
        },
      }
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Server listening on port 3000!"));
