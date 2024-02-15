import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServicesSubOne from "./ServicesSubOne";
import ServicesSubTwo from "./ServicesSubTwo";
import Services from "./Services";
import ServicesSubThree from "./ServicesSubThree";
import ServicesSubFour from "./ServicesSubFour";
import ServicesSubFive from "./ServicesSubFive";
import ServicesSubSix from "./ServicesSubSix";
import ServicesSubSeven from "./ServicesSubSeven";

const ServicesHome = () => {
	const [selectedItem, setSelectedItem] = useState<null | number>(null);

	const handleItemClick = (index: number) => {
		setSelectedItem(index);
	};

	useEffect(() => {
		setSelectedItem(0);
	}, []);
	return (
		<>
			<Services
				selectedItem={selectedItem}
				setSelectedItem={setSelectedItem}
				handleItemClick={handleItemClick}
			/>
			{selectedItem === 0 && <ServicesSubOne />}
			{selectedItem === 1 && <ServicesSubTwo />}
			{selectedItem === 2 && <ServicesSubThree />}
			{selectedItem === 3 && <ServicesSubFour />}{" "}
			{selectedItem === 4 && <ServicesSubFive />}{" "}
			{selectedItem === 5 && <ServicesSubSix />}{" "}
			{selectedItem === 6 && <ServicesSubSeven />}{" "}
		</>
	);
};

export default ServicesHome;
