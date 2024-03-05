import React, { useEffect, useState } from "react";
import HomeComp1 from "../../component/HomeComp1/HomeComp1";
import LogoSlider from "../../component/Partners/Partners";
import ServicesHome from "../../component/ServicesHomepage/ServicesHome";
import BusScalability from "../../component/BusScalability/BusScalability";
import RelationshipHomeComp from "../../component/RelationshipComp/RelationshipHomeComp";
import WhyUs from "../../component/WhyUs/WhyUs";
import Portfolio from "../../component/Portfolio/Portfolio";
import Reviews from "../../component/Reviews/Reviews";
import Team from "../../component/Team/Team";
import Enquiry from "../../component/Enquiry/Enquiry";
import { useAuth } from "../../context";
import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../../utils/api/axios";
import {
	IDevProducts,
	IHomeDataProps,
	ILogoProps,
	IServicesHomeprops,
	TeamProps,
} from "../../utils/interfaces";
import {
	homeDevProductsInitial,
	homeInitialStateData,
	logoInitialData,
	teamInitial,
} from "../../utils/data";

const Home = () => {
	// const { HomeDataFunc, homeData } = useAuth as any;

	// useEffect(() => {
	// 	async function fetchData() {
	// 		await HomeDataFunc();
	// 	}
	// 	void fetchData();
	// }, []);
	const [homeData, setHomeData] =
		useState<IHomeDataProps>(homeInitialStateData);
	const [servicesData, setServicesData] = useState<IServicesHomeprops[]>([
		{ serviceTitle: "", description: "", category: "" },
	]);
	const [developedProducts, setDevelopedProducts] = useState<IDevProducts[]>(
		homeDevProductsInitial
	);
	const [logoData, setLogoData] = useState<ILogoProps[]>(logoInitialData);

	const [team, setTeam] = useState<TeamProps[]>(teamInitial);
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
				setHomeData(data.homeHero);
				setServicesData(data.ourServices);
				setDevelopedProducts(data.developedProducts);
				setTeam(data.teamMembers);
				setLogoData(data.ourClients);
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
      <HomeComp1 data={homeData} />
      <LogoSlider logos={logoData} />
      <ServicesHome data={servicesData} />
      <BusScalability />
      <RelationshipHomeComp />
      <WhyUs data={homeData} />
      <Portfolio data={developedProducts} />
      <Reviews />
      <Team />
      <Enquiry isQuotes={false} />
    </>
  );
};

export default Home;
