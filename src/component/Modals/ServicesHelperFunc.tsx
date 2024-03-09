import { NavigateProps } from "react-router-dom";

export const ServiceFunc = (
	service: string,
	navigate: (to: NavigateProps["to"]) => void
) => {
	
	navigate(`/services/${service}`)
};
