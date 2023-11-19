import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useSession } from "../hooks/useSession";
import axios from "axios";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const SingleProduct = ({
	id,
	product,
	name,
	category,
	description,
	price,
	cover,
	isInPromo,
}) => {
	const { addToCart } = useContext(CartContext);
	const [isAdmin, setIsAdmin] = useState(false);
	const session = useSession();

	const [showAlert, setShowAlert] = useState(false);

	const handleAddToCart = (product) => {
		addToCart(product);
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 1500);
	};

	const navigate = useNavigate();

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

		navigate(`/`);
	};

	return (
		<motion.div
			whileHover={{ scale: [null, 1.05, 1.02] }}
			transition={{ duration: 0.3 }}
			className="box flex-1 p-4 border bg-white border-gray-800 rounded-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 min-w-[350px] flex flex-col items-center text-center"
		>
			<Link to={`/description/${id}`} className="h-1/2 flex items-center">
				<img
					className="rounded-t-lg object-cover w-[150px]"
					src={cover}
					alt=""
				/>
			</Link>
			<div className=" pt-5">
				<Link to={`/description/${id}`}>
					<h5 className="text-2xl font-bold tracking-tight text-red-900 dark:text-white min-h-[70px]">
						{name}
					</h5>
				</Link>
				<p className="mb-4 font-normal text-green-700 dark:text-gray-400">
					{category}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate max-w-xs overflow-hidden">
					{description}
				</p>
				<div className="mb-3 font-bold text-gray-700 dark:text-gray-400">
					{isInPromo && (
						<p className="text-red-500">Offerta speciale {price}€</p>
					)}
					{!isInPromo && <p>{price}€</p>}
				</div>
				<div className="mb-4">
					<button
						onClick={() => handleAddToCart(product)}
						className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
					>
						Aggiungi al carrello
					</button>
					{showAlert && (
						<div
							className="p-2 mb-4 text-sm text-green-600 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
							role="alert"
						>
							<p>Prodotto aggiunto al carrello</p>
						</div>
					)}
					{isAdmin && (
						<div className="flex flex-col pt-2">
							<button
								className="px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase rounded hover:bg-red-800 focus:outline-none focus:bg-gray-700 my-1"
								onClick={() => handleDelete(id)}
							>
								Elimina prodotto
							</button>

							<button
								onClick={() =>
									product && id && navigate(`/products/patch/${id}`)
								}
								className="px-4 py-2 bg-yellow-400 text-white text-xs font-bold uppercase rounded hover:bg-yellow-600 focus:outline-none focus:bg-gray-700 my-1"
							>
								Modifica prodotto
							</button>
						</div>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default SingleProduct;
