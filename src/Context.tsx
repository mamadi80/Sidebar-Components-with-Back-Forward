import React, { useState, createContext } from "react";
import defData from "./components/mockData";

type Person = {
	entityName: string;
	age: number;
	picUrl: string;
}

export type ContextType = {
	items: Person[];
	setItems: React.Dispatch<React.SetStateAction<Person[]>>;
	resetItems: () => void;
};

export const Context = createContext <ContextType> ({items: [],setItems:() => null, resetItems: () => {}});
export const ContextProvider = ({children} : { children: React.ReactNode }) => {
	const [items, setItems] = useState<Person[]>(defData);
	const resetItems = () => {
		setItems(defData)
	};
	return (
		<Context.Provider value={{ items, setItems, resetItems }}>
			{children}
		</Context.Provider>
	);
};
