import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="h-1/2 flex flex-grow items-center justify-center  pt-20">
				<div className="rounded-lg bg-white p-8 text-center shadow-xl">
					<h1 className="mb-4 text-4xl font-bold">404</h1>
					<p className="text-gray-600">Oops! Pagina non trovata.</p>
					<a
						href="/"
						className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
					>
						{" "}
						Torna alla Home{" "}
					</a>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
