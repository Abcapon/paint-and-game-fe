import React, { useState, useContext, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { useAuth } from "../context/AuthContext";
import { useSession } from "../hooks/useSession";
import { useCategory } from "../context/CategoryContext";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
	const { isAuthenticated, setIsAuthenticated } = useAuth();
	const { cartItems } = useContext(CartContext);
	const { currentCategory } = useCategory();
	const location = useLocation();

	const [category, setCategory] = useState(null);

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const navigate = useNavigate();

	const session = useSession();

	useEffect(() => {
		if (session && session.role === "admin") {
			setIsAdmin(true);
		} else {
			setIsAdmin(false);
		}
	}, [session]);

	useEffect(() => {
		setCategory(currentCategory);
	}, [currentCategory]);

	const logout = async () => {
		localStorage.clear();
		setIsAuthenticated(false);
		window.location.reload();
	};

	const handleCart = () => {
		if (!isAuthenticated) {
			alert("Per accedere al carrello devi effettuare il login");
			navigate(`/login`);
		} else {
			navigate(`/checkout`);
		}
	};
	const handleCategoryClick = () => {
		// Chiudi il menu mobile quando viene cliccata una categoria
		setMobileMenuOpen(false);
	};

	return (
		<nav className="bg-black border-gray-200 dark:bg-gray-900 text-white sticky top-0 z-50 h-32">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
				<Link to="/">
					<img src="/logo2.png" className="h-16 mt-2" alt="Paint&Game Logo" />
				</Link>

				{/*inizio bottoni sm*/}
				{isAuthenticated && (
					<button
						onClick={logout}
						className="md:hidden absolute right-24 top-10 block pb-3 md:pb0 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
					>
						Logout
					</button>
				)}
				{!isAuthenticated && (
					<Link
						to="/login"
						className="md:hidden absolute right-24 top-10 block pl-3 pr-4 text-white rounded md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
					>
						Login
					</Link>
				)}
				<button
					onClick={handleCart}
					className="md:hidden absolute right-12 bottom-12 font-medium p-4 flex md:p-0 md:mt-0 dark-bg-gray-800 md-dark-bg-gray-900 dark-border-gray-700 items-center justify-center"
				>
					<IoCartOutline className="icon text-yellow-300 text-2xl" />
					<p className="ml-1">{cartItems.length}</p>
				</button>

				{/*fine bottoni sm*/}

				{/*inizio bottoni lg*/}

				<div className="hidden font-medium md:flex flex-col justify-center items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 dark-bg-gray-800 md-dark-bg-gray-900 dark-border-gray-700">
					{isAuthenticated && (
						<button
							onClick={logout}
							className="block pb-3 md:pb0 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
						>
							Logout
						</button>
					)}
					{!isAuthenticated && (
						<Link
							to="/login"
							className="block pl-3 pr-4 text-white rounded md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
						>
							Login
						</Link>
					)}
					<button
						onClick={handleCart}
						className="font-medium p-4 flex md:p-0 md:mt-0 dark-bg-gray-800 md-dark-bg-gray-900 dark-border-gray-700 items-center justify-center"
					>
						<IoCartOutline className="icon text-yellow-300 text-2xl" />
						<p className="ml-1">{cartItems.length}</p>
					</button>
				</div>
				{/*fine bottoni lg*/}

				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 absolute right-2"
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
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
			</div>

			<div
				className={`${
					mobileMenuOpen ? "block" : "hidden"
				} md:block md:w-auto text-center bg-yellow-300 md:py-3`}
				id="navbar-default"
			>
				<ul className="font-medium flex flex-col justify-center p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
					<li>
						<Link
							to="/products/Pittura"
							className={`text-2xl text-black block py-2 pl-3 pr-4 rounded ${
								category &&
								currentCategory === "Pittura" &&
								location.pathname.startsWith("/products/")
									? "bg-black text-yellow-300"
									: "hover:bg-gray-100 md:hover:bg-black md:hover:bg-transparent md:hover:text-yellow-300"
							}`}
							onClick={handleCategoryClick}
						>
							Pittura
						</Link>
					</li>
					<li>
						<Link
							to="/products/Warhammer40k"
							className={`text-2xl text-black block py-2 pl-3 pr-4 rounded ${
								category === "Warhammer40k" &&
								location.pathname.startsWith("/products/")
									? "bg-black text-yellow-300"
									: "hover:bg-gray-100 md:hover:bg-black md:hover:bg-transparent md:hover:text-yellow-300"
							}`}
							onClick={handleCategoryClick}
						>
							Warhammer 40k
						</Link>
					</li>
					<li>
						<Link
							to="/products/WarhammerAOS"
							className={`text-2xl text-black block py-2 pl-3 pr-4 rounded ${
								category === "WarhammerAOS" &&
								location.pathname.startsWith("/products/")
									? "bg-black text-yellow-300"
									: "hover:bg-gray-100 md:hover:bg-black md:hover:bg-transparent md:hover:text-yellow-300"
							}`}
							onClick={handleCategoryClick}
						>
							Warhammer AOS
						</Link>
					</li>
					<li>
						<Link
							to="/products/StarwarsLegion"
							className={`text-2xl text-black block py-2 pl-3 pr-4 rounded ${
								category === "StarwarsLegion" &&
								location.pathname.startsWith("/products/")
									? "bg-black text-yellow-300"
									: "hover:bg-gray-100 md:hover:bg-black md:hover:bg-transparent md:hover:text-yellow-300"
							}`}
							onClick={handleCategoryClick}
						>
							Starwars Legion
						</Link>
					</li>
					<li>
						<Link
							to="/products/StarwarsShatterpoint"
							className={`text-2xl text-black block py-2 pl-3 pr-4 rounded ${
								category === "StarwarsShatterpoint" &&
								location.pathname.startsWith("/products/")
									? "bg-black text-yellow-300"
									: "hover:bg-gray-100 md:hover:bg-black md:hover:bg-transparent md:hover:text-yellow-300"
							}`}
							onClick={handleCategoryClick}
						>
							Starwars Shatterpoint
						</Link>
					</li>

					{isAdmin && (
						<div className="font-medium flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark-border-gray-700">
							<Link
								to="/product"
								className={`text-2xl text-black block py-2 pl-3 pr-4 rounded ${
									category === "Aggiungi prodotto" &&
									location.pathname.startsWith("/products/")
										? "bg-black text-yellow-300"
										: "hover:bg-gray-100 md:hover:bg-black md:hover:bg-transparent md:hover:text-yellow-300"
								}`}
								onClick={handleCategoryClick}
							>
								Aggiungi prodotto
							</Link>
						</div>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
