import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import useGetProductsPromo from "../../hooks/getProductsPromo";
import SingleProduct from "../../singleProduct/SingleProduct";
import { nanoid } from "nanoid";
import Jumbotron from "../../jumbotron/Jumbotron";
import { Link } from "react-router-dom";
import "./style.css";
import ReactPaginate from "react-paginate";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const products = useGetProductsPromo(currentPage);

	const totalPages = products.totalPages;

	const controls = useAnimation();
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);

	const [inView1, refInView1] = useInView({ triggerOnce: true });
	const [inView2, refInView2] = useInView({ triggerOnce: true });
	const [inView3, refInView3] = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView1) {
			controls.start("visible");
		}
	}, [controls, inView1]);

	useEffect(() => {
		if (inView2) {
			controls.start("visible");
		}
	}, [controls, inView2]);

	useEffect(() => {
		if (inView3) {
			controls.start("visible");
		}
	}, [controls, inView3]);

	const variants1 = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 2 } },
	};

	const variants2 = {
		hidden: { opacity: 0, x: -200 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, ease: "easeInOut" },
		},
	};

	const variants3 = {
		hidden: { opacity: 0, x: 200 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, ease: "easeInOut" },
		},
	};

	const handleScroll = () => {
		const yOffset = window.scrollY;
		const sectionOffset =
			document.getElementById("categoriesSection").offsetTop;

		if (yOffset > sectionOffset - window.innerHeight / 2) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handlePageChange = ({ selected }) => {
		setCurrentPage(selected + 1);
	};

	return (
		<>
			<Jumbotron />
			<h2 className="text-3xl text-center pb-4 pt-6 font-bold">
				OFFERTE DELLA SETTIMANA
			</h2>
			<section className="flex flex-col">
				<div className="px-2 flex flex-wrap gap-4 justify-center container mx-auto">
					{products &&
						products.products?.map((product) => (
							<SingleProduct
								id={product._id}
								cover={product.cover}
								name={product.name}
								category={product.category}
								price={product.price}
								description={product.description}
								isInPromo={product.isInPromo}
								product={product}
								key={nanoid()}
							/>
						))}
				</div>
				{totalPages > 1 && (
					<ReactPaginate
						pageCount={totalPages}
						pageRangeDisplayed={3}
						marginPagesDisplayed={1}
						onPageChange={handlePageChange}
						containerClassName="pagination"
						subContainerClassName="pages pagination"
						activeClassName="active"
						className="flex self-center gap-4 py-4"
					/>
				)}
			</section>
			<section id="categoriesSection" className="px-20">
				<motion.div
					className="h-20 md:h-52 mb-2"
					initial="hidden"
					animate={controls}
					variants={variants1}
					ref={ref1}
				>
					<Link to="/products/Pittura">
						<div className="bg-custom-image-url-paint h-full mt-2 flex justify-center items-center">
							<p className="text-2xl font-extrabold md:text-3xl lg:text-4xl text-center text-black">
								Pittura
							</p>
						</div>
					</Link>
				</motion.div>
				<div className="h-96 flex flex-col gap-2 mb-2">
					<div className="grid grid-cols-1 lg:grid-cols-2 h-1/2 gap-2">
						<Link
							className="overflow-hidden h-full w-full"
							to="/products/StarwarsLegion"
						>
							<motion.div
								className="overflow-hidden bg-custom-image-url-legion h-full flex justify-center items-center text-white bg-gray-400 bg-blend-multiply hover:bg-transparent min-h-[90px]"
								animate={controls}
								variants={variants2}
								ref={ref2}
							>
								<p className="text-2xl font-extrabold md:text-3xl lg:text-4xl text-center">
									Starwars Legion
								</p>
							</motion.div>
						</Link>
						<Link
							className="overflow-hidden h-full w-full"
							to="/products/StarwarsShatterpoint"
						>
							<motion.div
								className="overflow-hidden bg-custom-image-url-shatterpoint h-full flex justify-center items-center text-white bg-gray-400 bg-blend-multiply hover:bg-transparent min-h-[90px]"
								animate={controls}
								variants={variants3}
								ref={ref2}
							>
								<p className="text-2xl font-extrabold md:text-3xl lg:text-4xl text-center">
									Starwars Shatterpoint
								</p>
							</motion.div>
						</Link>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 h-1/2 gap-2">
						<Link
							className="overflow-hidden h-full w-full"
							to="/products/Warhammer40k"
						>
							<motion.div
								className="overflow-hidden bg-custom-image-url-40k h-full flex justify-center items-center text-white bg-gray-400 bg-blend-multiply hover:bg-transparent min-h-[90px]"
								animate={controls}
								variants={variants2}
								ref={ref3}
							>
								<p className="text-2xl font-extrabold md:text-3xl lg:text-4xl  text-center">
									Warhammer 40k
								</p>
							</motion.div>
						</Link>
						<Link
							className="overflow-hidden h-full w-full"
							to="/products/WarhammerAOS"
						>
							<motion.div
								className="overflow-hidden bg-custom-image-url-AOS h-full flex justify-center items-center text-white bg-gray-400 bg-blend-multiply hover:bg-transparent min-h-[90px]"
								animate={controls}
								variants={variants3}
								ref={ref3}
							>
								<p className="text-2xl font-extrabold md:text-3xlm lg:text-4xl  text-center">
									Warhammer AOS
								</p>
							</motion.div>
						</Link>
					</div>
				</div>
			</section>
			<section className="bg-white dark:bg-gray-900">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
					<div className="flex flex-col justify-center">
						<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
							Speed Painting
						</h1>
						<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
							Scopri questa nuova tecnica di pittura veloce e ottima per
							iniziare. Rendere unico il tuo esercito non è mai stato così
							semplice e divertente.
						</p>
						<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
							<Link
								to="/products/Pittura"
								className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
							>
								Inizia
								<svg
									className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</Link>
						</div>
					</div>
					<div>
						<iframe
							className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
							src="https://www.youtube.com/embed/ea3CKZyhDRE?si=yjQ4ViKTN_PU8z8a"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
