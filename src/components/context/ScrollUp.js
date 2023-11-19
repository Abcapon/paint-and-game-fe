import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollUp = () => {
	const location = useLocation();

	useEffect(() => {
		// Quando la posizione (URL) cambia, esegui lo scroll verso l'alto
		window.scrollTo(0, 0);
	}, [location.pathname]); // Assicurati di fare lo scroll solo quando la pathname cambia

	return null; // Questo componente non ha un rendering effettivo
};

export default ScrollUp;
