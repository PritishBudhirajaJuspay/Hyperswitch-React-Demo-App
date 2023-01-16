import React, { useState, useEffect } from "react";
import { loadSwitch } from "@juspay-tech/orca-js";
import { Elements } from "@juspay-tech/react-orca-js";

import CheckoutForm from "./CheckoutForm";
import "./App.css";

const hyperPromise = loadSwitch("pk_snd_072150c83b0342d580f46107f74d4cdb");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={hyperPromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
