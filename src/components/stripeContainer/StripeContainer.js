import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../context/CartContext";
import Cart from "../cart/Cart";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

const StripeContainer = () => {
	const [clientSecret, setClientSecret] = useState("");
	const { cartItems } = useContext(CartContext);

	const [isPaymentFormOpen, setPaymentFormOpen] = useState(false);

	const handlePaymentButtonClick = () => {
		setPaymentFormOpen(!isPaymentFormOpen);
	};

	useEffect(() => {
		// Chiamata API per ottenere il clientSecret
		if (cartItems.length > 0) {
			fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/create-payment-intent`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					items: cartItems.map((item) => ({
						id: item._id,
						price: item.price,
						quantity: item.quantity,
					})),
				}),
			})
				.then((res) => res.json())
				.then((data) => setClientSecret(data.clientSecret));
		}
	}, [cartItems.length]);

	const appearance = {
		theme: "stripe",
	};
	const options = {
		clientSecret,
		appearance,
	};

	return (
		<div className="min-h-screen">
			<Cart />
			{cartItems.length > 0 && (
				<button
					type="button"
					className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-2"
					id="payment-menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					onClick={handlePaymentButtonClick}
				>
					Modalità di pagamento
					<svg
						className="-mr-1 h-5 w-5 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			)}

			{isPaymentFormOpen && clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			)}
		</div>
	);
};

export default StripeContainer;
