import React from "react";
import reviewOne from "../../assets/review1.svg";
import reviewTwo from "../../assets/review2.svg";
import reviewThree from "../../assets/review3.svg";

const Reviews = () => {
	return (
    <div className="flex items-center justify-center ss:w-[355px] sm:w-auto bg-[#F3F7FF]">
      <div className="flex flex-col justify-center text-center ss:w-[355px] sm:w-full md:w-[700px]">
        <h1 className="py-8 text-[16px] font-medium text-[#2979FF]">REVIEWS</h1>
        <h1 className="ss:text-[30px] md:text-[36px] text-[#041831] font-bold mb-[20px]">
          clients testimony
        </h1>
        <div className="flex mx-auto w-[100px] justify-center relative">
          <img src={reviewThree} alt="" className="mr-4" />
          <img src={reviewTwo} alt="" className="absolute right-6" />

          <img src={reviewOne} alt="" className="absolute right-1" />
        </div>
        <div className="ss:px-4 md:px-auto">
          <p className="ss:tracking-tight md:tracking-wide">
            <span className="text-[33px] font-light">“</span> Excellent work to
            create our page they worked around the clock to get the site up and
            running to our standards I would recommend them to everyone that
            want a professional website at the best cost{' '}
            <span className="text-[33px] font-light">”</span>
          </p>
        </div>
        <hr className="bg-[#2979FF] h-1 mx-auto w-[144px] mt-4 mb-12" />
        <p className="text-[14px] font-medium mt-8 mb-2">Darligthon James</p>
        <p className="text-[12px] text-[#2979FF] font-medium">Manager</p>
        <div className="flex space-x-4 justify-center items-center my-12">
          <div className="h-[10px] w-[10px] bg-[#D9D9D9] rounded-full"></div>
          <div className="h-[12px] w-[12px] bg-black rounded-full"></div>
          <div className="h-[10px] w-[10px] bg-[#D9D9D9] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
