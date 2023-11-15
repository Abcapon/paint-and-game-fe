import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetCategoryProducts from "../../hooks/getProductsCategory";
import SingleProduct from "../../singleProduct/SingleProduct";
import { nanoid } from "nanoid";
import ReactPaginate from "react-paginate";

const SelectedCategory = () => {
	const { category } = useParams("");

	const [currentPage, setCurrentPage] = useState(1);
	const products = useGetCategoryProducts(category, currentPage);

	const totalPages = products.totalPages;
	console.log("totalPages", totalPages);

	const handlePageChange = ({ selected }) => {
		setCurrentPage(selected + 1);
	};

	return (
		<div className="min-h-screen">
			<h2 className="text-3xl text-center pb-4 pt-6 font-bold">{category}</h2>
			<session className=" flex flex-col">
				<div className=" px-2 flex flex-wrap gap-4 justify-center container mx-auto">
					{products &&
						products.products?.map((product) => (
							<SingleProduct
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
			</session>
		</div>
	);
};

export default SelectedCategory;
