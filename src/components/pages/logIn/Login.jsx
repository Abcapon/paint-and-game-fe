import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "tailwindcss/tailwind.css";
import axios from "axios";

const LogIn = () => {
	const [logInData, setLogInData] = useState({});
	const [login, setLogin] = useState(null);
	const { isAuthenticated, setIsAuthenticated } = useAuth();
	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setLogInData({
			...logInData,
			[name]: value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_BASE_URL}/login`,
				logInData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.data.token) {
				localStorage.setItem(
					"loggedInUser",
					JSON.stringify(response.data.token)
				);
				setIsAuthenticated(true);
				navigate(`/success/${response.data.token}`);
			}

			setLogin(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const redirectForLoginWithGithub = () => {
		window.location.href = `${process.env.REACT_APP_SERVER_BASE_URL}/auth/github`;
	};

	useEffect(() => {
		const token = localStorage.getItem("loggedInUser");
		if (token) {
			navigate("/");
			window.location.reload();
		}
	}, [isAuthenticated]);

	const signIn = () => {
		navigate("/user");
	};

	return (
		<div className="flex flex-col items-center min-h-screen pt-10">
			<h1 className="text-3xl font-bold pb-5 pt-10">Login</h1>
			<div>
				<form onSubmit={onSubmit}>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-center text-gray-900 dark:text-white"
						>
							Il tuo indirizzo email
						</label>
						<input
							type="email"
							name="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="name@mail.com"
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="mb-6 relative">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-center text-gray-900 dark:text-white"
						>
							La tua password
						</label>
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							onChange={handleInputChange}
							placeholder="Password"
							required
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute inset-y-0 top-7 right-0 px-3 py-2"
						>
							{showPassword ? "👁️" : "👁️‍🗨️"}
						</button>
					</div>
					<div class="gap-3 flex flex-col">
						<button
							type="submit"
							className=" only:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Accedi
						</button>
					</div>
				</form>
				<div className="flex flex-col">
					<button
						onClick={redirectForLoginWithGithub}
						className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-6"
					>
						Accedi con Github
					</button>

					<button
						onClick={signIn}
						className=" text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
					>
						Registrati
					</button>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
