import React, { useEffect, useState } from "react";
import ServicesSubOne from "./ServicesSubOne";
import Services from "./Services";
import { IServicesHomeprops } from "../../utils/interfaces";
import { useAuth } from "../../context";

const ServicesHome = () => {
	const { selectedItem, setSelectedItem } = useAuth() as any;

	const handleItemClick = (index: number) => {
		setSelectedItem(index);
	};

	useEffect(() => {
		setSelectedItem(0);
	}, []);
	return (
		<>
			<Services handleItemClick={handleItemClick} />
			{<ServicesSubOne />}
		</>
	);
};

export default ServicesHome;
