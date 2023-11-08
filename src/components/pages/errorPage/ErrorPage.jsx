import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div>
			<p className="text-center mt-5">oops, questa pagina non esiste</p>
			<Link to="/">
				<p className="text-center text-blue-400">
					clicca qui per tornare alla retta via
				</p>
			</Link>
		</div>
	);
};

export default ErrorPage;
