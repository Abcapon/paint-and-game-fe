import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "../../hooks/getProducts";
import Navbar from "../../navabar/Navbar";
import Footer from "../../footer/Footer";
import SingleProduct from "../../singleProduct/SingleProduct";
import { nanoid } from "nanoid";

const SelectedCategory = () => {
	const { category } = useParams("");

	const [productData, setProductData] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const products = useGetProducts(currentPage);

	console.log(products);

	const filteredProducts = products?.products?.filter(
		(product) => product?.category === category
	);

	console.log(filteredProducts);

	return (
		<>
			<Navbar />
			<div className="min-h-screen">
				<h2 className="text-3xl text-center pb-4 pt-6 font-bold">
					Warhammer 40k
				</h2>
				<session className=" flex">
					<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{products &&
							filteredProducts?.map((product) => (
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
				</session>
			</div>
			<Footer />
		</>
	);
};

export default SelectedCategory;
