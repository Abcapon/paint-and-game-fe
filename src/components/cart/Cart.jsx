import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
	const { state } = useCart();
	const cartItems = state.cart;

	return (
		<div>
			<h2>Carrello</h2>
			<ul>
				{cartItems.map((product, index) => (
					<li key={index}>
						{product.name} - {product.price}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Cart;
