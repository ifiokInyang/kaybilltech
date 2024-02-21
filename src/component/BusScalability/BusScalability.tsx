import React from "react";
import busScalabilityHomeImg from "../../assets/busScalabilityImg.svg";

const BusScalability = () => {
	return (
    <div className="flex flex-wrap ss:px-4 md:px-8 ss:w-[355px] sm:w-full justify-between">
      <div className="flex-1 mt-[72px] ss:order-2 md:order-1">
        <h1 className="py-8 text-[16px] font-medium text-[#2979FF]">
          BUSINESS SCALABILITY
        </h1>

        <h1 className="ss:text-[30px] md:text-[40px] text-[#041831] font-bold pb-[12px]">
          How Kaybill tech increase business growth
        </h1>
        <h2 className="py-4 text-[18px] font-semibold">
          Exceptional user friendly design
        </h2>

        <p className="font-light text-[18px] text-[#39404F]">
          In today's digital landscape, user experience (UX) and user interface
          (UI) design play a pivotal role in business success. At Kaybill Tech,
          we prioritize exceptional UI/UX design to ensure that our clients'
          websites and applications are not only functional but also provide an
          enjoyable and intuitive experience for users.
        </p>
        <h2 className="pb-4 pt-8 font-semibold text-[18px]">
          Increase data driven strategies and optimization
        </h2>

        <p className="ss:tracking-tight md:tracking-wider text-[18px] font-light text-[#39404F]">
          Another key element of how Kaybill Tech contributes to business growth
          is our data-driven approach. We employ analytics and insights to
          continually optimize our clients' online platforms. This involves
          tracking user behavior, identifying pain points, and making strategic
        </p>
        <h2 className="pb-4 pt-8 text-[18px] font-semibold">
          Expertise website development
        </h2>

        <p className="font-light text-[#39404F] text-[18px]">
          Kaybill Tech's expertise in website development is a cornerstone of
          how we drive business growth for our clients. Our team of skilled
          developers creates responsive, user-friendly, and visually appealing
          websites.
        </p>
      </div>
      <div className="md:w-[55%] ss:w-full flex items-center justify-center ss:order-1 md:order-2">
        <img
          src={busScalabilityHomeImg}
          alt="a rocket and a pie chart on a portion of grass"
          className=""
        />
      </div>
    </div>
  );
};

export default BusScalability;
