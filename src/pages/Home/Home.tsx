import React from "react";
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
import Footer from "../../component/Footer/Footer";

const Home = () => {
	return (
		<>
			<HomeComp1 />
			<LogoSlider />
			<ServicesHome />
			<BusScalability />
			<RelationshipHomeComp />
			<WhyUs />
			<Portfolio />
			<Reviews />
			<Team />
			<Enquiry isQuotes={false} />
		</>
	);
};

export default Home;
