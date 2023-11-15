import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/home/Home";
import { useSession } from "../hooks/useSession";

export const ProtectedAdminRoutes = () => {
	const session = useSession();

	if (session && session.role === "admin") {
		return <Outlet />;
	} else {
		return <Home />;
	}
};

export default ProtectedAdminRoutes;
