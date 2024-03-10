import React, { useEffect } from "react";
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

const Home = () => {
	const { HomeDataFunc, homeDataArray } = useAuth() as any;

	useEffect(() => {
		HomeDataFunc();
	}, []);

	return (
		<>
			<HomeComp1 />
			<LogoSlider
				logos={
					homeDataArray.ourClients !== undefined && homeDataArray.ourClients
				}
			/>
			<ServicesHome />
			<BusScalability />
			<RelationshipHomeComp />
			<WhyUs />
			<Portfolio data={homeDataArray.developedProducts} />
			<Reviews />
			<Team />
			<Enquiry isQuotes={false} />
		</>
	);
};

export default Home;
