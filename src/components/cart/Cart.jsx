import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
	const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
		useContext(CartContext);
	console.log(cartItems);

	return (
		<div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm min-h-screen">
			<h1 className="text-2xl font-bold">Carrello</h1>
			<div className="flex flex-col gap-4">
				{cartItems.map((item) => (
					<div className="flex justify-between items-center" key={item._id}>
						<div className="flex gap-4">
							<img
								src={item.cover}
								alt={item.title}
								className="rounded-md h-24"
							/>
							<div className="flex flex-col">
								<h1 className="text-lg font-bold">{item.name}</h1>
								<p className="text-gray-600">{item.price}</p>
							</div>
						</div>
						<div className="flex gap-4 items-center p-5">
							<button
								className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
								onClick={() => {
									removeFromCart(item);
								}}
							>
								-
							</button>
							<p>{item.quantity}</p>
							<button
								className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
								onClick={() => {
									addToCart(item);
								}}
							>
								+
							</button>
						</div>
					</div>
				))}
			</div>
			{cartItems.length > 0 ? (
				<div className="flex flex-col justify-between items-center">
					<h1 className="text-lg font-bold">Total: €{getCartTotal()}</h1>
					<button
						className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
						onClick={() => {
							clearCart();
						}}
					>
						Svuota carrello
					</button>
				</div>
			) : (
				<h1 className="text-lg font-bold">Il tuo carrello è vuoto</h1>
			)}
		</div>
	);
};

export default Cart;
