import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Cart = () => {
	const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
		useContext(CartContext);

	const { isAuthenticated } = useAuth();

	return (
		<section className="md:mt-10">
			<div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
				{cartItems?.length === 0 && (
					<h2 className="text-lg font-bold text-center pt-10">
						Il tuo carrello è vuoto
					</h2>
				)}
				{cartItems?.length > 0 && (
					<h2 className="text-2xl font-bold">Carrello</h2>
				)}
				<div className="flex flex-col gap-4">
					{cartItems.map((item) => (
						<div
							className="flex flex-wrap justify-between items-center"
							key={item._id}
						>
							<div className="flex gap-4">
								<img
									src={item.cover}
									alt={item.title}
									className="rounded-md w-32"
								/>
								<div className="flex flex-col">
									<h2 className="text-lg">{item.name}</h2>
									<p className="font-bold text-xl">{item.price}€</p>
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
				{cartItems.length > 0 && (
					<div className="flex flex-col justify-between items-center">
						<h2 className="text-lg font-bold">Totale: €{getCartTotal()}</h2>
						<button
							className="mt-5 px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
							onClick={() => {
								clearCart();
							}}
						>
							Svuota carrello
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Cart;
