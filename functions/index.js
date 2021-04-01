const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HtofnBL5z0YUdltfxhrDcBqHDqtwvoH5xcrmLcFLAobNYkyfW4k9rgvxAojvZhf74rEvGRDNn4idgoFPkpyED8S004Q0qJ5Uo"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// Example andpoint
// http://localhost:5001/crown-shopping-5392d/us-central1/api
