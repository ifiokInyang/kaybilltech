import React, { useEffect, useState } from "react";
import ServicesSubOne from "./ServicesSubOne";
import Services from "./Services";
import { IServicesHomeprops } from "../../utils/interfaces";

const ServicesHome = ({ data }: { data: IServicesHomeprops[] }) => {
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
				data={data}
			/>
			{<ServicesSubOne selectedItem={selectedItem} data={data} />}
		</>
	);
};

export default ServicesHome;
