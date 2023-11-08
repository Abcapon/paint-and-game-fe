import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_123");

function StripeCheckout() {
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		// Esegui la richiesta al server Stripe o a un'altra fonte affidabile
		fetch("/get-client-secret", {
			method: "POST",
			// Altre opzioni della richiesta, come il corpo della richiesta, se necessario
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, []);

	const options = { clientSecret };

	return (
		<div id="checkout">
			{clientSecret && (
				<EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
					<EmbeddedCheckout />
				</EmbeddedCheckoutProvider>
			)}
		</div>
	);
}

export default StripeCheckout;
