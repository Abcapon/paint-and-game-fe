import { useEffect, useState } from "react";
import axios from "axios";

const useGetUsers = (currentPage) => {
	const [users, setUsers] = useState([]);
	const userId = "65527a68a8de95a2fbdcfdfd";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_SERVER_BASE_URL}/users/${userId}`
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
