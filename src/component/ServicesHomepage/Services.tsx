import React from "react";
import Svg from "../Svg/Svg";

const Services = ({
	selectedItem,
	setSelectedItem,
	handleItemClick,
}: {
	selectedItem: number | null;
	setSelectedItem: React.Dispatch<React.SetStateAction<number | null>>;
	handleItemClick: (index: number) => void;
}) => {
	return (
		<div className="bg-[#F3F7FF] ss:w-[355px] sm:w-full pb-8">
			<h1 className="text-center py-8 text-[32px] font-bold">Our services</h1>
			<Svg selectedItem={selectedItem} handleItemClick={handleItemClick} />
		</div>
	);
};

export const getServiceTitle = (index: number) => {
	const titles = [
		"API\nDevelopment",
		"Custom software / \ndevelopment",
		"Website \nDesign",
		"Web/mobile applic- \nation development",
		"UI/UX \nDesign",
		"Database \nManagement",
		"ASP.\nNet training",
	];

	return titles[index];
};
export default Services;
