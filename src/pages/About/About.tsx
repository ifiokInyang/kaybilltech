import React from "react";

const About = () => {
	return (
		<div className="ss:w-[355px] md:w-auto">
			<div className="ss:m-4 ss:mt-12 md:mt-16 md:m-16">
				<h1 className="font-semibold ss:text-[36px] md:text-[59px] ss:capitalize md:uppercase">
					about us
				</h1>
				<p className="ss:w-auto md:w-[40%] font-normal text-[16px]">
					KAYBILL TECHNOLOGIES is a cutting-edge software development company
					dedicated to providing innovative digital solutions for businesses of
					all sizes. We specialize in developing software applications and
					services tailored to meet the unique needs and challenges of our
					clients.
				</p>
			</div>

			<div className="ss:bg-white md:bg-[#F3F7FF] pt-16 md:pb-20 mb-24">
				<div className="ss:mx-4 md:mx-16">
					<h1 className="ss:font-bold md:font-semibold ss:text-[36px] md:text-[59px] uppercase">
						Our mission & value
					</h1>
					<h4 className="text-[#041831] text-[24px] font-bold mt-8 mb-[29px]">
						Our Mission
					</h4>
					<p className="ss:w-auto md:w-[50%]">
						"At KayBillTech, our mission is to empower businesses with
						innovative technology solutions that drive growth, efficiency, and
						success. We are committed to delivering exceptional custom software
						development, API integration, website design, mobile application
						development, UI/UX design, and database management services that
						transform ideas into reality."
					</p>
					<h4 className="text-[#041831] text-[24px] font-bold mt-16 mb-[29px]">
						Core Values
					</h4>
					<div className="flex flex-wrap ss:space-y-8 md:space-y-0 ss:space-x-0 md:space-x-12">
						<div className="ss:flex-0 md:flex-1">
							<h4 className="text-[#041831] text-[16px] font-bold">
								Excellence
							</h4>
							<p>
								We are dedicated to delivering the highest quality solutions. We
								continually strive for excellence in all that we do, ensuring
								our clients receive exceptional results.
							</p>
						</div>

						<div className="ss:flex-0 md:flex-1">
							<h4 className="text-[#041831] text-[16px] font-bold">
								Integrity
							</h4>
							<p>
								We conduct business with the highest level of integrity,
								honesty, and transparency. We build trust with our clients,
								employees, and partners
							</p>
						</div>
					</div>

					<div className="flex flex-wrap ss:space-y-8 md:space-y-0 my-16 ss:space-x-0 md:space-x-12">
						<div className="ss:flex-0 md:flex-1">
							<h4 className="text-[#041831] text-[16px] font-bold">
								Innovation
							</h4>
							<p>
								We embrace creativity and innovation. We stay at the forefront
								of technology to provide cutting-edge solutions that drive
								progress for our clients.
							</p>
						</div>
						<div className="ss:flex-0 md:flex-1">
							<h4 className="text-[#041831] text-[16px] font-bold">
								Collaboration
							</h4>
							<p>
								We believe in the power of collaboration. We work closely with
								our clients and partners to foster a strong and mutually
								beneficial relationship, ensuring shared success.
							</p>
						</div>
					</div>

					<div className="ss:w-auto md:w-[50%]">
						<h4 className="text-[#041831] text-[16px] font-bold">
							Client-centric
						</h4>
						<p>
							Our clients are at the heart of everything we do. We prioritize
							their success and satisfaction, going the extra mile to understand
							their unique needs and deliver tailored solutions.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
