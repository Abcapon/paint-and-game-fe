import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../../navabar/Navbar";
import Footer from "../../footer/Footer";
import useGetProducts from "../../hooks/getProducts";
import SingleProduct from "../../singleProduct/SingleProduct";
import { nanoid } from "nanoid";
import useSession from "../../hooks/useSession";
import Jumbotron from "../../jumbotron/Jumbotron";
import Carousel from "../../Carousel/Carousel";

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const products = useGetProducts(currentPage);

	const promoProducts = products?.products?.filter(
		(product) => product?.isInPromo
	);

	const session = useSession();

	const images = [
		{
			category: "Starwars Legion",
			url: "https://images.squarespace-cdn.com/content/v1/5ce432b1f9d2be000134d8ae/c942cfab-47c1-4b45-a2ee-9992f5a67079/DallasKemp-GAR-LAAT_Fullshot.png",
			link: "/",
		},
		{
			category: "Starwars Shatterpoint",
			url: "https://images.squarespace-cdn.com/content/v1/5ce432b1f9d2be000134d8ae/1677518943833-7DBZCP5TJSF7PZY1IWJH/SWP01_Group_FB%252B%2525282%252529.jpg?format=2500w",
			link: "/",
		},
		{
			category: "Warhammer 40k",
			url: "https://www.warhammer-community.com/wp-content/uploads/2023/03/ulc1yVv3Xx7efpjG.jpg",
			link: "/",
		},
		{
			category: "Warhammer AOS",
			url: "https://ageofsigmar.com/wp-content/uploads/2021/05/iaBc1KdBGOoejO85-950x400.jpg",
			link: "/",
		},
		{
			category: "Pittura",
			url: "https://www.phdgames.com/wp-content/uploads/2021/12/TAP_SpeedPaint_MegaSet_WebSlider.jpg",
			link: "/",
		},
	];

	return (
		<>
			<Navbar />
			<Jumbotron />
			<h1 className="text-3xl text-center bg-black text-white">
				OFFERTE DELLA SETTIMANA
			</h1>
			<div className=" flex bg-orange-400 min-h-screen">
				<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
			<div className="min-h-screen">
				<Carousel images={images} />
			</div>
			<Footer />
		</>
	);
};

export default Home;
