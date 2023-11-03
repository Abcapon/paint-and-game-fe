import React from "react";
import Navbar from "../../navabar/Navbar";
import Footer from "../../footer/Footer";

const Contact = () => {
	return (
		<>
			<Navbar />
			<div className="min-h-screen text-center pt-10">
				<h1 className="text-3xl ">I nostri contatti</h1>
				<p>Facebook: ...</p>
				<p>Instagram: ...</p>
				<p>Email: ...</p>
				<p>Indirizzo: ...</p>
			</div>

			<Footer />
		</>
	);
};

export default Contact;
