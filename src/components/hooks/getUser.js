import { useEffect, useState } from "react";

const useGetUsers = (currentPage) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_SERVER_BASE_URL}/users?page=${currentPage}`
				);
				const data = await response.json();
				setUsers(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [currentPage]);

	return users;
};

export default useGetUsers;
