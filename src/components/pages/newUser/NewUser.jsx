import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		nome: "",
		cognome: "",
		email: "",
		password: "",
	});

	const [passwordVerifica, setPasswordVerifica] = useState("");

	const [showPassword, setShowPassword] = useState(false);

	const handleUpload = async (e) => {
		e.preventDefault();

		// Controlla che la password e la sua verifica siano uguali
		if (formData.password !== passwordVerifica) {
			alert("La password e la verifica password non corrispondono.");
			return;
		}

		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_BASE_URL}/users/create`,
				formData
			);

			if (response.status === 201) {
				const newUser = response.data;
				console.log("User created successfully:", newUser);
				alert("richiesta inviata con successo, attesa di conferma email");
				navigate("/login");
			} else {
				console.error("Error during user saving");
			}
		} catch (error) {
			console.log("Error during file saving:", error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		if (name === "password") {
			setFormData({ ...formData, [name]: value });
		} else if (name === "passwordVerifica") {
			setPasswordVerifica(value);
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	return (
		<div className="bg-gray-200 p-4">
			<form onSubmit={handleUpload} className="mt-5 p-4 bg-white rounded-lg">
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
				<div className="mb-4 relative">
					<label className="block text-sm font-medium text-gray-700">
						Password
					</label>
					<input
						type={showPassword ? "text" : "password"}
						name="password"
						value={formData.password}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Password"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute inset-y-0 top-4 right-0 px-3 py-2"
					>
						{showPassword ? "👁️" : "👁️‍🗨️"}
					</button>
				</div>
				<div className="mb-4 relative">
					<label className="block text-sm font-medium text-gray-700">
						Verifica Password
					</label>
					<input
						type={showPassword ? "text" : "password"}
						name="passwordVerifica"
						value={passwordVerifica}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Verifica Password"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute inset-y-0 top-4 right-0 px-3 py-2"
					>
						{showPassword ? "👁️" : "👁️‍🗨️"}
					</button>
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
