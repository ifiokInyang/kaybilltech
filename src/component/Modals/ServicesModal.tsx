import React from "react";
import apiDev from "../../assets/api.svg";
import webDesign from "../../assets/webDesign.svg";
import webAndMob from "../../assets/web&mob.svg";
import uiuxIcon from "../../assets/uiux.svg";
import databaseMgt from "../../assets/databaseMgt.svg";
import asp from "../../assets/aspNavigation.svg";
import { ServicesModalProp } from "../../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { serviceFunc } from "./ServicesHelperFunc";

const ServicesModal = ({
	isServicesModalOpen,
	servicesModalRef,
	setIsServicesModalOpen,
}: ServicesModalProp) => {
	const navigate = useNavigate();

	const handleServiceNavigation = (service: string) => {
		setIsServicesModalOpen(false);
		serviceFunc(service, navigate);
	};
	return (
		<>
			{isServicesModalOpen && (
				<div
					ref={servicesModalRef}
					className="visible absolute z-50 flex justify-around w-full h-[507px] flex-col bg-white py-4 px-[74px] text-gray-800 shadow-xl group-hover:visible"
				>
					<div className="flex justify-between py-2 text-sm text-gray-700 dark:text-gray-200">
						<div
							className="flex cursor-pointer"
							onClick={() => handleServiceNavigation("softwareDev")}
						>
							<img
								src={apiDev}
								alt="software development icon"
								className="mr-4"
							/>
							<div>
								<h1 className="font-bold">Custom Software Development</h1>
								<p>Swift software development</p>
							</div>
						</div>
						<div
							className="flex cursor-pointer"
							onClick={() => handleServiceNavigation("api")}
						>
							<img src={apiDev} alt="api development icon" className="mr-4" />
							<div>
								<h1 className="font-bold">API Development</h1>
								<p>API attribution and development</p>
							</div>
						</div>
						<div
							className="flex cursor-pointer"
							onClick={() => handleServiceNavigation("webDesign")}
						>
							<img
								src={webDesign}
								alt="website development icon"
								className="mr-4"
							/>
							<div>
								<h1 className="font-bold">Website design</h1>
								<p>Website with cool features</p>
							</div>
						</div>
					</div>
					<div className="flex justify-between py-2 text-sm text-gray-700 dark:text-gray-200">
						<div
							className="flex cursor-pointer"
							onClick={() => handleServiceNavigation("webAndMobDev")}
						>
							<img
								src={webAndMob}
								alt="Web and mobile application development icon"
								className="mr-4"
							/>
							<div>
								<h1 className="font-bold">
									Web and mobile application development
								</h1>
								<p>We develop web & mobile applications</p>
							</div>
						</div>
						<div
							className="flex cursor-pointer mr-[130px]"
							onClick={() => handleServiceNavigation("uiux")}
						>
							<img src={uiuxIcon} alt="ui/ux design icon" className="mr-4" />
							<div>
								<h1 className="font-bold">UI/UX design</h1>
								<p>Unique product designs</p>
							</div>
						</div>
						<div
							className="flex cursor-pointer"
							onClick={() => handleServiceNavigation("dbMgt")}
						>
							<img
								src={databaseMgt}
								alt="Database management icon"
								className="mr-4"
							/>
							<div>
								<h1 className="font-bold">Database management</h1>
								<p>we manage database</p>
							</div>
						</div>
					</div>
					<div
						className="flex cursor-pointer"
						onClick={() => handleServiceNavigation("aspdotnet")}
					>
						<img src={asp} alt="asp dot net icon" className="mr-4" />
						<div>
							<h1 className="font-bold">ASP.NET training</h1>
							<p>we do ASP.NET training</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ServicesModal;
