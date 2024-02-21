import React from "react";
import ApiDevSvg from "./ApiDevSvg";
import CustomSoftwareSvg from "./CustomSoftwareSvg";
import WebDesignSvg from "./WebDesignSvg";
import WebAndMobSvg from "./WebAndMobSvg";
import UiUxSvg from "./UiUxSvg";
import DatabaseMgtSvg from "./DatabaseMgtSvg";
import AspdotnetSvg from "./AspdotnetSvg";
import { IServicesHomeprops } from "../../utils/interfaces";

const Svg = ({
	selectedItem,
	handleItemClick,
	data,
}: {
	selectedItem: number | null;
	handleItemClick: (index: number) => void;
	data: IServicesHomeprops[];
}) => {
	const getServiceItemStyle = (index: number) => {
		return {
			backgroundColor: selectedItem === index ? "black" : "white",
			color: selectedItem === index ? "white" : "black",
		};
	};

	return (
		<div className="flex flex-wrap mt-8 ss:px-4 md:px-8 ss:h-[600px] md:h-auto justify-between text-center">
			{[
				<ApiDevSvg key={0} selectedItem={selectedItem} />,
				<CustomSoftwareSvg key={1} selectedItem={selectedItem} />,
				<WebDesignSvg key={2} selectedItem={selectedItem} />,
				<WebAndMobSvg key={3} selectedItem={selectedItem} />,
				<UiUxSvg key={4} selectedItem={selectedItem} />,
				<DatabaseMgtSvg key={5} selectedItem={selectedItem} />,
				<AspdotnetSvg key={6} selectedItem={selectedItem} />,
			].map((svg, index) => (
				<div
					key={index}
					className="h-[131px] ss:w-[155px] md:w-[171px] rounded-lg cursor-pointer flex flex-col items-center justify-center"
					style={getServiceItemStyle(index)}
					onClick={() => handleItemClick(index)}
				>
					{svg}
					<h4 style={{ whiteSpace: "pre-line", paddingTop: "12px" }}>
						{data[index]?.serviceTitle}
					</h4>
				</div>
			))}
		</div>
	);
};

export default Svg;
