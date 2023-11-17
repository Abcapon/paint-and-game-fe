import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => {
	return (
		<section class="bg-center bg-no-repeat bg-[url('https://149455152.v2.pressablecdn.com/wp-content/uploads/2018/02/Miniatures.png')] bg-gray-500 bg-blend-multiply">
			<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
				<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
					Tutto ciò che ti serve per un'esperienza di pittura fantastica.
				</h1>
				<p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
					Rendi EPICHE le tue campagne di Wargames!
				</p>

				<Link
					to="/about"
					class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg border border-black bg-yellow-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
				>
					Chi siamo
				</Link>
			</div>
		</section>
	);
};

export default Jumbotron;
