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
	const session = useSession();
	console.log(session);

	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="min-h-screen flex bg-orange-400 pt-2">
				<div className="grid grid-cols-4 gap-4">
					{products &&
						products.products?.map((product) => (
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
