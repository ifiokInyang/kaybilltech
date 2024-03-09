import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { ILogoProps } from "../../utils/interfaces";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../Loader/Loading";

const ContinuousSlider = ({ logos }: { logos: ILogoProps[] }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [loadedImages, setLoadedImages] = useState<number>(0);

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

	useEffect(() => {
		// Check if all images have been loaded
		if (logos.length > 1) {
			setLoading(false); // Set loading to false when all images are loaded
		}
	}, [loadedImages, logos.length]);

	const handleImageLoad = () => {
		setLoadedImages((prevCount) => prevCount + 1); // Increment loadedImages count when an image is loaded
	};

	return (
		<div className="ss:my-12 md:my-20">
			<Slider {...settings}>
				{loading ? (
					<Loading loading={loading} />
				) : (
					logos.map((logo, index) => (
						<div key={index} className="container">
							<img
								src={logo.companyLogo}
								alt={logo.companyName + "logo"}
								className="ss:w-20 ss:h-20 md:w-40 md:h-40 object-contain"
								onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
							/>
						</div>
					))
				)}
			</Slider>
		</div>
	);
};
export default ContinuousSlider;
