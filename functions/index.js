const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HnOncBVlHTzAccLVh5cHkvvchjtURWe3Y6Jm88xayQqMyckVspmG3INiK62d8EEU7fcbQsnsYuExQvgBz0kJtjH00dqziNCdP"
);

// Api

// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// Api Routes
app.get("/", (req, res) => res.status(200).send("hello World"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment Received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // ok, created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);
// example endpoint
// http://localhost:5001/clone-56b59/us-central1/api
