import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
	const { token } = useParams();
	const [confirmationMessage, setConfirmationMessage] = useState(null);
	const navigate = useNavigate();

	const confirmAccount = async () => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER_BASE_URL}/confirm/${token}`
			);
			alert(
				"Registrazione effettuata con successo, ora puoi effettuare il login"
			);
			navigate(`/login`);
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
		<div className="min-h-screen text-center m-10">
			{confirmationMessage !== null ? (
				<p className="bg-red-400 font-bold">{confirmationMessage}</p>
			) : (
				<p>Conferma dell'account in corso...</p>
			)}
		</div>
	);
};

export default Confirm;
