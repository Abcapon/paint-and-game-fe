import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../../navabar/Navbar";
import Footer from "../../footer/Footer";
import useGetProducts from "../../hooks/getProducts";
import SingleProduct from "../../singleProduct/SingleProduct";
import { nanoid } from "nanoid";
import useSession from "../../hooks/useSession";
import Jumbotron from "../../jumbotron/Jumbotron";

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const products = useGetProducts(currentPage);

	const promoProducts = products?.products?.filter(
		(product) => product?.isInPromo
	);

	const session = useSession();

	return (
		<>
			<Navbar />
			<Jumbotron />
			<h1 className="text-3xl text-center">OFFERTE DELLA SETTIMANA</h1>
			<div className="min-h-screen flex bg-orange-400 pt-2">
				<div className="grid grid-cols-4 gap-4">
					{products &&
						promoProducts?.map((product) => (
							<SingleProduct
								cover={product.cover}
								name={product.name}
								category={product.category}
								price={product.price}
								description={product.description}
								key={nanoid()}
							/>
						))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
