import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../../navabar/Navbar";
import Footer from "../../footer/Footer";
import useGetProducts from "../../hooks/getProducts";
import SingleProduct from "../../singleProduct/SingleProduct";
import { nanoid } from "nanoid";
import useSession from "../../hooks/useSession";

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const products = useGetProducts(currentPage);
	const session = useSession();
	console.log(session);

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
						key={nanoid()}
					/>
				))}

			<Footer />
		</>
	);
};

export default Home;
