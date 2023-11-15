import { useEffect, useState } from "react";
import axios from "axios";

const useGetPromoProducts = (currentPage, pageSize = 4) => {
	const [products, setProducts] = useState([]);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_SERVER_BASE_URL}/products/promo?page=${currentPage}&pageSize=${pageSize}`
				);
				setProducts(response.data.products);
				setTotalPages(response.data.totalPages);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [currentPage, pageSize]);

	return { products, totalPages };
};

export default useGetPromoProducts;
