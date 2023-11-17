import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSession } from "../../hooks/useSession";
import { CartContext } from "../../context/CartContext";

const ProductDescription = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const session = useSession();
	const [isAdmin, setIsAdmin] = useState(false);
	const navigate = useNavigate();
	const { addToCart } = useContext(CartContext);

	const [showAlert, setShowAlert] = useState(false);

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

	const handleAddToCart = (product) => {
		addToCart(product);
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 1500);
	};

	useEffect(() => {
		const getProduct = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_SERVER_BASE_URL}/products/${id}`
				);
				setProduct(response.data);
			} catch (e) {
				console.log(e);
			}
		};

		getProduct();

		if (session?.role === "admin") {
			setIsAdmin(true);
		}
	}, [id]);

	return (
		<section class="text-gray-700 body-font overflow-hidden bg-white pt-10">
			<div class="container px-5 py-24 mx-auto">
				<div class="lg:w-4/5 mx-auto flex flex-wrap">
					<img
						alt="ecommerce"
						class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
						src={product.product?.cover}
					/>
					<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
							{product.product?.name}
						</h1>
						<p class="leading-relaxed">{product.product?.description}</p>
						{product.product?.isInPromo && (
							<p className="pr-2 text-red-">Offerta speciale </p>
						)}
						<div class="flex">
							<p class="title-font font-medium text-2xl text-gray-900">
								{product.product?.price} €
							</p>
						</div>

						<div className="flex">
							<button
								onClick={() => handleAddToCart(product)}
								class=" text-white bg-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded my-2 mr-2"
							>
								Aggiungi al carrello
							</button>

							{isAdmin && (
								<div>
									<button
										onClick={() =>
											product && id && navigate(`/products/patch/${id}`)
										}
										className="ml-auto text-white bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-600 rounded m-2"
									>
										Modifica prodotto
									</button>
									<button
										className="ml-auto text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded my-2"
										onClick={() => handleDelete(id)}
									>
										Elimina prodotto
									</button>
								</div>
							)}
						</div>
						{showAlert && (
							<div
								className="p-2 mb-4 text-sm text-green-600 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
								role="alert"
							>
								<p>Prodotto aggiunto al carrello</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDescription;
