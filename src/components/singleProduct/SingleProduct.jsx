import React from "react";
import { useCart } from "../context/CartContext";

const SingleProduct = ({
	product,
	name,
	category,
	description,
	price,
	cover,
}) => {
	const { dispatch } = useCart();
	const handleAddToCart = () => {
		dispatch({ type: "ADD_TO_CART", product });
	};
	return (
		<div class=" border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-50 flex flex-col items-center text-center">
			<a href="#" className="h-1/2 flex items-center">
				<img class="rounded-t-lg object-cover max-h-full" src={cover} alt="" />
			</a>
			<div class="h-1/3 pt-5">
				<a href="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">
						{name}
					</h5>
				</a>
				<p class="mb-3 font-normal text-green-700 dark:text-gray-400">
					{category}
				</p>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate max-w-xs overflow-hidden">
					{description}
				</p>
				<p class="mb-3 font-bold text-gray-700 dark:text-gray-400">{price}€</p>
				<button onClick={handleAddToCart}>Add to Cart</button>
			</div>
		</div>
	);
};

export default SingleProduct;
