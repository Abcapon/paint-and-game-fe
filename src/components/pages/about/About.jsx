import React from "react";
import Navbar from "../../navabar/Navbar";
import Footer from "../../footer/Footer";

const About = () => {
	return (
		<>
			<Navbar />
			<div className="text-center min-h-screen pt-10 grid grid-cols-3 bg-orange-400">
				<div class="col-span-1"></div>
				<div class="col-span-1">
					<h1 className="text-3xl">Paint&Game</h1>
					<p className="p-20">
						Si occupa di fornire le statuette da gioco del momento e di rendere
						possibile la massima e perfetta personalizzazione delle stesse
						grazie ad un completo assortimento dei materiali necessari per
						farlo, come pitture, pennelli, aerografi e quant'altro.
						<br /> Oltre a questo mettiamo a disposizione anche uno spazio per
						gli appassionati per condividere tecniche di pittura, stili o
						tattiche di gioco, e perché no, organizzare qualche evento dal vivo
						come partite amichevoli tornei o anche solo per conoscersi.
						<br />
						Ricordiamo che potete trovarci in Via Santa Fortuna 777 (VE) dove
						potrete ammirare tutta la nostra collezione dal vivo.
					</p>
				</div>
				<div class="col-span-1"></div>
			</div>
			<Footer />
		</>
	);
};

export default About;
