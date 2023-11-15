import React, { useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const PaymentComplete = () => {
	const { cartItems, clearCart } = useContext(CartContext);

	useEffect(() => {
		clearCart();
	}, [cartItems]);

	return <div>PaymentComplete</div>;
};

export default PaymentComplete;
