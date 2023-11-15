import { jwtDecode } from "jwt-decode";

import { isAuth } from "../middlewares/ProtectedRoute";

export const useSession = () => {
	const session = isAuth();
	const decodedSession = session ? jwtDecode(session) : null;

	return decodedSession;
};

export default useSession;
