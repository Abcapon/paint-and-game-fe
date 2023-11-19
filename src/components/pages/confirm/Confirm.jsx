import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Confirm = () => {
	const { token } = useParams();
	const [confirmationMessage, setConfirmationMessage] = useState(null);
	const navigate = useNavigate();

	const location = useLocation();

	const navigateToLogin = () => {
		localStorage.setItem(`redirectPath`, location.pathname);
		navigate("/login");
	};

	const confirmAccount = async () => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER_BASE_URL}/confirm/${token}`
			);
			alert(
				"Registrazione effettuata con successo, ora puoi effettuare il login"
			);
			navigateToLogin();
		} catch (error) {
			setConfirmationMessage("Errore durante la conferma dell'account");
			console.error("Errore durante la conferma dell'account:", error);
		}
	};

	useEffect(() => {
		if (token) {
			confirmAccount();
		}
	}, [token]);

	return (
		<div className="min-h-screen text-center mt-20">
			{confirmationMessage !== null ? (
				<p className="bg-red-400 font-bold">{confirmationMessage}</p>
			) : (
				<p>Conferma dell'account in corso...</p>
			)}
		</div>
	);
};

export default Confirm;
