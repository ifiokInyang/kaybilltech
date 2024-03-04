import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "../../utils/data";

const Reviews = () => {
	const [activeTestimonial, setActiveTestimonial] = useState(0);
	

	const nextTestimonial = () => {
		setActiveTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setActiveTestimonial((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className="flex items-center justify-center ss:w-[355px] sm:w-auto bg-[#F3F7FF] relative">
			<button
				onClick={prevTestimonial}
				className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#2979FF] font-medium border border-[#2979FF] px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#2979FF] hover:text-white z-10"
			>
				<FiChevronLeft />
			</button>
			<div className="flex flex-col justify-center text-center ss:w-[355px] sm:w-full md:w-[700px]">
				<h1 className="py-8 text-[16px] font-medium text-[#2979FF]">REVIEWS</h1>
				<h1 className="ss:text-[30px] md:text-[36px] text-[#041831] font-bold mb-[20px]">
					Clients Testimony
				</h1>
				<div className="flex mx-auto w-[130px] justify-between">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className={`flex items-center justify-center w-[45px] h-[45px] ${
								index === activeTestimonial ? "bg-black" : "bg-inherit"
							}  rounded-full`}
						>
							<img
								src={testimonial.image}
								alt={`Testimonial ${index + 1}`}
								className="w-[40px] h-[40px] rounded-[100%] object-cover"
							/>
						</div>
					))}
				</div>
				<div className="ss:px-4 md:px-auto">
					<p className="ss:tracking-tight md:tracking-wide">
						<span className="text-[33px] font-light">“</span>{" "}
						{testimonials[activeTestimonial].text}{" "}
						<span className="text-[33px] font-light">”</span>
					</p>
				</div>
				<hr className="bg-[#2979FF] h-1 mx-auto w-[144px] mt-4 mb-12" />
				<p className="text-[14px] font-medium mt-8 mb-2">
					{testimonials[activeTestimonial].clientName}
				</p>
				<p className="text-[12px] text-[#2979FF] font-medium">
					{testimonials[activeTestimonial].position}
				</p>
				<div className="flex space-x-4 justify-center items-center my-12">
					{testimonials.map((_, index) => (
						<div
							key={index}
							className={`h-[10px] w-[10px] ${
								index === activeTestimonial ? "bg-black" : "bg-[#D9D9D9]"
							} rounded-full`}
						></div>
					))}
				</div>
			</div>
			<button
				onClick={nextTestimonial}
				className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#2979FF] font-medium border border-[#2979FF] px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#2979FF] hover:text-white z-10"
			>
				<FiChevronRight />
			</button>
		</div>
	);
};

export default Reviews;
