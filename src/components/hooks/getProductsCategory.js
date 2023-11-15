import { useEffect, useState } from "react";
import axios from "axios";

const useGetCategoryProducts = (category, currentPage, pageSize = 12) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_SERVER_BASE_URL}/products/category/${category}?page=${currentPage}&pageSize=${pageSize}`
				);
				setProducts(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [category, currentPage, pageSize]);

	return products;
};

export default useGetCategoryProducts;
