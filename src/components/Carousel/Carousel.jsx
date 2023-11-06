import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((currentSlide + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentSlide((currentSlide - 1 + images.length) % images.length);
	};

	return (
		<>
			<div
				id="controls-carousel"
				className="relative w-screen h-screen"
				data-carousel="static"
			>
				<div className="relative overflow-hidden rounded-lg bg-black w-full h-full">
					{images.map((image, index) => (
						<div
							key={index}
							className={`${
								index === currentSlide ? "block" : "hidden"
							} duration-700 ease-in-out`}
							data-carousel-item={index === currentSlide ? "active" : ""}
						>
							<h1 className="text-center text-3xl text-white bg-black pb-2">
								Naviga per categoria
							</h1>
							<img
								src={image.url}
								className="object-cover w-full h-full myImg"
								alt="..."
							/>
							<a
								href={image.link}
								className="absolute bottom-10 left-1/3 rounded px-2 bg-white text-center w-96"
							>
								{image.category}
							</a>
						</div>
					))}
				</div>

				<button
					type="button"
					className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none bg-gray-800/50 hover:bg-gray-800/75 active:bg-gray-800/90"
					data-carousel-prev
					onClick={prevSlide}
				>
					<span className="text-grey-200 dark:text-gray-800 text-4xl">
						{"<"}
					</span>
				</button>
				<button
					type="button"
					className="absolute top-0 right-3 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none bg-gray-800/50 hover:bg-gray-800/75 active:bg-gray-800/90"
					data-carousel-next
					onClick={nextSlide}
				>
					<span className="text-grey-200 dark:text-gray-800 text-4xl">
						{">"}
					</span>
				</button>
			</div>
		</>
	);
};

export default Carousel;
