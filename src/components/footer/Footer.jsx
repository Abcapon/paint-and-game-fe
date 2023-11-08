import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer class="rounded-lg shadow dark:bg-gray-800 bg-yellow-200">
			<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					<p>© 2023 Paint&Game. All Rights Reserved.</p>
				</span>
				<ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
					<li>
						<Link to="/about" class="mr-4 hover:underline md:mr-6 ">
							About
						</Link>
					</li>
					<li>
						<Link to="/privacy" class="mr-4 hover:underline md:mr-6">
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link to="/contact" class="hover:underline">
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<p class="text-white bg-red-600 p-5">
				Questo sito è stato creato per mero scopo didattico e con nessun fine
				commerciale, le foto degli articoli presenti provengono dai siti:
				"gamesworkshop", "geekdad", "n3rdcore", "atomic mass games", ... il
				video proviene dal canale youtube di "The Army Painter"
			</p>
		</footer>
	);
};

export default Footer;
