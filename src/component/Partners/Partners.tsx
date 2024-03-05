import React, { useState } from "react";
import Slider from "react-slick";
import { ILogoProps } from "../../utils/interfaces";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ContinuousSlider = ({ logos }: { logos: ILogoProps[] }) => {
	const [settings] = useState({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 2000,
		cssEase: "linear",
	});

  return (
		<div className="ss:my-12 md:my-20">
			<Slider {...settings}>
				{logos.map((logo, index) => (
					<div key={index} className="container">
						<img
							src={logo.companyLogo}
							alt={logo.companyName + "logo"}
							className="ss:w-20 ss:h-20 md:w-40 md:h-40 object-contain"
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};
export default ContinuousSlider;
