import React, { useEffect, useState, useContext } from "react";
import {
	PaymentElement,
	useStripe,
	useElements,
	LinkAuthenticationElement,
	AddressElement,
} from "@stripe/react-stripe-js";
import { CartContext } from "../context/CartContext";

export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();
	const { cartItems } = useContext(CartContext);

	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret"
		);

		if (!clientSecret) {
			return;
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case "succeeded":
					setMessage("Payment succeeded!");
					break;
				case "processing":
					setMessage("Your payment is processing.");
					break;
				case "requires_payment_method":
					setMessage("Your payment was not successful, please try again.");
					break;
				default:
					setMessage("Something went wrong.");
					break;
			}
		});
	}, [stripe]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url:
					"https://hilarious-duckanoo-65dd6e.netlify.app/paymentcomplete",
			},
		});

		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.
		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message);
		} else {
			setMessage("An unexpected error occurred.");
		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: "tabs",
	};

	return (
		<div className=" flex items-center justify-center">
			{cartItems.length > 0 && (
				<form
					id="payment-form"
					className="my-3 p-4 bg-white rounded-lg text-end"
					onSubmit={handleSubmit}
				>
					<h3>Dati di spedizione</h3>
					<LinkAuthenticationElement />
					<AddressElement
						options={{ mode: "billing", allowedCountries: ["IT"] }}
					/>
					<h3 className="mt-5">Pagamento</h3>
					<PaymentElement
						id="payment-element"
						options={paymentElementOptions}
					/>
					<button
						className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
						disabled={isLoading || !stripe || !elements}
						id="submit"
					>
						<span id="button-text">
							{isLoading ? (
								<div className="spinner" id="spinner"></div>
							) : (
								"Paga ora"
							)}
						</span>
					</button>
					{/* Show any error or success messages */}
					{message && <div id="payment-message">{message}</div>}
				</form>
			)}
		</div>
	);
}
