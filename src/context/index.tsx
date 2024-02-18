import React, { createContext, useState } from "react";
import { apiUrl } from "../utils/api/axios";
import axios, { AxiosResponse } from "axios";

export interface GlobalStateInterface {
	HomeDataFunc: () => Promise<void>;
	homeData: object[];
	loading: boolean;
	error: null | string;
	setLoading: React.Dispatch<React.SetStateAction<boolean>> | any;
}
export const DataContext = createContext<GlobalStateInterface | null>(null);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
	const [homeData, setHomeData] = useState([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null); // Corrected type declaration
	/** ==============HomeDataFunc======= **/
	const HomeDataFunc: () => Promise<void> = async () => {
		try {
			const response: AxiosResponse<any, any> = await axios.get(
				`${apiUrl}/api/KayService/HomePage-Contents`
			);

			if (response.status === 200) {
				setLoading(false);
				setHomeData(response.data);
			}
		} catch (err: any) {
			setLoading(false);
			setError("Something went wrong");
		}
	};

	return (
		<DataContext.Provider
			value={{
				HomeDataFunc,
				homeData,
				setLoading,
				loading,
				error,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export const useAuth = () => {
	const context = React.useContext(DataContext) as GlobalStateInterface;
	if (context === undefined) {
		throw new Error("useAuth must be used within the auth provider");
	}
	return context;
};

export default DataProvider;
