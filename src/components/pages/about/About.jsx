import React from "react";

const About = () => {
	return (
		<section class="flex items-center xl:h-screen font-poppins dark:bg-gray-800 ">
			<div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
				<div class="flex flex-wrap ">
					<div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
						<div class="relative lg:max-w-md">
							<img
								src="About.jpeg"
								alt="aboutimage"
								class="relative z-10 object-cover w-full rounded h-96"
							/>
							<div class="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
								<p class="text-lg font-semibold md:w-72">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										class="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
										viewBox="0 0 16 16"
									>
										<path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
									</svg>{" "}
									Nati per far nascere pittori!
								</p>
							</div>
						</div>
					</div>
					<div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
						<div class="pl-4 mb-6 border-l-4 border-blue-500 ">
							<span class="text-sm text-gray-600 uppercase dark:text-gray-400">
								Chi Siamo
							</span>
							<h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
								Paint & Game
							</h1>
						</div>
						<p class="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
							La nostra mission è quella di fornire le migliori statuette da
							gioco e tutti gli strumenti per poterle personalizzzare a tuo
							piacimento. <br />
							Vieni a trovarci in Via Santa Fortuna 777 (VE). <br /> Ti
							aspettiamo!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

/*

<div className="text-center min-h-screen pt-10 grid grid-cols-3 bg-orange-400">
			<div class="col-span-1"></div>
			<div class="col-span-1">
				<h1 className="text-3xl">Paint&Game</h1>
				<p className="p-20">
					Si occupa di fornire le statuette da gioco del momento e di rendere
					possibile la massima e perfetta personalizzazione delle stesse grazie
					ad un completo assortimento dei materiali necessari per farlo, come
					pitture, pennelli, aerografi e quant'altro.
					<br /> Oltre a questo mettiamo a disposizione anche uno spazio per gli
					appassionati per condividere tecniche di pittura, stili o tattiche di
					gioco, e perché no, organizzare qualche evento dal vivo come partite
					amichevoli tornei o anche solo per conoscersi.
					<br />
					Ricordiamo che potete trovarci in Via Santa Fortuna 777 (VE) dove
					potrete ammirare tutta la nostra collezione dal vivo.
				</p>
			</div>
			<div class="col-span-1"></div>
		</div>

*/
