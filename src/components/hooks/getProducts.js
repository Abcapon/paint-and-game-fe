import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (currentPage, pageSize = 12) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_SERVER_BASE_URL}/products?page=${currentPage}&pageSize=${pageSize}`
				);
				setProducts(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [currentPage, pageSize]);
	return products;
};

export default useGetProducts;
