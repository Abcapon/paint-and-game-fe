import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../hooks/useSession";

const Footer = () => {
	const [isAdmin, setIsAdmin] = useState(false);

	const session = useSession();

	useEffect(() => {
		if (session && session.role === "admin") {
			setIsAdmin(true);
		} else {
			setIsAdmin(false);
		}
	}, [session]);

	return (
		<footer className="rounded-lg shadow dark:bg-gray-800 bg-yellow-300 mt-10">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<p className="text-sm text-black-500 sm:text-center dark:text-gray-400">
					© 2023 Paint&Game. All Rights Reserved.
				</p>

				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black-500 dark:text-gray-400 sm:mt-0">
					<li>
						<Link to="/about" className="mr-4 hover:underline md:mr-6 ">
							Chi siamo
						</Link>
					</li>
					<li>
						<Link to="/contact" className="hover:underline md:mr-6">
							Contattaci
						</Link>
					</li>
					{isAdmin && (
						<li>
							<Link
								to="/promote/admin"
								className="hover:underline pl-3 md:pl-auto"
							>
								Aggiungi admin
							</Link>
						</li>
					)}
				</ul>
			</div>
			<p className="text-white text-center bg-red-600 p-5">
				Questo sito è stato creato per puro scopo didattico e con nessun fine
				commerciale, le foto degli articoli presenti provengono dai siti:
				"Gamesworkshop", "Geekdad", "N3rdcore", "Atomic Mass Games" e "Amazon"
				il video proviene dal canale youtube di "The Army Painter"
			</p>
		</footer>
	);
};

export default Footer;
