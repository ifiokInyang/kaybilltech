import React from "react";
import Enquiry from "../../component/Enquiry/Enquiry";
import About from "./About";

const AboutComp = () => {
	return (
		<>
			<About />
			<div className="ss:mx-0 md:mx-4">
				<Enquiry isQuotes={false} />
			</div>
		</>
	);
};

export default AboutComp;
