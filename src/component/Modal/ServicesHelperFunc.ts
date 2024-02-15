import { NavigateProps } from "react-router-dom";

export const serviceFunc = (
	service: string,
	navigate: (to: NavigateProps["to"]) => void
) => {
	if (service === "softwareDev") {
		navigate("/services/software");
	} else if (service === "api") {
		navigate("/services/api");
	} else if (service === "webDesign") {
		navigate("/services/webDesign");
	} else if (service === "webAndMobDev") {
		navigate("/services/webAndMobDev");
	} else if (service === "uiux") {
		navigate("/services/uiux");
	} else if (service === "dbMgt") {
		navigate("/services/dbMgt");
	} else if (service === "aspdotnet") {
		navigate("/services/aspdotnet");
	}
};
