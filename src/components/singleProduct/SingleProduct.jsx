import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useSession } from "../hooks/useSession";
import axios from "axios";

/*
import { useNavigate } from "react-router-dom";
*/

const SingleProduct = ({
	id,
	product,
	name,
	category,
	description,
	price,
	cover,
}) => {
	const { cartItems, addToCart } = useContext(CartContext);
	const [isAdmin, setIsAdmin] = useState(false);
	const session = useSession();
	/*
	const navigate = useNavigate();
	*/
	useEffect(() => {
		if (session && session.role === "admin") {
			setIsAdmin(true);
		} else {
			setIsAdmin(false);
		}
	}, [session]);

	const handleDelete = async (id) => {
		try {
			const response = await axios.delete(
				`${process.env.REACT_APP_SERVER_BASE_URL}/products/delete/${id}`,
				{
					headers: {
						"content-type": "application/json",
					},
				}
			);

			if (response.status !== 200) {
				throw new Error(
					`Errore durante l'eliminazione del prodotto: ${response.statusText}`
				);
			}

			console.log("Prodotto eliminato con successo:", response.data);
		} catch (error) {
			console.error("Errore durante l'eliminazione del prodotto:", error);
		}
		/*
		navigate(`/`);
		*/
	};

	return (
		<div class="flex-1 p-4 border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[350px] flex flex-col items-center text-center">
			<Link to="#" className="h-1/2 flex items-center">
				<img
					class="rounded-t-lg object-cover max-h-[300px]"
					src={cover}
					alt=""
				/>
			</Link>
			<div class="h-1/3 pt-5">
				<Link to="#">
					<h5 class="text-2xl font-bold tracking-tight text-red-900 dark:text-white min-h-[70px]">
						{name}
					</h5>
				</Link>
				<p class="mb-4 font-normal text-green-700 dark:text-gray-400">
					{category}
				</p>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate max-w-xs overflow-hidden">
					{description}
				</p>
				<p class="mb-3 font-bold text-gray-700 dark:text-gray-400">{price}€</p>
				<div className="mb-4">
					<button
						onClick={() => addToCart(product)}
						className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
					>
						Add to cart
					</button>
					{isAdmin && (
						<div className="flex pt-2">
							<button
								className="px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase rounded hover:bg-red-800 focus:outline-none focus:bg-gray-700 mx-1"
								onClick={() => handleDelete(id)}
							>
								Elimina prodotto
							</button>
							<button className="px-4 py-2 bg-yellow-400 text-white text-xs font-bold uppercase rounded hover:bg-yellow-600 focus:outline-none focus:bg-gray-700 mx-1">
								Modifica prodotto
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
