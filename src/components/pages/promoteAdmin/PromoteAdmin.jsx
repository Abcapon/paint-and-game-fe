import React, { useState } from "react";
import axios from "axios";

const PromoteAdmin = () => {
	const [userIdToPromote, setUserIdToPromote] = useState("");
	const handleInputChange = (e) => {
		setUserIdToPromote(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.patch(
				`${process.env.REACT_APP_SERVER_BASE_URL}/users/promote/${userIdToPromote}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			console.log("Success:", response.data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="mt-10 flex justify-center min-h-screen pt-10">
			<form onSubmit={onSubmit} className="text-center">
				<div className="mb-6 text-center">
					<input
						type="text"
						name="userId"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="User ID"
						value={userIdToPromote}
						onChange={handleInputChange}
						required
					/>
				</div>

				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
				>
					Promuovi ad Admin
				</button>
			</form>
		</div>
	);
};

export default PromoteAdmin;
