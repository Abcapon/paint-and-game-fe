import React from "react";

import NewUser from "./components/pages/newUser/NewUser";
import NewProduct from "./components/pages/newProduct/NewProduct";
import Home from "./components/pages/home/Home";
import { AuthProvider } from "./components/context/AuthContext";
import { CartProvider } from "./components/context/CartContext";
import { CategoryProvider } from "./components/context/CategoryContext";
import ProtectedRoutes from "./components/middlewares/ProtectedRoute";
import ProtectedAdminRoutes from "./components/middlewares/AdminRoute";
import LogIn from "./components/pages/logIn/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./components/pages/success/Success";
import Contact from "./components/pages/contact/Contact";
import About from "./components/pages/about/About";
import SelectedCategory from "./components/pages/selectedCategory/SelectedCategory";
import ErrorPage from "./components/pages/errorPage/ErrorPage";
import ProductDescription from "./components/pages/productDescription/ProductDescription";
import PatchProduct from "./components/pages/patchProduct/PatchProduct";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Confirm from "./components/pages/confirm/Confirm";

import PromoteAdmin from "./components/pages/promoteAdmin/PromoteAdmin";

import StripeContainer from "./components/stripeContainer/StripeContainer";

import PaymentComplete from "./components/pages/paymentComplete/PaymentComplete";

if (process.env.NODE_ENV === "development") {
	// Imposta la variabile di ambiente REACT_APP_ALLOW_UNSAFE_REQUESTS a "true" durante lo sviluppo
	if (process.env.REACT_APP_ALLOW_UNSAFE_REQUESTS === "true") {
		window.location.protocol = "http:";
	}
}

function App() {
	return (
		<>
			<Router>
				<CartProvider>
					<AuthProvider>
						<CategoryProvider>
							<Navbar />
							<Routes>
								<Route path="/user" element={<NewUser />} />
								<Route exact path="/" element={<Home />} />
								<Route path="/success/:token" element={<Success />} />
								<Route path="/login" element={<LogIn />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="/about" element={<About />} />
								<Route path="confirm/:token" element={<Confirm />} />
								<Route
									path="/products/:category"
									element={<SelectedCategory />}
								/>
								<Route
									path="/description/:id"
									element={<ProductDescription />}
								/>
								<Route path="/paymentcomplete" element={<PaymentComplete />} />
								<Route element={<ProtectedAdminRoutes />}>
									<Route path="/promote/admin" element={<PromoteAdmin />} />
									<Route path="/product" element={<NewProduct />} />
									<Route
										path="/products/patch/:id"
										element={<PatchProduct />}
									/>
								</Route>
								<Route element={<ProtectedRoutes />}>
									<Route path="/checkout" element={<StripeContainer />} />
								</Route>
								<Route path="*" element={<ErrorPage />} />
							</Routes>
							<Footer />
						</CategoryProvider>
					</AuthProvider>
				</CartProvider>
			</Router>
		</>
	);
}

export default App;
