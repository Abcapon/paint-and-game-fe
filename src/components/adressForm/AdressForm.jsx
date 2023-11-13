import React, { useState, useEffect } from "react";

const AdressForm = ({ onFormCompletion, initialValues }) => {
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
		adress: "",
		provincia: "",
		cap: "",
	});

	const [formErrors, setFormErrors] = useState({});
	const [isFormCompleted, setIsFormCompleted] = useState(false);

	useEffect(() => {
		if (initialValues) {
			setFormData(initialValues);
		}
	}, [initialValues]);

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const validateCap = () => {
		const capRegex = /^\d{5}$/; // Espressione regolare per 5 cifre
		if (!capRegex.test(formData.cap)) {
			setFormErrors((prevErrors) => ({
				...prevErrors,
				cap: "Il CAP deve essere composto da 5 cifre.",
			}));
			return false;
		}
		setFormErrors((prevErrors) => ({ ...prevErrors, cap: "" }));
		return true;
	};

	const handleUpload = (e) => {
		e.preventDefault();

		const errors = {};

		const isCapValid = validateCap();

		if (!formData.name) {
			errors.name = "Il campo Nome è obbligatorio.";
		}

		if (!formData.surname) {
			errors.surname = "Il campo Cognome è obbligatorio.";
		}

		if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
			errors.email = "Inserisci un indirizzo email valido.";
		}

		if (!formData.adress) {
			errors.adress = "Il campo Indirizzo è obbligatorio.";
		}

		if (!formData.provincia) {
			errors.provincia = "Il campo Provincia è obbligatorio.";
		}

		if (!formData.cap || !/^\d{5}$/.test(formData.cap)) {
			errors.cap = "Il CAP deve essere composto da 5 cifre.";
		}

		setFormErrors(errors);

		// Verifica se ci sono errori
		if (Object.keys(errors).length === 0) {
			console.log("Dati validi. Esegui l'upload.");
			onFormCompletion(true, formData);
			setIsFormCompleted(true);
		} else {
			console.log("Dati non validi. Mostra un messaggio all'utente.");
			onFormCompletion(false, null);
			setIsFormCompleted(false);
		}
	};

	return (
		<div className=" flex items-center justify-center">
			<form
				onSubmit={handleUpload}
				className="my-3 p-4 bg-white rounded-lg w-1/3"
				encType="multipart/form-data"
			>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Nome*
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Nome"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Cognome*
					</label>
					<input
						type="text"
						name="surname"
						value={formData.surname}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Cognome"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Email*
					</label>
					<input
						type="text"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Email"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Indirizzo*
					</label>
					<input
						type="text"
						name="adress"
						value={formData.adress}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Indirizzo"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Provincia*
					</label>
					<input
						type="text"
						name="provincia"
						value={formData.provincia}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Provincia"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Cap*
					</label>
					<input
						type="text"
						name="cap"
						value={formData.cap}
						onChange={handleInputChange}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="CAP"
						required
					/>
				</div>

				<div className="flex justify-end gap-3">
					<button
						type="submit"
						className="px-4 py-2 rounded-lg border border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
					>
						Prosegui
					</button>
				</div>
			</form>
		</div>
	);
};

export default AdressForm;
