import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quotes from "./pages/Quotes/Quotes";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/AboutComp";
import Navbar from "./component/Navbar/Navbar";
import Products from "./pages/Products/Products";
import Footer from "./component/Footer/Footer";
import ServicesNavigation from "./component/ServicesNavigation/ServicesNavigation";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsCondition/TermsAndConditions";
import DataProvider from "./context";
import Teams from "./component/Team/Team";

function AppRoutes() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/products" element={<Products />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms_and_condition" element={<TermsAndConditions />} />
        <Route path="/services/:service?" element={<ServicesNavigation />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

function App() {
	return (
			<DataProvider>
		<BrowserRouter>
				<AppRoutes />
		</BrowserRouter>
			</DataProvider>
	);
}
export default App;
