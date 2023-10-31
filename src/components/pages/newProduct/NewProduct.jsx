import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NewProduct = () => {
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		description: "",
		price: "",
	});

	const [cover, setCover] = useState(null);

	const handleFileChange = (e) => {
		setCover(e.target.files[0]);
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		const fileData = new FormData();
		fileData.append("cover", cover);
		fileData.append("name", formData.name);
		fileData.append("category", formData.category);
		fileData.append("description", formData.description);
		fileData.append("price", formData.price);

		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_BASE_URL}/products/create`,
				fileData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.status === 201) {
				const newProduct = response.data;
			} else {
				console.error("Error during product saving");
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
						category
					</label>
					<input
						type="text"
						name="category"
						value={formData.category}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="category"
					/>
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
						required
						name="file"
						onChange={handleFileChange}
						className="w-full"
					/>
				</div>
				<div className="flex justify-end gap-3">
					<button
						type="submit"
						className="px-4 py-2 rounded-lg border border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
					>
						Invia
					</button>
					<Link to="/home">
						<button className="px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
							Chiudi
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default NewProduct;
