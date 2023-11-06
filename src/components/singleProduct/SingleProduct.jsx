import React from "react";

const SingleProduct = ({ name, category, description, price, cover }) => {
	return (
		<div class="bg-yellow-400 border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-50 flex flex-col justify-center items-center text-center">
			<a href="#" className="h-1/2">
				<img class="rounded-t-lg object-cover h-full" src={cover} alt="" />
			</a>
			<div class="h-1/2">
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
				<a
					href="#"
					class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Add Cart
				</a>
			</div>
		</div>
	);
};

export default SingleProduct;
