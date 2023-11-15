import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import useGetProductsPromo from "../../hooks/getProductsPromo";
import SingleProduct from "../../singleProduct/SingleProduct";
import { nanoid } from "nanoid";
import Jumbotron from "../../jumbotron/Jumbotron";
import { Link } from "react-router-dom";
import "./style.css";
import ReactPaginate from "react-paginate";

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const products = useGetProductsPromo(currentPage);
	console.log("products:", products);

	const totalPages = products.totalPages;

	const handlePageChange = ({ selected }) => {
		setCurrentPage(selected + 1);
	};

	return (
		<>
			<Jumbotron />
			<h2 className="text-3xl text-center pb-4 pt-6 font-bold">
				OFFERTE DELLA SETTIMANA
			</h2>
			<section className="flex flex-col ">
				<div className="px-2 flex flex-wrap gap-4 justify-center items-stretch container mx-auto">
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
						className="flex self-center gap-4"
					/>
				)}
			</section>
			<section className="p-2">
				<div className="custom my-2">
					<Link to="/products/Pittura">
						<div className="bg-custom-image-url-paint h-full my-2 relative">
							<p className="bg-white absolute bottom-1 right-1/2">Painting</p>
						</div>
					</Link>
				</div>
				<div className="h-screen flex flex-col gap-2 mb-2">
					<div className="flex h-1/2 gap-2">
						<Link className="h-full w-full" to="/products/StarwarsLegion">
							<div className="bg-custom-image-url-legion h-full relative">
								<p className="bg-white absolute bottom-4 right-1/2">
									Starwars Legion
								</p>
							</div>
						</Link>
						<Link className="h-full w-full" to="/products/StarwarsShatterpoint">
							<div className="bg-custom-image-url-shatterpoint h-full relative">
								<p className="bg-white absolute bottom-4 right-1/2">
									Starwars Shatterpoint
								</p>
							</div>
						</Link>
					</div>
					<div className="flex h-1/2 gap-2">
						<Link className="h-full w-full" to="/products/Warhammer40k">
							<div className="bg-custom-image-url-40k h-full relative">
								<p className="bg-white absolute bottom-4 right-1/2">
									Warhammer 40k
								</p>
							</div>
						</Link>
						<Link className="h-full w-full" to="/products/WarhammerAOS">
							<div className="bg-custom-image-url-AOS h-full relative">
								<p className="bg-white absolute bottom-4 right-1/2">
									Warhammer AOS
								</p>
							</div>
						</Link>
					</div>
				</div>
			</section>
			<section className="p-2">
				<h2 className="text-3xl text-center pb-4 pt-6 font-bold">
					SPEED PAINTING TUTORIAL
				</h2>
				<div class="w-screen h-screen relative my-2">
					<iframe
						src="https://www.youtube.com/embed/ea3CKZyhDRE?si=yjQ4ViKTN_PU8z8a"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
						class="absolute inset-0 w-full h-full"
					></iframe>
				</div>
			</section>
		</>
	);
};

export default Home;
