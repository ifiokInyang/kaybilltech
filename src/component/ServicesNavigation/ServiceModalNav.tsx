import React from 'react';
import ServicesSubOne from '../ServicesHomepage/ServicesSubOne';
import Portfolio from '../Portfolio/Portfolio';
import Enquiry from '../Enquiry/Enquiry';
import { useAuth } from '../../context';

const ServiceModalNav = () => {
  const { homeDataArray } = useAuth() as any;

  return (
    <>
      <ServicesSubOne />
      <Portfolio data={homeDataArray.developedProducts} />
      <Enquiry isQuotes={false} />
    </>
  );
};

export default ServiceModalNav;
