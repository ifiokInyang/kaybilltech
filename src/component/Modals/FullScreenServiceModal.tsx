import React from "react";
import { ServicesModalProp } from "../../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { ServiceFunc } from "./ServicesHelperFunc";
import { useAuth } from "../../context";
import { serviceModalData, services } from "../../utils/data";



const ServicesModal = ({
	isServicesModalOpen,
	servicesModalRef,
	setIsServicesModalOpen,
}: ServicesModalProp) => {
	const navigate = useNavigate();

		const { setSelectedItem } = useAuth() as any;

	const handleServiceNavigation = (index: number) => {
		setIsServicesModalOpen(false);
		setSelectedItem(index);
    ServiceFunc(services[index], navigate);
	};
	return (
    <>
      {isServicesModalOpen && (
        <div
          ref={servicesModalRef}
          className="visible absolute z-50 flex justify-around w-full h-[507px] flex-col bg-white py-4 pl-[74px] text-gray-800 shadow-xl group-hover:visible"
        >
          <div className="flex flex-wrap h-[400px] w-[100%] justify-between items-center">
            {serviceModalData.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceNavigation(index)}
                className="flex w-[400px] cursor-pointer"
              >
                <img
                  src={service.img}
                  alt={service.alt}
                  className="mr-4 w-[44px] object-contain h-[44px]"
                />
                <div>
                  <h1 className="font-bold">{service.title}</h1>
                  <p>{service.description}</p>
                </div>
              </div>
              //   </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesModal;
