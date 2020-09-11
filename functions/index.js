const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Go5riJeOw3gALJ4YVG5mMwFb3uMEDm3Kr5AWmLunKl6aoWp5OyctOdaGv5P34E9zywLbBZH4LlXsbiYxrOvWtUK009C62Ntgc");

//API

//App Config
const app = express();

//MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: "usd",
    });
    //OK_created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen Command
exports.api = functions.https.onRequest(app);

//Example End Point
//http://localhost:5001/clone-5153f/us-central1/api
