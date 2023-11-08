import React from "react";

import NewUser from "./components/pages/newUser/NewUser";
import NewProduct from "./components/pages/newProduct/NewProduct";
import Home from "./components/pages/home/Home";
import { AuthProvider } from "./components/context/AuthContext";
import { CartProvider } from "./components/context/CartContext";
import ProtectedRoutes from "./components/middlewares/ProtectedRoute";
import LogIn from "./components/pages/logIn/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./components/pages/success/Success";
import Contact from "./components/pages/contact/Contact";
import About from "./components/pages/about/About";
import Privacy from "./components/pages/privacy/Privacy";
import SelectedCategory from "./components/pages/selectedCategory/SelectedCategory";
import ErrorPage from "./components/pages/errorPage/ErrorPage";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navabar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<Router>
				<CartProvider>
					<AuthProvider>
						<Navbar />
						<Routes>
							<Route path="/user" element={<NewUser />} />
							<Route exact path="/" element={<Home />} />
							<Route path="/success/:token" element={<Success />} />
							<Route path="/login" element={<LogIn />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/about" element={<About />} />
							<Route path="/privacy" element={<Privacy />} />
							<Route
								path="/products/:category"
								element={<SelectedCategory />}
							/>
							<Route path="/cart" element={<Cart />} />
							<Route element={<ProtectedRoutes />}>
								<Route path="/product" element={<NewProduct />} />
							</Route>
							<Route path="*" element={<ErrorPage />} />
						</Routes>
						<Footer />
					</AuthProvider>
				</CartProvider>
			</Router>
		</>
	);
}

export default App;
