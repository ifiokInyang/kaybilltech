import React from 'react';
import whatsappImg from '../../assets/WhatsAppImg.svg';
import salestrack from '../../assets/salestrack.svg';
import darads from '../../assets/darads.svg';

const Portfolio = () => {
  return (
    <div className="ss:px-[5px] md:px-8 ss:mt-[40px] md:mt-16">
      <div className="text-center">
        <h1 className="ss:text-[36px] md:text-[40px] text-[#041831] font-bold ss:mb-[40px] md:mb-[80px]">
          Developed products
        </h1>
      </div>
      <div className="flex flex-wrap ss:px-[8px] md:px-auto w-full justify-between ss:text-[12px] md:text-[16px]">
        <div className="ss:w-[120px] sm:w-[150px] md:w-auto mb-8">
          <div
            className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
            style={{ boxShadow: '1px 1px 7px 0px #00000040' }}
          >
            <img
              src={whatsappImg}
              alt="wv icon with an eye like whatsapp icon"
              className="ss:w-[100px] md:w-auto"
            />
          </div>
          <p className="ss:mt-4 md:mt-8">Lasmab school management system</p>
        </div>
        <div className="ss:w-[120px] sm:w-[150px] md:w-auto">
          <div
            className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
            style={{ boxShadow: '1px 1px 7px 0px #00000040' }}
          >
            {' '}
            <img
              src={salestrack}
              alt="sales track app logo"
              className="ss:w-[100px] md:w-auto"
            />
          </div>{' '}
          <p className="ss:mt-4 md:mt-8">Sales track App</p>
        </div>
        <div className="ss:w-[120px] sm:w-[150px] md:w-auto">
          <div
            className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
            style={{ boxShadow: '1px 1px 7px 0px #00000040' }}
          >
            {' '}
            <img
              src={darads}
              alt="mydarads logo"
              className="ss:w-[100px] md:w-auto"
            />
          </div>{' '}
          <p className="ss:mt-4 md:mt-8">Mydarads</p>
        </div>
        <div className="ss:w-[120px] sm:w-[150px] md:w-auto">
          <div
            className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
            style={{ boxShadow: '1px 1px 7px 0px #00000040' }}
          >
            {' '}
            <img
              src={whatsappImg}
              alt="wv icon with an eye like whatsapp icon"
              className="ss:w-[100px] md:w-auto"
            />
          </div>
          <p className="ss:mt-4 md:mt-8">Wassapview</p>
        </div>
        <div className="ss:w-[120px] sm:w-[150px] md:w-auto mb-8">
          <div
            className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
            style={{ boxShadow: '1px 1px 7px 0px #00000040' }}
          >
            <img
              src={whatsappImg}
              alt="wv icon with an eye like whatsapp icon"
              className="ss:w-[100px] md:w-auto"
            />
          </div>
          <p className="ss:mt-4 md:mt-8 ss:w-[150px] md:w-[280px]">
            Real Estate management and management application(coming up){' '}
          </p>
        </div>
        <div className="ss:w-[120px] sm:w-[150px] md:w-auto">
          <div
            className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
            style={{ boxShadow: '1px 1px 7px 0px #00000040' }}
          >
            {' '}
            <img
              src={salestrack}
              alt="sales track app logo"
              className="ss:w-[100px] md:w-auto"
            />
          </div>{' '}
          <p className="ss:mt-4 md:mt-8">One Auth and wallet API</p>
        </div>
        <div className="ss:w-[120px] sm:w-[150px] md:w-auto">
          <div
            className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
            style={{ boxShadow: '1px 1px 7px 0px #00000040' }}
          >
            {' '}
            <img
              src={darads}
              alt="mydarads logo"
              className="ss:w-[100px] md:w-auto"
            />
          </div>{' '}
          <p className="ss:mt-4 md:mt-8">Multi Tenancy Ecommerce API</p>
        </div>
        <div className="ss:w-[120px] sm:w-[150px] md:w-auto">
          <div
            className="flex items-center justify-center ss:w-[167px] md:w-[296px] ss:h-[132px] md:h-[235px]"
            style={{ boxShadow: '1px 1px 7px 0px #00000040' }}
          >
            {' '}
            <img
              src={whatsappImg}
              alt="wv icon with an eye like whatsapp icon"
              className="ss:w-[100px] md:w-auto"
            />
          </div>
          <p className="ss:mt-4 md:mt-8 ss:w-auto md:w-[250px]">
            Multi tenancy Hotel booking and management system
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
