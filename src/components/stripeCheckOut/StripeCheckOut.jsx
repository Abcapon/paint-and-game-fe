import React, { useEffect } from "react";

const StripeCheckout = () => {
	useEffect(() => {
		const loadStripe = async () => {
			const stripe = await import("@stripe/stripe-js");
			const { error } = await stripe.loadStripe(
				process.env.REACT_APP_STRIPE_PUBLIC_KEY
			);

			if (error) {
				console.error("Errore nel caricamento di Stripe:", error);
				return;
			}

			const stripeInstance = await stripe.createStripe(
				process.env.REACT_APP_STRIPE_PUBLIC_KEY
			);

			const handleClick = async () => {
				const { error } = await stripe.redirectToCheckout({
					sessionId: "SESSION_ID",
				});

				if (error) {
					console.error("Errore durante il redirect a Stripe Checkout:", error);
				}
			};

			document
				.getElementById("checkout-button")
				.addEventListener("click", handleClick);
		};

		loadStripe();
	}, []);

	return (
		<div>
			<button id="checkout-button" className="text-white">
				Paga ora
			</button>
			<div id="success-message"></div>
		</div>
	);
};

export default StripeCheckout;
