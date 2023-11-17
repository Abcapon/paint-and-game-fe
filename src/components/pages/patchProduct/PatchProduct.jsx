import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PatchProduct = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const [product, setProduct] = useState({});
	const [cover, setCover] = useState(null);

	const [formData, setFormData] = useState({
		name: "",
		category: "",
		description: "",
		price: "",
		promo: false,
		cover: null,
	});

	const handleFileChange = (e) => {
		setCover(e.target.files[0]);
		setFormData({ ...formData, cover: e.target.files[0] });
	};

	useEffect(() => {
		const getProduct = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_SERVER_BASE_URL}/products/${id}`
				);
				setProduct(response.data);

				// Inizializza formData con i dati del prodotto
				const { name, category, description, price, promo, cover } =
					response.data.product;
				setFormData({
					name: name || "",
					category: category || "",
					description: description || "",
					price: price || "",
					promo: promo || false,
					cover: cover || null, // Aggiunto il campo cover con valore iniziale null se non presente nei dati del prodotto
				});
				setCover(cover);
			} catch (e) {
				console.log(e);
			}
		};

		getProduct();
	}, [id]);

	const handleUpload = async (e) => {
		e.preventDefault();

		const fileData = new FormData();

		if (cover) {
			fileData.append("cover", cover);
		}

		fileData.append("name", formData.name);
		fileData.append("category", formData.category);
		fileData.append("description", formData.description);
		fileData.append("price", formData.price);
		fileData.append("promo", formData.promo);

		try {
			const response = await axios.patch(
				`${process.env.REACT_APP_SERVER_BASE_URL}/products/${id}`,
				fileData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.status === 200) {
				const updatedProduct = response.data.updatedProduct;
				console.log("Product successfully updated:", updatedProduct);
				navigate(`/`);
			} else {
				console.error("Error during product update");
			}
		} catch (error) {
			console.log("Error during file saving:", error);
		}
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="bg-gray-200 p-4">
			<form
				onSubmit={handleUpload}
				className="mt-5 p-4 bg-white rounded-lg"
				encType="multipart/form-data"
			>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Name
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Name"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Categoria
					</label>
					<select
						name="category"
						value={formData.category}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
					>
						<option value="Pittura">Pittura</option>
						<option value="Warhammer40k">Warhammer 40k</option>
						<option value="WarhammerAOS">Warhammer AOS</option>
						<option value="StarwarsLegion">Starwars Legion</option>
						<option value="StarwarsShatterpoint">Starwars Shatterpoint</option>
					</select>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						description
					</label>
					<input
						type="text"
						name="description"
						value={formData.description}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="description"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						price
					</label>
					<input
						type="text"
						name="price"
						value={formData.price}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="price"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						File
					</label>
					<input
						type="file"
						name="file"
						onChange={handleFileChange}
						className="w-full"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Is in promo?
					</label>
					<select
						name="promo"
						value={formData.promo}
						onChange={(e) => {
							const isPromo = e.target.value === "true";
							setFormData({ ...formData, promo: isPromo });
						}}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
					>
						<option value="true">Vero</option>
						<option value="false">Falso</option>
					</select>
				</div>
				<div className="flex justify-end gap-3">
					<button
						type="submit"
						className="px-4 py-2 rounded-lg border border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
					>
						Invia
					</button>
					<Link to="/">
						<button className="px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
							Chiudi
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default PatchProduct;
