import React from "react";
import Svg from "../Svg/Svg";
import { IServicesHomeprops } from "../../utils/interfaces";

const Services = ({
	selectedItem,
	setSelectedItem,
	handleItemClick,
	data,
}: {
	selectedItem: number | null;
	setSelectedItem: React.Dispatch<React.SetStateAction<number | null>>;
	handleItemClick: (index: number) => void;
	data: IServicesHomeprops[];
	}) => {
	
	return (
		<div className="bg-[#F3F7FF] ss:w-[355px] sm:w-full pb-8">
			<h1 className="text-center py-8 text-[32px] font-bold">Our Services</h1>
			<Svg
				selectedItem={selectedItem}
				handleItemClick={handleItemClick}
				data={data}
			/>
		</div>
	);
};


export default Services;
