import React from "react";
import Svg from "../Svg/Svg";

const Services = ({
	handleItemClick,
}: {
	handleItemClick: (index: number) => void;
}) => {
	return (
		<div className="bg-[#F3F7FF] ss:w-[355px] sm:w-full pb-8">
			<h1 className="text-center py-8 text-[32px] font-bold">Our Services</h1>
			<Svg handleItemClick={handleItemClick} />
		</div>
	);
};

export default Services;
