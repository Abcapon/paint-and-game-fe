import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import StripeCheckout from "../stripeCheckOut/StripeCheckOut";
import Cart from "../cart/Cart";

const Navbar = () => {
	const { isAuthenticated, setIsAuthenticated } = useAuth();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const logout = async () => {
		localStorage.clear();
		setIsAuthenticated(false);
	};

	return (
		<nav className="bg-black border-gray-200 dark:bg-gray-900 text-white">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/" className="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8 mr-3"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Paint & Game
					</span>
				</a>
				{isAuthenticated && (
					<div className="font-medium  flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 dark-bg-gray-800 md-dark-bg-gray-900 dark-border-gray-700">
						<button
							onClick={logout}
							className="block pb-3 md:pb0 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
						>
							Logout
						</button>
						<StripeCheckout />
					</div>
				)}
				{!isAuthenticated && (
					<a
						href="/login"
						className="block  pl-3 pr-4 text-white rounded  md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
					>
						Login
					</a>
				)}
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded={mobileMenuOpen}
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
			</div>
			<div
				className={`${
					mobileMenuOpen ? "block" : "hidden"
				} md:block md:w-auto text-center`}
				id="navbar-default right-0"
			>
				<ul className="font-medium flex flex-col justify-center p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<a
							href="/products/Pittura"
							className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover:bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
						>
							Pittura
						</a>
					</li>
					<li>
						<a
							href="/products/Warhammer40k"
							className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover:bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
						>
							Warhammer 40k
						</a>
					</li>
					<li>
						<a
							href="/products/WarhammerAOS"
							className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover:bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
						>
							Warhammer AOS
						</a>
					</li>
					<li>
						<a
							href="/products/StarwarsLegion"
							className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover:bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
						>
							Starwars Legion
						</a>
					</li>
					<li>
						<a
							href="/products/StarwarsShatterpoint"
							className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover:bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
						>
							Starwars Shatterpoint
						</a>
					</li>

					{isAuthenticated && (
						<div className="font-medium flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark-bg-gray-800 md-dark-bg-gray-900 dark-border-gray-700">
							<a
								href="/product"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover:bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
							>
								New product
							</a>
						</div>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
