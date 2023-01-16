const express = require("express");
const app = express();
const hyper = require("@juspay-tech/hyper-node")(
  "snd_46590b6427ed4a1ab5d79a8afca46443"
);

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await hyper.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
