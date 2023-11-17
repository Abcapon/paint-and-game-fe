import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const useCategory = () => {
	const context = useContext(CategoryContext);
	if (!context) {
		throw new Error(
			"useCategory deve essere utilizzato all'interno di un CategoryProvider"
		);
	}
	return context;
};

export const CategoryProvider = ({ children }) => {
	const [currentCategory, setCurrentCategory] = useState("");

	return (
		<CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
			{children}
		</CategoryContext.Provider>
	);
};
