import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../../navabar/Navbar";
import Footer from "../../footer/Footer";
import useGetProducts from "../../hooks/getProducts";
import SingleProduct from "../../singleProduct/SingleProduct";

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const products = useGetProducts(currentPage);

	return (
		<>
			<Navbar />
			{products &&
				products.products?.map((product) => (
					<SingleProduct
						cover={product.cover}
						name={product.name}
						category={product.category}
						price={product.price}
						description={product.description}
					/>
				))}

			<Footer />
		</>
	);
};

export default Home;
