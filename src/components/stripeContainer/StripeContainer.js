import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

const StripeContainer = () => {
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		// Chiamata API per ottenere il clientSecret
		fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/create-payment-intent`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ items: [{ id: "xl-tshirt", price: 10 }] }),
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
		<>
			{clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			)}
		</>
	);
};

export default StripeContainer;
