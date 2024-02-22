import React from "react";
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

const ServicesNavigation = () => {
	const { service } = useParams();

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

			<Portfolio />
			<Enquiry isQuotes={false} />
		</>
	);
};

export default ServicesNavigation;
