import { useEffect, useState } from "react";

const useGetProducts = (currentPage) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_SERVER_BASE_URL}/products?page=${currentPage}`
				);
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [currentPage]);

	return products;
};

export default useGetProducts;
