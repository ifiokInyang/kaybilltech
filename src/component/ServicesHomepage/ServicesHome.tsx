import React, { useEffect } from "react";
import ServicesSubOne from "./ServicesSubOne";
import Services from "./Services";
import { useAuth } from "../../context";

const ServicesHome = () => {
	const { setSelectedItem } = useAuth() as any;

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
