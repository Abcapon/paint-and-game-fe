import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NewUser = () => {
	const [formData, setFormData] = useState({
		nome: "",
		cognome: "",
		email: "",
		password: "",
	});
	console.log("FormData:", formData);

	const [avatar, setAvatar] = useState(null);
	console.log("Avatar:", avatar);

	const handleFileChange = (e) => {
		setAvatar(e.target.files[0]);
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		const fileData = new FormData();
		fileData.append("avatar", avatar);
		fileData.append("nome", formData.nome);
		fileData.append("cognome", formData.cognome);
		fileData.append("email", formData.email);
		fileData.append("password", formData.password);

		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_BASE_URL}/users/create`,
				fileData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.status === 201) {
				const newUser = response.data;
				console.log("User created successfully:", newUser);
			} else {
				console.error("Error during user saving");
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
						Nome
					</label>
					<input
						type="text"
						name="nome"
						value={formData.nome}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Nome"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Cognome
					</label>
					<input
						type="text"
						name="cognome"
						value={formData.cognome}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Cognome"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						type="text"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Email"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Password
					</label>
					<input
						type="text"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Password"
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

export default NewUser;
