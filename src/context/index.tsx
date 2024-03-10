import React, { createContext, useState } from "react";
import { apiUrl } from "../utils/api/axios";
import axios, { AxiosResponse } from "axios";
import { BackEndData } from "../utils/interfaces";

export interface GlobalStateInterface {
  HomeDataFunc: () => Promise<void>;
  homeDataArray: BackEndData[];
  loading: boolean;
  selectedItem: number;
  error: null | string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>> | any;
  setSelectedItem: React.Dispatch<React.SetStateAction<null | number>> | any;
}
export const dataContext = createContext<GlobalStateInterface | null>(null);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
	const [homeDataArray, setHomeDataArray] = useState([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null); // Corrected type declaration
		const [selectedItem, setSelectedItem] = useState<number>(0);

	/** ==============HomeDataFunc======= **/
	const HomeDataFunc: () => Promise<void> = async () => {
		try {
			const response: AxiosResponse<any, any> = await axios.get(
				`${apiUrl}/api/KayService/HomePage-Contents`
			);
			const { data } = response.data;

			if (response.status === 200) {
				setLoading(false);
				setHomeDataArray(data);
			}
		} catch (err: any) {
			setLoading(false);
			setError("Something went wrong");
		}
	};

	return (
		<dataContext.Provider
			value={{
				HomeDataFunc,
				homeDataArray,
				setLoading,
				selectedItem,
				setSelectedItem,
				loading,
				error,
			}}
		>
			{children}
		</dataContext.Provider>
	);
};

export const useAuth = () => {
	const context = React.useContext(dataContext) as GlobalStateInterface;
	if (context === undefined) {
		throw new Error("useAuth must be used within the auth provider");
	}
	return context;
};

export default DataProvider;
