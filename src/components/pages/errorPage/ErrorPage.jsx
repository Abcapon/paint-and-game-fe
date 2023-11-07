import React from "react";

const ErrorPage = () => {
	return (
		<div>
			<p className="text-center mt-5">oops, questa pagina non esiste</p>
			<a href="/">
				<p className="text-center text-blue-400">
					clicca qui per tornare alla retta via
				</p>
			</a>
		</div>
	);
};

export default ErrorPage;
