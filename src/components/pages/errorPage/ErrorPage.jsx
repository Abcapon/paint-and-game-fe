import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<div class="h-1/2 flex flex-grow items-center justify-center  pt-20">
				<div class="rounded-lg bg-white p-8 text-center shadow-xl">
					<h1 class="mb-4 text-4xl font-bold">404</h1>
					<p class="text-gray-600">Oops! Pagina non trovata.</p>
					<a
						href="/"
						class="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
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
