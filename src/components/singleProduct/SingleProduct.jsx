import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const SingleProduct = ({
	product,
	name,
	category,
	description,
	price,
	cover,
}) => {
	const { cartItems, addToCart } = useContext(CartContext);

	return (
		<div class=" border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-50 flex flex-col items-center text-center">
			<Link to="#" className="h-1/2 flex items-center">
				<img class="rounded-t-lg object-cover max-h-full" src={cover} alt="" />
			</Link>
			<div class="h-1/3 pt-5">
				<Link to="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">
						{name}
					</h5>
				</Link>
				<p class="mb-3 font-normal text-green-700 dark:text-gray-400">
					{category}
				</p>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate max-w-xs overflow-hidden">
					{description}
				</p>
				<p class="mb-3 font-bold text-gray-700 dark:text-gray-400">{price}€</p>
				<button
					onClick={() => addToCart(product)}
					className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default SingleProduct;
