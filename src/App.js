import React from "react";

import NewUser from "./components/pages/newUser/NewUser";
import NewProduct from "./components/pages/newProduct/NewProduct";
import Home from "./components/pages/home/Home";
import { AuthProvider } from "./components/context/AuthContext";
import ProtectedRoutes from "./components/middlewares/ProtectedRoute";
import LogIn from "./components/pages/logIn/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./components/pages/success/Success";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route path="/user" element={<NewUser />} />
					<Route exact path="/" element={<Home />} />
					<Route path="/success/:token" element={<Success />} />
					<Route path="/login" element={<LogIn />} />
					<Route element={<ProtectedRoutes />}>
						<Route path="/product" element={<NewProduct />} />
					</Route>
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
