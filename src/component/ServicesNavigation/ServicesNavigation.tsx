import React, { useEffect, useState } from "react";
import Portfolio from "../Portfolio/Portfolio";
import Enquiry from "../Enquiry/Enquiry";
import ServicesSubTwo from "../ServicesHomepage/ServicesSubTwo";
import { useParams } from "react-router-dom";
import ServicesSubFive from "../ServicesHomepage/ServicesSubFive";
import ServicesSubSeven from "../ServicesHomepage/ServicesSubSeven";
import ServicesSubThree from "../ServicesHomepage/ServicesSubThree";
import ServicesSubFour from "../ServicesHomepage/ServicesSubFour";
import ServicesSubSix from "../ServicesHomepage/ServicesSubSix";
import ServicesSubOne from "../ServicesHomepage/ServicesSubOne";
import { IDevProducts } from "../../utils/interfaces";
import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../../utils/api/axios";
import { homeDevProductsInitial } from "../../utils/data";

const ServicesNavigation = () => {
	const { service } = useParams();
	const [developedProducts, setDevelopedProducts] = useState<IDevProducts[]>(
		homeDevProductsInitial
	);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const HomeFunc: () => Promise<void> = async () => {
		try {
			const response: AxiosResponse<any, any> = await axios.get(
				`${apiUrl}/api/KayService/HomePage-Contents`
			);
			const { data } = response.data;
			if (response.status === 200) {
				setLoading(false);
				setDevelopedProducts(data.developedProducts);
			}
		} catch (err: any) {
			setLoading(false);
			setError("Something went wrong");
		}
	};

	useEffect(() => {
		async function fetchData() {
			await HomeFunc();
		}

		void fetchData();
	}, []);

	return (
		<>
			{service === "api" && (
				<ServicesSubOne service="api" selectedItem={null} data={[]} />
			)}
			{service === "software" && (
				<ServicesSubTwo service="software" selectedItem={null} data={[]} />
			)}
			{service === "uiux" && (
				<ServicesSubFive service="uiux" selectedItem={null} data={[]} />
			)}
			{service === "aspdotnet" && (
				<ServicesSubSeven service="aspdotnet" selectedItem={null} data={[]} />
			)}
			{service === "webDesign" && (
				<ServicesSubThree service="webDesign" selectedItem={null} data={[]} />
			)}
			{service === "webAndMobDev" && (
				<ServicesSubFour service="webAndMobDev" selectedItem={null} data={[]} />
			)}
			{service === "dbMgt" && (
				<ServicesSubSix service="dbMgt" selectedItem={null} data={[]} />
			)}

			<Portfolio data={developedProducts} />
			<Enquiry isQuotes={false} />
		</>
	);
};

export default ServicesNavigation;
