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
			{service === "api" && <ServicesSubOne service="api" />}
			{service === "software" && <ServicesSubTwo service="software" />}
			{service === "uiux" && <ServicesSubFive service="uiux" />}
			{service === "aspdotnet" && <ServicesSubSeven service="aspdotnet" />}
			{service === "webDesign" && <ServicesSubThree service="webDesign" />}
			{service === "webAndMobDev" && <ServicesSubFour service="webAndMobDev" />}
			{service === "dbMgt" && <ServicesSubSix service="dbMgt" />}

			<Portfolio />
			<Enquiry isQuotes={false} />
		</>
	);
};

export default ServicesNavigation;
