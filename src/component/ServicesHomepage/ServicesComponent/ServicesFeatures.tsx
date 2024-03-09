import React, { useEffect } from 'react';
import { useAuth } from '../../../context';

const ServicesFeatures = ({
  selectedItem
}: {
  selectedItem: number | null;
}) => {
  const { HomeDataFunc, homeDataArray } = useAuth() as any;

  useEffect(() => {
    HomeDataFunc();
  }, [selectedItem]);

  // Rendering service features for the selected item
  const renderServiceFeatures = () => {
    if (homeDataArray && homeDataArray.ourServices && selectedItem !== null) {
      const selectedService = homeDataArray.ourServices.find(
        (service: any) => service.serviceId === selectedItem
      );

      if (selectedService) {
        return selectedService.serviceFeatures.map(
          (feature: string, index: number) => (
            <div
              key={index}
              className="flex justify-around items-center ss:w-[318px] md:w-[258px] h-[58px] bg-white rounded-lg text-center"
            >
              <h3>{feature}</h3>
            </div>
          )
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  return (
    <div className="w-[80%] flex flex-wrap justify-between items-center gap-4">
      {renderServiceFeatures()}
    </div>
  );
};

export default ServicesFeatures;

{
  /* <div className="w-[80%] flex flex-wrap justify-between items-center gap-4">
  {renderServiceFeatures()}
</div>; */
}
